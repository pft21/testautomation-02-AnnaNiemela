/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const ROOMS_PAGE_BTN = '.blocks > :nth-child(1) > .btn'
const CLIENTS_PAGE_BTN = '.blocks > :nth-child(2) > .btn'
const BILLS_PAGE_BTN = '.blocks > :nth-child(3) > .btn'
const RESERVATIONS_PAGE_BTN = '.blocks > :nth-child(4) > .btn'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

function navigateToRooms(confirmationContent){
    cy.get(ROOMS_PAGE_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function navigateToClients(confirmationContent){
    cy.get(CLIENTS_PAGE_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function navigateToBills(confirmationContent){
    cy.get(BILLS_PAGE_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function navigateToReservations(confirmationContent){
    cy.get(RESERVATIONS_PAGE_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToRooms,
    navigateToClients,
    navigateToBills,
    navigateToReservations
}