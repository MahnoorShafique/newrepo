import {TeacherDashboardSelectors} from "../selectors";
import {BasePage} from "../base_pages/base_page";

export class TeacherDashboard extends BasePage{

    dashboardSelectors = new TeacherDashboardSelectors()
    /**
     * verify "Hi, Teacher" string at dashboard
     */
    verifyHiString(){
        cy.get(this.dashboardSelectors.hiDiv).contains(this.constants.stringRegex)
    }

    /**
     * verify "your goal" card at dashboard
     */
    verifyYourGoalCard(){
        cy.get(this.dashboardSelectors.yourGoalCardTitle).should("contain", this.constants.yourGoalText)
    }

    /**
     * verify progress circle on your goal card
     */
    verifyProgressCircle(){
        cy.get(this.dashboardSelectors.yourGoalCardProgressCircle).should("exist")
    }

    /**
     * verify Progress circle value before completing training
     */
    verifyProgressCircleValueBeforeTrainingComplete(){
        cy.get(this.dashboardSelectors.valueInProgressCircle).contains(0)
    }

    /**
     * verify progress circle number
     */
    verifyNumberInProgressCircle(){
        cy.get(this.dashboardSelectors.valueInProgressCircle).contains(this.constants.numberValueRegex)
    }

    /**
     * verify days dropdown on card your goal
     */
    verifyDaysDropdownOnCard(){
        this.verifyElementExistAndIsVisible(this.dashboardSelectors.cardDaysDropdown)
    }

    /**
     * verify lesson target
     */
    verifyLessonTarget(){
        cy.get(this.dashboardSelectors.lessonTarget).should("contain",this.constants.lessonTarget)
    }

    /**
     * verify progress circle on your goal card
     */
    verifyProgressCircleWithOneLpComplete(){
        cy.get(this.dashboardSelectors.valueInProgressCircle).contains(1)
    }

    /**
     * verify progress circle on your goal card
     */
    verifyProgressCircleWithTwoLpComplete(){
        cy.get(this.dashboardSelectors.valueInProgressCircle).contains(2)
    }

    /**
     * verify progress circle on your goal card
     */
    verifyProgressCircleWithThreeLpComplete(){
        cy.get(this.dashboardSelectors.valueInProgressCircle).contains(3)
    }

    /**
     * verify message when one LP completed
     */
    verifyOneLpCompletedMessage(){
        cy.get(this.dashboardSelectors.msgOneLpComplete).should("contain",this.constants.msgOnOneLpComplete)
    }

    /**
     * verify message when one LP completed
     */
    verifyTwoLpCompletedMessage(){
        cy.get(this.dashboardSelectors.msgOneLpComplete).should("contain",this.constants.msgOnTwoLpComplete)
    }

    /**
     * verify message when one LP completed
     */
    verifyThreeLpCompletedMessage(){
        cy.get(this.dashboardSelectors.msgOneLpComplete).should("contain",this.constants.msgOnThreeLpComplete)
    }
}