/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"
import * as billsPage from "../../pages/bill-pages/bills-page"
import * as createBillPage from "../../pages/bill-pages/create-bill-page"
import * as editBillPage from "../../pages/bill-pages/edit-bill-page"

describe('Extra test suite with Page-objects - Bills', () =>{

    beforeEach (() => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('View Bills', () => {
        indexPage.navigateToBills('Bills')
        billsPage.performLogout('Login')   
    })

    it('Create a new bill by using valid input in all fields', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.addValue('1000kr')
        createBillPage.addAsPaid()
        createBillPage.saveBill('Bills')
        billsPage.verifyLastBill('1000kr', 'Yes')
        billsPage.performLogout('Login')
    })

    it('Delete bill on bills page', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.addValue('1000kr')
        createBillPage.addAsPaid()
        createBillPage.saveBill('Bills')
        billsPage.verifyLastBill('1000kr', 'Yes')
        billsPage.deleteBill('Bills')
        billsPage.performLogout('Login')
    })

    it('Edit bill', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.addValue('1000kr')
        createBillPage.addAsPaid()
        createBillPage.saveBill('Bills')
        billsPage.verifyLastBill('1000kr', 'Yes')
        billsPage.navigateToEditBillPage('Bill: ')
        editBillPage.editValue('500kr')
        editBillPage.editPaid()
        editBillPage.saveBill('Bills')
        billsPage.verifyLastBill('500kr', 'No')
        billsPage.performLogout('Login')
    })

    it('Delete bill on edit bill page', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.addValue('1000kr')
        createBillPage.addAsPaid()
        createBillPage.saveBill('Bills')
        billsPage.verifyLastBill('1000kr', 'Yes')
        billsPage.navigateToEditBillPage('Bill: ')
        editBillPage.deleteBill('Bills')
        billsPage.performLogout('Login')
    })



})