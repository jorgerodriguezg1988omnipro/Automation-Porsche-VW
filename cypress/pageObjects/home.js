const containerIconInicioSesion = '#html-body > div.page-wrapper > header > div.header.content > div.customer-welcome.no-logged'; 
const iconInicioSesion = '#html-body > div.page-wrapper > header > div.header.content > div.customer-welcome.no-logged > div > div.customer-welcome__icon.no-logged'; 
const modalBienvenido = '#ui-id-2';
const titleModalBienvenido = '#ui-id-2 > h5';
const buttonModalInicioSesion = '#ui-id-2 .actions .secondary > a.sign-in'


class home {
    
    gotoMiCuenta() {
        cy.get(containerIconInicioSesion).should('be.visible').wait(1000)
        cy.get(iconInicioSesion).realHover().should('be.visible').contains('Iniciar sesión').click( {force: true} ).wait(1000)
        cy.get(modalBienvenido).should('be.visible').wait(1000)
        cy.get(titleModalBienvenido).should('be.visible').contains('Bienvenido a').wait(1000)
        cy.get(buttonModalInicioSesion).should('be.visible').contains('Inicia sesión o regístrate').realHover().wait(500).click( {force: true} )        
    }

    
}
  
  export default home;
