/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_RESERVATION_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const MANAGE_RESERVATION_BTN = ':nth-last-child(1) > .action > img'
const EDIT_RESERVATION_BTN = '.menu > :nth-child(1)'
const DELETE_RESERVATION_BTN = '.menu > :nth-child(2)'
const LAST_RESERVATION = '.reservations > :nth-last-child(1)'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}

function navigateToCreateReservationPage(confirmationContent){
    cy.get(CREATE_RESERVATION_BTN).click()
    cy.contains(confirmationContent)
}

function navigateToEditReservationPage(confirmationContent){
    cy.get(MANAGE_RESERVATION_BTN).click()
    cy.get(EDIT_RESERVATION_BTN).click()
    cy.contains(confirmationContent)
}

function deleteReservation(confirmationContent){
    cy.get(MANAGE_RESERVATION_BTN).click()
    cy.get(DELETE_RESERVATION_BTN).click()
    cy.contains(confirmationContent)
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}

function verifyLastReservation(startDate, endDate, client){
    cy.get(LAST_RESERVATION)
    .should('contain', startDate)
    .and('contain', endDate)
    .and('contain', client)
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateReservationPage,
    navigateToEditReservationPage,
    deleteReservation,
    returnToIndexPage,
    verifyLastReservation
}