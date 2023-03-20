import {GuestPageSelectors} from "../selectors"
import {SignupPage} from "./signup";
import {filter} from "cypress/types/minimatch";

export class GuestLogin extends SignupPage {
    guestSelectors: GuestPageSelectors;

    constructor() {
        super();
        this.guestSelectors = new GuestPageSelectors();
    }

    verifyExploreNowButtonExistOnSignupScreen()
    {
        this.verifyElementExist(this.guestSelectors.exploreAsGuest);
    }

    clickOnExploreAsGuestButton()
    {
        this.verifyTextThenClick(this.guestSelectors.exploreAsGuest, this.constants.exploreAsGuest, 0);
    }

    verifyGuestNameRoleDialogBox()
    {
        this.verifyElementExist(this.guestSelectors.nameRoleDialog);
        this.verifyElementExist(this.guestSelectors.userName);
        this.verifyElementExist(this.guestSelectors.userRoleDropdown);
    }

    verifyNameFieldIsEditable()
    {
        this.typeAndVerify(this.guestSelectors.userName, this.constants.guestUserName);
    }

    verifyRoleDropdownOptions()
    {

        this.tapOnElement(this.guestSelectors.userRoleDropdown)
        this.verifyElementsContainsListOfTexts( this.constants.guestRole,this.guestSelectors.dropdownMenu)
        this.selectRoleFromDropdownToSetupProfile(this.guestSelectors.userRoleDropdown,this.constants.guestRole[0])
    }

    clickSubmitAndVerifyPopupOnWelcomeScreen()
    {

        this.verifyTextThenClick(this.guestSelectors.submitButton, this.constants.submit,2)
        this.setDelay(2000)
        this.verifyElementContainsText(this.guestSelectors.welcomeTextOnPop, this.constants.welcomeTextForGuest)
    }

    clickStartAndVerifyDashboard()
    {
        this.verifyTextThenClick(this.guestSelectors.submitButton, this.constants.start,0)
        this.setDelay(5000)
        this.verifyElementContainsText(this.guestSelectors.dashboardHeading, this.constants.dashboard)
    }

    verifyNavigationMenuOptions()
    {
     this.verifyElementsContainsListOfTexts(this.constants.navigationMenu, this.guestSelectors.navigationMenu)
    }

    clickOnExploreTaleemabadBar()
    {
        this.tapOnElement(this.guestSelectors.exploreTaleemabad)
    }

    clickOnStartButtonAndVerifyLessonPlansScreen()
    {
        this.verifyTextThenClick(this.guestSelectors.submitButton,this.constants.start, 0)
        this.verifyElementContainsText(this.guestSelectors.dashboardHeading, this.constants.lessonPlans)
    }

    verifyHotspotIconAndWarlkthroughCardsOnSelectGrade()
    {
        this.verifyElementExist(this.guestSelectors.hotspotIcon)
        this.verifyElementExist(this.guestSelectors.walkthroughCard)
        this.verifyElementContainsText(this.guestSelectors.walkthroughCardTitle,
            this.constants.lessonPlanWalkthroughCardTitle)
    }

    verifyAndSelectClass()
    {
        this.tapOnElement(this.guestSelectors.hotspotIcon)
        this.verifyElementContainsTextThenClick(this.guestSelectors.grade,this.constants.playGroup,0)
    }

    verifyAndSelectSubject()
    {
        this.setDelay()
        this.verifyElementExistAndIsVisible(this.guestSelectors.subject)
        this.verifyElementContainsTextThenClick(this.guestSelectors.subject,this.constants.english,0)
    }

    verifyAndSelectBook()
    {
        this.tapOnElement(this.guestSelectors.hotspotIcon)
        this.setDelay(3000)
        //this.verifyTextThenClick()
        cy.get(this.guestSelectors.title).eq(2).click()
        //this.verifyElementContainsTextThenClick(this.guestSelectors.title, this.constants.bookName,1)
        this.setDelay(3000)
        this.tapOnElement(this.guestSelectors.hotspotIcon)
        //this.setDelay(6000)
    }

    verifyAndSelectTopic() {
        this.tapOnElement(this.guestSelectors.hotspotIcon)
        this.setDelay()
        this.tapOnElement(this.guestSelectors.hotspotIcon)
    }

    startTeaching()
    {
        this.tapOnElement(this.guestSelectors.hotspotIcon)
        this.tapOnElement(this.guestSelectors.hotspotIcon)
    }

    clickOnPractice()
    {
        this.verifyElementContainsTextThenClickUsingFilter(this.guestSelectors.teacherScreenMenu,
            this.guestSelectors.practiceTextOnTeacherScreenMenu)
    }

    clickOnNextUntilFinishButton()
    {
        cy.get(this.guestSelectors.numberOfPages).invoke('text').then(($text) =>
        {
            $text = $text.trim()
            cy.log($text)
            let num = $text.substring($text.length-2,$text.length)
            cy.log(num)
            for(let i=0;i < Number(num);i++)
            {
                cy.get(this.guestSelectors.nextButtonSelector).last().click();
            }
        })
    }

    tapOnNextAndFinishButton(){
        cy.get(".btns").then($body => {
            if ($body.find(".btns .ng-star-inserted").length > 0){
                cy.get(".btns .ng-star-inserted visible").click({multiple: true});
                this.setDelay()
                this.tapOnNextAndFinishButton();
            }else{
                cy.get(".btns .ng-star-inserted").eq(1).click();
            }
        });
    }

    verifyCongratulationsTextAndClickHomeButton()
    {
        this.verifyElementContainsSpecificText(this.guestSelectors.congratulationText,
            this.constants.congratulationText)
        this.tapOnElement(this.guestSelectors.homeButton)
        this.tapOnElement(this.guestSelectors.continueButton)
    }

    clickOnStartButtonAndVerifyVideoLibraryScreen()
    {
        this.verifyTextThenClick(this.guestSelectors.milestone,this.constants.exploreVideoLibrary,1)
        this.verifyTextThenClick(this.guestSelectors.submitButton,this.constants.explore, 0)
        this.verifyElementContainsText(this.guestSelectors.dashboardHeading, this.constants.videoLibrary)
    }

    verifyVideo()
    {
        cy.get(this.guestSelectors.chaptersOfASubject).eq(0).click()
        this.tapOnElementOutOfMultipleElements(this.guestSelectors.videoTitle,0);
        this.setDelay(10000);
        cy.get('video[class="video"]').type('{esc}');
    }

    enterNumberToUnlockThirdMilestone()
    {
        this.setDelay(5000)
        this.typeAndVerify(this.guestSelectors.phoneNumber, this.constants.numberToUnlockThirdMilestone);
        this.tapOnElement(this.guestSelectors.submitButton);
    }

    clickOnExploreTeacherTraining()
    {
        this.setDelay();
        this.verifyTextThenClick(this.guestSelectors.milestone,this.constants.exploreTeacherTraining,2)
        this.verifyTextThenClick(this.guestSelectors.submitButton,this.constants.explore, 0)
        this.verifyElementContainsText(this.guestSelectors.dashboardHeading, this.constants.teacherTraining)
    }
}
