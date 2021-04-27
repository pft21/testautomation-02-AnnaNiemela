/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_CLIENT_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const MANAGE_CLIENT_BTN = ':nth-last-child(1) > .action > img'
const EDIT_CLIENT_BTN = '.menu > :nth-child(1)'
const DELETE_CLIENT_BTN = '.menu > :nth-child(2)'
const LAST_CLIENT = '.clients > :nth-last-child(1)'
const LIST_OF_CLIENTS = '.clients'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function navigateToCreateClientPage(confirmationContent){
    cy.get(CREATE_CLIENT_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function navigateToEditClientPage(confirmationContent){
    cy.get(MANAGE_CLIENT_BTN).click().wait(100)
    cy.get(EDIT_CLIENT_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function deleteClient(){
    cy.get(LIST_OF_CLIENTS).children().last().invoke('index').then((i) => {
        let quantity = i + 1
        cy.get(MANAGE_CLIENT_BTN).click().wait(100)
        cy.get(DELETE_CLIENT_BTN).click().wait(100)
        cy.get(LIST_OF_CLIENTS).children().should('have.length', (quantity - 1))
    }) 
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function verifyLastClient(name, email, telephone){
    cy.get(LAST_CLIENT)
    .should('contain', name)
    .and('contain', email)
    .and('contain', telephone)
}

function verifyNameEdit(randomName2){
    cy.get(LAST_CLIENT).should('contain', randomName2)
}

function verifyEmailEdit(randomEmail2){
    cy.get(LAST_CLIENT).should('contain', randomEmail2)
}

function verifyTelephoneEdit(randomTelephone2){
    cy.get(LAST_CLIENT).should('contain', randomTelephone2)
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateClientPage,
    navigateToEditClientPage,
    deleteClient,
    returnToIndexPage,
    verifyLastClient,
    verifyNameEdit,
    verifyEmailEdit,
    verifyTelephoneEdit
}