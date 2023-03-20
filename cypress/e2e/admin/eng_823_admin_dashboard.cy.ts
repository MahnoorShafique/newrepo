import {AdminDashboard} from "../../pages/admin/admin_dashboard_web_view";
import {Constants} from "../../common/constants";
import {MarkAsComplete} from "../../pages/lesson_plan/mark_as_complete";
import {BookApi} from "../../pages/lesson_plan/bulk_mark_as_complete_api";

describe('Admin dashboard Web View', function () {
    let adminDashboard = new AdminDashboard()
    let lessonPlan = new MarkAsComplete();
    let bookApi = new BookApi();
    let constants = new Constants();

    it('admin dashboard web view', function () {

        adminDashboard.loginAsTeacherToInterceptParametersForBulkMarkAsCompleteAPI();
        //adminDashboard.performLogin(constants.adminNumber, constants.teacherPassword);
        bookApi.createBulkMarkAsCompleted(3)
        cy.reload();
        cy.log("Admin logged in successfully")
        adminDashboard.clickOnContinueUsingForFree()
        cy.log("User clicked on Continue for free option on popup at start")

        adminDashboard.verifyAttendanceCard()
        cy.log("Attendance card at admin verified successfully")

        adminDashboard.verifyLessonPlanProgress()
        cy.log("Lesson plan progress ")

        adminDashboard.isLessonCompletionProgressAvailableInGraph()
        cy.log("Lesson completion progress verified in graph")

        adminDashboard.verifyRecentUpdates()
        adminDashboard.verifyDateInRecentUpdates()
        cy.log("Recent Updates verified on the page")

        adminDashboard.verifySwitchAccount(constants.teacherRole)
        cy.log("Account switch from admin to teacher successful")

        adminDashboard.verifySwitchAccount(constants.adminRole)
        cy.log("Account switch from teacher to admin successful")

        adminDashboard.verifyAttendanceDetailPageCard()
        cy.log("Attendance detail page all cards information verified")

        adminDashboard.verifyTeacherDetailPageCard()
        bookApi.reversalOfBulkMarkAsCompleted(3)
    });
});
