import {Constants} from "../../common/constants";
import {MarkAsComplete} from "../../pages/lesson_plan/mark_as_complete";

describe('Mark lessons complete', function() {

    let constants = new Constants();
    let lessonPlan = new MarkAsComplete();

    it('Mark lessons complete', function () {

        lessonPlan.visit_taleemabad();
        lessonPlan.performLogin(constants.teacherPhoneNumber, constants.teacherPassword);
        cy.log("User logged in successfully")
        lessonPlan.clickOnContinueUsingForFree();
        lessonPlan.clickOnLessonPlan();
        cy.log("User clicked on Lesson Plan from sidebar")
        lessonPlan.verifySectionsInLessonPlan();
        cy.log("Sections verified My Classes - Explore")
        lessonPlan.clickOnMyClassesSection()
        cy.log("User clicked on My Classes section")
        lessonPlan.verifyGradesAndSubjectsAssignedToTeacher();
        lessonPlan.verifyChapterOfASubject();
        cy.log("Chapters for a subject verified")
        lessonPlan.verifyLessonInChaptersClassesSection()
        cy.log("Verified each chapter has lessons")
        lessonPlan.verifyLessonStatusInProgressAfterTapOnStartTeaching()
        cy.log("Lesson status updated to In-Progress after tap on start teaching")
        lessonPlan.clickOpenToPreviewLP();
        lessonPlan.clickOnStartTeaching();
        lessonPlan.validateAttributesOfStartTeachingScreen();
        cy.log("Page after start teaching verified")
        lessonPlan.validateAttributesOfClassroomViewInsideLpUponClickingStart();
        cy.log("class room attributes verified Opening - Explanation - Practice")
        lessonPlan.verifyTickerOnFirstStatementOfOpeningSection();
        cy.log("Ticker verified")
        lessonPlan.verifyOpeningStatementsAndButtonsOnClassroomView();
        cy.log("Opening Statement and buttons on classroom view verified")
        lessonPlan.verifyVideoFunctionality();
        cy.log("Video functionality verified")
        lessonPlan.verifyBackButtonDisable();
        cy.log("verified back button disabled")
        lessonPlan.verifyNextButtonAndAllSectionsFunctionality();
        cy.log("Next button verified and functionality")
        lessonPlan.tapOnFinishButtonAtLessonComplete()
        cy.log("User clicked on finish button at the end of lesson plan finished")
        lessonPlan.verifyMarkAsCompletePageAfterLessonFinish()
        cy.log("Finish page verified after click on finish button of lesson plan end.")
        lessonPlan.tapOnMarkAsCompleteButtonAtFinishPage()
        cy.log("User taped on mark as complete button on lesson finished page")
        lessonPlan.verifyStarsModal()
        cy.log("stars modal exist in dom and is visible")
        lessonPlan.verifyOnClickEachStarStatus()
        cy.log("Status verified for each star rating on click the star")
        lessonPlan.submitFeedback()
        cy.log("Feedback submitted and lesson status changed to completed")
        lessonPlan.clickOnFinishPageHomeButton()
        lessonPlan.tapOnLpFinder()
        lessonPlan.tapOnChapterAfterMarkAsComplete()
        lessonPlan.verifyCompletedLesson()
        cy.log("Status for completed lesson verified")
        lessonPlan.tapOnLpFinder()
        lessonPlan.typeLessonNameInLpFinder()
    })
})
