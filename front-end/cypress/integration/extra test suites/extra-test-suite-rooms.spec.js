/// <reference types="cypress" />

import * as loginPage from "../../pages/login-page"
import * as indexPage from "../../pages/index-page"
import * as roomsPage from "../../pages/rooms-page"
import * as createRoomPage from "../../pages/create-room-page"
import * as editRoomPage from "../../pages/extra pages/room pages/edit-room-page"

describe('Extra test suite with Page-objects - Rooms', () =>{

    beforeEach (() => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Edit a room', () => {
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
        roomsPage.navigateToEditRoomPage('Room:')
        editRoomPage.editCategory('single')
        editRoomPage.editRoomNumber(203)
        editRoomPage.editFloorNumber(2)
        editRoomPage.editAvailability()
        editRoomPage.editPrice('1000kr')
        editRoomPage.editFeatures('ensuite')
        editRoomPage.saveEdit('Rooms')
        roomsPage.verifyLastRoom('2', '203', 'single', 'false', '1000kr', 'ensuite')
        roomsPage.performLogout('Login')
    })

    it('Delete room', () => {
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
        roomsPage.deleteRoom()
        roomsPage.performLogout('Login')
    })

})