/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"
import * as clientsPage from "../../pages/client-pages/clients-page"
import * as createClientPage from "../../pages/client-pages/create-client-page"
import * as editClientPage from "../../pages/client-pages/edit-client-page"

var faker = require('faker');

let randomName1 = faker.name.findName();
let randomEmail1 = faker.internet.email();
let randomTelephone1 = faker.phone.phoneNumber();

let randomName2 = faker.name.findName();
let randomEmail2 = faker.internet.email();
let randomTelephon2 = faker.phone.phoneNumber();

describe('Extra test suite with Page-objects - Clients', () =>{

    beforeEach (() => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('View Clients', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.performLogout('Login')   
    })

    it('Create a new client by using valid input in all fields', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName(randomName1)
        createClientPage.addEmail(randomEmail1)
        createClientPage.addTelephone(randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.performLogout('Login')
    })

    it('Edit client', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName(randomName1)
        createClientPage.addEmail(randomEmail1)
        createClientPage.addTelephone(randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.editName(randomName2)
        editClientPage.editEmail(randomEmail2)
        editClientPage.editTelephone(randomTelephon2)
        editClientPage.saveClient('Clients')
        clientsPage.verifyLastClient(randomName2, randomEmail2, randomTelephon2)
        clientsPage.performLogout('Login')
    })

    it('Delete client on clients page', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName(randomName1)
        createClientPage.addEmail(randomEmail1)
        createClientPage.addTelephone(randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.deleteClient('Clients')
        clientsPage.performLogout('Login')
    }) 
    
    it('Return to indexpage when creating a client', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.returnToClientsPage('Clients')
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        clientsPage.performLogout('Login')   
    })

    it('Return to indexpage when on Clients page', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        clientsPage.performLogout('Login')   
    })

    it('Return to indexpage when editing a client', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName(randomName1)
        createClientPage.addEmail(randomEmail1)
        createClientPage.addTelephone(randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.returnToClientsPage('Clients')
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        clientsPage.performLogout('Login')   
    })

    it('Delete client on edit clients page', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName(randomName1)
        createClientPage.addEmail(randomEmail1)
        createClientPage.addTelephone(randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.deleteClient('Clients')
        clientsPage.performLogout('Login')
    }) 

})