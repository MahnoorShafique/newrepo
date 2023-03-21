import {SignupPageSelectors} from "../selectors"
import {BasePage} from "../base_pages/base_page";

export class SignupPage extends BasePage
{
    signupSelector: SignupPageSelectors;
    constructor() {
        super();
        this.signupSelector = new SignupPageSelectors();
    }
    /**
     * visit Taleemabad
     */
    visit_taleemabad()
    {
        cy.visit(this.constants.loginUrl, { timeout: 200000 })
        this.verifyTitle(this.constants.taleemabadLandingPageTitle);
    }

    /**
     * enter user's phone number
     * @param phoneNumber - user's phone number
     */
    enterPhoneNumber(phoneNumber: string)
    {
        this.typeAndVerify(this.signupSelector.phoneNumber, phoneNumber)
    }

    /**
     * enter user's password
     * @param password - user's phone number
     */
    enterPassword(password: string)
    {
        this.typeAndVerify(this.signupSelector.passwordField, password)
    }

    /**
     * click on Sign in button
     */
    clickSignInButton()
    {
        this.tapOnElement(this.signupSelector.signInButton)
    }

    /**
     * click on Sign out button
     */
    clickSignOutButton()
    {
        this.tapOnElement(this.signupSelector.signOutButton)
    }

    /**
     * verify text on sign in screen
     */
    verifySignScreenText()
    {
        this.verifyTextMatched(this.signupSelector.signupScreenText, this.constants.signupScreenText)
    }

    /**
     * verify that country picker exists
     */
    verifyCountryflag()
    {
        this.verifyElementExist(this.signupSelector.countryPicker)
    }

    /**
     * verify country picker is by default Pakistan
     */
    verifyCountryPickerIsPakistan()
    {
        this.verifyElementExist(this.signupSelector.pakistanSelectedOnCountryPicker)
        this.verifyElementContainsText(this.signupSelector.countryCode, this.constants.pakistanCountryCode)
    }

    /**
     * verify country picker is disabled
     */
    verifyCountryPickerIsDisabled()
    {
        //Please implement
    }

    /**
     * verify begin button - text
     */
    verifyBeginText()
    {
        this.verifyElementContainsSpecificText(this.signupSelector.signInButton, this.constants.begin)
    }

    /**
     * verify already signup user get sign in option upon entering phone number
     * @param phoneNumber - user's phone number
     */
    verifyAlreadySignupUserGetSignInOption(phoneNumber: string)
    {

        this.enterPhoneNumber(phoneNumber)
        this.clickSignInButton()
        this.verifyElementContainsText(this.signupSelector.signInButton, this.constants.signInText)

    }
    /**
     * Type and verify phone number
     * @param userName - user's name
     */
    enterUserName(userName : string)
    {
        this.typeAndVerify(this.signupSelector.userName,userName)
    }

    /**
     * select user's role from dropdown menu
     * @param element - element
     * @param role - user's role
     */
    selectRoleFromDropdownToSetupProfile(element : any,role : string)
    {
        this.selectFromDropdown(element,role)
    }

    clickOnContinueUsingForFree() {
        this.setDelay(3000)

        cy.get("body").then($body => {
            if ($body.find(this.signupSelector.trialExpiryScreen).length > 0) {
                cy.get(this.signupSelector.trialExpiryScreen).then($header => {
                    if ($header.is(':visible')){
                        this.verifyElementContainsTextThenClickUsingFilter(this.signupSelector.conitinueUsingForFree,
                            this.signupSelector.conitinueUsingForFreetext)
                    }
                });
            } else {
                assert.isOk('everything','Free Trial Doesnot Exist');
            }
        });
        // if (this.verifyElementIsVisible(this.signupSelector.trialExpiryScreen))
        // {
        //     this.verifyElementContainsTextThenClick(this.signupSelector.conitinueUsingForFree,
        //     this.constants.continueUsingForFree,5)
        // }
    }

    /**
     * select user's role from dropdown menu
     * @param userNumber - user's phone number
     * @param userName - user's name
     * @param role - user's role
     */
    setupUserProfile(userNumber: string, userName: string, role : string)
    {

        this.setDelay(1000)
        this.tapOnElement(this.signupSelector.taleemabadForSchoolText)
        this.enterPhoneNumber(userNumber)
        this.clickSignInButton()
        this.enterUserName(userName);
        this.selectRoleFromDropdownToSetupProfile(this.signupSelector.userRoleDropdown,role)
        this.tapOnElement(this.signupSelector.nextButton)
        this.tapOnElement(this.signupSelector.createSchool)

    }

    /**
     * verify text on password screen
     */
    verifyPasswordScreenText()
    {
        this.verifyTextMatched(this.signupSelector.passwordScreenText, this.constants.passwordScreenText)
    }

    /**
     * set user password
     * @param passwordtype - password type
     * @param password - password
     */
    setPassword(passwordtype: any, password: string)
    {
        if (passwordtype=='NewPassword') {
            cy.get(this.signupSelector.setPassword)
                .eq(0)
                .click()
                .type(password);
        }
        else
        {
            cy.get(this.signupSelector.setPassword)
                .eq(1)
                .click()
                .type(password);
        }
    }

    /**
     * verify show password checkbox functionality
     */
    verifyShowPasswordCheckbox()
    {
        this.verifyElementExist(this.signupSelector.passwordBeforeShowPasswordCheckbox)
        cy.get(this.signupSelector.showPasswordCheckbox).check({force: true})
        this.verifyElementExist(this.signupSelector.passwordAfterShowPasswordCheckbox)
    }

    /**
     * verify and click on confirm button
     */
    verifyAndClickConfirmButton()
    {
        this.verifyTextThenClick(
            this.signupSelector.confirmPasswordButton,
            this.constants.confirmButtonText,
            0
        )
    }

    /**
     * verify text on phone number verification screen
     */
    verifyTextOnPhoneNumberVerificationScreen()
    {
        this.verifyTextMatched(this.signupSelector.textOnPhoneNumberVerificationScreen,
            this.constants.textOnPhoneNumberVerificationScreen)
        this.tapOnElement(this.signupSelector.nextButtonOnPhoneScreen)
        cy.log("done")
    }

    /**
     * verify OTP
     */
    checkAndVerifyOTP()
    {
        this.setDelay()
        this.typeAndVerify(this.signupSelector.otpTextField, this.constants.otpText)
    }

    /**
     * click on 'Verify' button
     */
    clickVerifyButton()
    {
        this.verifyTextThenClick(
            this.signupSelector.nextButtonOnPhoneScreen,
            this.constants.verifyButtonText,
            0
        )
    }

    /**
     * verify welcome text on dashboard
     */
    verifyWelcomeTextOnDashboard()
    {
        this.setDelay()
        this.verifyElementContainsText(this.signupSelector.welcomeText, this.constants.welcomeText)
        cy.request(this.constants.requestType[2],
            this.constants.apiBaseUrl.concat(this.constants.deleteApi),
            {
                "password":this.constants.userPassword,
                "phone_number":this.constants.newNumberForAPI,
                "secret_password":this.constants.apiSecretKey
            }
        )
    }

    performLogin(phoneNumber: any, password: any)
    {
        cy.intercept({
            method: 'POST',
            url: '**/tokens',
            //middleware: true,
        }).as('successfulAction')

        this.enterPhoneNumber(phoneNumber);
        this.clickSignInButton();
        this.enterPassword(password);
        this.clickSignInButton();
        this.verifyTitle(this.constants.dashboardTitle);

        cy.wait('@successfulAction')
            .then((resp) => {
                cy.log(String(resp.response?.statusCode))
                cy.log(String(resp.response?.body.access))
                cy.log(String(resp.request));
                let accessToken: string = String(resp.response?.body.access);
                cy.task('setGlobal', {'accessToken': accessToken})
            })
    }

}
