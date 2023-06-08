/*-------------------------------------     LOGIN/SIGNUP JS     -------------------------------*/
function tab_to_login() {

    const mainPage = document.getElementById("mainPage1");
    const mainPagetwo = document.getElementById("mainPage2");
    const welcome = document.getElementById("welcome");

    welcome.innerHTML="Welcome Back!";
    welcome.style.left="48%";    
    mainPage.style.display = "none";
    mainPagetwo.style.display = "block";
}

    function tab_to_signup() {

    const mainPage = document.getElementById("mainPage1");
    const mainPagetwo = document.getElementById("mainPage2");
    const welcome = document.getElementById("welcome");

    welcome.innerHTML = "Welcome";
    welcome.style.left="58%";
    mainPage.style.display = "block";   
    mainPagetwo.style.display = "none";

}


/*------------------------------------       COMMUNITYPOST JS     -------------------------- */
function showPost() {
    const show = document.getElementById("showPost");
    show.style.display = "block";
}

function hidePost() {
    const hide = document.getElementById("showPost");
    hide.style.display = "none";
}
/*----------------------------------------      END     ------------------------------------- */


/*-----------------------------------       SEARCH BAR JS      ----------------------------- */

let search = document.querySelector(".search");
let clear = document.querySelector(".clear");
search.onclick=function(){
    document.querySelector(".containerBox").classList.toggle('active');
}
clear.onclick=function(){
    document.getElementById("search"). value ="";
}


/*----------------------------------------      END     ------------------------------------ */


/*-----------------------------------------     QUIZ JS    ----------------------------------- */

const quizDB = [
    { 
       question: "Q1: Range Of Integer In C?",
        a: "0 to 32767",
        b: "0 to 65535",
        c: "-32768 to 32767",
        d: "-32767 to 32768",
        ans: "ans4"
    },

    {
        question: "Q2: Creator Of C Language?",
        a: "Dennis Richie",
        b: "Bjarne Stroutstrup",
        c: "Larry Page",
        d: "None Of The Above",
        ans: "ans1"
    },

    {
        question: "Q3: What is the full form of HTTP",
        a: "Hypertext Test Protocol",
        b: "Hyper Text Transfer Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Package",
        ans: "ans2"
    },
    {
        question: "Q4: What is data?",
        a: "Any piece of information",
        b: "Single piece of information",
        c: "Collection of distinct objects(information)",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q5: NPM in NodeJs stands for ",
        a: "Node Private Manager",
        b: "Node Package Manager",
        c: "Node Package Member",
        d: "Node Precaution Manger ",
        ans: "ans2"
    }
]


const question = document.querySelector('.question');
const Option1 = document.querySelector('#Option1');
const Option2 = document.querySelector('#Option2');
const Option3 = document.querySelector('#Option3');
const Option4 = document.querySelector('#Option4');
const previous = document.getElementById('prebtn');
const next = document.getElementById('nextbtn');
const buttons = document.getElementById('buttons');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const scores = document.getElementById('scores');
const scoretext = document.getElementById('scoretext');
const plyagbtn = document.getElementById('plyagbtn');


let score = 0;
let questionCount = 0;
var checkedAnswer = new Array();
const loadnextquestion = () => {
    question.innerHTML = quizDB[questionCount].question;
    Option1.innerHTML = quizDB[questionCount].a;
    Option2.innerHTML = quizDB[questionCount].b;
    Option3.innerHTML = quizDB[questionCount].c;
    Option4.innerHTML = quizDB[questionCount].d;
}

const loadprevquestion = () => {
    deselectAll();
    if (questionCount == 0) {
        return 0;
    } 
    else {
        questionCount -= 1;
        question.innerHTML = quizDB[questionCount].question;
        Option1.innerHTML = quizDB[questionCount].a;
        Option2.innerHTML = quizDB[questionCount].b;
        Option3.innerHTML = quizDB[questionCount].c;
        Option4.innerHTML = quizDB[questionCount].d;
    }

    if (questionCount == quizDB.length - 1) {
        next.style.display = 'block';
        submit.style.display = 'none';
    }
}


loadnextquestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((element) => {
        if (element.checked) {
            answer = element.id;
        }
    });
    return answer;
}


const deselectAll = () => {
    answers.forEach((element) => {
        element.checked = false;
    })
}


previous.addEventListener('click', () => {
    loadprevquestion();
})


next.addEventListener('click', () => {
    checkedAnswer[questionCount] = getCheckAnswer();
    deselectAll();
    questionCount++;
    if (questionCount == (quizDB.length - 1)) {
        next.style.display = 'none';
        submit.style.display = 'block';
    }
    if (questionCount < quizDB.length) {
        loadnextquestion();
    }
});


submit.addEventListener('click', () => {
    checkedAnswer[questionCount] = getCheckAnswer();
    for (let i = 0; i <= questionCount; i++) {
        if (checkedAnswer[i] == quizDB[i].ans) {
            score++;
        }
    }
    buttons.style.display = "none";
    scores.style.display = "block";
    scoretext.innerHTML = `YOU SCORED ${score}/${quizDB.length}`
    plyagbtn.onclick = () => {
        location.reload();
    }
});
