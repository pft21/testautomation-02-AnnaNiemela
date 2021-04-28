/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const START_DATE_FIELD = ':nth-child(1) > input'
const END_DATE_FIELD = ':nth-child(2) > input'
const CLIENT_DROPDOWN_LIST = ':nth-child(3) > select'
const ROOM_DROPDOWN_LIST = ':nth-child(4) > select'
const BILL_DROPDOWN_LIST = ':nth-child(5) > select'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/reservations"]'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function createReservation(randomStartDate1, randomEndDate1){
    cy.get(START_DATE_FIELD).wait(200).type(randomStartDate1)
    cy.get(END_DATE_FIELD).wait(200).type(randomEndDate1)

    cy.get(CLIENT_DROPDOWN_LIST).children().last().invoke('index').then((i) => {
        let client = i
        cy.get(CLIENT_DROPDOWN_LIST).children().eq(client).invoke('val').then((val) => {  
            cy.get(CLIENT_DROPDOWN_LIST).last().wait(200).select(val)
        })
    })

    cy.get(ROOM_DROPDOWN_LIST).children().last().invoke('index').then((i) => {
        let room = i
        cy.get(ROOM_DROPDOWN_LIST).children().eq(room).invoke('val').then((val) => {  
            cy.get(ROOM_DROPDOWN_LIST).last().wait(200).select(val)
        })
    })

    cy.get(BILL_DROPDOWN_LIST).children().last().invoke('index').then((i) => {
        let bill = i
        cy.get(BILL_DROPDOWN_LIST).children().eq(bill).invoke('val').then((val) => {  
            cy.get(BILL_DROPDOWN_LIST).last().wait(200).select(val)
        })
    })
}

function saveReservation(confirmationContent){
    cy.get(SAVE_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function returnToReservationsPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    createReservation,
    saveReservation,
    returnToReservationsPage
}
