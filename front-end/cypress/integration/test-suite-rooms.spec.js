/// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as roomsPage from "../pages/rooms-page"
import * as createRoomPage from "../pages/create-room-page"

describe('Test suite with Page-objects - Rooms', () =>{

    beforeEach (() => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('View Rooms', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.performLogout('Login')
    })

    it('Create a room by entering valid input in all fields', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory('double')
        createRoomPage.addRoomNumber('103')
        createRoomPage.addFloorNumber('1')
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice('1500kr')
        createRoomPage.chooseFeatures('Balcony')
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom('1', '103', 'double', 'true', '1500kr', 'balcony')
        roomsPage.performLogout('Login')
    })

    it('Create a room without choosing a category', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.addRoomNumber('103')
        createRoomPage.addFloorNumber('1')
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice('1500kr')
        createRoomPage.chooseFeatures('Balcony')
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom('1', '103', '', 'true', '1500kr', 'balcony')
        roomsPage.checkForNoCategory()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering a roomnumber', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory('double')
        createRoomPage.addFloorNumber('1')
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice('1500kr')
        createRoomPage.chooseFeatures('Balcony')
        createRoomPage.saveRoom('Room number must be set')
        createRoomPage.performLogout('Login')
    })

    it('Create a room by entering a floor', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory('double')
        createRoomPage.addRoomNumber('103')
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice('1500kr')
        createRoomPage.chooseFeatures('Balcony')
        createRoomPage.saveRoom('Floor must be set')
        createRoomPage.performLogout('Login')
    })

    it('Create room without entering availability', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory('double')
        createRoomPage.addRoomNumber('103')
        createRoomPage.addFloorNumber('1')
        createRoomPage.addPrice('1500kr')
        createRoomPage.chooseFeatures('Balcony')
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom('1', '103', 'double', '', '1500kr', 'balcony')
        roomsPage.checkForNoAvailability()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering features', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory('double')
        createRoomPage.addRoomNumber('103')
        createRoomPage.addFloorNumber('1')
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice('1500kr')
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom('1', '103', 'double', 'true', '1500kr', '')
        roomsPage.checkForNoFeatures()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering a price', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory('double')
        createRoomPage.addRoomNumber('103')
        createRoomPage.addFloorNumber('1')
        createRoomPage.chooseAsAvailable()
        createRoomPage.chooseFeatures('Balcony')
        createRoomPage.saveRoom('Price must be a whole number')
        createRoomPage.performLogout('Login')
    })

    it('Use the Back button on the page for creating a new room', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.returnToRoomsPage('Rooms')
        roomsPage.performLogout('Login')
    })

    it('Return to homepage when on the page Rooms', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')
    })

})