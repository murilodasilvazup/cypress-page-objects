import LoginPage from '../support/pageObjects/LoginPage.js'

describe('Login Functionality', () => {

    const loginPage = new LoginPage()

    beforeEach(() => {
        cy.visit('/');
    })

    it('Verify elements of text present on the login page', () => {
       
        cy.contains('Login').should('be.visible');

        cy.contains('Username : Admin').should('be.visible');

        cy.contains('Password : admin123').should('be.visible');
    })

    it('Invalid username and valid password', () => {
       
        loginPage.fillUsername('Username');

        loginPage.fillPassword(Cypress.env("PASSWORD"));
    
        loginPage.clickLoginButton();

        cy.contains('Invalid credentials').should('be.visible');
    })

    it('Valid username and invalid password', () => {
        
        loginPage.fillUsername(Cypress.env('USERNAME'));
        
        loginPage.fillPassword('Password');
       
        loginPage.clickLoginButton();

        cy.contains('Invalid credentials').should('be.visible');
    })

    it('Successful login redirects to the home page', () => {
       
        loginPage.fillUsername(Cypress.env('USERNAME'));
        
        loginPage.fillPassword(Cypress.env("PASSWORD"));
        
        loginPage.clickLoginButton();

        cy.contains('Dashboard').should('be.visible');
    })

    after(() => {
        cy.screenshot('Login Funcionality');
    });

})
