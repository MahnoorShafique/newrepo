export class Constants {

    //sign up

    loginUrl = "https://stage.taleemabad.com/";
    taleemabadLandingPageTitle = 'LMS - SignIn';
    adminNumber = '3137674720';
    adminPassword = 'password123';
    begin = 'BEGIN';
    signupScreenText = 'Enter your phone number to begin using Taleemabad';
    continueUsingForFree =  'CONTINUE USING FOR FREE';
    pakistanCountryCode = '+92';
    signInText = 'Sign in';
    newNumber = '3028931858';
    userName = 'Automation User';
    role = [
        "School Owner/Admin",
        "Teacher",
        "Parent"
    ];
    passwordScreenText = 'Set a password';
    userPassword = 'password';
    newPassword = 'NewPassword';
    confirmPassword = 'ConfirmPassword';
    confirmButtonText = 'CONFIRM';
    textOnPhoneNumberVerificationScreen = 'Verify your number';
    otpText = '000000';
    verifyButtonText = 'VERIFY';
    welcomeText = 'Welcome, Automation User!';

    // Login
    teacherPhoneNumber = '3338617163';
    teacherPassword = 'password';
    newTeacherPhoneNumber = '3046850240';
    dashboardTitle = 'LMS - Dashboard'

    // Guest

    exploreAsGuest = ' EXPLORE AS GUEST ';
    guestUserName = 'Guest User';
    guestRole = [
        "School Owner/Admin",
        "Teacher"
    ];
    submit = 'SUBMIT';
    start = 'start';
    explore = 'Explore';
    welcomeTextForGuest = 'Welcome to Taleemabad!';
    dashboard = 'dashboard';
    navigationMenu = [
        "dashboard",
        "Lesson Plans",
        "Video Library",
        "Teacher Training"
    ];

    lessonPlansTitle = 'LMS - Lesson Plans'
    lessonPlans = 'Lesson Plans';
    videoLibrary = 'Video Library';
    teacherTraining = 'Teacher Training';
    lessonPlanWalkthroughCardTitle = 'Grade List';
    playGroup =  'Play Group';
    english = 'English';
    math = "Math";
    bookName = 'Sea World';
    congratulationText = 'Congratulations!';
    exploreVideoLibrary = 'Explore Video Library';
    videoTitleText = 'My family(1)';
    numberToUnlockThirdMilestone = '3338611121';
    messageIfNoClassExist = "No class allocated. Click on Explore to see all classes.";
    exploreTeacherTraining = 'Explore Teacher Training';

    //API related constants
    // apiBaseUrl1 = "https://stage.taleemabad.com/";
    // apiBaseUrl = "https://stage.taleemabad.com/auth/";
    // contentApiBaseUrl = "https://stage.taleemabad.com/content/apis/"
    // apiSecretKey = "taleemabad123";
    // deleteApi = "delete-user";
    // deleteLessonPlanStatusApi = "lesson-plan-status-delete";
    // newNumberForAPI = "+923338617165";

    myClasses = 'My Classes';
    classAssignedToTeacher = 'PG-A-English';
    notStarted = 'Not Started';
    inProgress = 'In Progress';
    beDisabled = 'be.disabled';
    notDisabled = 'not.be.disabled';
    lessonTitle = 'MY FAMILY(1)';
    headerSubTitleText = 'NEVER STOP LEARNING';
    lessonScreenHeader = [
        "Play Group",
        "English",
        "My Self and My Family",
        "My family(1)"
    ];
    openingStatements = [
        "Say",
        "Ask",
        "Ans"
    ];
    videoDuration = 681.408;
    opening = "opening";
    explanation = "explanation";
    practice = "practice";


    //List of LPs
    classAttributes = [
        "PG",
        "Red",
        "English"
    ];
    // unselectedSubjects = ["Morning Meetings" , "Physical Education" , "Extra Curricular"]

    //API request type
    requestType = [
        "GET",
        "POST",
        "DELETE"
    ];
    chapterNameRegex = /[a-zA-Z]/;
    openButtonPageTableRows = ["SLOs Covered","Resources Needed","Videos in Lesson Plan",
        "External Link ","Workbook Pages ","Homework "]
    openButtonLpHeading = "Lesson Plan Preparation";
    topic = " Pencil grip-1";
    type = " activity";
    markAsCompletePageHeading = "You Are At The End Of The Lesson.";
    starsRating = [
        " Bohat Buri ",
        " Buri ",
        " Munasib ",
        " Achi ",
        " Bohat Achi "
    ];
    helpUsImproveQuestion = "What is the main problem?";
    commentInstruction = "App ko jo issue hai, comment box mein likhain.";
    comment = "its a comment for help us improve question.";
    markedComplete = "marked complete";
    completed = "Completed";
    activeTeachersAttendanceCardRegex = /[\d]* out of [\d]*/;
    donutPercentageAttendanceCard = /[\d]*%/;
    lpsCompleted = /[\d]+.*?/gm;
    lessonPlanProgressBarColor = "rgb(48, 239, 129)";
    recentUpdatesText = "RECENT UPDATES";
    dateRegex = /[a-zA-Z]*\s\d*,\s[\d]*/;
    teacherRole = "TEACHER";
    adminRole = "OWNER";
    attendanceDetail = "Attendance Details";
    teacherDetail = "Teacher Details";
    stringRegex = /[a-zA-z]*/;
    yourGoalText = "YOUR GOALS";
    numberValueRegex = /\d*/;
    lessonTarget = "TARGET 3";
    msgOnOneLpComplete = "One down! Let's keep going."
    msgOnTwoLpComplete = "Good job! You're almost there!";
    msgOnThreeLpComplete = "Brilliant! You've completed your goal for today.";
    automationTeacher = "Automation Teacher";
    activeStatusTags = ["Days Active","Days Not Active"];
    teacherDetailText = "TEACHER'S PROGRESS";
    progressDetailHeadings = ["LESSON PLAN PROGRESS", "TEACHER TRAINING PROGRESS"];
    tdCardCompletedLessonHeading = "Lesson Plan Completed Today";
    tdActiveStatusTags = ["Attendacne", "Days Active", "Days Not Active"];
    tdActiveStatusRegex = /[\d]*% | \d*/;
    totalLpCompleted = "Total Lesson Plans Completed";
    lpProgressHeadings = ["Lesson Plans Completed", "Grade", "Subject"];
    lpProgressHeadingsValues = /[\d]+.*? | [a-zA-z]*/gm;
    teacherRanking = "Automation Teacher's Ranking";
    score = "Score";
    teacherTrainingDescription = ["Completed", "Remaining"];
}
