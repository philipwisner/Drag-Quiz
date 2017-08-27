//Question constructor function
function Question(question, options, answer) {
	this.question = question;
	this.options = options;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}
