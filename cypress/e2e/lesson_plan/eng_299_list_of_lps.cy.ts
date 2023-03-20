import {Constants} from "../../common/constants";
import {LessonPlan} from "../../pages/lesson_plan/lesson_plan";

describe('List of All LPs', function()
{

    let constants = new Constants();
    let lessonPlan = new LessonPlan();


    it('List of All LPs',function() {

        lessonPlan.visit_taleemabad();
        lessonPlan.performLogin(constants.teacherPhoneNumber,constants.teacherPassword);
        lessonPlan.clickOnContinueUsingForFree();
        lessonPlan.clickOnLessonPlan();
        lessonPlan.verifySectionsInLessonPlan();
        lessonPlan.clickOnExploreSection()
        lessonPlan.verifySncIfBookIsNotPreSelected();
        lessonPlan.verifyAndSelectSubject();
        lessonPlan.verifyPreSelectedBook();
        lessonPlan.verifyUserIsAbleToChangeBook();
        lessonPlan.verifyChaptersOfBook();
        lessonPlan.verifyEachChapterHasAtLeastOneLesson()
        cy.log("verified each chapter has lessons")
        lessonPlan.verifyChapterHasTitle()
        lessonPlan.verifyOpenButtonPageElements()
        lessonPlan.clickOnLessonPlan();
        lessonPlan.clickOnMyClassesSection()
        lessonPlan.verifyChapterOfASubject()
        lessonPlan.verifyChaptersInBothSections()
    })
})
