/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const VALUE_FIELD = ':nth-child(1) > input'
const PAID_CHECKBOX = '.checkbox'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/clients"]'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

function addValue(value){
    cy.get(VALUE_FIELD).type(value)
    cy.wait(200)
}

function addAsPaid(){
    cy.get(PAID_CHECKBOX).click()
    cy.wait(200)
}

function saveBill(confirmationContent){
    cy.get(SAVE_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

function returnToBillsPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    addValue,
    addAsPaid,
    saveBill,
    returnToBillsPage
}