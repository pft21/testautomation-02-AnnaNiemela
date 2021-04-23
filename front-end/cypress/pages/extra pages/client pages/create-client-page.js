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
    cy.get(LOGOUT_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

function addName(name){
    cy.get(NAME_FIELD).type(name)
    cy.wait(200)
}

function addEmail(email){
    cy.get(EMAIL_FIELD).type(email)
    cy.wait(200)
}

function addTelephone (telephone){
    cy.get(TELEPHONE_FIELD).type(telephone)
    cy.wait(200)
}

function saveClient(confirmationContent){
    cy.get(SAVE_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

function returnToClientsPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    addName,
    addEmail,
    addTelephone,
    saveClient,
    returnToClientsPage
}