$(function() {
    // This is  a Constructor Functions. It allow me to create more object
    var Question = function(fieldtext, choices, answer) {
        this.fieldtext = fieldtext;
        this.choices = choices;
        this.answer = answer;
    }
    //make sure the choice of user is equal  ot the answer
    Question.prototype.correctAnswer = function(choice) {
        return choice === this.answer;
    }
    var the_questions = [
        new Question('Who is the best all-around player in the NBA ?', ['Kobe Bryant', 'Michael Jordan', 'Steve Kerr', "Lebron James, Obvioustly"], 'Lebron James, Obvioustly'),
        new Question('There was a plane crash every single person died. Who survived?', ['the plane', 'No One, Genius', 'Married Couple,duh', 'The pilot '], 'Married Couple,duh'),
        new Question('Which language is used to style on them?', ['Java', 'Javascript', 'Css', 'That Money, duh'], 'Css'),
        new Question('Winter Is coming?', ['Games of Thrones', 'John Wick', 'Hercules', 'None of them'], 'Games of Thrones'),
        new Question('The more you take, the more you leave behind. What am I?', ['Life', 'Shadow', 'Babies', "footstep, Obvioustly"], 'footstep'),
    ];

    function Quiz(questionAsk) {
        this.score = 0;
        this.questionAsk = questionAsk;
        this.questionIndex = 0;
    }
    // we get the index of the questions
    Quiz.prototype.getIndex = function() {
        return this.questionAsk[this.questionIndex];
    }
    // check if the quiz has ended
    Quiz.prototype.check_if_quiz_ended = function() {
        return this.questionAsk.length === this.questionIndex;

    }
    // if the user pick the right answer increase the score by 1 and 
    // Also, move on to the next  question whether the user got it right or not
    Quiz.prototype.next_question = function(element) {
        var index = this.getIndex();
        var the_answer = correctAnswer(element);
        if (index.the_answer) {
            this.score++;
        }
        this.questionIndex++;
    }
    //create a new quiz object everytime there is one until its finish
    var test = new Quiz(the_questions);

    function getQuestion() {
        if (test.check_if_quiz_ended()) {
            // showScore();
        } else {
            // show question and answers
            var mainQuestion = $('#questions');
            var putAnswer = $('.answer');
            var q = test.getIndex();
            for (var i = 0; i < the_questions.length; i++) {
                mainQuestion.text(q.fieldtext);
            }
            for (var i = 0; i < putAnswer.length; i++) {
                $(putAnswer[i]).text(q.choices[i]);
            }
        }
    }
    // function showAnswer(){
    //     var putAnswer = $('.answer');
    //     putAnswer.text(test.getIndex().choices)
    // }
    getQuestion();


});