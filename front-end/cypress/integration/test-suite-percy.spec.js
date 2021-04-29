/// <reference types="cypress" />

import * as loginPage from "../pages/login-and-index-pages/login-page"
import * as indexPage from "../pages/login-and-index-pages/index-page"
import * as roomsPage from "../pages/room-pages/rooms-page"
import * as createRoomPage from "../pages/room-pages/create-room-page"
import * as editRoomPage from "../pages/room-pages/edit-room-page"


describe('Test suite with Page-objects - Percy', () =>{

    it('Use the Back button on the page for creating a new room', () => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        // we are at login page
        cy.log('At login page')
        cy.percySnapshot('login page')
    
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        cy.wait(3000)
        // we are at index page
        cy.log('At index page')
        cy.percySnapshot('index page')

        indexPage.navigateToRooms('Rooms')
        cy.wait(3000)
        // we are at Room page
        cy.log('At rooom page')
        cy.percySnapshot('room page')

        roomsPage.navigateToCreateRoom('New Room')
        cy.wait(3000)
        //we are at create room page
        cy.log('At create rooom page')
        cy.percySnapshot('create room page')

        createRoomPage.returnToRoomsPage('Rooms')
        cy.wait(3000)
        // we are at Room page
        cy.log('At rooom page')

        roomsPage.performLogout('Login')
        cy.wait(3000)
        // we are at login page
        cy.log('At login page')
    })

    it('Use the Back button on the page for editing a room', () => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        // we are at login page
        cy.log('At login page')
    
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        cy.wait(3000)
        // we are at index page
        cy.log('At index page')

        indexPage.navigateToRooms('Rooms')
        cy.wait(3000)
        // we are at Room page
        cy.log('At rooom page')
        
        roomsPage.navigateToEditRoomPage('Room: ')
        cy.wait(3000)
        // we are at edit room page
        cy.log('At edit rooom page')
        cy.percySnapshot('edit room page')

        editRoomPage.returnToRoomsPage('Rooms')
        cy.wait(3000)
        // we are at Room page
        cy.log('At rooom page')

        roomsPage.performLogout('Login')
        cy.wait(3000)
        // we are at login page
        cy.log('At login page')
    })


})