/// <reference types="cypress" />

import * as loginPage from "../pages/login-and-index-pages/login-page"
import * as indexPage from "../pages/login-and-index-pages/index-page"
import * as roomsPage from "../pages/room-pages/rooms-page"
import * as createRoomPage from "../pages/room-pages/create-room-page"

var faker = require('faker');

let randomFloorNumber = faker.datatype.number(9)+1;
let randomRoomNumber = faker.datatype.number(30) + (randomFloorNumber * 100);
let randomPrice = faker.commerce.price(5000);
let randomAvailabilityIndex = faker.datatype.number(1)
let randomCategoryIndex = faker.datatype.number(2);
let randomFeatureIndex = faker.datatype.number(3);

var categoryArray = ['double', 'single', 'twin']
var randomCategory = categoryArray[randomCategoryIndex]

var availabilityArray = ['true', 'false']
var randomAvailability = availabilityArray[randomAvailabilityIndex]

var featuresArray = ['balcony', 'ensuite', 'Sea View', 'penthouse']
var randomFeature = featuresArray[randomFeatureIndex]

var featuresArrayVerify = ['balcony', 'ensuite', 'sea view', 'penthouse'] 
var randomFeaturesVerify = featuresArrayVerify[randomFeatureIndex]

describe('Test suite with Page-objects - Assignment02', () =>{

    beforeEach ('Visit website and log in with valid credentials', () => {
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
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.performLogout('Login')
    })

    it('Create a room without choosing a category', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom('', randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom('', randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.checkForNoCategory()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering a roomnumber', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, '', randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Room number must be set')
        createRoomPage.performLogout('Login')
    })

    it('Create a room by entering a floor', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, '', randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Floor must be set')
        createRoomPage.performLogout('Login')
    })

    it('Create room without entering availability', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, '', randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, '', (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.checkForNoAvailability()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering features', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, '')
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', '')
        roomsPage.checkForNoFeatures()
        roomsPage.performLogout('Login')
    })

    it('Create a room without entering a price', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, '', randomFeature)
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