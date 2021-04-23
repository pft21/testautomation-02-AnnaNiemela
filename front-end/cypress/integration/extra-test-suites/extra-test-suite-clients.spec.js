/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"
import * as clientsPage from "../../pages/client-pages/clients-page"
import * as createClientPage from "../../pages/client-pages/create-client-page"
import * as editClientPage from "../../pages/client-pages/edit-client-page"

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
        createClientPage.addName('ABC')
        createClientPage.addEmail('abc@xyz.com')
        createClientPage.addTelephone('0701234567')
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient('ABC', 'abc@xyz.com', '0701234567')
        clientsPage.performLogout('Login')
    })

    it('Edit client', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName('ABC')
        createClientPage.addEmail('abc@xyz.com')
        createClientPage.addTelephone('0701234567')
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient('ABC', 'abc@xyz.com', '0701234567')
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.editName('XYZ')
        editClientPage.editEmail('xyz@abc.se')
        editClientPage.editTelephone('0707654321')
        editClientPage.saveClient('Clients')
        clientsPage.verifyLastClient('XYZ', 'xyz@abc.se', '0707654321')
        clientsPage.performLogout('Login')
    })

    it('Delete client on clients page', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName('ABC')
        createClientPage.addEmail('abc@xyz.com')
        createClientPage.addTelephone('0701234567')
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient('ABC', 'abc@xyz.com', '0701234567')
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
        createClientPage.addName('ABC')
        createClientPage.addEmail('abc@xyz.com')
        createClientPage.addTelephone('0701234567')
        createClientPage.saveClient('Clients')
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.returnToClientsPage('Clients')
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        clientsPage.performLogout('Login')   
    })

    it('Delete client on edit clients page', () => {
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.addName('ABC')
        createClientPage.addEmail('abc@xyz.com')
        createClientPage.addTelephone('0701234567')
        createClientPage.saveClient('Clients')
        clientsPage.verifyLastClient('ABC', 'abc@xyz.com', '0701234567')
        clientsPage.navigateToEditClientPage('Client: ')
        editClientPage.deleteClient('Clients')
        clientsPage.performLogout('Login')
    }) 

})