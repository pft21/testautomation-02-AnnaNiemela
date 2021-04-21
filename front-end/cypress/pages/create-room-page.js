/// <reference types="cypress" />

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
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}

function chooseCategory(category){
    cy.get(CATEGORY_DROPDOWN_LIST).select(category)
}
function addRoomNumber(roomnumber){
    cy.get(ROOM_NUMBER_FIELD).type(roomnumber)
}

function addFloorNumber(floornumber){
    cy.get(FLOOR_NUMBER_FIELD).type(floornumber)
} 

function chooseAsAvailable(){
    cy.get(AVAILABILITY_CHECKBOX).click()
}

function addPrice(price){
    cy.get(PRICE_FIELD).type(price)
}

function chooseFeatures(features){
    cy.get(FEATURES_SELECTIONS).select(features)
}

function saveRoom(confirmationContent){
    cy.get(SAVE_BTN).click()
    cy.contains(confirmationContent)
}

function returnToRoomsPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}



// Exporting functions
module.exports = {
    performLogout,
    chooseCategory,
    addRoomNumber,
    addFloorNumber,
    chooseAsAvailable,
    addPrice,
    chooseFeatures,
    saveRoom,returnToRoomsPage
}
