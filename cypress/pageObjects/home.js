const header = '#html-body > div.page-wrapper > header > div.header.content'; 
const containerIconInicioSesion = '#html-body > div.page-wrapper > header > div.header.content > div.customer-welcome.no-logged'; 
const iconInicioSesion = '#html-body > div.page-wrapper > header > div.header.content > div.customer-welcome.no-logged > div > div.customer-welcome__icon.no-logged'; 
const modalBienvenido = '#ui-id-2';
const titleModalBienvenido = '#ui-id-2 > h5';
const buttonModalInicioSesion = '#ui-id-2 .actions .secondary > a.sign-in'
const buttonVIN = '#finder-autoparts-form > div.data.items.finder-autoparts__container.mage-tabs-disabled > div:nth-child(3) > a'
const inputVIN = '#tab-vin > div > input[type=text]'
const buttonBusquedaVIN = '#search_vin'
const modalVehiculoAntiguo = '#old-vehicle-alert > div > div.old-vehicle-alert__content'
const inputBuscarProducto = '#html-body > div.page-wrapper > header > div.header.content > section > div.amsearch-form-block > section.amsearch-input-wrapper.-dynamic-width > input'
const firstProd = 'strong.product-item-name > a.product-item-link'
const buttonAddProdPDP = '#product-addtocart-button-sticky'
const modalExplorarMas = '#html-body > div.modals-wrapper > aside.modal-popup.modal-go-to-dealer-store._show > div.modal-inner-wrap > header'
const buttonCarritoModal = '#html-body > div.modals-wrapper > aside.modal-popup.modal-go-to-dealer-store._show > div.modal-inner-wrap > footer > button'
const buttonGotoCheckout = '#html-body > div.page-wrapper > section > div > div.summary-bar__checkout-button > button'

















class home {
    
    pageHomeGeneral() {
        cy.get(header).should('be.visible')
        cy.get(containerIconInicioSesion).should('be.visible')
        cy.get(iconInicioSesion).realHover().should('be.visible').contains('Iniciar sesión')
    }
    
    gotoMiCuenta() {
        cy.get(containerIconInicioSesion).should('be.visible').wait(1500)
        cy.get(iconInicioSesion).realHover().should('be.visible').contains('Iniciar sesión').click( {force: true} ).wait(3000)
        cy.get(modalBienvenido).should('be.visible').wait(1500)
        cy.get(titleModalBienvenido).should('be.visible').contains('Bienvenido a').wait(1500)
        cy.get(buttonModalInicioSesion).should('be.visible').contains('Inicia sesión o regístrate').realHover().wait(500).click( {force: true} )        
    }

    addVIN() {
        cy.get(buttonVIN).realHover().should('be.visible').click().wait(500)
        cy.get(inputVIN).should('be.visible').type('1V2BR2CA9JC501532').wait(500)
        cy.get(buttonBusquedaVIN).realHover().should('be.visible').click().wait(500)
        cy.get(modalVehiculoAntiguo).should('be.visible').contains('Vehículo antiguo activado')
    }

    buscarProducto() {
        cy.get(inputBuscarProducto).should('be.visible').type('bomba de agua').type('{enter}').wait(2000)
        cy.get(firstProd).first().realHover().should('be.visible').click().wait(500)
    }

    addProdFromPDP() {
       cy.get(buttonAddProdPDP).should('be.visible').click().wait(500)
       cy.get(modalExplorarMas).should('be.visible').contains('Explorar más')
       cy.get(buttonCarritoModal).realHover().should('be.visible').click().wait(500)
    }

    gotoCheckout() {
       cy.get(buttonGotoCheckout).realHover().should('be.visible').click()
     }

    
}
  
  export default home;
