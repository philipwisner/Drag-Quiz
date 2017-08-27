function populate() {
	if (quiz.isEnded()) {
		showScores();
	}
	else {
		var element = $('#question');
		element = quiz.getQuestionIndex.text;

		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length, i++) {
			var element = $('#choice' + i)
			element.text = choices[i];
		}
	}
}



var questions = [
	new Question(	"What does fishy mean?", 	["You look like a real girl", "You smell bad", "You are acting sketchy", "You like to drink too much"], "You look like a real girl"
),
]

var quiz = new Quiz(questions);

populate();
