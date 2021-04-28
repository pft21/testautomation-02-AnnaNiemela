/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_RESERVATION_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const MANAGE_RESERVATION_BTN = ':nth-last-child(1) > .action > img'
const EDIT_BTN = '.menu > :nth-child(1)'
const DELETE_BTN = '.menu > :nth-child(2)'
const LAST_RESERVATION = '.reservations > :nth-last-child(1)'
const LIST_OF_RESERVATIONS = '.reservations'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function navigateToCreateReservationPage(confirmationContent){
    cy.get(CREATE_RESERVATION_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function navigateToEditReservationPage(confirmationContent){
    cy.get(MANAGE_RESERVATION_BTN).click().wait(200)
    cy.get(EDIT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function deleteReservation(){
    cy.get(LIST_OF_RESERVATIONS).children().last().invoke('index').then((i) => {
        let quantity = i + 1
        cy.get(MANAGE_RESERVATION_BTN).click().wait(200)
        cy.get(DELETE_BTN).click().wait(200)
        cy.get(LIST_OF_RESERVATIONS).children().should('have.length', (quantity - 1))
    }) 
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function verifyNewReservation(randomStartDate, randomEndDate, randomName1){
    cy.get(LAST_RESERVATION)
    .should('contain', randomStartDate)
    .and('contain', randomEndDate)
    .and('contain', randomName1)
}

function verifyStartDateEdit(randomStartDate2){
    cy.get(LAST_RESERVATION).should('contain', randomStartDate2)
}

function verifyEndDateEdit(randomEndDate2){
    cy.get(LAST_RESERVATION).should('contain', randomEndDate2)
}

function verifyClient(randomName1){
    cy.get(LAST_RESERVATION).should('not.contain', randomName1)
}


// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateReservationPage,
    navigateToEditReservationPage,
    deleteReservation,
    returnToIndexPage,
    verifyNewReservation,
    verifyStartDateEdit,
    verifyEndDateEdit,
    verifyClient
}