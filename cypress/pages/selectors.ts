export class SignupPageSelectors {

    phoneNumber = '[class *= "mat-input-element"]';
    signInButton = '.signinButton';
    passwordField ='[type=password]';
    signupScreenText = 'span[class="description"]'
    countryPicker = 'section[id="PhoneFlag"]'
    pakistanSelectedOnCountryPicker = '.iti__pk'
    countryCode = 'span[class*="ng-tns"][class*="star-inserted"]'
    taleemabadForSchoolText = 'span[class*="taleemabadSchools"]'
    trialExpiryScreen = '[class*="dialogContainer"]'
    conitinueUsingForFreetext = ':contains("CONTINUE USING FOR FREE")'
    conitinueUsingForFree = 'span[class="mat-button-wrapper"]'
    signOutButton = '.signoutButton';
    nextButton = 'button[type="submit"]'
    userName = 'input[type="text"]'
    userRoleDropdown = 'div[class*="mat-select-value"]'
    createSchool = '[class*="createButton"]'
    passwordScreenText = 'span[class="findAccount"]'
    setPassword = 'input[type="password"]'
    showPasswordCheckbox = 'input[type="checkbox"]'
    passwordBeforeShowPasswordCheckbox = '[type="password"]'
    passwordAfterShowPasswordCheckbox = '[type="text"]'
    confirmPasswordButton = 'button[class*="confirmButton"]'
    textOnPhoneNumberVerificationScreen = 'span[class="findAccount"]'
    nextButtonOnPhoneScreen = 'button[class*="verifyButton"]'
    otpTextField = 'input[type="text"]'
    welcomeText = '[class="welcomeDescription"]'
}

export class GuestPageSelectors {
    exploreAsGuest = '[class*="guestButton"]'
    nameRoleDialog = 'section[id="nameRoleDialog"]'
    userName = 'input[type="text"]'
    userRoleDropdown = 'div[class*="mat-select-value"]'
    submitButton = '[class="mat-button-wrapper"]'
    welcomeTextOnPop = 'div[class*="title ng"]'
    dashboardHeading = 'span[class="titleHeading"]'
    navigationMenu = 'div[class*="navigationElements ng"]'
    exploreTaleemabad = 'div[class*="explore"]'
    hotspotIcon = 'div[class*="circle"]'
    walkthroughCard = 'div[class*="mat-menu-content"]'
    walkthroughCardTitle = '[class="mat-card-title"]'
    grade = 'span[class*="panel-badge"]:visible'
    subject = 'span[class*="panel-badge"]:visible'
    title = '[class="title"]'
    next = 'span[class="btn-text"]'
    dropdownMenu = 'span[class*=mat-option-text]'
    teacherScreenMenu = 'span[class*="ng-star-inserted"]'
    practiceTextOnTeacherScreenMenu = ':contains("practice")'
    numberOfPages = 'div[class="statement-no ng-star-inserted"]:visible'
    nextButtonSelector = 'span[class="btn-text"]'
    congratulationText = 'div[class="header__hero"]'
    homeButton = 'mat-icon[class*= "header__btn--home"]'
    continueButton = 'button[class*="tour-btn"]'
    milestone = 'div[class="heading milestone__tilte"]'
    videoTitle = 'div[class="video-title"]'
    phoneNumber = 'input[class*="mat-input-element"]'
    chaptersOfASubject = '[id="chapters"] [class*="mat-expansion-panel"] [role="button"]';
}

export class ClassroomViewPageSelectors {
    lessonPlan = 'div[id="lesson-plan"]';
    dashboardHeading = 'span[class="titleHeading"]';
    sectionsOnLessonPlan = 'div[class="mat-tab-label-content"';
    myClasses = 'div[class="classes__title"]';
    classAssignedToTeacher = '[class*="primary mat-standard"]';
    chaptersOfASubject = '[class*="mat-expansion-panel"] [role="button"]';
    preSelectedBook = 'div[class="book__title"] > span';
    lessonBlockInAChapter = '[class*="panel-header-description"]';
    individualLessonInACChapter = 'div[class="lesson ng-star-inserted"]';
    openButton = 'button[class*="button-open"]';
    lessonType = 'div[class*="lectures"]';
    lessonStatus = 'div[class*="status"]'
    buttonsOnLesson = 'div[class*="btn"]';
    markAsCompleteButton = 'button[class*="mark-complete"]';
    lessonStatusDetail = 'span[class="completed"]';
    startTeaching = 'button [class*="mat-button-wrapper"]:visible';
    lessonTitle = '[class*="header__title"]';
    headerSubTitle = '[class*="header__subtitle"]';
    startButton = 'span[class*=mat-button-wrapper]:contains("Start")';
    homeButton = 'span[class*=mat-button-wrapper]:contains("Home")';
    taleemabadLogo = 'img[alt*="Taleemabad Logo"]';
    lessonScreenHeader = 'h3[class*="lp-name"]';
    lpOpeningSection = 'span[class*="tab-label ng"]:contains("opening")';
    lpExplanationSection = 'span[class*="tab-label ng"]:contains("explanation")';
    lpPracticeSection = 'span[class*="tab-label ng"]:contains("practice")';
    statementListOnLP = 'ul[id*="statementlist"]';
    highlightedStatementOnLP = '[class*="activeState"]';
    openingStatements = 'b[class*="ng-star-inserted"]';
    backButton = 'span[class="btn-text"]:contains("Back"):visible';
    nextButton = 'span[class="btn-text"]:contains("Next"):visible';
    finishButton = 'span[class="btn-text"]:contains("Finish"):visible';
    buttonsOnLpScreen = '[class*="btns"] [class*="btn-control"]';
    homeButtonOnLessonCompletePage = ".mat-button-focus-overlay:eq(1)";
    markCompleteButtonOnLessonComplete = ".mark-complete";
    finishScreenHomeButton = ".home-feedback .mat-button-focus-overlay";
    }

    export class LessonPlanPageSelectors {
    myClassesSectionContent = '[class = "mainContent"]';
    lessonPlan = 'div[id="lesson-plan"]';
    dashboardHeading = 'span[class="titleHeading"]';
    sectionsOnLessonPlan = 'div[class="mat-tab-label-content"]';
    myClasses = 'div[class="classes__title"]';
    classAssignedToTeacher = '[class*="primary mat-standard"]';
    chaptersOfASubject = '[id="chapters"] [class*="mat-expansion-panel"] [role="button"]';
    chapterTitle = '[id="chapters"] [class*="mat-expansion-panel"] [role="button"] .panel-title';
    preSelectedBook = 'div[class="chap-heading"] > span';
    lessonBlockInAChapter = '[class*="panel-header-description"]';
    individualLessonInACChapter = 'div[class="lesson ng-star-inserted"]';
    openButton = 'button[class*="button-open"]';
    lessonType = 'div[class*="lectures"]';
    // lessonStatus = 'div[class*="status"]'
    buttonsOnLesson = 'div[class*="btn"]';
    markAsCompleteButton = 'button[class*="mark-complete"]';
    lessonStatusDetail = 'span[class="completed"]';
    startTeaching = 'button [class*="mat-button-wrapper"]:visible';
    lessonTitle = '[class*="header__title"]';
    headerSubTitle = '[class*="header__subtitle"]';
    startButton = 'span[class*=mat-button-wrapper]:contains("Start")';
    homeButton = 'span[class*=mat-button-wrapper]:contains("Home")';
    taleemabadLogo = 'img[alt*="Taleemabad Logo"]';
    lessonScreenHeader = 'h3[class*="lp-name"]';
    lpOpeningSection = 'span[class*="tab-label ng"]:contains("opening")';
    lpExplanationSection = 'span[class*="tab-label ng"]:contains("explanation")';
    lpPracticeSection = 'span[class*="tab-label ng"]:contains("practice")';
    statementListOnLP = 'ul[id*="statementlist"]';
    highlightedStatementOnLP = '[class*="activeState"]';
    openingStatements = 'b[class*="ng-star-inserted"]';
    backButton = 'span[class="btn-text"]:contains("Back"):visible';
    nextButton = 'span[class="btn-text"]:contains("Next"):visible';
    finishButton = 'span[class="btn-text"]:contains("Finish"):visible';
    buttonsOnLpScreen = '[class*="btns"] [class*="btn-control"]';
    selectClass = '[class*=header-title]:contains("Select Class")';
    selectSubject = '[class*=header-title]';
    changeBook = 'button[class*="mat-flat-button"]';
    confirmButton = 'button[class*="mat-flat-button"] > span:contains("Confirm")';
    selectSubjectDropdown = ".mat-accordion:nth-child(2) [role='button']";
    subject = 'span[class*="panel-badge"]:visible';
    grade = 'span[class*="panel-badge"]:visible';
    booksInChangeBook = ".book-detail";
    lessonInExpandedChapter = "[ng-reflect-expanded='true'] .lesson";
    lessonTitleInChapter = ".lesson__title";
    lessonTypeInChapter = ".lesson__lectures";
    lessonOpenButton = ".button-open";
    // lessonStatus = ".completed";
    lessonStatus = ".mat-expansion-panel-body .completed";
    markComplete = ".mark-complete";
    openButtonLpTableRows = ".preparation__title span";
    openButtonLpHeading = ".head";
    openButtonTopic = ".lesson__plan span:nth-child(2)";
    openButtonType = ".lesson__type";
    chapterNames = "app-lesson-chapter mat-panel-title";
    expandedChapter = "app-lesson-chapter mat-expansion-panel [aria-expanded= 'true'] mat-panel-title";
    selectedClassDropdown = ".mat-content:eq(0)"
    selectedBookDropdown = ".mat-content:eq(1)"
    classAndBooksContainerDiv = "mat-panel-description";
    homeButtonOnStartTeaching = ".mat-button-focus-overlay:eq(1)";
    headingOnLessonCompletePage = ".ng-star-inserted .header__title--success";
    starsRatingModal = ".mat-dialog-container";
    starsOnModal = ".mat-icon-button";
    starStatus = ".body-2";
    helpUsImproveQuestionTable = ".feedback-fine";
    helpUsImproveQuestionHeading = ".radio-section-heading";
    otherOptionInQuestionTable = ".feedback-fine .mat-radio-inner-circle";    //.feedback-fine .mat-radio-button
    questionCommentArea = "textarea";
    commentInstruction = ".comment-des";
    feedbackModalSubmitButton = ".feedback-btn button";
    lpFinderSearchBar = "#search-text";
    markAsCompleteStatus = ".lesson__btn button:nth-child(2)";
}

export class AdminDashboardSelectors {
    attendanceCard = ".attendanceCard";
    teachersOnCard = ".activeAttendance";
    donutPercentageOnCard = ".attendanceCard tspan";
    lessonPlanProgressGraph = "#containerLP";
    lessonPlanProgressGraphBar = "#containerLP .highcharts-point";
    lpsCompleted = ".highcharts-tooltip text tspan tspan:eq(3)";
    teacherLessonCompletionProgress = "#containerLP .highcharts-text-outline";
    recentUpdates = ".newsCard";
    recentUpdatesHeading = ".updatesHeading";
    dateInRecentUpdates = ".dateDiv";
    switchAccount = ".switchScreen";
    switchedAccountRole = ".role";
    forwardArrow = ".attendanceDescription img";
    attendanceDetailHeading = ".titleHeading";
    attendanceDetailCardArrow = "[alt='right_arrow']";
    attendanceDetailName = ".teacherName";
    attendanceDetailDonutValue = "tspan";
    cardHeadings = ".activeDescription";
    cardValues = ".activeNumber";
    teacherProgressCard = ".progressDescription";
    progressDetailHeadings = ".progressDetailsDiv .heading";
    tdActiveStatus = ".activeStatus";
    tdCardCompletedLessonHeading = ".lessonDescription";
    tdTotalLpCompleted = ".lpProgressBarDescription";
    tdLpProgressHeadings = "[role='columnheader']";
    tdLpProgressHeadingsValues = "[role='gridcell']";
    tdTotalLpCompletedValue = ".lpRatio";
    tdTeacherRanking = ".rankingDescription";
    tdScore = ".scoreDescription";
    tdTeacherTrainingDescription = ".completedDescription";
    tdTeacherRankingValue = ".ranking";
    tdTeacherScoreValue = ".scoreCount";
    tdTeacherTrainingDescriptionValues = ".completedCount";
    lessonPlan = 'div[id="lesson-plan"]';
    dashboardHeading = 'span[class="titleHeading"]';
    sectionsOnLessonPlan = 'div[class="mat-tab-label-content"';
}

export class TeacherDashboardSelectors {
    hiDiv = ".hiDiv";
    yourGoalCardTitle = ".orangeText";
    yourGoalCardProgressCircle = ".progressDiv";
    valueInProgressCircle = ".progressDiv tspan";
    cardDaysDropdown = "[placeholder= 'TODAY']";
    lessonTarget = ".targetDescription";
    msgOneLpComplete = ".firstDiv .statement";
}
