/// <reference types="Cypress" />

import { SignupPage } from "../../pages/authentication/signup";
import { GuestLogin } from "../../pages/authentication/guest_login";
import {Constants} from "../../common/constants";

var test: string | {}

// beforeEach(function() {
//     if(this.currentTest?.title === 'Guest User Workflow.') return
//     cy.task('getGlobal').then((userId) => {
//         localStorage.setItem("guestUser", userId as string)});
// });

describe('[ENG-624]Guest Login', function()
{

    let signupPage = new SignupPage();
    let guestLoginPage = new GuestLogin();
    let constants = new Constants()
    let park: string | null
    let json_data: any


    it('Guest User Workflow.',function() {

        guestLoginPage.visit_taleemabad()
        guestLoginPage.verifyExploreNowButtonExistOnSignupScreen()
        guestLoginPage.clickOnExploreAsGuestButton();
        guestLoginPage.verifyGuestNameRoleDialogBox();
        guestLoginPage.verifyNameFieldIsEditable();
        guestLoginPage.verifyRoleDropdownOptions();
        guestLoginPage.clickSubmitAndVerifyPopupOnWelcomeScreen();
        guestLoginPage.clickStartAndVerifyDashboard();
        guestLoginPage.verifyNavigationMenuOptions();
        guestLoginPage.clickOnExploreTaleemabadBar();
        guestLoginPage.clickOnStartButtonAndVerifyLessonPlansScreen();
        guestLoginPage.verifyHotspotIconAndWarlkthroughCardsOnSelectGrade();
        guestLoginPage.verifyAndSelectClass();
        guestLoginPage.verifyAndSelectSubject();
        guestLoginPage.verifyAndSelectBook();
        guestLoginPage.verifyAndSelectTopic();
        guestLoginPage.startTeaching();
        guestLoginPage.clickOnPractice();
        guestLoginPage.clickOnNextUntilFinishButton();
        guestLoginPage.verifyCongratulationsTextAndClickHomeButton();
        guestLoginPage.clickOnStartButtonAndVerifyVideoLibraryScreen();
        guestLoginPage.verifyHotspotIconAndWarlkthroughCardsOnSelectGrade();
        guestLoginPage.verifyAndSelectClass();
        guestLoginPage.verifyAndSelectSubject();
        guestLoginPage.verifyAndSelectBook();
        guestLoginPage.verifyVideo();
        guestLoginPage.enterNumberToUnlockThirdMilestone();
        guestLoginPage.clickOnExploreTeacherTraining();

    })

})
