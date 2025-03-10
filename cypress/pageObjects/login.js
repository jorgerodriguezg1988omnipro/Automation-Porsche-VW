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
const titleMiCuenta = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div.block-title'
const containerGeneralInfo = '.block-content > .block-note'
const titleContainerGeneralInfo = '.block-content > .block-note > p.title'
const descriptionContainerGeneralInfo = '.block-content > .block-note > p.description'
const containerInfoPersonal = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div:nth-child(3) > div.box.box-information > div.box-content'
const titleInfoPersonal = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div:nth-child(3) > div.box.box-information > strong'
const buttonEditar = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div:nth-child(3) > div.box.box-information > div.box-actions > a.action.edit'
const buttonCambiarPassword = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div:nth-child(3) > div.box.box-information > div.box-actions > a.action.change-password'
const containerBoletinInformativo = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div:nth-child(3) > div.box.box-newsletter'
const titleBoletinInformativo = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div:nth-child(3) > div.box.box-newsletter > strong'
const containerMisDirecciones = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-addresses'
const titleMisDirecciones = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-addresses > div.block-title'
const titleDirFacturacion = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-addresses > div.block-content > div.box.box-billing-address > strong'
const titleDirEnvio = '#maincontent > div.columns > div.column.main > div.block.block-dashboard-addresses > div.block-content > div.box.box-shipping-address > strong'
const iconLoggedUser = '#html-body > div.page-wrapper > header > div.header.content > div.customer-welcome.logged > div > div.customer-welcome__icon.logged' // div.customer-welcome.logged
const buttonLogout = 'a[href="https://mcstaging.vw-store.cl/customer/account/logout/"]'



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
        cy.wrap(userData.email).as('userEmail'); //cy.wrap(userData.email + 'x').as('userEmail');     
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

    pageMiCuenta() {
        cy.get(titleMiCuenta).should('be.visible').and('contain', 'Mi cuenta')
        cy.get(containerGeneralInfo).should('be.visible');
        cy.get(titleContainerGeneralInfo).should('be.visible').and('contain', 'encontraras:')
        cy.get(descriptionContainerGeneralInfo).should('be.visible').and('contain', 'En esta sección, podrás tener una visión general de sus pedidos')
        cy.get(containerInfoPersonal).should('be.visible')
        cy.get(titleInfoPersonal).should('be.visible').and('contain', 'Información de contacto')
        cy.get(buttonEditar).should('be.visible').and('contain', 'Editar')
        cy.get(buttonCambiarPassword).should('be.visible').and('contain', 'Cambiar la contraseña') 
        cy.get(containerBoletinInformativo).should('be.visible')
        cy.get(titleBoletinInformativo).should('be.visible').and('contain', 'Boletín informativo')
        cy.get(containerMisDirecciones).should('be.visible')
        cy.get(titleMisDirecciones).should('be.visible').and('contain', 'Mis direcciones')
        cy.get(titleDirFacturacion).should('be.visible').and('contain', 'Dirección de facturación')
        cy.get(titleDirEnvio).should('be.visible').and('contain', 'Dirección de envío') 
    }

    checkUserEmailConsistency() {
        cy.get(containerInfoPersonal).should('be.visible')
        .invoke('text')
        .then((extractedText) => {
          let extractedEmail = '';
          const words = extractedText.split(/\s+/);
    
          for (let i = 0; i < words.length; i++) {
            if (words[i].includes('@')) {
              extractedEmail = words[i];
              break; 
            }
          }
    
          cy.get('@userEmail').then((userEmail) => {
            expect(extractedEmail).to.equal(userEmail.trim()); // Comparar ambos valores
          });
        });
    }

    logout() {
        cy.get(iconLoggedUser).should('be.visible').click().wait(1000)
        cy.get(buttonLogout).realHover().should('be.visible').contains('Cerrar sesión').click( {force: true} )

        
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