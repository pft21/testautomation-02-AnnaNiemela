/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_ROOM_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const LAST_ROOM = '.rooms > :nth-last-child(1)'
const CATEGORY = ':nth-last-child(1) > :nth-child(2) > .category'
const AVAILABILITY = ':nth-last-child(1) > :nth-child(2) > .available'
const FEATURES = ':nth-last-child(1) > :nth-child(2) > .features'
const MANAGE_ROOM_BTN = ':nth-last-child(1) > .action > img'
const DELETE_BTN = '.menu > :nth-child(2)'
const EDIT_BTN = '.menu > :nth-child(1)'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function navigateToCreateRoom(confirmationContent){
    cy.get(CREATE_ROOM_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

function verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeaturesVerify){
    cy.get(LAST_ROOM).wait(100)
    .should('contain', randomCategory).wait(100)
    .and('contain', randomRoomNumber).wait(100)
    .and('contain', randomFloorNumber).wait(100)
    .and('contain', randomAvailability).wait(100)
    .and('contain', randomPrice).wait(100)
    .and('contain', randomFeaturesVerify).wait(100)
}

function verifyCategoryEdit(randomCategoryEdit){
    cy.get(LAST_ROOM).wait(100)
    .should('contain', randomCategoryEdit).wait(100)
}

function verifyRoomNumberEdit(randomRoomNumberEdit){
    cy.get(LAST_ROOM).wait(100)
    .should('contain', randomRoomNumberEdit).wait(100)
}

function verifyFloorNumberEdit(randomFloorNumberEdit){
    cy.get(LAST_ROOM).wait(100)
    .should('contain', randomFloorNumberEdit).wait(100)
}

function verifyAvailabilityEdit(randomAvailability){
    if (randomAvailability == 'false' || randomAvailability == '') {
        cy.get(LAST_ROOM).should('contain', 'true')
        } else {
            cy.get(LAST_ROOM).should('contain', 'false')
        }
    }

function verifyFeatureEdit(randomFeatureEdit){
    cy.get(LAST_ROOM).wait(100)
    .should('contain', randomFeatureEdit).wait(100)
    }

function verifyPriceEdit(randomPriceEdit){
    cy.get(LAST_ROOM).wait(100)
    .should('contain', randomPriceEdit).wait(100)
}

function checkForNoCategory(){
    cy.get(CATEGORY).wait(100)
    .should('have.text', 'Category: ')
}

function checkForNoAvailability(){
    cy.get(AVAILABILITY).wait(100)
    .should('have.text', 'Available: ')
}

function checkForNoFeatures(){
    cy.get(FEATURES).wait(100)
    .should('have.text', ' Features: ')
}

function deleteRoom(){
    cy.get(MANAGE_ROOM_BTN).click().wait(100)
    cy.get(DELETE_BTN).click()
}

function navigateToEditRoomPage(confirmationContent){
    cy.get(MANAGE_ROOM_BTN).click().wait(100)
    cy.get(EDIT_BTN).click().wait(200)
    cy.contains(confirmationContent)
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateRoom,
    returnToIndexPage,
    verifyNewRoom,
    verifyCategoryEdit,
    verifyRoomNumberEdit,
    verifyFloorNumberEdit,
    verifyAvailabilityEdit,
    verifyFeatureEdit,
    verifyPriceEdit,
    checkForNoCategory,
    checkForNoAvailability,
    checkForNoFeatures,
    deleteRoom,
    navigateToEditRoomPage
}