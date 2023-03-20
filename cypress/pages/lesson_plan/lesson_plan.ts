import {LessonPlanPageSelectors} from "../selectors"
import {ClassroomView} from "./classroom_view";


export class LessonPlan extends ClassroomView {

    lessonPlanSelectors = new LessonPlanPageSelectors();

    verifySectionsInLessonPlan()
    {
        this.verifyElementContainsTextThenClick(
            this.lessonPlanSelectors.sectionsOnLessonPlan, this.constants.myClasses , 0)
    }

    verifyGradeSectionSubjectInMyClass()
    {
        this.verifyElementsContainsListOfTexts(this.constants.classAttributes,this.lessonPlanSelectors.classAssignedToTeacher)
    }

    clickOnExploreSection()
    {
        this.verifyElementContainsTextThenClick(
            this.lessonPlanSelectors.sectionsOnLessonPlan, this.constants.explore , 1)
    }

    clickOnMyClassesSection()
    {
        this.verifyElementContainsTextThenClick(
            this.classroomViewSelectors.sectionsOnLessonPlan, this.constants.myClasses , 0);
    }

    verifyAndSelectClass()
    {
        this.tapOnElement(this.lessonPlanSelectors.selectClass)
        this.verifyElementContainsTextThenClick(this.guestSelectors.grade,this.constants.playGroup,0)
    }

    verifyPreSelectedBook()
    {
        this.verifyElementExistAndIsVisible(this.guestSelectors.subject)
        this.verifyElementContainsText(this.lessonPlanSelectors.preSelectedBook, this.constants.bookName)
    }


    verifyAndSelectBook()
    {
        this.tapOnElement(this.lessonPlanSelectors.changeBook)
        this.setDelay(3000)
        this.verifyMoreThanOneBookExistInChangeBook()
        this.setDelay()
        this.verifyElementExistAndIsVisible(this.lessonPlanSelectors.booksInChangeBook)
        cy.get(this.guestSelectors.title).eq(2).click()
        this.setDelay(3000)
        this.tapOnElement(this.lessonPlanSelectors.confirmButton)
    }

    verifyAndSelectTopic() {
        this.clickOnMyClassesSection()
        this.verifyElementExistAndIsVisible(this.lessonPlanSelectors.classAssignedToTeacher)
        this.verifyElementContainsTextThenClick(
            this.lessonPlanSelectors.classAssignedToTeacher, this.constants.classAssignedToTeacher, 0);
    }

    /**
     * click on explore section if no class exist in "My Classes" section body
     */
    tapOnExploreSectionIfNoClassChipExist(){
        cy.get(this.lessonPlanSelectors.myClassesSectionContent).then($body => {
            if ($body.find(this.lessonPlanSelectors.classAssignedToTeacher).length <= 0) {
                cy.get(this.lessonPlanSelectors.myClassesSectionContent).should('contain.text',this.constants.messageIfNoClassExist)
                this.clickOnExploreSection()
            }
        });
    }

    /**
     * verify change book button exist or not
     */
    verifyChangeBookButton(){
        this.verifyElementExistAndIsVisible(this.lessonPlanSelectors.changeBook)
    }

    /**
     * verify SNC if there is no pre-selected book exist
     */
    verifySncIfNoPreSelectedBookExist(){
        cy.get(this.lessonPlanSelectors.openingStatements).should('contain.text', 'ALL LESSONS')
        this.verifyChangeBookButton()
    }

    /**
     * tap on select Subject dropdown
     * @param range - range of loop
     */
    tapOnSelectSubjectDropdown(range: number){
        for(let i=0; i<range; i++){
            cy.get(this.lessonPlanSelectors.selectSubjectDropdown).last().click()
        }
    }

    /**
     * get count of elements existing in dom
     * @param element - selector of element to count
     */
    getTotalCountOfElement(element: string){
        this.setDelay()
        cy.get(element).then((element)=>{
            let count = Cypress.$(element).length
            cy.wrap(count).as("count")
        })
    }

    /**
     * verify different publishers books exist in change book
     */
    verifyMoreThanOneBookExistInChangeBook(){
        this.setDelay(3000)
        this.getTotalCountOfElement(this.lessonPlanSelectors.booksInChangeBook)
        cy.get('@count').then((count)=>{
            expect(count).to.be.gt(1)
        })
    }

    /**
     * verify SNC for each unselected book
     * @param element - selector for element
     */
    verifySncForAllUnselectedBooks(element: string){
        this.getTotalCountOfElement(element)
        cy.get("@count").then((count)=>{
            for(let index=1; index<Number(count); index++){
                cy.get(element).eq(index).click()
                this.verifySncIfNoPreSelectedBookExist()
                this.tapOnSelectSubjectDropdown(1)
                this.setDelay(1000)
            }
        })
    }

    /**
     * verify SNC for all books that are not pre-selected
     */
    verifySncIfBookIsNotPreSelected(){
        this.verifyAndSelectClass()
        this.tapOnSelectSubjectDropdown(2)
        this.verifySncForAllUnselectedBooks(this.lessonPlanSelectors.subject)
    }

    /**
     * select english book in dropdown explore scetion
     */
    selectBookFromExploreSection(){
        this.setDelay()
        this.changeClassSelectedValue(this.lessonPlanSelectors.selectedClassDropdown, this.constants.playGroup)
        this.setDelay()
        this.clickElementContainingText(this.lessonPlanSelectors.classAndBooksContainerDiv,this.constants.english)
    }

    /**
     * select a subject
     */
    selectSubject(element:string, index:number){
        this.setDelay()
        this.verifyElementExistAndIsVisible(this.guestSelectors.subject)
        this.verifyElementContainsTextThenClick(this.guestSelectors.subject,element,index)
    }

    /**
     * select already unselected subject
     */
    chooseUnselectedSubject(){
        this.selectSubject(this.constants.math,1)
    }

    /**
     * verify user is able to change
     */
    verifyUserIsAbleToChangeBook(){
        this.tapOnSelectSubjectDropdown(1)
        this.chooseUnselectedSubject()
        this.verifyAndSelectBook()
    }

    /**
     * verify each chapter has at least one lesson
     */
    verifyEachChapterHasAtLeastOneLesson()
    {
        this.setDelay()
        this.verifyEachChapterContainLessonExploreSection(this.lessonPlanSelectors.chaptersOfASubject,
            this.lessonPlanSelectors.lessonInExpandedChapter)
    }

    /**
     * verify each chapter has at least one lesson
     */
    verifyLessonInChaptersClassesSection()
    {
        this.setDelay()
        this.verifyEachChapterContainLessonClassesSection(this.lessonPlanSelectors.chaptersOfASubject,
            this.lessonPlanSelectors.lessonInExpandedChapter)
    }

    /**
     * verify chapters of a book
     */
    verifyChaptersOfBook(){
        this.verifyElementExistAndIsVisible(this.lessonPlanSelectors.chaptersOfASubject)
    }

    /**
     * verify lessons in Chapters
     */
    verifyEachChapterContainLessonExploreSection(chapter:string, lesson:string){
        cy.get(chapter).then((chap)=>{
            let count = Cypress.$(chap).length;
            for(let index=0; index<count; index++){
                this.setDelay();
                cy.get(chapter).eq(index).click()
                cy.get(lesson).should('exist').and('be.visible')
                //this.verifyLessonComponentsExploreSection(lesson, index)
            }
        })
    }

    /**
     * verify lessons in Chapters
     */
    verifyEachChapterContainLessonClassesSection(chapter:string, lesson:string){
        cy.get(chapter).then((chap)=>{
            let count = Cypress.$(chap).length;
            for(let index=0; index<count; index++){
                cy.get(chapter).eq(index).click()
                cy.get(lesson).should('exist').and('be.visible')
                this.verifyLessonComponentsClassesSection(lesson, index)
            }
        })
    }

    /**
     * verify lesson components
     */
    verifyLessonComponentsExploreSection(lesson:string, index:number){
        this.setDelay()
        cy.get(lesson).find(this.lessonPlanSelectors.lessonTitleInChapter).should('exist')
        cy.get(lesson).find(this.lessonPlanSelectors.lessonTypeInChapter).should('exist')
        cy.get(lesson).find(this.lessonPlanSelectors.lessonOpenButton).should('exist')
        cy.get(lesson).find(this.lessonPlanSelectors.lessonStatus).should('not.be.visible')
        cy.get(lesson).find(this.lessonPlanSelectors.markComplete).should('not.be.visible')
    }

    /**
     * verify lesson components
     */
    verifyLessonComponentsClassesSection(lesson:string, index:number){
        this.setDelay()
        cy.get(lesson).find(this.lessonPlanSelectors.lessonTitleInChapter).should('exist')
        cy.get(lesson).find(this.lessonPlanSelectors.lessonTypeInChapter).should('exist')
        cy.get(lesson).find(this.lessonPlanSelectors.lessonOpenButton).should('exist')
        //cy.get(lesson).find(this.lessonPlanSelectors.lessonStatus).should('be.visible')
        cy.get(lesson).find(this.lessonPlanSelectors.markComplete).should('be.visible')
        //this.verifyDefaultStatusNotStarted(lesson)
    }

    /**
     * verify lesson status that is by default not started
     * @param lesson
     */
    verifyDefaultStatusNotStarted(lesson:string){
        cy.get(lesson).find(this.lessonPlanSelectors.lessonStatus).then((lessonStatus)=>{
            let count = Cypress.$(lessonStatus).length
            for(let i=0; i<count; i++){
                cy.wrap(lessonStatus).should("contain.text", this.constants.notStarted)
            }
        })
    }

    /**
     * verify chapter title
     */
    verifyChapterHasTitle(){
        cy.get(this.lessonPlanSelectors.chapterTitle).each((title)=>{
            cy.wrap(title).contains(this.constants.chapterNameRegex)
        })
    }

    /**
     * click open button to verify LP detail
     */
    verifyLPDetailOnOpenButton(chapter:string, lesson:string, chapterRow:number, lessonRow:number, openButton:string){
                cy.get(chapter).eq(chapterRow).click({force: true})
                cy.get(lesson).eq(lessonRow).find(openButton).click({force: true})
    }

    /**
     * verify LP Table rows
     */
    verifyLpTableRows(){
        this.setDelay();
        cy.get(this.lessonPlanSelectors.openButtonLpTableRows).each((row)=>{
            cy.wrap(row).invoke('text').then((txt)=>{
                expect(txt).to.be.oneOf(this.constants.openButtonPageTableRows)
            })
        })
    }

    /**
     * verify open button Lp Heading
     */
    verifyOpenButtonLpInfo(){
        this.verifyElementContainsText(this.lessonPlanSelectors.openButtonLpHeading, this.constants.openButtonLpHeading)
        this.verifyElementContainsText(this.lessonPlanSelectors.openButtonTopic, this.constants.topic)
        this.verifyElementContainsText(this.lessonPlanSelectors.openButtonType, this.constants.type)
    }

    /**
     * open button page elements verify
     */
    verifyOpenButtonPageElements(){
        this.verifyLPDetailOnOpenButton(this.lessonPlanSelectors.chaptersOfASubject,
            this.lessonPlanSelectors.lessonInExpandedChapter, 0,0,
            this.lessonPlanSelectors.lessonOpenButton )
        this.verifyOpenButtonLpInfo()
        this.verifyLpTableRows()
    }

    /**
     * verify Chapters in My Classes and Explore section are same
     */
    getAllChapterNamesOfBookInMyClasses(chapterNamesSelector:string){
        let nameOfMyClassesChapters:any = [];
        cy.get(chapterNamesSelector).each((chapter)=>{
            cy.wrap(chapter).invoke('text').then((text)=>{
                nameOfMyClassesChapters.push(text)
            })
        })
        cy.wrap(nameOfMyClassesChapters).as('chapterNames')
    }

    /**
     * compare name of chapters in both section My Classes and Explore
     * @param chapterNamesSelectorInExploreSection
     * @param arrayOfChapNamesInMyClasses
     */
    compareChapterInBothSections(chapterNamesSelectorInExploreSection:string, arrayOfChapNamesInMyClasses:any){
        cy.get(chapterNamesSelectorInExploreSection).each((chapter)=>{
            cy.wrap(chapter).invoke('text').then((text)=>{
                expect(text).to.be.oneOf(Array.from(arrayOfChapNamesInMyClasses))
            })
        })
    }

    /**
     * change already selected class
     */
    changeClassSelectedValue(dropdownHeader:string, valueName:string){
        this.clickElement(dropdownHeader)
        this.setDelay()
        this.clickElementContainingText(this.lessonPlanSelectors.classAndBooksContainerDiv, valueName)
    }

    /**
     * iterate over list of elements and click one
     */
    clickElementContainingText (element:string, valueName:string){
       cy.get(element).contains(valueName).click()
    }

    /**
     * verify chapters in both sections
     */
    verifyChaptersInBothSections(){
        this.getAllChapterNamesOfBookInMyClasses(this.lessonPlanSelectors.chapterNames)
        this.clickOnExploreSection()
        this.selectBookFromExploreSection()
        this.setDelay()
        cy.get("@chapterNames").then((chapterNames)=>{
            this.compareChapterInBothSections(this.lessonPlanSelectors.chapterNames,chapterNames)
        })
    }


    // Mark lessons as complete new methods


    /**
     * open button page elements verify
     */
    verifyLessonStatusInProgressAfterTapOnStartTeaching(){
        this.verifyLPDetailOnOpenButton(this.lessonPlanSelectors.chaptersOfASubject,
            this.lessonPlanSelectors.lessonInExpandedChapter, 0,0,
            this.lessonPlanSelectors.lessonOpenButton )
        this.clickOnStartTeaching()
        this.tapOnHomeButtonAtStartTeachingPage()
        this.setDelay()
        this.verifyStatusOfChapterSpecificLesson()
    }

    /**
     * click on home button at start teaching
     */
    tapOnHomeButtonAtStartTeachingPage(){
        this.clickElement(this.lessonPlanSelectors.homeButtonOnStartTeaching)
    }

    /**
     * verify status of a chapter specific lesson
     */
    verifyStatusOfChapterSpecificLesson(){
        this.clickOnElementUsingIndex(this.lessonPlanSelectors.chapterNames, 0)
        this.verifySpecificElementContainsSpecificText(this.lessonPlanSelectors.lessonStatus,0,
            this.constants.inProgress)
    }

    /**
     * verify screen after click on finish button at the end of lesson finished
     */
    verifyHeadingOnMarkAsCompletePage(){
        this.verifyElementContainsText(this.lessonPlanSelectors.headingOnLessonCompletePage,
            this.constants.markAsCompletePageHeading)
    }

}
