/// <reference types="cypress" />

describe('My first test',()=>{
    it('Visitando el archivo', () => {
        cy.visit('http://192.168.137.1:8080/');
        cy.get('#propietario').type('Juan Duran').should('have.value', 'Juan Duran');
        cy.get('#telefono').type('123456789').should('have.value', '123456789');
        cy.get('#direccion').type('chile 1234').should('have.value', 'chile 1234');
        cy.get('#nombreMascota').type('taty').should('have.value', 'taty');
        cy.get('#tipo').select('gato').should('have.value', 'gato');
        cy.get('#enfermedad').type('otitis').should('have.value', 'otitis');
        cy.contains('.btn','Agregar').click();
        cy.get('input').should('have.length',5);
    });
});