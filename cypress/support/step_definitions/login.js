const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import home from '../../pageObjects/home';
const Home = new home();
import login from '../../pageObjects/login';
const Login = new login();

const errorMessageCampoObligatorioMail = '#account-email-error'
const errorMessageCampoObligatorioPass = '#account-password-error'
const iconLoggedUser = '#html-body > div.page-wrapper > header > div.header.content > div.customer-welcome.logged > div > div.customer-welcome__icon.logged'

before(() => {      
  cy.clearCookies();
  cy.clearLocalStorage();      
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();  
    cy.visit('/'); 
    cy.viewport(1920, 1280);  
  });

  // Scenario 1: Verificar que no permita iniciar sesión cuando las credenciales son inválidas
  Given('que el usuario está en la página de inicio de sesión', function () {
    Home.gotoMiCuenta();
  });
  
  When('el usuario introduce un correo electrónico válido y una contraseña incorrecta', function () {
    Login.typeValidEmailWrongPassword();
  });
  
  When('el usuario hace clic en el botón de "Iniciar sesión"', function () {
    Login.clickIniciarSesion();
  });
  
  Then('el usuario recibe un mensaje de error indicando que la contraseña es incorrecta', function () {
    Login.messageErrorInicioSesion();
  });

  // Scenario 2: Verificar que no permita iniciar sesión con un correo no registrado
  When('el usuario introduce un correo electrónico no registrado y cualquier contraseña', function () {
    Login.typeInvalidEmailWrongPassword();
  });
  
  Then('el usuario recibe un mensaje de error indicando que la cuenta no existe', function () {
    Login.messageErrorInicioSesion();
  });
 
  // Scenario 3: Verificar que no permita iniciar sesión sin ingresar el correo
  When('el usuario deja el campo de correo electrónico vacío', function () {
    cy.wait(50);
  });
  
  When('llena el campo de contraseña', function () {
    Login.typeValidUser();
    cy.get('#account-email').clear();
  });
  
  Then('el usuario recibe un mensaje de error indicando que el campo de correo electrónico es obligatorio', function () {
    cy.get(errorMessageCampoObligatorioMail).should('be.visible').contains('Campo obligatorio.');  
  });

   // Scenario 4: Verificar que no permita iniciar sesión sin ingresar la contraseña
   When('el usuario introduce un correo electrónico válido', function () {
    Login.typeValidUser();
  });
  
  When('deja el campo de contraseña vacío', function () {
    cy.get('#account-password').clear();
  });
  
  Then('el usuario recibe un mensaje de error indicando que el campo de contraseña es obligatorio', function () {
    cy.get(errorMessageCampoObligatorioPass).should('be.visible').contains('Campo obligatorio.');
  });

  // Scenario 5: Verificar que permita realizar la Recuperación de Contraseña
  When('el usuario hace clic en el enlace de "¿Olvidaste tu contraseña?"', function () {
    Login.olvidePassword();
  });

Then('el usuario es redirigido a la página de recuperación de contraseña', function () {
    Login.pageOlvidePassword();
  });

  // Scenario 6: Verificar que un usuario registrado pueda iniciar sesión
When('el usuario introduce un correo electrónico y contraseña válidos', function () {
  Login.typeValidUser();
});

Then('el usuario es redirigido a Mi cuenta', function () {
  cy.wait(2000)
  Login.pageMiCuenta();
  Login.checkUserEmailConsistency();
  
});

When('el usuario hace clic en el botón de "Cerrar sesión"', function () {
  Login.logout();
  cy.wait(6000);
});

Then('el usuario es redirigido al Home', function () {
  Home.pageHomeGeneral();
});

/*
// Scenario 7: Verificar que permita iniciar sesión desde el carrito de compra
Given('que el usuario está en la página del carrito', function () {
    Home.addVIN()
    Home.buscarProducto()
    Home.addProdFromPDP()
});

When('el usuario hace clic en el botón "Realizar compra"', function () {
    Home.gotoCheckout()
});

When('el usuario introduce un correo electrónico y contraseña válidos desde el Checkout', function () {
  Login.typeValidUserCheckout();
});

When('el usuario hace clic en el boton Iniciar Sesión que aparece en el Checkout', function () {
  Login.loginFromCheckout();
});

Then('el usuario es redirigido al checkout', function () {
    cy.get(iconLoggedUser).should('be.visible').wait(2000)
    Login.logout();
});
*/




    


          

  
  
  
  