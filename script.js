var questionIndex = 0;
var score = 0;
// This is  a Constructor Functions. It allow me to create more object
var Question = function(quizQuestion, choices, answer) {
    this.quizQuestion = quizQuestion;
    this.choices = choices;
    this.answer = answer;
}
var the_questions = [
    new Question(' I travel all over the world, but always stay in my corner. What am I?', ['Stamp', 'Lamp', 'Lamb', 'Damp'], 'Stamp'),
    new Question('There was a plane crash every single person died. Who survived?', ['the plane', 'No One, Genius', 'Married Couple,duh', 'The pilot '], 'Married Couple,duh'),
    new Question('I have billions of eyes, yet I live in darkness. I have millions of ears, yet only four lobes. I have no muscle, yet I rule two hemispheres. What am I?', ['Human Brain', 'Human Ear', 'Human Abdomen', 'Air'], 'Human Brain'),
    new Question('Winter Is coming?', ['Games of Thrones', 'John Wick', 'Hercules', 'None of them'], 'Games of Thrones'),
    new Question('The more you take, the more you leave behind. What am I?', ['Life', 'Shadow', 'Babies', 'footstep, Obvioustly'], 'footstep, Obviously'),
    new Question('When is the time of a clock like the whistle of a train? ', [' One:thirty', 'Four O\'\clock', 'Three O \'\clock', 'When its two to two.'], 'When its two to two.'),


];

// the reason I did add the lenght of the question is because it make sure the user only click once.
// if I live the array empty the user can change their answer
var scores = [the_questions.length];


$(document).ready(function() {
    showQuestion();
    showAnswers();
    // $('.next').on('click',next());
    $('.answer').on('click', function() {
        if ($(this).text() == the_questions[questionIndex].answer) {
            scores[questionIndex] = true;
        } else {
            scores[questionIndex] = false;
        }

        // console.log($(this))
    });
    $('.submit').on('click', function() {
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
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == true) {
            score++;
        }

    }
    if (score <= 2) {
        img1();
    }
    if (score === 3 || score === 4) {
        img2();

    }
    if (score >= 5) {
        img3();
    }


    $('.result').text(score);

}

function img1() {
    $('.result').addClass('image');
    var losing1 = document.getElementById('losing_audio');
    losing1.play();

}

function img2() {
    $('.result').addClass('image2');
    var losing2 = document.getElementById('losing2_audio');
    losing2.play();


}

function img3() {
    $('.result').addClass('image3');
    var winning = document.getElementById('winning_audio');
    winning.play();

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