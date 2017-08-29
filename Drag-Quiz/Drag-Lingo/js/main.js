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
	if(selectedAnswer === correctAnswersQueenLingo[questionCounter]) {
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
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswersQueenLingo[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);  //  change to 4000 or other amount
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswersQueenLingo[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 1000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswersQueenLingo[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/wrong.gif'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 1000); //  change to 4000 or other amount
}

//function generateHTML() {
//	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + questionQueenLingo[questionCounter] + "</p><p class='first-answer answer'>" + answersQueenLingo[questionCounter][0] + "</p><p class='answer'>" + answersQueenLingo[questionCounter][1]+"</p><p class='answer'>" + answersQueenLingo[questionCounter][2] + "</p><p class='answer'>" + answersQueenLingo[questionCounter][3]+"</p>";
//	$(".mainArea").html(gameHTML);
//}


function generateHTML() {
		gameHTML = "<div class='card queen-lingo-question'><h1>QUEEN LINGO</h1><h3>Question <span>" + questionCounter + "</span></h3><p class='score-float'><b class='bold'>SCORE</b> <span>" + correctTally + "</span>pts</p><p class='question'><span>" + questionQueenLingo[questionCounter] + "</span></p><p class='timer'><b class='bold'>TIMER</b> <span></span></p><ul class='lives-count'><li id='lives-text'><b class='bold'>LIVES</b></li><li><span><i class='material-icons'>favorite</i></span><span><i class='material-icons'>favorite</i></span><span><i class='material-icons'>favorite</i></span></li></ul><div class='row answers'><div class='col s12 m12 l6 xl6'><p>" + answersQueenLingo[questionCounter][0] + "</p><p>" + answersQueenLingo[questionCounter][1] + "</p></div><div class='col s12 m12 l6 xl6'><p>" + answersQueenLingo[questionCounter][2] + "</p><p>" + answersQueenLingo[questionCounter][3] + "</p></div></div></div>";
		$(".mainArea").html(gameHTML);
}


function wait() {
	if (questionCounter < questionQueenLingo.length - 1) {
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
	questionCounter = 1;
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
var questionQueenLingo = [
	"What does fishy mean?",
	"What does spilling the tea mean?",
	"What does snatched mean?",
	"What does beat mean?",
	"What does ki ki mean?",
	"What does tucking mean?",
	"What does kai kai mean?",
	"What do cakes refer to?",
	"Jesus is a biscuit....",
	"What does serving cheescake mean?",
	"What does trade mean?",
	"What does shade mean?",
	"What does clocking someone mean?",
	"What is a faux queen?",
	"What does feeling my oats mean?",
	"What are the 5 G's",
	"What does for the gods mean?",
	"What does for days mean?",
	"What does hunty stand for?",
	"What is a death drop?",
	"What does mug mean?",
	"What does reading mean?",
	"What does sick'ning mean?",
	"What does squirrel friends mean?"
];

var answersQueenLingo = [
	["You look like a real girl", "You smell bad", "You are acting sketchy", "You like to drink too much"],
	["You are clumsy", "Give me the gossip", "Who even drinks tea?", "Saying something stupid"],
	["Stealing something", "Looking perfect", "Looking like you have a vagina", "Stealing a wig"],
	["Looking ugly", "Dancing with the rythm", "Having flawless face makeup", "To win a contest"],
	["A gossip session", "Kinky", "Sex", "A girly name"],
	["Plastic surgery", "Fixing your clothes", "Hiding your dick", "Doing a perfect flip"],
	["A quickie", "Drag Queen Sex", "Nickname for Kylie", "How Drag Queens say Okay"],
	["Face", "Thighs", "Ankles", "Ass"],
	["Jesus isn't a biscuit!", "Amen!", "So let him sop you up!", "With extra gravy!"],
	["A sexy thick girl", "Thick thighs", "Jiggly ass", "Looking rich"],
	["Swapping looks", "Changing wigs", "A 'straight' man who might go gay", "Making money"],
	["Another word for a shadow", "Pointing out someone's flaws", "Doing something sketchy", "A hue of a color"],
	["Stealing their time", "Hitting them in the face", "Ignoring them", "Noticing a flaw"],
	["A biologically female queen", "A lying queen", "A queen who only wants money", "A fake queen"],
	["Grabbing your ass", "To smoke weed", "Grab your balls", "To feel one's self"],
	["Go Get a Gurdle Girl, God!", "Good God, Get a Grip Girl!", "Gay Guys Get Great Girls!", "God Give me Good Gay Guys!"],
	["Done perfectly", "Hail Oden!", "The Old and the New", "OMG"],
	["Being talkative", "To have a lot of something", "Be experienced", "Doing drag during the day"],
	["Honey + tea", "Honey + aunty", "It doesn't stand for anything", "Honey + Cunt"],
	["To do a split", "To jump off stage", "Drop your wig on the floor", "To fall backwards into a struck pose"],
	["A face", "Stealing something", "A place to put coffee", "Bad makeup"],
	["To stare someone down", "To wittily expose a person's flaws", "Lipsyncing", "To be focused"],
	["To look gross", "To look skinny", "To be beyond awesome", "To look scary"],
	["Friends who hide their 'nuts'", "Best friends", "Friends who are crazy", "Friends who are sneaky"]
];

var correctAnswersQueenLingo = [
	"You look like a real girl",
	"Give me the gossip",
	"Looking perfect",
	"Having flawless face makeup",
	"A gossip session",
	"Hiding your dick",
	"Drag Queen Sex",
	"Ass",
	"So let him sop you up!",
	"A sexy thick girl",
	"A 'straight' man who might go gay",
	"Pointing out someone's flaws",
	"Noticing a flaw",
	"A biologically female queen",
	"To feel one's self",
	"Good God, Get a Grip Girl!",
	"Done perfectly",
	"To have a lot of something",
	"Honey + Cunt",
	"To fall backwards into a struck pose",
	"A face",
	"To wittily expose a person's flaws",
	"To be beyond awesome",
	"Friends who hide their 'nuts'"
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

var questionCounter = 1;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var clickSound = new Audio("sound/TonguePop.mp3");
