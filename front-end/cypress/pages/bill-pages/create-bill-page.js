/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const VALUE_FIELD = ':nth-child(1) > input'
const PAID_CHECKBOX = '.checkbox'
const SAVE_BTN = '.blue'
const BACK_BTN = '[href="/bills"]'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function createBill(randomValue1, randomPaid1){
    cy.get(VALUE_FIELD).wait(200).type(randomValue1)
    if (randomPaid1 == 'No' || randomPaid1 == '') {
        cy.get(PAID_CHECKBOX).wait(200).click().wait(200).click()
        } else {
            cy.get(PAID_CHECKBOX).wait(200).click()
        }
}

function saveBill(confirmationContent){
    cy.get(SAVE_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function returnToBillsPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    createBill,
    saveBill,
    returnToBillsPage
}