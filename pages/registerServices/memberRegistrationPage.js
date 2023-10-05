class memberRegistrationPage{

elements = {
    registerForService: ()=> cy.get(':nth-child(2) > p > a'),
    nextButton:()=> cy.get('#next'),
    alert5:()=> cy.get('.newheader_title text_center'),
    erisaService:()=> cy.xpath('/html[1]/body[1]/div[4]/div[1]/div[1]/form[1]/div[1]/div[2]/div[4]/div[1]/div[1]/label[1]/strong[1]'),
    hrService:()=> cy.get('error'),
    userNameSelection:()=> cy.get('#login_info > :nth-child(1)')



}

clickRegisterForService(){
    this.elements.registerForService().click();
}
clickNextButton(){
    this.elements.nextButton().click();
}
clickErisaService(){
    this.elements.erisaService().click();
}
    
}

module.exports= new memberRegistrationPage();



