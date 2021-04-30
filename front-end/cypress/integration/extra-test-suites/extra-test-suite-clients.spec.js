/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"
import * as clientsPage from "../../pages/client-pages/clients-page"
import * as createClientPage from "../../pages/client-pages/create-client-page"
import * as editClientPage from "../../pages/client-pages/edit-client-page"

var faker = require('faker');

// variables for creating a client
let randomName1 = faker.name.findName();
let randomEmail1 = faker.internet.email();
let randomTelephone1 = faker.phone.phoneNumber();

//variables for editing a client
let randomName2 = faker.name.findName();
let randomEmail2 = faker.internet.email();
let randomTelephone2 = faker.phone.phoneNumber();

describe('Extra test suite with Page-objects - Clients', () =>{

    beforeEach ('Visit website and log in with valid credentials', () => {
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
        createClientPage.createClient(randomName1, randomEmail1, randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyNewClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.performLogout('Login')
    })
    
    it('Return to indexpage when creating a client', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.returnToClientsPage('Clients')
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })

    it('Return to indexpage when on Clients page', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })

    it('Return to indexpage when editing a client', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.createClient(randomName1, randomEmail1, randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyNewClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.returnToClientsPage('Clients')
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })

    it('Delete client on edit clients page', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.createClient(randomName1, randomEmail1, randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyNewClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.deleteClient('Clients')
        clientsPage.performLogout('Login')
    }) 

    it('Edit clients Name', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.createClient(randomName1, randomEmail1, randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyNewClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.editName(randomName2)
        editClientPage.saveClient('Clients')
        clientsPage.verifyNameEdit(randomName2)
        clientsPage.performLogout('Login')
    })

    it('Edit clients Email', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.createClient(randomName1, randomEmail1, randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyNewClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.editEmail(randomEmail2)
        editClientPage.saveClient('Clients')
        clientsPage.verifyEmailEdit(randomEmail2)
        clientsPage.performLogout('Login')
    })

    it('Edit clients Telephone', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.createClient(randomName1, randomEmail1, randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyNewClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.editTelephone(randomTelephone2)
        editClientPage.saveClient('Clients')
        clientsPage.verifyTelephoneEdit(randomTelephone2)
        clientsPage.performLogout('Login')
    })

})