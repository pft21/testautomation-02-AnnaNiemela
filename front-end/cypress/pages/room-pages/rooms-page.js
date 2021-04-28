/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const CREATE_ROOM_BTN = 'h2 > .btn'
const BACK_BTN = ':nth-child(3) > .btn'
const LAST_ROOM = '.rooms > :nth-last-child(1)'
const LIST_OF_ROOMS = '.rooms'
const CATEGORY = ':nth-last-child(1) > :nth-child(2) > .category'
const AVAILABILITY = ':nth-last-child(1) > :nth-child(2) > .available'
const FEATURES = ':nth-last-child(1) > :nth-child(2) > .features'
const MANAGE_ROOM_BTN = ':nth-last-child(1) > .action > img'
const DELETE_BTN = '.menu > :nth-child(2)'
const EDIT_BTN = '.menu > :nth-child(1)'

// Functions / Actions / Methods
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function navigateToCreateRoom(confirmationContent){
    cy.get(CREATE_ROOM_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function navigateToEditRoomPage(confirmationContent){
    cy.get(MANAGE_ROOM_BTN).click().wait(200)
    cy.get(EDIT_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function returnToIndexPage(confirmationContent){
    cy.get(BACK_BTN).click().wait(500)
    cy.contains(confirmationContent)
}

function verifyNewRoom(randomCategory, randomRoomNumber, randomFloorNumber, randomAvailability, randomPrice, randomFeaturesVerify){
    cy.get(LAST_ROOM)
    .should('contain', randomCategory)
    .and('contain', randomRoomNumber)
    .and('contain', randomFloorNumber)
    .and('contain', randomAvailability)
    .and('contain', randomPrice)
    .and('contain', randomFeaturesVerify)
}

function verifyCategoryEdit(randomCategoryEdit){
    cy.get(LAST_ROOM).should('contain', randomCategoryEdit)
}

function verifyRoomNumberEdit(randomRoomNumberEdit){
    cy.get(LAST_ROOM).should('contain', randomRoomNumberEdit)
}

function verifyFloorNumberEdit(randomFloorNumberEdit){
    cy.get(LAST_ROOM).should('contain', randomFloorNumberEdit)
}

function verifyAvailabilityEdit(randomAvailability){
    if (randomAvailability == 'false' || randomAvailability == '') {
        cy.get(LAST_ROOM).should('contain', 'true')
        } else {
            cy.get(LAST_ROOM).should('contain', 'false')
        }
    }

function verifyFeatureEdit(randomFeaturesVerifyEdit){
    cy.get(LAST_ROOM).should('contain', randomFeaturesVerifyEdit)
    }

function verifyPriceEdit(randomPriceEdit){
    cy.get(LAST_ROOM).should('contain', randomPriceEdit)
}

function checkForNoCategory(){
    cy.get(CATEGORY).should('have.text', 'Category: ')
}

function checkForNoAvailability(){
    cy.get(AVAILABILITY).should('have.text', 'Available: ')
}

function checkForNoFeatures(){
    cy.get(FEATURES).should('have.text', ' Features: ')
}

function deleteRoom(){
    cy.get(LIST_OF_ROOMS).children().last().invoke('index').then((i) => {
        let quantity = i + 1
        cy.get(MANAGE_ROOM_BTN).click().wait(200)
        cy.get(DELETE_BTN).click().wait(200)
        cy.get(LIST_OF_ROOMS).children().should('have.length', (quantity - 1))
    }) 
}

// Exporting functions
module.exports = {
    performLogout,
    navigateToCreateRoom,
    navigateToEditRoomPage,
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
}