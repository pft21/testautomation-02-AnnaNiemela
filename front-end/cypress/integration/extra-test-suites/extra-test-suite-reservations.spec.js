/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"
import * as reservationsPage from "../../pages/reservation-pages/reservation-page"
import * as createReservationPage from "../../pages/reservation-pages/create-reservation-page"
import * as editReservationPage from "../../pages/reservation-pages/edit-reservation-page"
import * as roomsPage from "../../pages/room-pages/rooms-page"
import * as createRoomPage from "../../pages/room-pages/create-room-page"
import * as billsPage from "../../pages/bill-pages/bills-page"
import * as createBillPage from "../../pages/bill-pages/create-bill-page"
import * as clientsPage from "../../pages/client-pages/clients-page"
import * as createClientPage from "../../pages/client-pages/create-client-page"
import { date } from "faker"

var faker = require('faker');
// varibles for creating a new room
let randomFloorNumber1 = faker.datatype.number(9)+1;
let randomRoomNumber1 = faker.datatype.number(30) + (randomFloorNumber1 * 100);
let randomAvailabilityIndex = faker.datatype.number(1)
let randomPrice = faker.commerce.price(5000);
let randomCategoryIndex = faker.datatype.number(2);
let randomFeatureIndex = faker.datatype.number(3);
var categoryArray = ['double', 'single', 'twin']
var randomCategory = categoryArray[randomCategoryIndex]
var availabilityArray = ['true', 'false']
var randomAvailability = availabilityArray[randomAvailabilityIndex]
var featuresArray = ['balcony', 'ensuite', 'Sea View', 'penthouse']
var randomFeature = featuresArray[randomFeatureIndex]
var featuresArrayVerify = ['balcony', 'ensuite', 'sea view', 'penthouse'] 
var randomFeaturesVerify = featuresArrayVerify[randomFeatureIndex]
// variables for creating a new client
let randomName1 = faker.name.findName();
let randomEmail1 = faker.internet.email();
let randomTelephone1 = faker.phone.phoneNumber();
// varibles for creating a new bill
let randomValue1 = faker.datatype.number(5000);
let randomPaidIndex1 = faker.datatype.number(1);
var paidArray = ['Yes', 'No',]
var randomPaid1 = paidArray[randomPaidIndex1]
// varibles for creating a new reservation
var randomDate1 = faker.datatype.number(20)+10;
var randomDate2 = faker.datatype.number(20)+10;
var randomStartDate1 = '2021-05-' + randomDate1
var randomEndDate1 = '2021-06-' + randomDate2
// variables for editing reservation
var randomStartDate2 = '2021-05-' + randomDate1
var randomEndDate2 = '2021-06-' + randomDate2

describe('Extra test suite with Page-objects - Reservations', () =>{

    beforeEach ('Visit website and log in with valid credentials', () => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    before ('Create a room, client and bill that can be used to create a reservation', () => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        indexPage.navigateToRooms('Rooms')
        roomsPage.navigateToCreateRoom('New Room')
        createRoomPage.createRoom(randomCategory, randomRoomNumber1, randomFloorNumber1, randomAvailability, randomPrice, randomFeature)
        createRoomPage.saveRoom('Rooms')
        roomsPage.verifyNewRoom(randomCategory, randomRoomNumber1, randomFloorNumber1, randomAvailability, (randomPrice -.00) +'kr', randomFeaturesVerify)
        roomsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.navigateToClients('Clients')
        clientsPage.navigateToCreateClientPage('New Client')
        createClientPage.createClient(randomName1, randomEmail1, randomTelephone1)
        createClientPage.saveClient('Clients')
        clientsPage.verifyNewClient(randomName1, randomEmail1, randomTelephone1)
        clientsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.createBill(randomValue1, randomPaid1)
        createBillPage.saveBill('Bills')
        billsPage.verifyNewBill(randomValue1, randomPaid1)
        billsPage.performLogout('Login')
    })

    it('View Reservations', () => {
        indexPage.navigateToReservations('Reservations')
        reservationsPage.performLogout('Login')   
    })

    it('Create a new reservation by using valid input in all fields', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.createReservation(randomStartDate1, randomEndDate1, randomName1, randomFloorNumber1, randomRoomNumber1)
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyNewReservation(randomStartDate1, randomEndDate1, randomName1)
        reservationsPage.performLogout('Login')
    })

    it('Create a new reservation with a start date the occurs later than the end date', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.createReservation(randomEndDate1, randomStartDate1, randomName1, randomFloorNumber1, randomRoomNumber1)
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyNewReservation(randomEndDate1, randomStartDate1, randomName1)
        reservationsPage.performLogout('Login')
    })

    it('Delete reservation on reservations page', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.createReservation(randomStartDate1, randomEndDate1, randomName1, randomFloorNumber1, randomRoomNumber1)
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyNewReservation(randomStartDate1, randomEndDate1, randomName1)
        reservationsPage.deleteReservation('Reservations')
        reservationsPage.performLogout('Login')
    })

    it('Edit reservation', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.createReservation(randomStartDate1, randomEndDate1)
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyNewReservation(randomStartDate1, randomEndDate1, randomName1)
        reservationsPage.navigateToEditReservationPage('Reservation: ')
        editReservationPage.editStartDate(randomStartDate2)
        editReservationPage.editEndDate(randomEndDate2)
        editReservationPage.editClient(randomName1)
        editReservationPage.editRoom(randomRoomNumber1)
        editReservationPage.editBill()
        editReservationPage.saveReservation('Reservations')
        reservationsPage.verifyStartDateEdit(randomStartDate2)
        reservationsPage.verifyEndDateEdit(randomEndDate2)
        reservationsPage.verifyClient(randomName1)
        reservationsPage.performLogout('Login')
    })

    it('Delete reservation on edit reservation page', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.createReservation(randomStartDate1, randomEndDate1, randomName1, randomFloorNumber1, randomRoomNumber1)
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyNewReservation(randomStartDate1, randomEndDate1, randomName1)
        reservationsPage.navigateToEditReservationPage('Reservation: ')
        editReservationPage.deleteReservation('Reservations')
        reservationsPage.performLogout('Login')
    })

    it('Return to indexpage when creating a reservation', () => {
        indexPage.navigateToReservations('Reservations')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.returnToReservationsPage('Reservations')
        reservationsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')    
    })

    it('Return to indexpage when on Reservation page', () => {
        indexPage.navigateToReservations('Reservations')
        reservationsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })

    it('Return to indexpage when editing a reservaion', () => {
        indexPage.navigateToReservations('Reservations')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.createReservation(randomStartDate1, randomEndDate1, randomName1, randomFloorNumber1, randomRoomNumber1)
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyNewReservation(randomStartDate1, randomEndDate1, randomName1)
        reservationsPage.navigateToEditReservationPage('Reservation: ')
        editReservationPage.returnToReservationsPage('Reservations')
        reservationsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })


})