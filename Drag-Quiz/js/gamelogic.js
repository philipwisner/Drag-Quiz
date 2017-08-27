/*

//Quiz Constructor function
function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
	this.asked = false;
	this.enabled = false;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

Quiz.prototype.gameOver = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
	this.questionIndex++
	if (this.questionIndex().correctAnswer()) {
		this.score++;
	}
}

//Function to generate random question

//Function to check if question has already been used

//Function to generate random answers


function getQuestionNum(questionSet) {
	var newQuestionNum = Math.floor(Math.random() * questionSet.length);
	return newQuestionNum;
}

/*
GENERATING RANDOM QUESTIONS WITHOUT REPEATING
1. Generate random number based off of question array length
2. Log that number(or remove that item index from the array) into a new array for used questions
3. Check to see if random number exists in both arrays
4. If number is original use it to return its assigned question
5. If number is not original generate random number

PROBLEMS
- Removing item from array creating issues
- Inefficient to keep generating random numbers - make it off the new array length
*/


/*
GENERATING RANDOM ANSWERS
1. Generate 3 random numbers based off of answer array length
2. Use those numbers to refer to the answers
3. Check to make sure that the random answers are not the same

PROBLEMS
- Making sure there is enough change in the wrong answers
- Guarantee no duplicate answers
*/

/*
CHECKING IF ANSWER IS CORRECT
1. Validate user selection against answer stored in array
2. If they are the same return true, add points and continue
3. If the are not the same return false, check if lives are 0, if not remove a life and continue

PROBLEMS
- Make sure that the questions know where there correct answers are
*/

