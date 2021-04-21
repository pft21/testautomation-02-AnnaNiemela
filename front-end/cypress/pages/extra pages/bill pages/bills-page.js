/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_BILL_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const MANAGE_BILL_BTN = ':nth-last-child(1) > .action > img'
const EDIT_BILL_BTN = '.menu > :nth-child(1)'
const DELETE_BILL_BTN = '.menu > :nth-child(2)'
const LAST_BILL = '.bills > :nth-last-child(1)'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}

function navigateToCreateBillPage(confirmationContent){
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(confirmationContent)
}

function navigateToEditBillPage(confirmationContent){
    cy.get(MANAGE_BILL_BTN).click()
    cy.get(EDIT_BILL_BTN).click()
    cy.contains(confirmationContent)
}

function deleteBill(confirmationContent){
    cy.get(MANAGE_BILL_BTN).click()
    cy.get(DELETE_BILL_BTN).click()
    cy.contains(confirmationContent)
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}

function verifyLastBill(value, paid){
    cy.get(LAST_BILL)
    .should('contain', value)
    .and('contain', paid)
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateBillPage,
    navigateToEditBillPage,
    deleteBill,
    returnToIndexPage,
    verifyLastBill
}