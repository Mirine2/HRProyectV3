//Login with Pages objects
import signInPage2 from '../pages/signInPage2'
import indexPage from '../pages/indexPage'


describe('Login page',()=>{
    beforeEach(()=>{
        cy.visit('/')

    });
    
it ('Login with correct email', ()=>{
    signInPage2.clickSignIn();
    signInPage2.typeUsername('APartnerMiri2')
    signInPage2.typePassword('Password1!')
    signInPage2.clickLogin();
    signInPage2.clickGoto();

   indexPage.elements.titleSpan().should ('contain.text','COMPLIANCE & HR CENTER'); 

    })
    it ('Login with incorrect email', ()=>{
        signInPage2.clickSignIn();
        signInPage2.typeUsername('APartnerMi')
        signInPage2.typePassword('Password1!')
        signInPage2.clickLogin();
        signInPage2.elements.alert().should('contain.text','The username or password you entered is incorrect')
    
    
        })

        it ('Login with Forgot password', ()=>{
            signInPage2.clickSignIn();
            signInPage2.clickForgot();
            signInPage2.typeUsername2('mirine01@grr.la');
            signInPage2.clickReset();
            signInPage2.elements.alert2().should('contain.text','Your password has been reset, please check your email')
        
        
            })


});






