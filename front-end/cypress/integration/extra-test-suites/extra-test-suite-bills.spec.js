/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"
import * as billsPage from "../../pages/bill-pages/bills-page"
import * as createBillPage from "../../pages/bill-pages/create-bill-page"
import * as editBillPage from "../../pages/bill-pages/edit-bill-page"

var faker = require('faker');

// varibles for creating a new bill
let randomValue1 = faker.datatype.number(5000);
let randomPaidIndex1 = faker.datatype.number(1);

var paidArray = ['Yes', 'No',]
var randomPaid1 = paidArray[randomPaidIndex1]

//variables for editing a bill
let randomValue2 = faker.datatype.number(5000);
let randomPaidIndex2 = faker.datatype.number(1);
var randomPaid2 = paidArray[randomPaidIndex2]

describe('Extra test suite with Page-objects - Bills', () =>{

    beforeEach ('Visit website and log in with valid credentials', () => {
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
        createBillPage.createBill(randomValue1, randomPaid1)
        createBillPage.saveBill('Bills')
        billsPage.verifyNewBill(randomValue1, randomPaid1)
        billsPage.performLogout('Login')
    })

    it('Delete bill on bills page', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.createBill(randomValue1, randomPaid1)
        createBillPage.saveBill('Bills')
        billsPage.verifyNewBill(randomValue1, randomPaid1)
        billsPage.deleteBill()
        billsPage.performLogout('Login')
    })

    it('Edit value of bill', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.createBill(randomValue1, randomPaid1)
        createBillPage.saveBill('Bills')
        billsPage.verifyNewBill(randomValue1, randomPaid1)
        billsPage.navigateToEditBillPage('Bill: ')
        editBillPage.editValue(randomValue2)
        editBillPage.saveBill('Bills')
        billsPage.verifyValueEdit(randomValue2)
        billsPage.performLogout('Login')
    })

    it('Edit payment of bill', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.createBill(randomValue1, randomPaid1)
        createBillPage.saveBill('Bills')
        billsPage.verifyNewBill(randomValue1, randomPaid1)
        billsPage.navigateToEditBillPage('Bill: ')
        editBillPage.editPaid(randomPaid2)
        editBillPage.saveBill('Bills')
        billsPage.verifyPaidEdit(randomPaid1)
        billsPage.performLogout('Login')
    })

    it('Delete bill on edit bill page', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.createBill(randomValue1, randomPaid1)
        createBillPage.saveBill('Bills')
        billsPage.verifyNewBill(randomValue1, randomPaid1)
        billsPage.navigateToEditBillPage('Bill: ')
        editBillPage.deleteBill('Bills')
        billsPage.performLogout('Login')
    })

    it('Return to indexpage when creating a bill', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.returnToBillsPage('Bills')
        billsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })

    it('Return to indexpage when on Bills page', () => {
        indexPage.navigateToBills('Bills')
        billsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })

    it('Return to indexpage when editing a bill', () => {
        indexPage.navigateToBills('Bills')
        billsPage.navigateToCreateBillPage('New Bill')
        createBillPage.createBill(randomValue1, randomPaid1)
        createBillPage.saveBill('Bills')
        billsPage.verifyNewBill(randomValue1, randomPaid1)
        billsPage.navigateToEditBillPage('Bill: ')
        editBillPage.returnToBillsPage('Bills')
        billsPage.returnToIndexPage('Tester Hotel Overview')
        indexPage.performLogout('Login')   
    })



})