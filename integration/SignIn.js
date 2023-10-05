
//Load a Login es el que esta funcionando aunq con algunos errores
describe('SignIn',function(){
    beforeEach(function(){
        cy.visit('/');
        

        cy.fixture('CredentialLogin')
        .then(credentials =>{
            this.credentials= credentials;
            console.log(this.credentials);
        });

        /*cy.fixture('fieldLogin')
        .then(fieldLogin=>{
             this.fieldLogin=fieldLogin;
             console.log(this.fieldLogin);
         });*/
       
   
    });

it('UserName Correct',function(){

    /*cy.get(fieldLogin.SignIn).click();
    cy.get(fieldLogin.UserName).type(this.credentials.UserName);
    cy.get(fieldLogin.Password).type(this.credentials.Password);
    cy.get(fieldLogin.SignInbutton).click();
    cy.get(':nth-child(1) > :nth-child(5) > .btn').click();*/



    cy.get('.menu-link').click();
    cy.get('#txt_login').type(this.credentials.UserName);
    cy.get('#txt_password').type(this.credentials.Password);
    cy.get(':nth-child(6) > .btn').click();
    cy.get(':nth-child(1) > :nth-child(5) > .btn').click();
    cy.get('#header-content > .header-logo > .brand').click();
    cy.get('.menu-trigger > .fa').click();
    cy.get('h1').should('contain.text','COMPLIANCE & HR CENTER');

    //cy.get('.newheader_title text_center').should('contain.text','Dashboard');

})

it('UserName Incorrect',function(){

    cy.get('.menu-link').click();
    cy.get('#txt_login').type(this.credentials.UserName1);
    cy.get('#txt_password').type(this.credentials.Password);
    cy.get(':nth-child(6) > .btn').click();
    cy.get('.toastify').should('contain.text','The username or password you entered is incorrect');


})
it ('Forgot Password', function(){
    cy.get('.menu-link').click();
    cy.get('#login > .form-horizontal > .text-center > a').click();
    cy.get('#username').type('mirine01@grr.la');
    cy.get(':nth-child(3) > .btn').click();
    cy.get('.toastify').should('contain.text','Your password has been reset, please check your email');
   
    //cy.get('.toastify toast-info toastify-center toastify-top').should('contain.text','Your password has been reset, please check your email');
})

})