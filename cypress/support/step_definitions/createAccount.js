const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import home from '../../pageObjects/home';
const Home = new home();
import login from '../../pageObjects/login';
const Login = new login();

const errorMessageCampoObligatorioMail = '#account-email-error'


before(() => {      
  cy.clearCookies();
  cy.clearLocalStorage();      
  });

  beforeEach(() => { 
    cy.visit('/'); 
    cy.viewport(1920, 1280);  
  });


  // Scenario 1: Verificar que un usuario no registrado pueda crear una cuenta
  Given('que el usuario está en la página de registro', function () {
    Home.gotoCreateAccount();
  });
  
  When('el usuario llena todos los campos requeridos correctamente', function () {
    // implementar
  });
  
  Then('el usuario hace clic en el botón de "Crear cuenta"', function () {
    // implementar
  });
  
  Then('el usuario recibe una confirmación de registro exitoso', function () {
    // implementar
  });
  
  Then('es redirigido al panel de usuario', function () {
    // implementar
  });

/*
// Scenario 2: Verificar que un usuario registrado no pueda crear una cuenta por correo electrónico ya registrado
Given('que el usuario está en la página de registro', function () {
  // implementar
});

When('el usuario intenta registrar una cuenta con un correo electrónico que ya existe en el sistema', function () {
  // implementar
});

Then('el usuario hace clic en el botón de "Crear cuenta"', function () {
  // implementar
});

Then('el usuario recibe un mensaje de error indicando que el correo electrónico ya está registrado', function () {
  // implementar
});



// Scenario 3: Verificar que no se pueda crear cuenta cuando tenga campos obligatorios sin diligenciar
Given('que el usuario está en la página de registro', function () {
  // implementar
});

When('el usuario deja algunos campos obligatorios vacíos', function () {
  // implementar
});

Then('hace clic en el botón de "Crear cuenta"', function () {
  // implementar
});

Then('el usuario recibe mensajes de error indicando que los campos son obligatorios', function () {
  // implementar
});



// Scenario 4: Verificar que no se pueda crear cuenta cuando la contraseña es débil
Given('que el usuario está en la página de registro', function () {
  // implementar
});

When('el usuario introduce una contraseña que no cumple con los requisitos de seguridad', function () {
  // implementar
});

Then('hace clic en el botón de "Crear cuenta"', function () {
  // implementar
});

Then('el usuario recibe un mensaje de error sobre la debilidad de la contraseña', function () {
  // implementar
});



// Scenario 5: Verificar que la contraseña sea visible cuando el usuario lo solicite
Given('que el usuario está en la página de registro', function () {
  // implementar
});

When('el usuario introduce una contraseña que cumple con los requisitos de seguridad', function () {
  // implementar
});

Then('hace clic en el botón de "Mostrar contraseña"', function () {
  // implementar
});

Then('el usuario visualiza la contraseña que ingresó', function () {
  // implementar
});


// Scenario 6: Verificar mensaje de error cuando la contraseña no coincide
Given('que el usuario está en la página de registro', function () {
  // implementar
});

When('el usuario introduce una contraseña que cumple con los requisitos de seguridad', function () {
  // implementar
});

When('en repetir contraseña ingresa una contraseña diferente', function () {
  // implementar
});

Then('hace clic en el botón de "Crear cuenta"', function () {
  // implementar
});

Then('el usuario recibe un mensaje de error informando que la contraseña no es la misma', function () {
  // implementar
});



// Scenario 7: Verificar que se presente mensaje de error cuando la contraseña no cumpla con las diferentes clases de caracteres
Given('que el usuario está en la página de registro', function () {
  // implementar
});

When('el usuario introduce una contraseña que no cumple con los requisitos de seguridad ya que tiene caracteres especiales', function () {
  // implementar
});

Then('hace clic en el botón de "Crear cuenta"', function () {
  // implementar
});

Then('el usuario recibe un mensaje de error informando que la contraseña no cumple con los caracteres establecidos', function () {
  // implementar
});



// Scenario 8: Verificar que permita crear cuenta desde el carrito de compra
Given('que el usuario está en el carrito de compra', function () {
  // implementar
});

When('el usuario hace clic en el botón "Realizar compra"', function () {
  // implementar
});

Then('el usuario hace clic en el botón "Registrarse"', function () {
  // implementar
});

Then('el usuario llena todos los campos requeridos correctamente', function () {
  // implementar
});

Then('hace clic en el botón de "Crear cuenta"', function () {
  // implementar
});

Then('el usuario recibe una confirmación de registro exitoso', function () {
  // implementar
});

Then('es redirigido al checkout', function () {
  // implementar
});
*/


  