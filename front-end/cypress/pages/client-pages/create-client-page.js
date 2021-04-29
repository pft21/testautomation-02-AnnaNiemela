/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const NAME_FIELD = ':nth-child(1) > input'
const EMAIL_FIELD = ':nth-child(2) > input'
const TELEPHONE_FIELD = ':nth-child(3) > input'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/clients"]'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function createClient(randomName1, randomEmail1, randomTelephone1){
    cy.get(NAME_FIELD).type(randomName1)
    cy.get(EMAIL_FIELD).type(randomEmail1)
    cy.get(TELEPHONE_FIELD).wait(200).type(randomTelephone1)
}

function saveClient(confirmationContent){
    cy.get(SAVE_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function returnToClientsPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    createClient,
    saveClient,
    returnToClientsPage
}