/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const DELETE_BTN = 'h2 > .btn'
const EDIT_CATEGORY_DROPDOWN_LIST = ':nth-child(3) > select'
const EDIT_ROOM_NUMBER_FIELD = ':nth-child(4) > input'
const EDIT_FLOOR_NUMBER_FIELD = ':nth-child(5) > input'
const EDIT_AVAILABILITY_CHECKBOX = '.checkbox'
const EDIT_PRICE_FIELD = ':nth-child(7) > input'
const EDIT_FEATURES_SELECTIONS = ':nth-child(8) > select'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/rooms"]'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}

function deleteRoom(confirmationContent){
    cy.get(DELETE_BTN).click()
    cy.contains(confirmationContent)
}

function editCategory(category){
    cy.get(EDIT_CATEGORY_DROPDOWN_LIST).select(category)
}

function editRoomNumber(roomNumber){
    cy.get(EDIT_ROOM_NUMBER_FIELD).clear().type(roomNumber)
}

function editFloorNumber(floorNumber){
    cy.get(EDIT_FLOOR_NUMBER_FIELD).clear().type(floorNumber)
}

function editAvailability(){
    cy.get(EDIT_AVAILABILITY_CHECKBOX).click()
}

function editPrice(price){
    cy.get(EDIT_PRICE_FIELD).clear().type(price)
}

function editFeatures(features){
    cy.get(EDIT_FEATURES_SELECTIONS).select(features)
}

function saveEdit(confirmationContent){
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
    deleteRoom,
    editCategory,
    editRoomNumber,
    editFloorNumber,
    editAvailability,
    editPrice,
    editFeatures,
    saveEdit,
    returnToRoomsPage
}