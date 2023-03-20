import {ClassroomViewPageSelectors} from "../selectors"
import {SignupPage} from "../authentication/signup";
import {GuestLogin} from "../authentication/guest_login";


export class ClassroomView extends GuestLogin {
    classroomViewSelectors: ClassroomViewPageSelectors;

    constructor() {
        super();
        this.classroomViewSelectors = new ClassroomViewPageSelectors();
    }

  clickOnLessonPlan()
  {
      this.tapOnElement(this.classroomViewSelectors.lessonPlan)
      this.verifyElementContainsText(this.classroomViewSelectors.dashboardHeading, this.constants.lessonPlans)
  }

  verifySectionsInLessonPlan()
  {
      this.verifyElementContainsTextThenClick(
          this.classroomViewSelectors.sectionsOnLessonPlan, this.constants.myClasses , 0)
      this.verifyElementContainsTextThenClick(
          this.classroomViewSelectors.sectionsOnLessonPlan, this.constants.explore , 1)
  }

  verifyGradesAndSubjectsAssignedToTeacher()
  {
      this.verifyElementContainsTextThenClick(
          this.classroomViewSelectors.sectionsOnLessonPlan, this.constants.myClasses , 0);
      this.verifyElementContainsText(this.classroomViewSelectors.myClasses, this.constants.myClasses);
  }

  verifyChapterOfASubject()
  {
      cy.intercept({
          method: 'GET',
          url: '**/subject_book*',
          //middleware: true,
      }).as('grades')
      this.verifyElementContainsTextThenClick(
          this.classroomViewSelectors.classAssignedToTeacher, this.constants.classAssignedToTeacher, 0);
      cy.wait('@grades')
          .then((resp) => {
              cy.log(String(resp.response?.body.book[0].grade));
              let grade: string = resp.response?.body.book[0].grade;
              let subject: string = resp.response?.body.book[0].subject;
              cy.task('getGlobal').then((global_data: any) => {
                  global_data['grade'] = grade
                  global_data['subject'] = subject
                  cy.task('setGlobal', global_data)
              })
          })
      this.verifyElementExist(this.classroomViewSelectors.chaptersOfASubject)
  }

  verifyPreSelectedBook()
  {
      this.verifyElementContainsText(this.classroomViewSelectors.preSelectedBook, this.constants.bookName)
  }

  verifySingleChapterHasMultipleLessons(index: any, lessonBlock: any, SingleLesson: any)
  {
      cy.get(this.classroomViewSelectors.lessonBlockInAChapter)
          .eq(index)
          .find(this.classroomViewSelectors.individualLessonInACChapter)
          .should('have.length.greaterThan',0)
  }

    /**
     * verify each chapter has at least one lesson
     */
  verifyEachChapterHasAtLeastOneLesson()
  {
      this.verifyLessons(this.classroomViewSelectors.chaptersOfASubject)
  }

    /**
     * verify lesson in chapters of a book
     * @param element - selector for lessons
     */
  verifyLessons(element:string){
      let x=0;
      cy.get(element).then($chapters => {
          for(x; x < $chapters.length; x++)
          {
              this.setDelay();
              this.clickOnElementUsingIndex(element,x)
              this.verifySingleChapterHasMultipleLessons(x, this.classroomViewSelectors.lessonBlockInAChapter,
                  this.classroomViewSelectors.individualLessonInACChapter)
              this.clickOnElementUsingIndex(element,x)
          }
      });
  }

  verifyAttributesOfALessonPlan() {

      this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 0)
      let element = cy.get(this.classroomViewSelectors.lessonBlockInAChapter)
          .find(this.classroomViewSelectors.individualLessonInACChapter).eq(0)

      element.find(this.classroomViewSelectors.lessonType).eq(0).should('exist')

      element.siblings(this.classroomViewSelectors.lessonStatus).eq(0).should('exist')

      element.siblings(this.classroomViewSelectors.buttonsOnLesson)
          .children(this.classroomViewSelectors.markAsCompleteButton).should('exist')

      element.parent(this.classroomViewSelectors.buttonsOnLesson)
          .children(this.classroomViewSelectors.openButton).should('exist')

      this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 0)
  }

  verifyStatusOfMarkAsCompleteButton(lessonBlock: any, lessonNumber: any, lessonStatus: any, buttonStatus: any )
  {
      let element = cy.get(this.classroomViewSelectors.lessonBlockInAChapter).eq(lessonBlock)

      element.find(this.classroomViewSelectors.individualLessonInACChapter).eq(lessonNumber)
          .find(this.classroomViewSelectors.lessonStatusDetail).should('have.text', lessonStatus)

      element.parent(this.classroomViewSelectors.lessonStatus)
          .siblings(this.classroomViewSelectors.buttonsOnLesson)
          .children(this.classroomViewSelectors.markAsCompleteButton).should(buttonStatus)
  }

    verifyMarkAsCompleteButtonClickOptions()
  {
      this.setDelay();
      // this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 1)
      this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 0)
      this.verifyStatusOfMarkAsCompleteButton
      (1,2,this.constants.notStarted, this.constants.beDisabled)
      // this.verifyStatusOfMarkAsCompleteButton
      // (1, 0,this.constants.notStarted, this.constants.beDisabled)
      // this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 1)
  }

  closeChapterSegment(){

      this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 0)
  }
  clickOpenToPreviewLP()
  {
      cy.intercept({
          method: 'POST',
          url: '**/lesson-plan-status',
          //middleware: true,
      }).as('lessonPlanStatusIntercept')
      this.setDelay(3000)
      this.clickOnElementUsingIndex(this.classroomViewSelectors.chaptersOfASubject, 0)
      let element = cy.get(this.classroomViewSelectors.lessonBlockInAChapter)
          .find(this.classroomViewSelectors.individualLessonInACChapter).eq(0)
          .find(this.classroomViewSelectors.buttonsOnLesson)
          .children(this.classroomViewSelectors.openButton).click()


      cy.wait('@lessonPlanStatusIntercept')
          .then((resp) => {
              cy.log(String(resp.response?.statusCode))
              cy.log(String(resp.response?.body.id))
              cy.log(String(resp.request));
              let id: string = String(resp.response?.body.id);
              let g_data: {[k: string]: string};
              cy.task('getGlobal').then((global_data: any) => {
                 global_data['id'] = id
                  cy.task('setGlobal', global_data)

              })
          })


      this.verifyTitle(this.constants.lessonPlansTitle)
  }

  clickOnStartTeaching()
  {
      this.tapOnElement(this.classroomViewSelectors.startTeaching);
      this.verifyElementContainsText(this.classroomViewSelectors.lessonTitle, this.constants.lessonTitle);
  }

  validateAttributesOfStartTeachingScreen()
  {
      this.verifyElementContainsText(this.classroomViewSelectors.headerSubTitle,
          this.constants.headerSubTitleText);
      this.verifyElementVisibility(this.classroomViewSelectors.taleemabadLogo)
      this.verifyElementExist(this.classroomViewSelectors.startButton);
      this.verifyElementExist(this.classroomViewSelectors.homeButton);
  }

  validateAttributesOfClassroomViewInsideLpUponClickingStart()
  {
      this.tapOnElement(this.classroomViewSelectors.startButton);
      this.verifyElementsContainsListOfTexts(this.constants.lessonScreenHeader,
          this.classroomViewSelectors.lessonScreenHeader);
      this.verifyElementExist(this.classroomViewSelectors.lpOpeningSection);
      this.verifyElementExist(this.classroomViewSelectors.lpExplanationSection);
      this.verifyElementExist(this.classroomViewSelectors.lpPracticeSection);
  }

  verifyTickerOnFirstStatementOfOpeningSection()
  {
      this.tapOnElement(this.classroomViewSelectors.lpOpeningSection);
      cy.get(this.classroomViewSelectors.statementListOnLP)
          .find(this.classroomViewSelectors.highlightedStatementOnLP)
          .should('exist');
  }

  verifyOpeningStatementsAndButtonsOnClassroomView()
  {
      this.verifyTextMatchedFromList(this.classroomViewSelectors.openingStatements, this.constants.openingStatements);
      this.verifyElementExist(this.classroomViewSelectors.backButton);
      this.verifyElementExist(this.classroomViewSelectors.nextButton);
  }

  verifyVideoFunctionality()
  {
      this.tapOnElement(this.classroomViewSelectors.nextButton);
      cy.get('video')
          .should('have.prop', 'paused', true)
          .and('have.prop', 'ended', false);
      this.setDelay()
      cy.get('video')
          .should('have.prop', 'paused', false)
          .and('have.prop', 'ended', false)
          .and('have.prop', 'duration', this.constants.videoDuration)
  }

  getPageName(expectedText: any)
  {
      cy.get(this.guestSelectors.numberOfPages).invoke('text').then(($text) => {
          $text = $text.trim()
          let subText = $text.substring(0,$text.length)
          expect(subText).contains(expectedText);
      })

  }

  buttonIterator(button: any, iterator: any)
  {
      cy.get(this.guestSelectors.numberOfPages).invoke('text').then(($text) =>
      {
          $text = $text.trim()
          cy.log($text)
          let num = $text.substring($text.length-2,$text.length)
          cy.log(num)
          for(let i=0;i < Number(num)-iterator;i++)
          {
              cy.get(button).click({force:true});

          }
      })
      this.setDelay();

  }
  verifyNextButtonAndAllSectionsFunctionality()
  {
      this.getPageName(this.constants.opening);
      this.buttonIterator(this.classroomViewSelectors.nextButton,0);
      this.getPageName(this.constants.explanation);
      this.verifyOpeningStatementsAndButtonsOnClassroomView();
      this.buttonIterator(this.classroomViewSelectors.nextButton,0);
      this.getPageName(this.constants.practice);
      this.verifyOpeningStatementsAndButtonsOnClassroomView();
      this.buttonIterator(this.classroomViewSelectors.nextButton,1);
      this.verifyElementExist(this.classroomViewSelectors.finishButton);
  }

  verifyBackButtonDisable()
  {
      this.getPageName(this.constants.opening);
      this.buttonIterator(this.classroomViewSelectors.backButton,0);
      this.verifyElementIsDisabled(this.classroomViewSelectors.buttonsOnLpScreen, 0);
  }

    /**
     * click on the finish button at the end of lesson finished
     */
    tapOnFinishButtonAtLessonComplete(){
        this.clickElement(this.classroomViewSelectors.finishButton)
    }

    /**
     * verify home and mark complete button on Last page
     */
    verifyButtonsAtLastPage(){
        this.verifyElementExistAndIsVisible(this.classroomViewSelectors.finishScreenHomeButton)
        this.verifyElementExistAndIsVisible(this.classroomViewSelectors.markCompleteButtonOnLessonComplete)
    }
}
