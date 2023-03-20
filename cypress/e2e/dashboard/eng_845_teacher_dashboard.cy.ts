import {Constants} from "../../common/constants";
import {LessonPlan} from "../../pages/lesson_plan/lesson_plan";
import {TeacherDashboard} from "../../pages/dashboard/teacher_dashboard";

describe('Teacher dashboard', function()
{

    let constants = new Constants();
    let lessonPlan = new LessonPlan();
    let dashboard = new TeacherDashboard()

    it.skip('Teacher dashboard',function() {

        lessonPlan.visit_taleemabad();
        lessonPlan.performLogin(constants.teacherPhoneNumber,constants.teacherPassword);
        cy.log("User logged in successfully")

        lessonPlan.clickOnContinueUsingForFree();
        cy.log("Pop up after login closed successfully")

        dashboard.verifyHiString()
        cy.log("Hi, Teacher text verified on dashboard page.")
        /* Verified Your Goal card before teacher completed any training */
        dashboard.verifyYourGoalCard()
        dashboard.verifyProgressCircle()
        // dashboard.verifyProgressCircleValueBeforeTrainingComplete()
        // will uncomment when there is zero LP completed
        dashboard.verifyNumberInProgressCircle()
        dashboard.verifyDaysDropdownOnCard()
        dashboard.verifyLessonTarget()
        cy.log("Your goal card verified with all components and values.")
        /* Verified Your Goal card progress circle value with training completed and messages on
        * training complete */
        // Hit API first to complete one lesson then verify steps
        dashboard.verifyProgressCircleWithOneLpComplete()
        dashboard.verifyOneLpCompletedMessage()
        // Hit API first to complete 2nd lesson then verify steps
        dashboard.verifyProgressCircleWithTwoLpComplete()
        dashboard.verifyTwoLpCompletedMessage()
        // Hit API first to complete 3rd lesson then verify steps
        dashboard.verifyProgressCircleWithThreeLpComplete()
        dashboard.verifyThreeLpCompletedMessage()
        cy.log("Verified that progress circle value increases by 1 as LP is completed with" +
            " respective messages.")

    })
})
