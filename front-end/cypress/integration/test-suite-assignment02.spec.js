/// <reference types="cypress" />

import * as loginPage from "../pages/login-and-index-pages/login-page"
import * as indexPage from "../pages/login-and-index-pages/index-page"
import * as roomsPage from "../pages/room-pages/rooms-page"
import * as createRoomPage from "../pages/room-pages/create-room-page"
import * as editRoomPage from "../pages/room-pages/edit-room-page"

var faker = require('faker');

// varibles for creating a new room
let randomFloorNumber = faker.datatype.number(9)+1;
let randomRoomNumber = faker.datatype.number(30) + (randomFloorNumber * 100);
let randomAvailabilityIndex = faker.datatype.number(1)
let randomPrice = faker.commerce.price(5000);
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

// variables for editing a room
let randomFloorNumberEdit = faker.datatype.number(9)+1;
let randomRoomNumberEdit = faker.datatype.number(30) + (randomFloorNumberEdit * 100);
let randomPriceEdit = faker.commerce.price(5000);
let randomCategoryEditIndex = faker.datatype.number(2);
let randomFeatureEditIndex = faker.datatype.number(3);
var randomCategoryEdit = categoryArray[randomCategoryEditIndex]
var randomFeatureEdit = featuresArray[randomFeatureEditIndex]
var randomFeaturesVerifyEdit = featuresArrayVerify[randomFeatureEditIndex]

describe('Test suite with Page-objects - Assignment02', () =>{

    beforeEach ('Visit website and log in with valid credentials', () => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    // ORIGINAL 10 TEST CASES
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

    // EXTRA 7 TEST CASES FOR ROOMS
    it('Delete room on on the page Rooms', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.deleteRoom()
        roomsPage.performLogout('Login')
    })

    it('Edit the category of a room', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.navigateToEditRoomPage('Room: ')
        editRoomPage.editCategory(randomCategoryEdit)
        editRoomPage.saveEdit('Rooms')
        roomsPage.verifyPriceEdit(randomCategoryEdit)
        roomsPage.performLogout('Login')
    })

    it('Edit the room number of a room', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.navigateToEditRoomPage('Room: ')
        editRoomPage.editRoomNumber(randomRoomNumberEdit)
        editRoomPage.saveEdit('Rooms')
        roomsPage.verifyRoomNumberEdit(randomRoomNumberEdit)
        roomsPage.performLogout('Login')
    })

    it('Edit the floor number of a room', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.navigateToEditRoomPage('Room: ')
        editRoomPage.editFloorNumber(randomFloorNumberEdit)
        editRoomPage.saveEdit('Rooms')
        roomsPage.verifyFloorNumberEdit(randomFloorNumberEdit)
        roomsPage.performLogout('Login')
    })

    it('Edit the availability of a room', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.navigateToEditRoomPage('Room: ')
        editRoomPage.editAvailability(randomAvailability)
        editRoomPage.saveEdit('Rooms')
        roomsPage.verifyAvailabilityEdit(randomAvailability)
        roomsPage.performLogout('Login')
    })

    it('Edit the price of a room', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.navigateToEditRoomPage('Room: ')
        editRoomPage.editPrice(randomPriceEdit)
        editRoomPage.saveEdit('Rooms')
        roomsPage.verifyPriceEdit(randomPriceEdit -.00 + 'kr')
        roomsPage.performLogout('Login')
    })

    it('Edit the feature of a room', () => {
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.navigateToEditRoomPage('Room: ')
        editRoomPage.editFeatures(randomFeatureEdit)
        editRoomPage.saveEdit('Rooms')
        roomsPage.verifyFeatureEdit(randomFeaturesVerifyEdit)
        roomsPage.performLogout('Login')
    })

})