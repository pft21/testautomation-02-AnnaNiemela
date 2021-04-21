/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const EDIT_START_DATE_FIELD = ':nth-child(3) > input'
const EDIT_END_DATE_FIELD = ':nth-child(4) > input'
const EDIT_CLIENT_DROPDOWN_LIST = ':nth-child(5) > select'
const EDIT_ROOM_DROPDOWN_LIST = ':nth-child(6) > select'
const EDIT_BILL_DROPDOWN_LIST = ':nth-child(7) > select'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/reservations"]'
const DELETE_BTN = 'h2 > .btn'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}
function editStartDate(startDate){
    cy.get(EDIT_START_DATE_FIELD).clear().type(startDate)
}

function editEndDate(endDate){
    cy.get(EDIT_END_DATE_FIELD).clear().type(endDate)
}

function editClient(client){
    cy.get(EDIT_CLIENT_DROPDOWN_LIST).select(client)
}

function editRoom(room){
    cy.get(EDIT_ROOM_DROPDOWN_LIST).select(room)
}

function editBill(bill){
    cy.get(EDIT_BILL_DROPDOWN_LIST).select(bill)
}

function saveReservation(confirmationContent){
    cy.get(SAVE_BTN).click()
    cy.contains(confirmationContent)
}

function returnToReservationsPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}

function deleteReservation(confirmationContent){
    cy.get(DELETE_BTN).click()
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    editStartDate,
    editEndDate,
    editClient,
    editRoom,
    editBill,
    saveReservation,
    returnToReservationsPage,
    deleteReservation
}