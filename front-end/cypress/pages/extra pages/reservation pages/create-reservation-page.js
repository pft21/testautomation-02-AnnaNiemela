/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const START_DATE_FIELD = ':nth-child(1) > input'
const END_DATE_FIELD = ':nth-child(2) > input'
const CLIENT_DROPDOWN_LIST = ':nth-child(3) > select'
const ROOM_DROPDOWN_LIST = ':nth-child(4) > select'
const BILL_DROPDOWN_LIST = ':nth-child(5) > select'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/clients"]'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}

function addStartDate(startDate){
    cy.get(START_DATE_FIELD).type(startDate)
}

function addEndDate(endDate){
    cy.get(END_DATE_FIELD).type(endDate)
}

function addClient(client){
    cy.get(CLIENT_DROPDOWN_LIST).select(client)
}

function addRoom(room){
    cy.get(ROOM_DROPDOWN_LIST).select(room)
}

function addBill(bill){
    cy.get(BILL_DROPDOWN_LIST).select(bill)
}

function saveReservation(confirmationContent){
    cy.get(SAVE_BTN).click()
    cy.contains(confirmationContent)
}

function returnToReservationsPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    addStartDate,
    addEndDate,
    addClient,
    addRoom,
    addBill,
    saveReservation,
    returnToReservationsPage
}