/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const EDIT_NAME_FIELD = ':nth-child(3) > input'
const EDIT_EMAIL_FIELD = ':nth-child(4) > input'
const EDIT_TELEPHONE_FIELD = ':nth-child(5) > input'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/clients"]'
const DELETE_BTN = 'h2 > .btn'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function editName(name){
    cy.get(EDIT_NAME_FIELD).wait(100).clear().type(name)
}

function editEmail(email){
    cy.get(EDIT_EMAIL_FIELD).wait(100).clear().type(email)
}

function editTelephone (telephone){
    cy.get(EDIT_TELEPHONE_FIELD).wait(100).clear().type(telephone)
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

function deleteClient(confirmationContent){
    cy.get(DELETE_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    editName,
    editEmail,
    editTelephone,
    saveClient,
    returnToClientsPage,
    deleteClient
}