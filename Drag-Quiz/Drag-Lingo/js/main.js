$(document).ready(function () {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><img src='img/Drag Queens.gif'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Begin</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // added line to test issue on GitHub Viewer
	clickSound.play();
	generateHTML();

	timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event) {
	clickSound.play();
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000);  //  change to 4000 or other amount
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/wrong.gif'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000); //  change to 4000 or other amount
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < questionArray.length - 1) {
	questionCounter++;
	generateHTML();
	counter = 10;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 10;
	generateHTML();
	timerWrapper();
}



var startScreen;
var gameHTML;
var counter = 10;
var questionArray = [
	"What does fishy mean?",
	"What does spilling the tea mean?",
	"What does snatched mean?",
	"What does beat mean?",
	"What does ki ki mean?",
	"What does tucking mean?",
	"What does kai kai mean?",
	"What do cakes refer to?",
	"Jesus is a biscuit...."
];

var answerArray = [
	["You look like a real girl", "You smell bad", "You are acting sketchy", "You like to drink too much"],
	["You are clumsy", "Give me the gossip", "Who even drinks tea?", "Saying somehting stupid"],
	["Stealing something", "Looking perfect", "Looking like you have a vagina", "Stealing a wig"],
	["Looking ugly","Dancing with the rythm","Having flawless face makeup", "To win a contest"],
	["A gossip session", "Kinky", "Sex", "A girly name"],
	["Plastic surgery", "Fixing your clothes", "Hiding your dick", "Doing a perfect flip"],
	["A quickie", "Drag Queen Sex", "Nickname for Kylie", "How Drag Queens say Okay"],
	["Face","Thighs","Ankles","Ass"],
	["Jesus isn't a biscuit!","Amen!","So let him sop you up!", "With extra gravy!"]
];

var imageArray = ["<img class='center-block img-right' src='img/fishy.gif'>",
									"<img class='center-block img-right' src='img/tea.gif'>",
									"<img class='center-block img-right' src='img/Snatched.gif'>",
									"<img class='center-block img-right' src='img/beat.gif'>",
									"<img class='center-block img-right' src='img/kiki.gif'>",
									"<img class='center-block img-right' src='img/tuck.gif'>",
									"<img class='center-block img-right' src='img/kaikai.gif'>",
									"<img class='center-block img-right' src='img/cakes.gif'>",
									"<img class='center-block img-right' src='img/biscuit.gif'>"
								 ];

var correctAnswers = [
	"A. You look like a real girl",
	"B. Give me the gossip",
	"B. Looking perfect",
	"C. Having flawless face makeup",
	"A. A gossip session",
	"C. Hiding your dick",
	"B. Drag Queen Sex",
	"D. Ass",
	"C. So let him sop you up!"
];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var clickSound = new Audio("sound/TonguePop.mp3");
