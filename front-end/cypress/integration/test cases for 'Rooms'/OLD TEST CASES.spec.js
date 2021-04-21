/// <reference types="cypress" />

describe('Rooms', () =>{

    it('View Rooms', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Create a room by entering valid input in all fields', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()

        cy.get('h2 > div').should('have.text', 'Rooms')
        cy.get(':nth-last-child(1) > :nth-child(2) > h3').should('contain', 'Floor 1').and('contain', 'Room 103')
        cy.get(':nth-last-child(1) > :nth-child(2) > .category').should('contain', 'double')
        cy.get(':nth-last-child(1) > :nth-child(2) > .available').should('contain', 'true')
        cy.get(':nth-last-child(1) > :nth-child(2) > .price').should('contain', '1500kr')
        cy.get(':nth-last-child(1) > :nth-child(2) > .features').should('contain', 'balcony')

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Create a room without choosing a category', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()

        cy.get('h2 > div').should('have.text', 'Rooms')
        cy.get(':nth-last-child(1) > :nth-child(2) > h3').should('contain', 'Floor 1').and('contain', 'Room 103')
        cy.get(':nth-last-child(1) > :nth-child(2) > .category').should('have.text', 'Category: ')
        cy.get(':nth-last-child(1) > :nth-child(2) > .available').should('contain', 'true')
        cy.get(':nth-last-child(1) > :nth-child(2) > .price').should('contain', '1500kr')
        cy.get(':nth-last-child(1) > :nth-child(2) > .features').should('contain', 'balcony')

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Create a room without entering a roomnumber', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()
        cy.get('.error').should('have.text', 'Room number must be set' )

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Create a room by entering a floor', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('103')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()
        cy.get('.error').should('have.text', 'Floor must be set' )

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Create a room without choosing availability', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()

        cy.get('h2 > div').should('have.text', 'Rooms')
        cy.get(':nth-last-child(1) > :nth-child(2) > h3').should('contain', 'Floor 1').and('contain', 'Room 103')
        cy.get(':nth-last-child(1) > :nth-child(2) > .category').should('contain', 'double')
        cy.get(':nth-last-child(1) > :nth-child(2) > .available').should('have.text', 'Available: ')
        cy.get(':nth-last-child(1) > :nth-child(2) > .price').should('contain', '1500kr')
        cy.get(':nth-last-child(1) > :nth-child(2) > .features').should('contain', 'balcony')

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Create a room without entering features', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')
        
        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1500')
        cy.get('.blue').click()

        cy.get('h2 > div').should('have.text', 'Rooms')
        cy.get(':nth-last-child(1) > :nth-child(2) > h3').should('contain', 'Floor 1').and('contain', 'Room 103')
        cy.get(':nth-last-child(1) > :nth-child(2) > .category').should('contain', 'double')
        cy.get(':nth-last-child(1) > :nth-child(2) > .available').should('contain', 'true')
        cy.get(':nth-last-child(1) > :nth-child(2) > .price').should('contain', '1500kr')
        cy.get(':nth-last-child(1) > :nth-child(2) > .features').should('have.text', ' Features: ')

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Create a room without entering a price', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')
        
        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()
        cy.get('.error').should('have.text', 'Price must be a whole number' )


        cy.get('.user > .btn').click()
        cy.contains('Login')
    })


    it('Use the Back button on the page for creating a new room', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('have.text', 'New Room')
        cy.get('[href="/rooms"]').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Return to homepage when on the page "Rooms"', () => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq','Testers Hotel')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > div').should('have.text', 'Rooms')

        cy.get(':nth-child(3) > .btn').click()
        cy.get('h2').should('contain', 'Tester Hotel Overview')

        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    
})