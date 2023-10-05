class companyInformationPage{

    elements = {
        companyName: ()=> cy.get('#company_name'),
        contactName:()=> cy.get('#contact_name'),
        contactEmail:()=> cy.get('#txt_email'),
        Ein:()=> cy.get('#contact_ein'),
        totalEmployees:()=> cy.get('#total_employees'),
        phone: ()=> cy.get('#txt_phone'),
        city: ()=> cy.get('#city'),
        state: ()=> cy.get('#state'),
        zipCode: ()=> cy.get('#zipcode'),
        nextButton:()=> cy.get('#next'),


    }
    typeCompanyName(companyName){
        this.elements.companyName().type(companyName)
     }

    typeBusinessType(businessType){
        this.elements.businessType().type(businessType)
     }

    typeContactName(contactName){
        this.elements.contactName().type(contactName)
     }

    typeContactEmail(contactEmail){
        this.elements.contactEmail().type(contactEmail)
     }

     typeEin(Ein){
        this.elements.Ein().type(Ein)
     }

     typeTotalEmployees(totalEmployees){
        this.elements.totalEmployees().type(totalEmployees)
     }


     typePhone(phone){
        this.elements.phone().type(phone)
     }

     typeCity(city){
        this.elements.city().type(city)
     }

     selectState(state){
        this.elements.state().select(state)
     }

     typeZipCode(zipCode){
        this.elements.zipCode().type(zipCode)
     }

    
    clickNextButton(){
        this.elements.nextButton().click();
    }
    
        
    }
    
    module.exports= new companyInformationPage();