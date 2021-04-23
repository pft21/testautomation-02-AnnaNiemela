/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"
import * as reservationsPage from "../../pages/reservation-pages/reservation-page"
import * as createReservationPage from "../../pages/reservation-pages/create-reservation-page"
import * as editReservationPage from "../../pages/reservation-pages/edit-reservation-page"

describe('Extra test suite with Page-objects - Reservations', () =>{

    beforeEach (() => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('View Reservations', () => {
        indexPage.navigateToReservations('Reservations')
        reservationsPage.performLogout('Login')   
    })

    it('Create a new reservation by using valid input in all fields', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.addStartDate('2022-01-01')
        createReservationPage.addEndDate('2022-01-03')
        createReservationPage.addClient('Jonas Hellman (#1)')
        createReservationPage.addRoom('Floor 1, Room 101')
        createReservationPage.addBill('1')
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyLastReservation('2022-01-01', '2022-01-03', 'Jonas Hellman')
        reservationsPage.performLogout('Login')
    })

    it('Delete reservation on reservations page', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.addStartDate('2022-01-01')
        createReservationPage.addEndDate('2022-01-03')
        createReservationPage.addClient('Jonas Hellman (#1)')
        createReservationPage.addRoom('Floor 1, Room 101')
        createReservationPage.addBill('1')
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyLastReservation('2022-01-01', '2022-01-03', 'Jonas Hellman')
        reservationsPage.deleteReservation('Reservations')
        reservationsPage.performLogout('Login')
    })

    it('Edit reservation', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.addStartDate('2022-01-01')
        createReservationPage.addEndDate('2022-01-03')
        createReservationPage.addClient('Jonas Hellman (#1)')
        createReservationPage.addRoom('Floor 1, Room 101')
        createReservationPage.addBill('1')
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyLastReservation('2022-01-01', '2022-01-03', 'Jonas Hellman')
        reservationsPage.navigateToEditReservationPage('Reservation: ')
        editReservationPage.editStartDate('2022-02-01')
        editReservationPage.editEndDate('2022-02-03')
        editReservationPage.editClient('Mikael Eriksson (#2)')
        editReservationPage.editRoom('Floor 1, Room 102')
        editReservationPage.editBill('2')
        editReservationPage.saveReservation('Reservations')
        reservationsPage.verifyLastReservation('2022-02-01', '2022-02-03', 'Mikael Eriksson')
        reservationsPage.performLogout('Login')
    })

    it('Delete reservation on edit reservation page', () => {
        indexPage.navigateToReservations('Reservation')
        reservationsPage.navigateToCreateReservationPage('New Reservation')
        createReservationPage.addStartDate('2022-01-01')
        createReservationPage.addEndDate('2022-01-03')
        createReservationPage.addClient('Jonas Hellman (#1)')
        createReservationPage.addRoom('Floor 1, Room 101')
        createReservationPage.addBill('1')
        createReservationPage.saveReservation('Reservations')
        reservationsPage.verifyLastReservation('2022-01-01', '2022-01-03', 'Jonas Hellman')
        reservationsPage.navigateToEditReservationPage('Reservation: ')
        editReservationPage.deleteReservation('Reservations')
        reservationsPage.performLogout('Login')
    })


})