// let me look at the list - what's next?// ***
// so now I need to create an isYes.js file ***
// should be exporting from /src/is-yes/js ***

// testing should be live at /test/is-yes.test.js ==> must import './is-yes.test.js'; in file /test/test.js
// import './is-yes.test.js'; in file /test/tests.js !


import isYes from './isYes.js';
// ^here's my import for isYes.js file

const clickButton = document.getElementById('myButton');
// ^ here's my button
const result = document.getElementById('quiz-result');
// ^ here's my button's results

// Event handlers
function launchQuiz() {
    let correctAnswers = 0;
    let name = '';

    // next I show the user the message response
    alert('Sup Homie?! How you do?');
    const confirmed = confirm('Are you sure you want to go there?');
    if (confirmed === false) {
        return;
    }
    const emptyString = '';

    const firstName = prompt("What's do peole call you?");
    name = firstName;

    const lastName = prompt("So what's your last name?");
    name = name + ' ' + lastName;

    const isAwesome = prompt('Would you like to see more from the Salmon? (Yes/No)?');

    if (isYes(isAwesome) === true) {
        correctAnswers++;
    } 

    let response = 'Your name is ' + name;
    let moreQuiz;


    if (correctAnswers >= 1) {
        moreQuiz = prompt(response + ' so you want more of Salmon speaks?!');
    }  
    if (isYes(moreQuiz) === false) {
        alert('So why are ya here buddy?');
    }

    result.textContent = response;
}

clickButton.addEventListener('click', launchQuiz);
