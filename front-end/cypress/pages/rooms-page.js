/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_ROOM_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const ROOM_LIST = '.rooms'
const CATEGORY = ':nth-last-child(1) > :nth-child(2) > .category'
const AVAILABILITY = ':nth-last-child(1) > :nth-child(2) > .available'
const FEATURES = ':nth-last-child(1) > :nth-child(2) > .features'


// Functions / Actions / Methods

function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
}

function navigateToCreateRoom(confirmationContent){
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(confirmationContent)
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}

function verifyLastRoom(floornumber, roomnumber, category, availability, price, feature){
    cy.get(ROOM_LIST).last()
    .should('contain', floornumber)
    .and('contain', roomnumber)
    .and('contain', category)
    .and('contain', availability)
    .and('contain', price)
    .and('contain', feature)
}

function checkForNoCategory(){
    cy.get(CATEGORY)
    .should('have.text', 'Category: ')
}

function checkForNoAvailability(){
    cy.get(AVAILABILITY)
    .should('have.text', 'Available: ')
}

function checkForNoFeatures(){
    cy.get(FEATURES)
    .should('have.text', ' Features: ')
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateRoom,
    returnToIndexPage,
    verifyLastRoom,
    checkForNoCategory,
    checkForNoAvailability,
    checkForNoFeatures
}