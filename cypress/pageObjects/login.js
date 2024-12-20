const iconInicioSesion = '';


class login {
    
    gotoMiCuenta() {
        cy.get(iconInicioSesion).should('be.visible').click()
        cy.get(titleInicioSesion).should('be.visible')
        .contains('Inicia sesión en tu cuenta')
    }

    
}
  
  export default login;