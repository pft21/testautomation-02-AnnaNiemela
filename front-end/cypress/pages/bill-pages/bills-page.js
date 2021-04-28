/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_BILL_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const MANAGE_BILL_BTN = ':nth-last-child(1) > .action > img'
const EDIT_BTN = '.menu > :nth-child(1)'
const DELETE_BTN = '.menu > :nth-child(2)'
const LAST_BILL = '.bills > :nth-last-child(1)'
const LIST_OF_BILLS = '.bills'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function navigateToCreateBillPage(confirmationContent){
    cy.get(CREATE_BILL_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function navigateToEditBillPage(confirmationContent){
    cy.get(MANAGE_BILL_BTN).click().wait(200)
    cy.get(EDIT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function deleteBill(){
    cy.get(LIST_OF_BILLS).children().last().invoke('index').then((i) => {
        let quantity = i + 1
        cy.get(MANAGE_BILL_BTN).click().wait(200)
        cy.get(DELETE_BTN).click().wait(200)
        cy.get(LIST_OF_BILLS).children().should('have.length', (quantity - 1))
    }) 
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function verifyNewBill(randomValue1, randomPaid1){
    cy.get(LAST_BILL)
    .should('contain', randomValue1)
    .and('contain', randomPaid1)
}

function verifyValueEdit(randomValue2){
    cy.get(LAST_BILL).should('contain', randomValue2)
}

function verifyPaidEdit(randomPaid1){
    if (randomPaid1 == 'No' || randomPaid1 == '') {
        cy.get(LAST_BILL).should('contain', 'Yes')
        } else {
            cy.get(LAST_BILL).should('contain', 'No')
        }
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateBillPage,
    navigateToEditBillPage,
    deleteBill,
    returnToIndexPage,
    verifyNewBill,
    verifyValueEdit,
    verifyPaidEdit
}