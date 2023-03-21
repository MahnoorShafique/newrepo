import { SignupPage } from "../../pages/authentication/signup";
import {Constants} from "../../common/constants";

describe('[ENG-24] Signup Flow', function()
{
    let signupPage = new SignupPage();
    let constants = new Constants();

    it('Verify Signup Workflow',function() {

        signupPage.visit_taleemabad();
        cy.log("Verified that Access the URL (url), website should be displayed on the browser. And signup " +
            "page should be visible to user.");
        signupPage.verifySignScreenText();
        cy.log("Verified that system Show a message ‘Enter your phone number to begin using Taleemabad");
        signupPage.enterPhoneNumber(constants.adminNumber);
        cy.log("Verified that user enter a phone number in text field.");
        signupPage.verifyCountryflag();
        cy.log("Verified that country flag exists");
        // signupPage.verifyCountryPickerIsPakistan();
        // cy.log("Verified that country picker is by default Pakistan");
        signupPage.verifyCountryPickerIsDisabled();
        cy.log("Verified that user should not be able to edit country code.");
        signupPage.verifyBeginText();
        cy.log("Checked that button 'Begin' is functional and as per design.");
        signupPage.verifyAlreadySignupUserGetSignInOption(constants.adminNumber);
        cy.log("Verified that registered user have an option of sign In.");
        signupPage.enterPassword(constants.adminPassword);
        signupPage.clickSignInButton();
        cy.log("Verified that registered user should be able to login by clicking Sign In link");
        signupPage.clickOnContinueUsingForFree();
        signupPage.clickSignOutButton();
        cy.log('Sign Out from Already Sign up User');
        signupPage.setupUserProfile(constants.newNumber,constants.userName, constants.role[0]);
        cy.log("Verified that user profile Setup successfully");
        signupPage.verifyPasswordScreenText();
        signupPage.setPassword(constants.newPassword, constants.userPassword);
        signupPage.setPassword(constants.confirmPassword, constants.userPassword);
        signupPage.verifyShowPasswordCheckbox();
        signupPage.verifyAndClickConfirmButton();
        cy.log("Verified the confirm password and show password functionality");
        signupPage.verifyTextOnPhoneNumberVerificationScreen();
        signupPage.checkAndVerifyOTP();
        signupPage.clickVerifyButton();
        cy.log("Verified the OPT functionality");
        signupPage.verifyWelcomeTextOnDashboard();
        cy.log("Verified that Welcome Text appear on the dashboard");
    })
})
