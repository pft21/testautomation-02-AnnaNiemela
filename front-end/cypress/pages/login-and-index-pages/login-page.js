/// <reference types="cypress" />

// Elements
const LOGIN_PAGE_TITLE = 'Testers Hotel'
const USERNAME_TEXTFIELD = ':nth-child(1) > input'
const PASSWORD_TEXTFIELD = ':nth-child(2) > input'
const SUBMIT_BTN = '.btn'
const FORM_LABEL = 'Login'

// Functions / Actions / Methods
function checkLoginPageTitle(){
    cy.title().should('eq', LOGIN_PAGE_TITLE)
}

function performValidLogin(username, password, confirmationContent){
    cy.get(USERNAME_TEXTFIELD).wait(200).type(username)
    cy.get(PASSWORD_TEXTFIELD).wait(200).type(password)
    cy.get(SUBMIT_BTN).click()
    cy.contains(confirmationContent)
}

function performInvalidLogin(username, password, confirmationContent){
    cy.get(USERNAME_TEXTFIELD).wait(200).type(username)
    cy.get(PASSWORD_TEXTFIELD).wait(200).type(password)
    cy.get(SUBMIT_BTN).click()
    cy.contains(confirmationContent)
}

function performLoginNoUsername(password, confirmationContent){
    cy.get(PASSWORD_TEXTFIELD).wait(200).type(password)
    cy.get(SUBMIT_BTN).click()
    cy.contains(confirmationContent)
}

function performLoginNoPassword(username, confirmationContent){
    cy.get(USERNAME_TEXTFIELD).wait(200).type(username)
    cy.get(SUBMIT_BTN).click()
    cy.contains(confirmationContent)
}



// Exporting functions
module.exports = {
    checkLoginPageTitle,
    performValidLogin,
    performInvalidLogin,
    performLoginNoUsername,
    performLoginNoPassword
}