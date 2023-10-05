Cypress.Commands.add('RegisterService',()=>{
    cy.fixture('RegisterService').then((registerService)=>{
        cy.get(registerService.RegisterForService).click();
        cy.xpath(registerService.ERISA).check();
        cy.get(registerService.HR).check();
        cy.get(registerService.Next).click();
      
    })
})