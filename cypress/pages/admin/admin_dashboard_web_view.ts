import {GuestLogin} from "../authentication/guest_login";
import {AdminDashboardSelectors} from "../selectors";
import {LessonPlan} from "../lesson_plan/lesson_plan";
import {MarkAsComplete} from "../lesson_plan/mark_as_complete";

export class AdminDashboard extends MarkAsComplete{

    adminDbSelectors = new AdminDashboardSelectors()

    /**
     * verify attendance card is visible on admin dashboard
     */
    isAttendanceCardVisible(){
        this.verifyElementExistAndIsVisible(this.adminDbSelectors.attendanceCard)
    }

    /**
     * is number of teachers visible on attendance card
     */
    isNumberOfTeachersOnAttendanceCardVisible(){
        cy.get(this.adminDbSelectors.teachersOnCard).invoke("text").then((text)=>{
            let splitText = text.trim().split(" ")
            expect(Number(splitText[0])).lte(Number(splitText.pop()))
            expect(text).match(this.constants.activeTeachersAttendanceCardRegex)
        })
    }

    /**
     * verify Attendance card
     */
    verifyAttendanceCard(){
        this.isAttendanceCardVisible()
        this.isNumberOfTeachersOnAttendanceCardVisible()
        this.isPercentageInCardVisible()
    }

    /**
     * verify donut percentage on card
     */
    isPercentageInCardVisible(){
        cy.get(this.adminDbSelectors.donutPercentageOnCard).invoke("text").then((text)=>{
            expect(text).match(this.constants.donutPercentageAttendanceCard)
        })
    }

    /**
     * verify lesson plan progress graph
     */
    doLessonPlanProgressGraphExist(){
        this.verifyElementExist(this.adminDbSelectors.lessonPlanProgressGraph)
    }

    /**
     * verify teacher progress bar at lesson plan progress graph
     */
    doTeacherProgressBarExistOnGraph(){
        this.verifyElementExist(this.adminDbSelectors.lessonPlanProgressGraphBar)
        cy.get(this.adminDbSelectors.lessonPlanProgressGraphBar).trigger('mouseover')
        this.verifyElementExist(this.adminDbSelectors.lpsCompleted)
        this.verifyNumberOfLpsCompletedOnGraph()
    }

    /**
     * verify number of LP's completed
     */
    verifyNumberOfLpsCompletedOnGraph(){
        cy.get(this.adminDbSelectors.lpsCompleted).invoke('text').then((text)=>{
            expect(text).match(this.constants.lpsCompleted)
        })
    }

    /**
     * verify lesson plan progress
     */
    verifyLessonPlanProgress(){
        this.doLessonPlanProgressGraphExist()
        this.doTeacherProgressBarExistOnGraph()
        this.verifyBarColor()
    }

    /**
     * verify background color
     */
    verifyBarColor(){
        cy.get(this.adminDbSelectors.lessonPlanProgressGraphBar).should("have.css",'fill',
            this.constants.lessonPlanProgressBarColor)
    }

    /**
     * verify lesson completion progress from graph by percentage number at bar
     */
    isLessonCompletionProgressAvailableInGraph(){
        this.verifyElementExist(this.adminDbSelectors.teacherLessonCompletionProgress)
        cy.get(this.adminDbSelectors.teacherLessonCompletionProgress).invoke("text").then((text)=>{
            expect(text).match(this.constants.donutPercentageAttendanceCard)
        })
    }

    /**
     * verify recent updates side bar
     */
    verifyRecentUpdates(){
        this.verifyElementExist(this.adminDbSelectors.recentUpdates)
        cy.get(this.adminDbSelectors.recentUpdatesHeading).should("have.text",this.constants.recentUpdatesText)
    }

    /**
     * verify dates showing are from last 7 days
     */
    verifyDateInRecentUpdates(){
        cy.get(this.adminDbSelectors.dateInRecentUpdates).each(($ele)=>{
            const dateText = $ele.text()
            expect(dateText).match(this.constants.dateRegex)
            const recentActivityDate = Date.parse(dateText)
            const pastDate = this.calculateDateSubtractDays(7)
            const lastSevenDays = Date.parse(String(pastDate))
            expect(recentActivityDate).be.gte(lastSevenDays)
        })
    }

    /**
     * switch account from admin to teacher
     */
    verifySwitchAccount(text:string){
        cy.get(this.adminDbSelectors.switchAccount).click()
        cy.get(this.adminDbSelectors.switchedAccountRole).should("include.text", text)
    }

    /**
     * verify attendance card
     */
    verifyTeacherDetailPageCard(){
        this.clickElement(this.adminDbSelectors.attendanceDetailCardArrow)
        this.verifyTeacherDetailPage()
        this.verifyTeacherDetailPageCards()
        this.verifyTeacherActiveStatus()
        this.verifyValueInDonutTeacherDetail()
        this.verifyTeacherProgressCardHeadings()
        this.verifyCardValues(this.adminDbSelectors.cardValues, this.constants.tdActiveStatusRegex)
        this.verifyLpProgressCardHeadings()
        this.verifyTotalLpCompletedLpProgressCard()
        this.verifyTeacherTrainingProgressCardHeadings()
        this.verifyTeacherTrainingProgressCardValues()
    }

    /**
     * verify attendance detail page card
     */
    verifyAttendanceDetailPageCard(){
        this.clickElement(this.adminDbSelectors.forwardArrow)
        this.verifyAttendanceDetailPage()
        this.verifyTeacherName()
        this.verifyActiveStatusTags()
        this.verifyActiveTeachers()
        this.verifyValueInDonutAttendanceDetail()
    }

    /**
     * verify attendance detail page heading
     */
    verifyAttendanceDetailPage(){
        this.verifyElementContainsText(this.adminDbSelectors.attendanceDetailHeading,
            this.constants.attendanceDetail)
    }

    /**
     * verify teacher name on attendance card at attendance detail page
     */
    verifyTeacherName(){
        this.verifyElementContainsText(this.adminDbSelectors.attendanceDetailName,
            this.constants.automationTeacher)
    }

    /**
     * verify active status tags on attendance card at attendance detail page
     */
    verifyActiveStatusTags(){
        this.verifyElementsContainsListOfTexts(this.constants.activeStatusTags,
            this.adminDbSelectors.cardHeadings)
    }

    /**
     * verify active teachers on attendance card at attendance detail page
     */
    verifyActiveTeachers(){
        cy.get(this.adminDbSelectors.cardValues).each((ele)=>{
            cy.wrap(ele).invoke("text").should("match",this.constants.numberValueRegex)
        })
    }

    /**
     * verify donut value on attendance card at attendance detail page
     */
    verifyValueInDonutAttendanceDetail(){
        this.matchValueWithRegex(this.adminDbSelectors.attendanceDetailDonutValue,
            this.constants.donutPercentageAttendanceCard)
    }

    /**
     * verify teacher detail page heading
     */
    verifyTeacherDetailPage(){
        this.verifyElementContainsText(this.adminDbSelectors.attendanceDetailHeading,
            this.constants.teacherDetail)
    }

    /**
     * verify progress detail headings
     */
    verifyTeacherDetailPageCards(){
        this.verifyElementContainsText(this.adminDbSelectors.teacherProgressCard,
            this.constants.teacherDetailText)
        this.verifyElementsContainsListOfTexts(this.constants.progressDetailHeadings,
            this.adminDbSelectors.progressDetailHeadings)
    }

    /**
     * verify element value match with regex
     */
    matchValueWithRegex(element:string, regex:any){
        cy.get(element).invoke("text").should("match",regex)
    }

    /**
     * verify teacher active status
     */
    verifyTeacherActiveStatus(){
        this.matchValueWithRegex(this.adminDbSelectors.tdActiveStatus,this.constants.stringRegex)
    }

    /**
     * verify donut value on attendance card at teacher detail page
     */
    verifyValueInDonutTeacherDetail(){
        this.matchValueWithRegex(this.adminDbSelectors.attendanceDetailDonutValue,
            this.constants.numberValueRegex)
    }

    /**
     * teacher detail page teacher progress card headings
     */
    verifyTeacherProgressCardHeadings(){
        this.verifyElementContainsText(this.adminDbSelectors.tdCardCompletedLessonHeading,
            this.constants.tdCardCompletedLessonHeading)
        this.verifyElementsContainsListOfTexts(this.constants.tdActiveStatusTags,
            this.adminDbSelectors.cardHeadings)
    }

    /**
     * teacher detail page teacher progress card verify values for
     * attendance, days active, days not active
     */
    verifyCardValues(element:string, regex: any){
        cy.get(element).each((ele)=>{
            cy.wrap(ele).invoke("text").should("match",regex)
        })
    }

    /**
     * teacher detail page lesson plan progress headings
     */
    verifyLpProgressCardHeadings(){
        this.verifyElementContainsText(this.adminDbSelectors.tdTotalLpCompleted,
            this.constants.totalLpCompleted)
        this.verifyElementsContainsListOfTexts(this.constants.lpProgressHeadings,
            this.adminDbSelectors.tdLpProgressHeadings)
    }

    /**
     * verify lesson plan progress card total lp completed value on teacher detail page
     */
    verifyTotalLpCompletedLpProgressCard(){
        this.matchValueWithRegex(this.adminDbSelectors.tdTotalLpCompletedValue,
            this.constants.lpsCompleted)
        this.verifyCardValues(this.adminDbSelectors.tdLpProgressHeadingsValues,
            this.constants.lpProgressHeadingsValues)
    }

    /**
     * verify TEACHER TRAINING PROGRESS card headings on teacher detail page
     */
    verifyTeacherTrainingProgressCardHeadings(){
        this.verifyElementContainsText(this.adminDbSelectors.tdTeacherRanking,
            this.constants.teacherRanking)
        this.verifyElementContainsText(this.adminDbSelectors.tdScore,
            this.constants.score)
        this.verifyElementsContainsListOfTexts(this.constants.teacherTrainingDescription,
            this.adminDbSelectors.tdTeacherTrainingDescription)
    }

    /**
     * verify TEACHER TRAINING PROGRESS card values on teacher detail page
     */
    verifyTeacherTrainingProgressCardValues(){
        this.matchValueWithRegex(this.adminDbSelectors.tdTeacherRankingValue,
            this.constants.numberValueRegex)
        this.matchValueWithRegex(this.adminDbSelectors.tdTeacherScoreValue,
            this.constants.lpsCompleted)
        this.verifyCardValues(this.adminDbSelectors.tdTeacherTrainingDescriptionValues,
            this.constants.numberValueRegex)
    }


    /**
     * verify TEACHER TRAINING PROGRESS card values on teacher detail page
     */
    loginAsTeacherToInterceptParametersForBulkMarkAsCompleteAPI(){

        this.visit_taleemabad();
        this.performLogin(this.constants.teacherPhoneNumber,this.constants.teacherPassword);
        this.clickOnContinueUsingForFree();
        this.setDelay(3000)
        this.clickOnLessonPlan();
        this.clickOnMyClassesSection();
        this.verifyChapterOfASubject();
        this.tapOnChapter();
        this.clickSignOutButton();
        this.setDelay();
        this.enterPhoneNumber(this.constants.adminNumber);
        this.clickSignInButton();
        this.enterPassword(this.constants.adminPassword);
        this.clickSignInButton();
        this.verifyTitle(this.constants.dashboardTitle);

    }
}
