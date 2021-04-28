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
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function editName(randomName2){
    cy.get(EDIT_NAME_FIELD).wait(200).clear().type(randomName2)
}

function editEmail(randomEmail2){
    cy.get(EDIT_EMAIL_FIELD).wait(200).clear().type(randomEmail2)
}

function editTelephone (randomTelephone2){
    cy.get(EDIT_TELEPHONE_FIELD).wait(200).clear().type(randomTelephone2)
}

function saveClient(confirmationContent){
    cy.get(SAVE_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function returnToClientsPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function deleteClient(confirmationContent){
    cy.get(DELETE_BTN).click().wait(500)
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