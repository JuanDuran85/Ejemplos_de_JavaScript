let axios = require('axios');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'enter command > '
})

readline.prompt();
readline.on('line', line => {
    switch (line.trim()) {
        case 'list vegan foods': {
            axios.get('http://localhost:3000/food').then(({data}) => {
                let index = 0;
                const veganOnly = data.filter(result => result.dietary_preferences.includes('vegan'));
                console.log('vegan food list');
                const veganIterable = {
                    [Symbol.iterator]() {
                        return {
                            [Symbol.iterator]() {return this},
                            next() {
                                const current = veganOnly[index];
                                index++;
                                if (current) {
                                    return {
                                        value: current,
                                        done: false
                                    }
                                } else {
                                     return {
                                        value: current,
                                        done: true    
                                     }                                   
                                }
                            }
                        }
                    }
                };
                for (const valor of veganIterable) {
                    console.log(valor.name);
                }
                readline.prompt();
            });
        }
        break;
        case 'log': {
            readline.question('What would you like to log today?', async item => {
                const { data } = await axios.get('http://localhost:3000/food');
                const it = data[Symbol.iterator]();
                let position = it.next();
                while (!position.done) {
                    const food = position.value.name;
                    if(food === item){
                        console.log(`${item} has ${position.value.calories} calories`)
                    };
                    position = it.next();
                };
                readline.prompt();
            })
        }
        break;
    }
});