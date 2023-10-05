Cypress.Commands.add('login',(user, password)=>{
    cy.fixture('login2').then((login2)=>{
        cy.get(login2.SignIn).click();
        cy.get(login2.Username).type(user);
        cy.get(login2.Password).type(password);
        cy.get(login2.SignInbutton).click();
      
    })
})