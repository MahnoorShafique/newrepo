/// <reference types="Cypress" />
import { GuestLogin } from "../../pages/authentication/guest_login";
import {Constants} from "../../common/constants";
import {ClassroomView} from "../../pages/lesson_plan/classroom_view";

describe('[ENG-192]Classroom view of Lessons', function()
{

    let guestLoginPage = new GuestLogin();
    let constants = new Constants();
    let classroomView = new ClassroomView();


    it('Classroom view for Lessons',function() {

        classroomView.visit_taleemabad();
        classroomView.performLogin(constants.teacherPhoneNumber,constants.teacherPassword);
        classroomView.clickOnContinueUsingForFree();
        classroomView.clickOnLessonPlan();
        classroomView.verifySectionsInLessonPlan();
        classroomView.verifyGradesAndSubjectsAssignedToTeacher();
        classroomView.verifyChapterOfASubject();
        classroomView.verifyEachChapterHasAtLeastOneLesson();
        classroomView.verifyPreSelectedBook();
        classroomView.verifyAttributesOfALessonPlan();
        classroomView.verifyMarkAsCompleteButtonClickOptions();
        classroomView.closeChapterSegment();
        classroomView.clickOpenToPreviewLP();
        classroomView.clickOnStartTeaching();
        classroomView.validateAttributesOfStartTeachingScreen();
        classroomView.validateAttributesOfClassroomViewInsideLpUponClickingStart();
        classroomView.verifyTickerOnFirstStatementOfOpeningSection();
        classroomView.verifyOpeningStatementsAndButtonsOnClassroomView();
        classroomView.verifyVideoFunctionality();
        classroomView.verifyBackButtonDisable();
        classroomView.verifyNextButtonAndAllSectionsFunctionality();
    })

})
