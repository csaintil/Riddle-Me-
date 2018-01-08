
var questionIndex = 0;
var score = 0;
// This is  a Constructor Functions. It allow me to create more object
var Question = function(quizQuestion, choices, answer) {
    this.quizQuestion = quizQuestion;
    this.choices = choices;
    this.answer = answer;
}
var the_questions = [
    new Question(' I travel all over the world, but always stay in my corner. What am I?', ['Stamp', 'Lamp', 'Lamb', 'StarWars'], 'Stamp'),
    new Question('There was a plane crash every single person died. Who survived?', ['the plane', 'No One, Genius', 'Married Couple,duh', 'The pilot '], 'Married Couple,duh'),
    new Question('Which language is used to style on them?', ['Java', 'Javascript', 'Css', 'That Money, duh'], 'Css'),
    new Question('Winter Is coming?', ['Games of Thrones', 'John Wick', 'Hercules', 'None of them'], 'Games of Thrones'),
    new Question('The more you take, the more you leave behind. What am I?', ['Life', 'Shadow', 'Babies', 'footstep, Obvioustly'], 'footstep, Obvioustly')

];

var scores = [];


$(document).ready(function() {
    showQuestion();
    showAnswers();
    // $('.next').on('click',next());
    $('.answer').on('click', function() {
        if ($(this).text() == the_questions[questionIndex].answer)
        {
            scores[questionIndex] = true;
        } else {
            scores[questionIndex] = false;
        } 
 
// console.log($(this))
    });
    $('.submit').on('click',function(){
        computeScore();
    })
});

function showQuestion() {
    $('#question').text(the_questions[questionIndex].quizQuestion);
    // alert(questionIndex);
}

function showAnswers() {
    $('#choice1').text(the_questions[questionIndex].choices[0]);
    $('#choice2').text(the_questions[questionIndex].choices[1]);
    $('#choice3').text(the_questions[questionIndex].choices[2]);
    $('#choice4').text(the_questions[questionIndex].choices[3]);

}

function next() {
    if (this.questionIndex < the_questions.length - 1) {
        this.questionIndex++;
        showQuestion();
        showAnswers();
        $('.previous').prop('disabled', false);

    } else {
        $('.next').prop('disabled', true);
    }


}


function previous() {
    if (this.questionIndex > 0) {
        this.questionIndex--;
        showQuestion();
        showAnswers();
        $('.next').prop('disabled', false);

    } else {
        $('.previous').prop('disabled', true);

    }
}


function computeScore() {
 var score = 0;
for(var i = 0; i < scores.length; i++){
    if (scores[i] ==true) {
        score++;
    } 

}
if(score <= 1){
    $('.image').addClass('image1')
    alert('hello');
} 
// else if (score === 2){
//     alert('My man');
// } else if (score ===3){
//     alert('my nigga')
// }


$('.result').text(score);

}







// function changeQuestion(id){
//     if (id == "previous") {
//        if (this.questionIndex > 0) {
//         this.questionIndex--;
//         showQuestion();
//         showAnswers();
//         $('.next').prop('disabled', false);

//     } else {
//         $('.previous').prop('disabled', true); 
//     }
// } else {
//      if (this.questionIndex < the_questions.length - 1) {
//         this.questionIndex++;
//         showQuestion();
//         showAnswers();
//         $('.previous').prop('disabled', false);

//     } else {
//         $('.next').prop('disabled', true);
//     }

// }
// }

