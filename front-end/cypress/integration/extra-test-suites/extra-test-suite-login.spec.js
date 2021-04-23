/// <reference types="cypress" />

import * as loginPage from "../../pages/login-and-index-pages/login-page"
import * as indexPage from "../../pages/login-and-index-pages/index-page"


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
        loginPage.performValidLogin('tester01', 'hello123', 'Bad username or password')
    })


})