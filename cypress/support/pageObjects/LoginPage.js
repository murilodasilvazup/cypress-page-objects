class LoginPage {

    emailInput = '[name="username"]';

    passwordInput = '[name="password"]';

    loginButton = '[type="submit"]';

    visit() {
        cy.visit("/");
    }

    fillUsername(username) {
        cy.get('[name="username"]').type(username);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password, {log:false});
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }
}

export default LoginPage;
