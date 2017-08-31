$(document).ready(function () {

	// When you click the next arrow on Queen-Lingo it takes you to the quiz
	$("#queen-lingo-quiz").on("click", function() {
		clickSound.play();
		$('.queen-lingo').addClass('hidden');
		$('.queen-lingo-question').removeClass('hidden');
		generateHTML();
		timerWrapper();
		randomOrder();
	});


	// This checks if the answer is correct after user clicks
	$("body").on("click", ".answer", function(event){
		clickSound.play();
		selectedAnswer = $(this).text();
		if(selectedAnswer === queenLingo[askedQuestions[i]].correct) {
			clearInterval(theClock);
			generateWin();
		}
		else {
			clearInterval(theClock);
			generateLoss();
		}
	});


	//Button click on game over screen to go back to category card
	$("body").on("click", ".reset-button", function(event) {
		clickSound.play();
		resetGame();
	});

});


//Function to generate the Question Card
function generateHTML() {
	gameHTML = "<h1>QUEEN LINGO</h1><h3>Question <span id='question-counter'>" + (questionCounter + 1) + "</span></h3><p class='score-float'><b class='bold'>SCORE</b> <span>" + correctTally + "</span>pts</p><p class='question'><span>" + queenLingo[askedQuestions[i]].question + "</span></p><p class='timer'><b class='bold'>TIMER</b> <span id='timer'></span>s</p><div id='countdown-number'></div><svg><circle r='18' cx='20' cy='20'></circle></svg></div><ul class='lives-count'><li id='lives-text'><b class='bold'>LIVES </b>" + lives + " <span> <i class='material-icons heart'>favorite</i></span></li></ul><div class='row answers'><div class='col s12 m12 l6 xl6'><p class='first-answer answer'>" + queenLingo[askedQuestions[i]].answers[0] + "</p><p class='answer'>" + queenLingo[askedQuestions[i]].answers[1] + "</p></div><div class='col s12 m12 l6 xl6'><p class='answer'>" + queenLingo[askedQuestions[i]].answers[2] + "</p><p class='answer'>" + queenLingo[askedQuestions[i]].answers[3] + "</p></div></div>";
		$(".queen-lingo-question").html(gameHTML);
}


//Function to Generate the Correct Card
function generateWin() {
	correctTally += counter;
	gameHTML = "<h1>CORRECT</h1><div class='row'><div class='col s12 m12 l6 xl6'>" + queenLingo[askedQuestions[i]].correctImage + "</div><div class='correct-text col s12 m12 l6 xl6'><p>CONDRAGULATIONS! You Guessed Right</p><ul><li><b class='bold'>TIME</b> <span>" + counter + "s</span></li><li><b class='bold'>SCORE</b> <span>" + counter + "pts</span></li><li><b class='bold'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='correct-next'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".correct").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".correct").html(gameHTML);
	$("#correct-next").on('click', function(){
		$(".correct").addClass('hidden');
		$(".queen-lingo-question").removeClass('hidden');
		wait();
	})
}

//Function to Generate the Wrong Card
function generateLoss() {
	lives -= 1;
	incorrectTally++;
	gameHTML = "<h1>WRONG</h1><div class='row'><div class='col s12 m12 l6 xl6'>" + queenLingo[askedQuestions[i]].wrongImage +
	"</div><div class='wrong-text col s12 m12 l6 xl6'><p>SASHAY AWAY! You lost a life!</p><p class='correct-text'>CORRECT ANSWER: </p><p class='correct-answer'>" + queenLingo[askedQuestions[i]].correct + "</p><ul><li id='lives-text'><b class='bold'>LIVES </b>" + lives + " <span> <i class='material-icons heart'>favorite</i></span></li><li><b class='bold'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='wrong-next'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".wrong").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".wrong").html(gameHTML);
	$("#wrong-next").on('click', function(){
		$(".wrong").addClass('hidden');
		$(".queen-lingo-question").removeClass('hidden');
		wait();
	})
}

//Function that generates a loss due to not answering in time
function generateLossDueToTimeOut() {
	lives -= 1;
	unansweredTally++;
	gameHTML = "<h1>OUT OF TIME</h1><div class='row'><div class='col s12 m12 l6 xl6'>" + queenLingo[askedQuestions[i]].wrongImage +
	"</div><div class='wrong-text col s12 m12 l6 xl6'><p>SASHAY AWAY! You lost a life!</p><ul><li id='lives-text'><b class='bold'>LIVES </b>" + lives + " <span><i class='material-icons heart'>favorite</i></span></li><li><b class='bold'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='wrong-next'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".wrong").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".wrong").html(gameHTML);
	$("#wrong-next").on('click', function(){
		$(".wrong").addClass('hidden');
		$(".queen-lingo-question").removeClass('hidden');
		wait();
	})
}

//Function to display gameover screen
function finalScreen() {
	gameHTML = "<h1>GAME OVER</h1><div class='row'><div class='col s12 m12 l6 xl6'><img src='img/byeGirl.gif' class='responsive-img image-center'></div><div class='game-over-text col s12 m12 l6 xl6'><p>BYE GIRL BYE!</p><ul><li><b class='bold'>Incorrect</b> <span>" + incorrectTally + "</span><li><li><b class='bold'>Unanswered</b> <span>" + unansweredTally + "</span><li><li><b class='bold dark'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='game-over-btn'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".game-over").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".game-over").html(gameHTML);
	resetGame();
	$("#game-over-btn").on('click', function() {
		$('.game-over').addClass('hidden');
		$('.category').removeClass('hidden');
	})
}

//Function to display Win screen
function winScreen() {
	gameHTML = "<h1>YOU WON!</h1><div class='row'><div class='col s12 m12 l6 xl6'><img src='img/youWon.gif' class='responsive-img image-center'></div><div class='game-over-text col s12 m12 l6 xl6'><p>You really know your drag trivia!</p><ul><li><b class='bold'>Incorrect</b> <span>" + incorrectTally + "</span><li><li><b class='bold'>Unanswered</b> <span>" + unansweredTally + "</span><li><li><b class='bold dark'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='game-over-btn'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".game-over").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".game-over").html(gameHTML);
	resetGame();
	$("#game-over-btn").on('click', function() {
		$('.game-over').addClass('hidden');
		$('.category').removeClass('hidden');
	})
}


//Function to check if there are still questions left to ask & what the new counter time should be
function wait() {
	if (questionCounter < queenLingo.length - 1 && lives > 0) {
	questionCounter++;
	askedQuestions[i++]
	generateHTML();
	if (correctTally >= 150) {
	counter = 6;
	timerWrapper();
	}
	else if (correctTally >= 120) {
	counter = 8;
	timerWrapper();
	}
	else if (correctTally >= 90) {
	counter = 10;
	timerWrapper();
	}
	else if (correctTally >= 50) {
	counter = 13;
	timerWrapper();
	}
	else {
	counter = 15;
	timerWrapper();
	}
	}
	else if (questionCounter = queenLingo.length - 1 && lives > 0) {
		winScreen();
	}
	else {
		finalScreen();
	}
}


//Function to create the 15s timer
function timerWrapper() {
	theClock = setInterval(selectSeconds, 1000);
	$("#timer").html(counter);
	function selectSeconds() {
		if (counter === 1) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$("#timer").html(counter);
	}
}

//
//function timerAnimation() {
//	timerHTML = "<div id='countdown'><div id='countdown-number'></div><svg><circle r='18' cx='20' cy='20'></circle></svg></div>";
//	var countdownNumber = $('#countdown-number');
//	var counter = 15;
//
//	countdownNumber.textContent = counter;
//
//	setInterval(function() {
//		counter = --counter <= 0 ? 15 : counter;
//
//		countdownNumber.textContent = counter;
//	}, 1000);
//
//}


//CREATE function to display you won screen

//CREATE function to modify the timer

//CREATE function to use random number to select question index
	//also make sure question isn't repeated

//OTHER OPTION: Shuffle the question array on start and then output in that order

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	lives = 5;
	counter = 15;
	askedQuestions = [];
	inProcess = true;
	randomOrder();
}

//VARIABLES
var startScreen;
var gameHTML;
var counter = 15;
var queenLingo = [
	{
	"question": "What does fishy mean?",
	"answers": ["You look like a real girl", "You smell bad", "You are acting sketchy", "You like to drink too much"],
	"correct": "You look like a real girl",
	"correctImage": "<img class='img-responsive img-center' src='img/fishy.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail1.gif'>"
	}, {
	"question": "What does spilling the tea mean?",
	"answers": ["You are clumsy", "Give me the gossip", "Who even drinks tea?", "Saying something stupid"],
	"correct": "Give me the gossip",
	"correctImage": "<img class='img-responsive img-center' src='img/tea.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail2.gif'>"
	}, {
	"question": "What does snatched mean?",
	"answers": ["Stealing something", "Looking perfect", "Looking like you have a vagina", "Stealing a wig"],
	"correct": "Looking perfect",
	"correctImage": "<img class='img-responsive img-center' src='img/Snatched.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail3.gif'>"
	}, {
	"question": "What does beat mean?",
	"answers": ["Looking ugly", "Dancing with the rythm", "Having flawless face makeup", "To win a contest"],
	"correct": "Having flawless face makeup",
	"correctImage": "<img class='img-responsive img-center' src='img/beat.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail4.gif'>"
	}, {
	"question": 	"What does ki ki mean?",
	"answers": ["A gossip session", "Kinky", "Sex", "A girly name"],
	"correct": "A gossip session",
	"correctImage": "<img class='img-responsive img-center' src='img/kiki.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail5.gif'>"
	}, {
	"question": "What does tucking mean?",
	"answers": ["Plastic surgery", "Fixing your clothes", "Hiding your dick", "Doing a perfect flip"],
	"correct": "Hiding your dick",
	"correctImage": "<img class='img-responsive img-center' src='img/tuck.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail6.gif'>"
	}, {
	"question": "What does kai kai mean?",
	"answers": ["A quickie", "Drag Queen Sex", "Nickname for Kylie", "How Drag Queens say Okay"],
	"correct": "Drag Queen Sex",
	"correctImage": "<img class='img-responsive img-center' src='img/kaikai.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail7.gif'>"
	}, {
	"question": "What do cakes refer to?",
	"answers": ["Face", "Thighs", "Ankles", "Ass"],
	"correct": "Ass",
	"correctImage": "<img class='img-responsive img-center' src='img/cakes.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail8.gif'>"
	}, {
	"question": "Jesus is a biscuit....",
	"answers": ["Jesus isn't a biscuit!", "Amen!", "So let him sop you up!", "With extra gravy!"],
	"correct": "So let him sop you up!",
	"correctImage": "<img class='img-responsive img-center' src='img/biscuit.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail1.gif'>"
	}, {
	"question": "What does serving cheesecake mean?",
	"answers": ["A sexy thick girl", "Thick thighs", "Jiggly ass", "Looking rich"],
	"correct": "A sexy thick girl",
	"correctImage": "<img class='img-responsive img-center' src='img/cheesecake.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail2.gif'>"
	}, {
	"question": "What does trade mean?",
	"answers": ["Swapping looks", "Changing wigs", "A 'straight' man who might go gay", "Making money"],
	"correct": "A 'straight' man who might go gay",
	"correctImage": "<img class='img-responsive img-center' src='img/trade.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail3.gif'>"
	}, {
	"question": "What does shade mean?",
	"answers": ["Another word for a shadow", "Pointing out someone's flaws", "Doing something sketchy", "A hue of a color"],
	"correct": "Pointing out someone's flaws",
	"correctImage": "<img class='img-responsive img-center' src='img/shade.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail4.gif'>"
	}, {
	"question": "What does clocking someone mean?",
	"answers": ["Stealing their time", "Hitting them in the face", "Ignoring them", "Noticing a flaw"],
	"correct": "Noticing a flaw",
	"correctImage": "<img class='img-responsive img-center' src='img/clocked.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail5.gif'>"
	}, {
	"question": "What is a faux queen?",
	"answers": ["A biologically female queen", "A lying queen", "A queen who only wants money", "A fake queen"],
	"correct": "A biologically female queen",
	"correctImage": "<img class='img-responsive img-center' src='img/faux.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail6.gif'>"
	}, {
	"question": "What does feeling my oats mean?",
	"answers": ["Grabbing your ass", "To smoke weed", "Grab your balls", "To feel one's self"],
	"correct": "To feel one's self",
	"correctImage": "<img class='img-responsive img-center' src='img/feelingOats.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail7.gif'>"
	}, {
	"question": "What are the 5 G's",
	"answers": ["Go Get a Gurdle Girl, God!", "Good God, Get a Grip Girl!", "Gay Guys Get Great Girls!", "God Give me Good Gay Guys!"],
	"correct": "Good God, Get a Grip Girl!",
	"correctImage": "<img class='img-responsive img-center' src='img/5gs.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail8.gif'>"
	}, {
	"question": "What does for the gods mean?",
	"answers": ["Done perfectly", "Hail Oden!", "The Old and the New", "OMG"],
	"correct": "Done perfectly",
	"correctImage": "<img class='img-responsive img-center' src='img/gods.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail1.gif'>"
	}, {
	"question": "What does for days mean?",
	"answers": ["Being talkative", "To have a lot of something", "Be experienced", "Doing drag during the day"],
	"correct": "To have a lot of something",
	"correctImage": "<img class='img-responsive img-center' src='img/forDays.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail2.gif'>"
	}, {
	"question": "What does hunty stand for?",
	"answers": ["Honey + tea", "Honey + aunty", "It doesn't stand for anything", "Honey + Cunt"],
	"correct": "Honey + Cunt",
	"correctImage": "<img class='img-responsive img-center' src='img/hunty.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail3.gif'>"
	}, {
	"question": "What is a death drop?",
	"answers": ["To do a split", "To jump off stage", "Drop your wig on the floor", "To fall backwards into a struck pose"],
	"correct": "To fall backwards into a struck pose",
	"correctImage": "<img class='img-responsive img-center' src='img/DeathDrop.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail4.gif'>"
	}, {
	"question": "What does mug mean?",
	"answers": ["A face", "Stealing something", "A place to put coffee", "Bad makeup"],
	"correct": "A face",
	"correctImage": "<img class='img-responsive img-center' src='img/mug.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail5.gif'>"
	}, {
	"question": "What does reading mean?",
	"answers": ["To stare someone down", "To wittily expose a person's flaws", "Lipsyncing", "To be focused"],
	"correct": "To wittily expose a person's flaws",
	"correctImage": "<img class='img-responsive img-center' src='img/readFilth.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail6.gif'>"
	}, {
	"question": "What does sick'ning mean?",
	"answers": ["To look gross", "To look skinny", "To be beyond awesome", "To look scary"],
	"correct": "To be beyond awesome",
	"correctImage": "<img class='img-responsive img-center' src='img/sickening.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail7.gif'>"
	}, {
	"question": "What does squirrel friends mean?",
	"answers": ["Friends who hide their 'nuts'", "Best friends", "Friends who are crazy", "Friends who are sneaky"],
	"correct": "Friends who hide their 'nuts'",
	"correctImage": "<img class='img-responsive img-center' src='img/squirrel.gif'>",
	"wrongImage": "<img class='img-responsive img-center' src='img/fail8.gif'>"
	}
];

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var lives = 5;
var clickSound = new Audio("sound/TonguePop.mp3");
var askedQuestions = [];
var inProcess = true;
var i = 0;


//Function to generate random Question Order
function randomOrder() {
while(inProcess){
	var randomQuiz = Math.floor(Math.random() * queenLingo.length);
	var isDone = false;

	for (var i = 0; i < askedQuestions.length; i++) {
		if (askedQuestions[i] === randomQuiz)
			isDone = true;
	}
	if (!isDone) {
// 		console.log(queenLingo[randomQuiz].question);
		askedQuestions.push(randomQuiz);
	}
	if (queenLingo.length == askedQuestions.length)
		inProcess = false;
	}
}

console.log(randomOrder());

//if you run this function it will give me a list of all the questions in a random order each time.





