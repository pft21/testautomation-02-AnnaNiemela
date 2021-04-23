/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const EDIT_VALUE_FIELD = ':nth-child(3) > input'
const EDIT_PAID_CHECKBOX = '.checkbox'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/bills"]'
const DELETE_BTN = 'h2 > .btn'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}

function editValue(value){
    cy.get(EDIT_VALUE_FIELD).wait(100).clear().type(value)
}

function editPaid(){
    cy.get(EDIT_PAID_CHECKBOX).wait(100).click()
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

function deleteBill(confirmationContent){
    cy.get(DELETE_BTN).click()
    cy.wait(200)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    editValue,
    editPaid,
    saveBill,
    returnToBillsPage,
    deleteBill
}