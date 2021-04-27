/// <reference types="cypress" />

import * as loginPage from "../pages/login-and-index-pages/login-page"
import * as indexPage from "../pages/login-and-index-pages/index-page"
import * as roomsPage from "../pages/room-pages/rooms-page"
import * as createRoomPage from "../pages/room-pages/create-room-page"

var faker = require('faker');
let randomFloorNumber = faker.datatype.number(9)+1;
let randomRoomNumber = faker.datatype.number(30) + (randomFloorNumber * 100);
let randomPrice = faker.commerce.price(5000);
let randomCategory = faker.datatype.number(2);
let randomFeature = faker.datatype.number(3);

var categoryArray = ['double', 'single', 'twin']
var categoryOption = categoryArray[randomCategory]

var featuresArray = ['balcony', 'ensuite', 'sea view', 'penthouse']
var featuresOption = featuresArray[randomFeature]


describe('Test suite with Page-objects - Assignment02', () =>{

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
        createRoomPage.chooseCategory(categoryOption)
        createRoomPage.addRoomNumber(randomRoomNumber)
        createRoomPage.addFloorNumber(randomFloorNumber)
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice(randomPrice)
        createRoomPage.chooseFeatures(featuresOption)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom(randomFloorNumber, randomRoomNumber, categoryOption, 'true', (randomPrice -.00) +'kr', featuresOption)
        roomsPage.performLogout('Login')
    })

    it('Create a room without choosing a category', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.addRoomNumber(randomRoomNumber)
        createRoomPage.addFloorNumber(randomFloorNumber)
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice(randomPrice)
        createRoomPage.chooseFeatures(featuresOption)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom(randomFloorNumber, randomRoomNumber, '', 'true', (randomPrice -.00) +'kr', featuresOption)
        roomsPage.checkForNoCategory()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering a roomnumber', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory(categoryOption)
        createRoomPage.addFloorNumber(randomFloorNumber)
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice(randomPrice)
        createRoomPage.chooseFeatures(featuresOption)
        createRoomPage.saveRoom('Room number must be set')
        createRoomPage.performLogout('Login')
    })

    it('Create a room by entering a floor', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory(categoryOption)
        createRoomPage.addRoomNumber(randomRoomNumber)
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice(randomPrice)
        createRoomPage.chooseFeatures(featuresOption)
        createRoomPage.saveRoom('Floor must be set')
        createRoomPage.performLogout('Login')
    })

    it('Create room without entering availability', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory(categoryOption)
        createRoomPage.addRoomNumber(randomRoomNumber)
        createRoomPage.addFloorNumber(randomFloorNumber)
        createRoomPage.addPrice(randomPrice)
        createRoomPage.chooseFeatures(featuresOption)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom(randomFloorNumber, randomRoomNumber, categoryOption, '', (randomPrice -.00) +'kr', featuresOption)
        roomsPage.checkForNoAvailability()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering features', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory(categoryOption)
        createRoomPage.addRoomNumber(randomRoomNumber)
        createRoomPage.addFloorNumber(randomFloorNumber)
        createRoomPage.chooseAsAvailable()
        createRoomPage.addPrice(randomPrice)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyLastRoom(randomFloorNumber, randomRoomNumber, categoryOption, 'true', (randomPrice -.00) +'kr', '')
        roomsPage.checkForNoFeatures()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering a price', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.chooseCategory(categoryOption)
        createRoomPage.addRoomNumber(randomRoomNumber)
        createRoomPage.addFloorNumber(randomFloorNumber)
        createRoomPage.chooseAsAvailable()
        createRoomPage.chooseFeatures(featuresOption)
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