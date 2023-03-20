import {LessonPlan} from "./lesson_plan";


export class MarkAsComplete extends LessonPlan{

    /**
     * verify last page after click on finish button
     */
    verifyMarkAsCompletePageAfterLessonFinish(){
        this.verifyHeadingOnMarkAsCompletePage()
    }

    /**
     * click on mark as complete button on finish page
     */
    tapOnMarkAsCompleteButtonAtFinishPage(){
        this.clickElement(this.lessonPlanSelectors.markComplete)
    }

    /**
     * verify stars modal
     */
    verifyStarsModal(){
        this.verifyElementExistAndIsVisible(this.lessonPlanSelectors.starsRatingModal)
    }

    /**
     * type text
     * @param element - element selector where to type text
     * @param text - string to type
     */
    typeText(element:string, text:string){
        cy.get(element).clear().type(text)
    }

    /**
     * click on home button
     */
    clickOnFinishPageHomeButton(){
        this.clickElement(this.lessonPlanSelectors.homeButton)
    }

    /**
     * tap on lp finder search bar
     */
    tapOnLpFinder(){
        this.clickElement(this.lessonPlanSelectors.lpFinderSearchBar)
    }

    /**
     * type in lp finder lesson name
     */
    typeLessonNameInLpFinder(){
        this.typeText(this.lessonPlanSelectors.lpFinderSearchBar, "My Family")
    }

    /**
     * submit feedback for you lesson
     */
    submitFeedback(){
        this.clickElement(this.lessonPlanSelectors.feedbackModalSubmitButton)
        this.setDelay(5000)

    }

    /**
     * click on each star for rating and verify each star status
     */
    verifyOnClickEachStarStatus(){
        cy.get(this.lessonPlanSelectors.starsOnModal).then((star)=>{
            let count = Cypress.$(star).length
            for(let index=0; index<count; index++){
                cy.get(this.lessonPlanSelectors.starsOnModal).eq(index).click()
                this.verifyElementContainsText(this.lessonPlanSelectors.starStatus, this.constants.starsRating[index])
                if(index != 4){
                    this.verifyElementContainsText(this.lessonPlanSelectors.helpUsImproveQuestionHeading,
                        this.constants.helpUsImproveQuestion)
                    this.verifyElementExistAndIsVisible(this.lessonPlanSelectors.helpUsImproveQuestionTable)
                    cy.get(this.lessonPlanSelectors.otherOptionInQuestionTable).last().click({force:true})
                    this.verifyElementContainsText(this.lessonPlanSelectors.commentInstruction,
                        this.constants.commentInstruction)
                    this.typeText(this.lessonPlanSelectors.questionCommentArea, this.constants.comment)
                }
            }
        })
    }

    /**
     * check lesson status for first lesson
     */
    verifyCompletedLessonStatus(){
        cy.get(this.lessonPlanSelectors.lessonStatus).first().contains(this.constants.completed,
            {matchCase:false})
    }

    /**
     * click on chapter of a book based on index
     */
    tapOnChapter(){

        cy.intercept({
            method: 'GET',
            url: '**/book_chapter_lessons*',
            //middleware: true,
        }).as('class')
        this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 0)
        cy.wait('@class')
            .then((resp) => {
                let url = String(resp.request.url)
                cy.log(url.substring(url.lastIndexOf('=') + 1));
                let classname = url.substring(url.lastIndexOf('=') + 1);
                cy.task('getGlobal').then((global_data: any) => {
                    global_data['class'] = classname
                    cy.task('setGlobal', global_data)
                })
            })
    }

    /**
     * click on chapter of a book based on index (Mark As Complete)
     */
    tapOnChapterAfterMarkAsComplete(){

        this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 0)
    }

    /**
     * verify marked complete lesson
     */
    verifyMarkedCompleteLesson(){
        cy.get(this.lessonPlanSelectors.markAsCompleteStatus).first()
            .contains(this.constants.markedComplete, {matchCase: false})
    }

    /**
     * verify completed lesson
     */
    verifyCompletedLesson(){
        this.verifyCompletedLessonStatus()
        this.verifyMarkedCompleteLesson()

        cy.task('getGlobal').then((global_data: any) => {
            // assign here});
            let access_token: string = global_data['accessToken']
            console.log(access_token)

            cy.request({
                method: 'DELETE',
                headers: {
                    'authorization': 'Bearer ' + access_token,
                },
                url: 'http://qa.taleemabad.com:8080/content/apis/lesson-plan-status-delete/' + global_data['id'],

            })
        })
    }

    /**
     * verify same stars modal steps for mark lesson complete from lp finder
     */
    verifyFeedbackStepsForSecondLesson(){
        cy.get(this.lessonPlanSelectors.markAsCompleteStatus).eq(1).click()
    }
}
