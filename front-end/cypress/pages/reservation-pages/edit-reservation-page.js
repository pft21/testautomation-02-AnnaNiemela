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
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}
function editStartDate(randomStartDate2){
    cy.get(EDIT_START_DATE_FIELD).clear().type(randomStartDate2)
}

function editEndDate(randomStartDate2){
    cy.get(EDIT_END_DATE_FIELD).clear().type(randomStartDate2)
}

function editClient(randomName1){
    cy.get(EDIT_CLIENT_DROPDOWN_LIST).children().last().invoke('index').then((i) => {
        let client = i-1
        cy.get(EDIT_CLIENT_DROPDOWN_LIST).children().eq(client).invoke('val').then((val) => {  
            cy.get(EDIT_CLIENT_DROPDOWN_LIST).select(val)
        })
        cy.get(EDIT_CLIENT_DROPDOWN_LIST).children().eq(client).should('not.contain', randomName1)
    })
}

function editRoom(randomRoomNumber1){
    cy.get(EDIT_ROOM_DROPDOWN_LIST).children().last().invoke('index').then((i) => {
        let room = i-1
        cy.get(EDIT_ROOM_DROPDOWN_LIST).children().eq(room).invoke('val').then((val) => {  
            cy.get(EDIT_ROOM_DROPDOWN_LIST).select(val)
        })
        cy.get(EDIT_ROOM_DROPDOWN_LIST).children().eq(room).should('not.contain', randomRoomNumber1)  
    })
}

function editBill(){
    cy.get(EDIT_BILL_DROPDOWN_LIST).children().last().invoke('index').then((i) => {  
        let bill = i-1
        cy.get(EDIT_BILL_DROPDOWN_LIST).children().eq(bill).invoke('val').then((val) => {  
        cy.get(EDIT_BILL_DROPDOWN_LIST).select(val)
        })
        cy.get(EDIT_BILL_DROPDOWN_LIST).children().eq(bill).should('not.eq', i)
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

function deleteReservation(confirmationContent){
    cy.get(DELETE_BTN).click().wait(500)
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