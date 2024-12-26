const credentials = require('../fixtures/CuentasDePrueba.json');



const inputEmail = '#account-email'
const inputPassword = '#account-password'
const buttonIniciarSesion = '#send2'









class login {
    
    

    typeValidEmailWrongPassword() {
        cy.get(inputEmail).should('be.visible')
        cy.get(inputPassword).should('be.visible')
        const userData = credentials.validEmailWrongPassword;
        this.fillCredentials(inputEmail, inputPassword, userData.email, userData.password);        
    }

    typeInvalidEmailWrongPassword() {
        cy.get(inputEmail).should('be.visible')
        cy.get(inputPassword).should('be.visible')
        const userData = credentials.invalidUser;
        this.fillCredentials(inputEmail, inputPassword, userData.email, userData.password);        
    }

    typeValidUser() {
        cy.get(inputEmail).should('be.visible')
        cy.get(inputPassword).should('be.visible')
        const userData = credentials.validUser;
        this.fillCredentials(inputEmail, inputPassword, userData.email, userData.password);        
    }

    clickIniciarSesion() {
        cy.get(buttonIniciarSesion).realHover().should('be.visible').contains('Iniciar sesión').click()                
    }

    messageErrorInicioSesion() {
        cy.get('.message-error.error.message').should('be.visible').contains('El inicio de sesión de la cuenta fue incorrecto o su cuenta está temporalmente deshabilitada. Espere y vuelva a intentarlo más tarde.')        
    }
















    fillCredentials(emailSelector, passwordSelector, email, password) {
        cy.get(emailSelector)
          .should('be.visible')
          .clear()
          .type(email);
    
        cy.get(passwordSelector)
          .should('be.visible')
          .clear()
          .type(password);
    }

    
}
  
  export default login;