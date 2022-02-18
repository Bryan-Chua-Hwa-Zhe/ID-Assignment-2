// Questions will be asked
const Question = [{
    ID: 0,
    qnTitle: "What does this spell out?",
    qnTxt: "... .... ._ .__. .",
    answers: [{ text: "Alpha", isCorrect: false},
              { text: "Shake", isCorrect: false},
              { text: "Shape", isCorrect: true},
              { text: "Drunk", isCorrect: false}]
},
{
    ID: 1,
    qnTitle: "What does this spell out?",
    qnTxt: "_... ___ ._. . _..",
    answers: [{ text: "Score", isCorrect: false},
              { text: "Doted", isCorrect: false},
              { text: "Bored", isCorrect: true},
              { text: "Slept", isCorrect: false}]
},
{
    ID: 2,
    qnTitle: "What does this spell out?",
    qnTxt: "__. ._ .._ __. .",
    answers: [{ text: "Shore", isCorrect: false},
              { text: "Fades", isCorrect: false},
              { text: "Gauge", isCorrect: true},
              { text: "Grate", isCorrect: false}]
},
{
    ID: 3,
    qnTitle: "What does this spell out?",
    qnTxt: "._ ... .. ._ _.",
    answers: [{ text: "Check", isCorrect: false},
              { text: "Shame", isCorrect: false},
              { text: "Asian", isCorrect: true},
              { text: "Hinge", isCorrect: false}]
},
{
    ID: 4,
    qnTitle: "What does this spell out?",
    qnTxt: ".__. _.__ ._.. ___ _.",
    answers: [{ text: "Olden", isCorrect: false},
              { text: "Snook", isCorrect: false},
              { text: "Pylon", isCorrect: true},
              { text: "Shook", isCorrect: false}]
}]

//Set start
var start = true;

//Going Through Loop
function iterate(i) {

//Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

//Getting Qn Title and Text
const qnTitle = document.getElementById('qnTitle');
const qnTxt = document.getElementById('qnTxt');

//Setting Qn Title and Text
qnTitle.innerText = Question[i].qnTitle;
qnTxt.innerText = Question[i].qnTxt;


//Getting Qn Choices
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');

//Setting Qn Choices
choice1.innerText = Question[i].answers[0].text;
choice2.innerText = Question[i].answers[1].text;
choice3.innerText = Question[i].answers[2].text;
choice4.innerText = Question[i].answers[3].text;

//Setting answers for the Questions
choice1.value = Question[i].answers[0].isCorrect;
choice2.value = Question[i].answers[1].isCorrect;
choice3.value = Question[i].answers[2].isCorrect;
choice4.value = Question[i].answers[3].isCorrect;

var selectedAns = "";

//Get Selected answer (Choice 1)
choice1.addEventListener("click", () => {
    selectedAns = choice1.value;
})

//Get Selected answer (Choice 2)
choice2.addEventListener("click", () => {
    selectedAns = choice2.value;
})

//Get Selected answer (Choice 3)
choice3.addEventListener("click", () => {
    selectedAns = choice3.value;
})

//Get Selected answer (Choice 4)
choice4.addEventListener("click", () => {
    selectedAns = choice4.value;
})

//Getting the submit button
const submit = document.getElementsByClassName("submit");

//Submit method
submit[0].addEventListener("click", () => {
    if (selectedAns == "true") {
        result[0].innerHTML = "Correct!!!";
    } 
    else {
        result[0].innerHTML = "Incorrect...";
    }
})}

if (start) {
iterate("0");
}

//Next Question button and method
const next = document.getElementsByClassName('next')[0];
var i = 0;

next.addEventListener("click", () => {
start = false;
if (i < 5) {
    i++;
    iterate(i);
    console.log(i);
}})
