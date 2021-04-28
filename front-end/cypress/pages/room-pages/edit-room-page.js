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
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function deleteRoom(confirmationContent){
    cy.get(DELETE_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function editCategory(randomEditCategory){
    cy.get(EDIT_CATEGORY_DROPDOWN_LIST).wait(200).select(randomEditCategory)
}

function editRoomNumber(randomEditRoomNumber){
    cy.get(EDIT_ROOM_NUMBER_FIELD).wait(200).clear().type(randomEditRoomNumber)
}

function editFloorNumber(randomEditFloorNumber){
    cy.get(EDIT_FLOOR_NUMBER_FIELD).wait(200).clear().type(randomEditFloorNumber)
}

function editAvailability(){
    cy.get(EDIT_AVAILABILITY_CHECKBOX).wait(200).click()
}

function editPrice(price){
    cy.get(EDIT_PRICE_FIELD).wait(200).clear().type(price)
}

function editFeatures(features){
    cy.get(EDIT_FEATURES_SELECTIONS).wait(200).select(features)
}

function saveEdit(confirmationContent){
    cy.get(SAVE_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function returnToRoomsPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(500)
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