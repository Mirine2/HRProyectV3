
import companyInformationPage from '../pages/registerServices/companyInformationPage'
import memberRegistrationPage from '../pages/registerServices/memberRegistrationPage'
import userNameSelectionPage from '../pages/registerServices/userNameSelectionPage'
// Registro de servicios
describe('RegisterService page',()=>{
    beforeEach(()=>{
        cy.visit('/')

    })

    it('Shows alert service',() =>{
        memberRegistrationPage.clickRegisterForService();
        memberRegistrationPage.clickNextButton();
        //memberRegistrationPage.alert5().should('contain.text','Please select at least one service');
    
    })
/*
    it('Select the services',() =>{
        memberRegistrationPage.clickRegisterForService();
        memberRegistrationPage.clickErisaService();
        memberRegistrationPage.clickNextButton();
       // memberRegistrationPage.userNameSelection().should('contain.text','Username Selection')
        userNameSelectionPage.typeUserName('APartnerMiri26');
        userNameSelectionPage.typePassword('Password1!');
        userNameSelectionPage.typeRetypePassword('Password1!');
        userNameSelectionPage.typePartnerKey('2228');
        userNameSelectionPage.clickNext();
        companyInformationPage.typeCompanyName('Miritest001');
        companyInformationPage.typeContactName('Miri00');
        companyInformationPage.typeContactEmail('miriammhq01@gmail.com');
        companyInformationPage.typeEin('34-3455645');
        companyInformationPage.typeTotalEmployees('10');
        companyInformationPage.typePhone('(591) 703-9731');
        companyInformationPage.typeCity('Colorado');
        //companyInformationPage.selectState('Iowa');
        companyInformationPage.typeZipCode('12345')
        companyInformationPage.clickNextButton();

    
    })*/

    it('Complete data in the Username Selection',() =>{
        memberRegistrationPage.clickRegisterForService();
        memberRegistrationPage.clickErisaService();
        memberRegistrationPage.clickNextButton();
        userNameSelectionPage.clickNext();
        //userNameSelectionPage.userNameError().should('have.text','Please enter a user name.');


    })
/*

describe('Register service page', function(){
    beforeEach(function(){
        cy.visit('/');
    

        cy.fixture('registerService').then (registerService=>{
            this.registerService = registerService;
            console.log(this.registerService);
        });

        cy.fixture('registerServices').then(registerServices=>{
            this.registerServices = registerServices
        });
    })
    it('Shows alert when not register the service',function(){
            cy.get(registerService.RegisterForService).click();
            cy.get(registerService.Next).click();
            //cy.xpath(registerService.alert).should('contain','Please select your desired service(s)');
    
        
            cy.xpath(registerServices.alert).should('contain.text','Please select your desired service(s)');
        })
       

    })    
/*

    it ('Register service', ()=>{
 
        cy.fixture('registerService').then((registerService)=>{
        cy.get(registerService.RegisterForService).click(); 
        cy.xpath(registerService.ERISA).check();   

    })
   */
    })

