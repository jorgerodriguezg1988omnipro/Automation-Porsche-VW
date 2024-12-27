const credentials = require('../fixtures/CuentasDePrueba.json');



const inputEmail = '#account-email'
const inputPassword = '#account-password'
const buttonIniciarSesion = '#send2'
const linkOlvidePassword = '#login-form-account > fieldset > div.actions-toolbar > div.secondary > a'
const titleOlvidePassword = '#maincontent > div.columns > div > div.forgot-password-container > div.block.block-forgot-password > div.block-title'
const textOlvidePassword = '#form-validate > fieldset > div.field.note'
const labelCorreoElectronico = '#form-validate > fieldset > div.field.email.required > label'
const inputCorreoElectronico = '#email_address'
const buttonRestablecerPassword = '#send2'
const inputCorreoElectronicoCheckout = '#customer-email'
const inputpasswordCheckout = '#customer-password'
const buttonIniciarSesionCheckout = '#customer-email-fieldset > fieldset > div.actions-toolbar > div.primary > button'





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

    olvidePassword() {
        cy.get(linkOlvidePassword).should('be.visible').contains('He olvidado mi contraseña').click()        
    }

    pageOlvidePassword() {
        cy.get(titleOlvidePassword).should('be.visible').contains('He olvidado mi contraseña')
        cy.get(textOlvidePassword).should('be.visible').contains('Por favor introduzca su dirección de correo electrónico para recibir un enlace de restablecimiento de contraseña.')   
        cy.get(labelCorreoElectronico).should('be.visible').contains('Correo electrónico')
        cy.get(inputCorreoElectronico).should('be.visible')  
        cy.get(buttonRestablecerPassword).should('be.visible').contains('Restablecer mi contraseña')
    }

    typeValidUserCheckout() {
        cy.get(inputCorreoElectronicoCheckout).should('be.visible').type('jorge.rodriguez.g.ap+03@gmail.com').wait(2500)
        cy.get(inputpasswordCheckout).should('be.visible').type('Omni.pro')
    }

    loginFromCheckout() {
        cy.get(buttonIniciarSesionCheckout).realHover().should('be.visible').contains('Iniciar sesión').click()
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