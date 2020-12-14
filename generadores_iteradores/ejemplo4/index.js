let axios = require('axios');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'enter command > '
})

readline.prompt();

readline.on('line', async line => {
    switch (line.trim()) {
        case 'list vegan foods': {
            const {data} = await axios.get('http://localhost:3000/food');
            function* listVeganFoods() {
                try {
                    let index = 0;
                    const veganOnly = data.filter(food => food.dietary_preferences.includes('vegan'));
                    console.log('---- vegan food list ----');
                    while (veganOnly[index]) {
                        yield veganOnly[index];
                        index++;
                    };
                } catch (error) {
                    console.log('Somethings went wrong while listing vegan items', {error});
                }
            }
            for (const valor of listVeganFoods()) {
                console.log(valor.name);
            }
            readline.prompt();
        }
        break;
        case 'log': {
            const { data } = await axios.get('http://localhost:3000/food');
            const it = data[Symbol.iterator]();
            let actionIt;
            function* actionGenerator() {
                try {
                    const food = yield;
                    const servingSize = yield askForServingSize();
                    yield displayCalories(servingSize,food);
                } catch (error) {
                    console.log({error})
                }
            }
            function askForServingSize() {
                readline.question("How many servings did you eat? (as a decimal: 1, 0.5, 1.25, etc...) ", servingSize =>{
                    if (servingSize === 'nevermind' || servingSize === 'n') {
                        actionIt.return();
                    } else if(typeof parseInt(servingSize) != 'number' || parseInt(servingSize) == NaN) {
                        actionIt.throw('Please, numbres only');
                    } else {
                        actionIt.next(servingSize);
                    }
                })
            };

            async function displayCalories(servingSize,food) {
                const calories = food.calories;
                console.log(`${food.name} with a servinf size of ${servingSize} has a ${Number.parseFloat(calories * parseInt(servingSize, 10)).toFixed()} calories`);
                const { data } = await axios.get('http://localhost:3000/users/1');
                const usersLog = data.log || [];
                const putBody = {
                    ...data,
                    log: [
                        ...usersLog,
                        {
                            [Date.now()]: {
                                food: food.name,
                                servingSize,
                                calories: Number.parseFloat(calories * parseInt(servingSize, 10)).toFixed()
                            }
                        }
                    ]
                };
                await axios.put('http://localhost:3000/users/1', putBody, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(()=>console.log('ready...'));
                actionIt.next();
                readline.prompt();
            }

            readline.question('What would you like to log today? ', async item => {
                let position = it.next();
                while (!position.done) {
                    const food = position.value.name;
                    if(food === item){
                        console.log(`${item} has ${position.value.calories} calories`);
                        actionIt = actionGenerator();
                        actionIt.next();
                        actionIt.next(position.value);
                    };
                    position = it.next();
                };
                readline.prompt();
            })
        }
            break;
        case `today's log`: {
            readline.question('Email: ', async emailAddress => {
                const {data} = await axios.get(`http://localhost:3000/users?email=${emailAddress}`)
                const foodLog = data[0].log || [];
                let totalCalories = 0;

                function* getFoodLog() {
                    try {
                        yield* foodLog;
                    } catch (error) {
                        console.log('Error reading the food log', {error});
                    }
                };

                const logIterator = getFoodLog()
                for (const entry of logIterator) {
                    const timestamp = Object.keys(entry)[0];
                    if (isToday(new Date(Number(timestamp)))) {
                        console.log(`${entry[timestamp].food}, ${entry[timestamp].servingSize} serving(s)`);
                        totalCalories += parseFloat(entry[timestamp].calories);
                        if (totalCalories > 5000){
                            console.log('Impressive! You have reached 5,000 calories');
                            logIterator.return();
                        }
                    }
                };
                console.log("-----------------------------------------");
                console.log(`Total Calories: ${totalCalories}`);
                readline.prompt();
            });
        }
            break;
    }
});

function isToday(timestamp) {
    const today = new Date();
    return ( 
        timestamp.getDate() === today.getDate() &&
        timestamp.getMonth() === today.getMonth() &&
        timestamp.getFullYear() === today.getFullYear()
    );
};