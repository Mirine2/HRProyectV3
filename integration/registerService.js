describe('Register service page', ()=>{
    beforeEach(function(){
        cy.visit('/');
        

    })

    it('Shows alert service',function() {
        cy.fixture('registerService').then((registerService)=>{
            cy.get(registerService.RegisterForService).click();
            cy.get(registerService.Next).click();
            cy.xpath(registerService.alert2).should('contain.text','Please select at least one service');
        })
        /*cy.fixture('registerServices').then((registerServices)=>{
        cy.xpath(registerServices.alert).should('contain.text','Please select at least one service');
       })*/
       

    })    
  

    it ('Register service ERISA', function(){

        

        cy.fixture('registerService').then((registerService)=>{
        cy.get(registerService.RegisterForService).click(); 
        cy.xpath(registerService.ERISA).click();
        cy.get(registerService.Next).click();  

        cy.fixture('UsernameSelection').then(Username =>{
            this.Username= Username;
            console.log(this.Username);
            });

        cy.get(registerService.UserName).type(this.UsernameSelection.UserName);

    })

    
    it ('Register Username', function(){
        

    });
   
    
})
})