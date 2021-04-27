/// <reference types="cypress" />

var faker = require('faker');

// Elements
const LOGOUT_BTN = '.user > .btn'
const CATEGORY_DROPDOWN_LIST = ':nth-child(1) > select'
const ROOM_NUMBER_FIELD = ':nth-child(2) > input'
const FLOOR_NUMBER_FIELD = ':nth-child(3) > input'
const AVAILABILITY_CHECKBOX = '.checkbox'
const PRICE_FIELD = ':nth-child(5) > input'
const FEATURES_SELECTIONS = ':nth-child(6) > select'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/rooms"]'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function createRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeature){
    if (randomRoomNumber > 0) {
        cy.get(ROOM_NUMBER_FIELD).wait(100).type(randomRoomNumber)
        } else {
        }

    if (randomFloorNumber > 0) {
        cy.get(FLOOR_NUMBER_FIELD).wait(100).type(randomFloorNumber)
        } else {
        }
        
    if (randomPrice > 0) {
        cy.get(PRICE_FIELD).wait(100).type(randomPrice)
        } else {
        }

    if (randomCategory == 'double' || randomCategory == 'single' || randomCategory == 'twin') {
        cy.get(CATEGORY_DROPDOWN_LIST).wait(100).select(randomCategory)
        } else {
        }

    if (randomAvailability == 'true') {
        cy.get(AVAILABILITY_CHECKBOX).wait(100).click()
        } else {
        }
        
    if (randomAvailability == 'false') {
        cy.get(AVAILABILITY_CHECKBOX).wait(100).click().wait(100).click()
        } else {
        }

    if (randomFeature == 'balcony' || randomFeature == 'ensuite' || randomFeature == 'Sea View' || randomFeature == 'penthouse') {
        cy.get(FEATURES_SELECTIONS).wait(100).select(randomFeature)
        } else {
        }
 } 

function saveRoom(confirmationContent){
    cy.get(SAVE_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function returnToRoomsPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    createRoom,
    saveRoom,
    returnToRoomsPage
}
