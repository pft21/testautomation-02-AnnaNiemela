/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"

var faker = require('faker');

let randomUsername = faker.internet.userName();
let randomPassword = faker.internet.password();

describe('Test suite with Page-objects - Login', () =>{

    beforeEach (() => {
        cy.visit('http://localhost:3000')
    })

    it('Perform login with valid credentials', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        indexPage.performLogout('Login')
    })

    it('Perform login with invalid credentials', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin(randomUsername, randomPassword, 'Bad username or password')
    })

    it('Perform login with invalid username', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin(randomUsername, 'hello123', 'Bad username or password')
    })

    it('Perform login with invalid password', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', randomPassword, 'Bad username or password')
    })


})