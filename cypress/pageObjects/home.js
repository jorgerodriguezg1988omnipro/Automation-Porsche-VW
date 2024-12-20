const logoSelector = '';


class home {
    
    logo() {
        cy.get(logoSelector).should('be.visible')
    }

    
}
  
  export default home;
