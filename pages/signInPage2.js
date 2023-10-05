//funciones 

class signInPage2{

elements={
    SignIn: ()=> cy.get('.menu-link'),
    usernameInput:()=> cy.get('#txt_login'),
    passwordInput: ()=> cy.get('#txt_password'),
    signInbutton: () => cy.get(':nth-child(6) > .btn'), 
    gotoHome: ()=> cy.get(':nth-child(1) > :nth-child(5) > .btn'),
    alert: ()=> cy.get('.toastify'),
    forgotPassword:()=> cy.get('#login > .form-horizontal > .text-center > a'),
    userName2: ()=> cy.get('#username'),
    resetPassword:()=> cy.get(':nth-child(3) > .btn'),
    alert2: ()=> cy.get('.toastify')
}
clickSignIn(){
this.elements.SignIn().click();

}

typeUsername(username){
this.elements.usernameInput().type(username)

}
typePassword(password){
    this.elements.passwordInput().type(password)
}

clickLogin(){
    this.elements.signInbutton().click();
}

clickGoto(){
    this.elements.gotoHome().click();
}

clickForgot(){
    this.elements.forgotPassword().click();
}
typeUsername2(username2){
    this.elements.userName2().type(username2)
}

clickReset()
{
    this.elements.resetPassword().click();
}

}
module.exports= new signInPage2();


    
   