import { Constants } from "../../common/constants";

export class BasePage {
    constants: Constants;
    constructor() {
        this.constants = new Constants();
    }

    /**
     * verify element visible
     * @param element - element to check
     */
    verifyElementVisibility(element: any): void {
        element = cy.get(element);
        element.should("be.visible");
    }

    getElementBasedOnText(text: any) {
        return cy.contains(text);
    }

    /**
     * click an element
     * @param element - element to click on
     */
    clickElement(element: string){
        cy.get(element).click({force: true})
    }

    /**
     * verify text is matched
     * @param element - element to check
     * @param text_to_compare - text to compare with
     */
    verifyTextMatched(element: any, text_to_compare: any): void {
        element = cy.get(element)
        element.should("have.text", text_to_compare);
    }

    verifyTextMatchedFromList(element: any, listTOMatch: any): void {
        element = cy.get(element)
        const regex = new RegExp(`${listTOMatch.join("|")}`, "g");
        element.invoke("text").should("match", regex);
    }

    /**
     *  verify element contains specific text
     * @param element - element to check
     * @param text_to_compare - text to compare with
     */
    verifyElementContainsSpecificText(element: any, text_to_compare: any): void {
        element = cy.get(element)
        element.should("contain.text", text_to_compare);
    }

    /**
     * set a delay
     * @param value - value of time to wait
     */
    setDelay(value: number = 2000) {
        cy.wait(value);
    }

    /**
     * verify element contains text
     * @param element - element to check
     * @param text - text to match
     * @returns {element} element of contains text
     */
    verifyElementContainsText(element: any, text: string) {
        return cy.get(element).contains(text, { matchCase: false });
    }

    /**
     * verify element not exist
     * @param element - element to verify
     * @returns {boolean} true if not exist else false
     */
    verifyElementNotExist(element: any) {
        return cy.get(element).should("not.exist");
    }

    /**
     * verify element exist
     * @param element - element to verify
     * @returns {boolean} true if exist else false
     */
    verifyElementExist(element: any) {
        return cy.get(element).should("exist");
    }

    /**
     * verify element contains list of texts
     * @param list_of_texts - list of texts to verify
     * @param element - element to check with
     */
    verifyElementsContainsListOfTexts(list_of_texts: any, element: any) {
        for (let each_value of list_of_texts) {
            this.verifyElementContainsText(element, each_value);
        }
    }

    /**
     * get current year
     * @returns {element} element of current year
     */
    getCurrentYear() {
        return new Date().getFullYear();
    }

    /**
     * verify pseudo css class before
     * @param element element on it to verify
     * @param attribute before class attribute to verify
     * @param attributeValue value of before class attribute to check
     */
    verifyPseudoClassBefore(
        element: any,
        attribute: string,
        attributeValue: string
    ) {
        element.then(($els: any[]) => {
            const win = $els[0].ownerDocument.defaultView;
            const before = win.getComputedStyle($els[0], "before");
            const contentValue = before.getPropertyValue(attribute);
            expect(contentValue).to.eq(attributeValue);
        });
    }

    /**
     * tap on element but before that check certain text exist
     * @param selector - selector where we have text
     * @param text - string to match
     * @param indexNumber
     */

    verifyTextThenClick(selector: any, text: string, indexNumber: number) {
        cy.get(selector)
            .eq(indexNumber)
            .should("have.text", text)
            .click({ force: true });
    }

    verifyOnlyTextOnPageThenClick(selector: any, text: string) {
        cy.get(selector).should("have.text", text).click();
    }

    /**
     * get integer random number
     * @param range - range of random number
     * @returns {number} random number
     */
    getRandomNumber(range: number) {
        return Math.floor(Math.random() * range);
    }

    /**
     * Tap On Element
     * @param element - how many days to add
     * @returns {boolean} - True if clicked
     */
    tapOnElement(element: any)
    {
        cy.get(element).click()
    }

    /**
     * Tap On Element
     * @param element - how many days to add
     * @param index - specific index of element
     * @returns {boolean} - True if clicked
     */
    tapOnElementOutOfMultipleElements(element: any, index: any)
    {
        cy.get(element).eq(index).click()
    }

    /**
     * type and verify text
     * @param elementID - element of text
     * @param text - text to verify
     */
    typeAndVerify(elementID: string, text: any): void {
        let element = cy.get(elementID);
        element.click();
        //element.clear();
        element.type(text, { parseSpecialCharSequences: false });
        element.should("have.value", text);
    }

    /**
     * select an element from dropdown
     * @param element - element to check
     * @param value - value to select
     */
    selectFromDropdown(element : any, value : string)
    {
        cy.get(element).click({force: true});
        this.setDelay(1000)
        cy.contains(value).click({force: true})
    }
    /**
     * tap on element but before that check certain text exist
     * @param selector - selector where we have text
     * @param text - string to match
     * @param indexNumber
     */

    verifyElementContainsTextThenClick(selector: any, text: string, indexNumber: number) {
        cy.get(selector)
            .eq(indexNumber)
            .contains(text)
            .click({ force: true });
    }

    /**
     * verify the visibility of element
     * @param element - element
     */

    verifyElementExistAndIsVisible(element: any) {
        return cy.get(element).should("be.exist").and('be.visible');
    }

    verifyElementContainsTextThenClickUsingFilter(parentSelector: any,childSelector: any) {
        cy.get(parentSelector)
            .filter(childSelector)
            .click({ force: true });
    }

    clickOnElementUsingIndex(selector: any, indexNumber: number)
    {
        cy.get(selector)
            .eq(indexNumber)
            .click()
    }

    verifyTitle(title: any)
    {
        cy.title().should('eq', title);
    }

    verifyElementIsDisabled(element: any, index: any)
    {
        cy.get(element).eq(index).should('be.disabled')
    }

    /**
     * verify specific element contains specific text
     * @param element - selector for element
     * @param index - index for element
     * @param element - text to compare
     */
    verifySpecificElementContainsSpecificText(element:string,index:number,text:string){
        cy.get(element).eq(index).contains(text)
    }

    /**
     * verify background color of an element
     * @param element - element whose background color to be verified
     * @param color - color that should be at background
     */
    verifyBackgroundColorOfElement(element:string,color:string){
        cy.get(element).should('have.css', 'background-color', color)
    }

    /**
     *  get current day
     * @returns {number} current day
     */
    getCurrentDay() {
        let currentDate = new Date();
        return currentDate.getDate();
    }

    /**
     * calculate date plus day
     * @param days_to_subtract - how many days to subtract
     * @returns {date} - date string
     */
    calculateDateSubtractDays(days_to_subtract: number) {
        let today = new Date();
        today.setDate(today.getDate() - days_to_subtract);
        return today;
    }
}
