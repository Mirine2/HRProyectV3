

class userNameSelectionPage{

elements = {
    userName: ()=> cy.get('#txt_user_name'),
    password: ()=> cy.get('#txt_password'),
    retypePassword: ()=> cy.get('#txt_retype_password'),
    partnerKey: ()=> cy.get('#txt_partner_key'),
    proCodigo: ()=> cy.get ('#discount_code'),
    next: ()=> cy.get('#next'),
    ErrorUserName: ()=> cy.get('#txt_user_name-error'), 
    ErrorPassword: ()=> cy.get('#txt_password-error'),

}
 typeUserName(userName){
    this.elements.userName().type(userName, {timeout:6000})
 }

 typePassword(password){
    this.elements.password().type(password,{timeout:6000})
 }

 typeRetypePassword(retypePassword){
    this.elements.retypePassword().type(retypePassword, {timeout:6000})
 }

 typePartnerKey(partnerKey){
    this.elements.partnerKey().type(partnerKey)
 }

 typeProCodigo(proCodigo){
    this.elements.proCodigo().type(proCodigo)
 }

 clickNext(){
    this.elements.next().click();
 }

}

module.exports= new userNameSelectionPage();





