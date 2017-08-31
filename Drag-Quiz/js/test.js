$(document).ready(function () {

// When you click the next arrow on Queen-Lingo it takes you to the quiz
$("#queen-lingo-quiz").on("click", function() {
	clickSound.play();
	$('.queen-lingo').addClass('hidden');
	$('.queen-lingo-question').removeClass('hidden');
	timerWrapper();
	generateHTML();
});


// This checks if the answer is correct after user clicks
$("body").on("click", ".answer", function(event){
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswersQueenLingo[questionCounter]) {
		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
});

//Click on restart button to go back to category card
$("body").on("click", ".reset-button", function(event) {
	clickSound.play();
	resetGame();
});

});

//Funcction that generates a loss due to not answering in time
function generateLossDueToTimeOut() {
	lives -= 1;
	unansweredTally++;
	gameHTML = "<h1>OUT OF TIME</h1><div class='row'><div class='col s12 m12 l6 xl6'>" + imageArrayWrong[questionCounter] +
	"</div><div class='wrong-text col s12 m12 l6 xl6'><p>SASHAY AWAY! You lost a life!</p><ul><li id='lives-text'><b class='bold'>LIVES </b>" + lives + " <span><i class='material-icons heart'>favorite</i></span></li><li><b class='bold'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='wrong-next'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".wrong").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".wrong").html(gameHTML);
	$("#wrong-next").on('click', function(){
		$(".wrong").addClass('hidden');
		$(".queen-lingo-question").removeClass('hidden');
		setTimeout(wait, 0);
	})
}

//Function to Generate the Correct Card
function generateWin() {
	correctTally += counter;
	gameHTML = "<h1>CORRECT</h1><div class='row'><div class='col s12 m12 l6 xl6'>" + imageArrayCorrect[questionCounter] + "</div><div class='correct-text col s12 m12 l6 xl6'><p>CONDRAGULATIONS! You Guessed Right</p><ul><li><b class='bold'>TIME</b> <span>" + counter + "s</span></li><li><b class='bold'>SCORE</b> <span>" + counter + "pts</span></li><li><b class='bold'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='correct-next'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".correct").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".correct").html(gameHTML);
	$("#correct-next").on('click', function(){
		$(".correct").addClass('hidden');
		$(".queen-lingo-question").removeClass('hidden');
		setTimeout(wait, 0);
	})
}


//Function to Generate the Wrong Card
function generateLoss() {
	lives -= 1;
	incorrectTally++;
	gameHTML = "<h1>WRONG</h1><div class='row'><div class='col s12 m12 l6 xl6'>" + imageArrayWrong[questionCounter] +
	"</div><div class='wrong-text col s12 m12 l6 xl6'><p>SASHAY AWAY! You lost a life!</p><ul><li id='lives-text'><b class='bold'>LIVES </b>" + lives + " <span> <i class='material-icons heart'>favorite</i></span></li><li><b class='bold'>TOTAL</b> <span>" + correctTally + "pts</span><li></ul><a class='btn-floating btn-large waves-effect waves-light pink lighten-3 arrow' id='wrong-next'><i class='material-icons'>navigate_next</i></a></div></div>";
	$(".wrong").removeClass('hidden');
	$(".queen-lingo-question").addClass('hidden');
	$(".wrong").html(gameHTML);
	$("#wrong-next").on('click', function(){
		$(".wrong").addClass('hidden');
		$(".queen-lingo-question").removeClass('hidden');
		setTimeout(wait, 0);
	})
}

//Function to generate the Question Card
function generateHTML() {
		gameHTML = "<h1>QUEEN LINGO</h1><h3>Question <span id='question-counter'>" + randomQuiz + "</span></h3><p class='score-float'><b class='bold'>SCORE</b> <span>" + correctTally + "</span>pts</p><p class='question'><span>" + questionQueenLingo[randomQuiz] + "</span></p><p class='timer'><b class='bold'>TIMER</b> <span id='timer'></span>s</p><ul class='lives-count'><li id='lives-text'><b class='bold'>LIVES </b>" + lives + " <span> <i class='material-icons heart'>favorite</i></span></li></ul><div class='row answers'><div class='col s12 m12 l6 xl6'><p class='first-answer answer'>" + answersQueenLingo[randomQuiz][0] + "</p><p class='answer'>" + answersQueenLingo[randomQuiz][1] + "</p></div><div class='col s12 m12 l6 xl6'><p class='answer'>" + answersQueenLingo[randomQuiz][2] + "</p><p class='answer'>" + answersQueenLingo[randomQuiz][3] + "</p></div></div>";
		$(".queen-lingo-question").html(gameHTML);
}


//Function to check if there are still questions left to ask
function wait() {
	if (questionCounter < questionQueenLingo.length - 1 && lives > 0) {
	questionCounter++;
	generateHTML();
	if (correctTally >= 50) {
	counter = 13;
	timerWrapper();
	} else {
	counter = 15;
	timerWrapper();
	}
	}
	else {
		finalScreen();
	}
}
// WRITE A SWITCH FOR POINT VALUES



//Function to create the 15s timer
function timerWrapper() {
	theClock = setInterval(selectSeconds, 1000);
	function selectSeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$("#timer").html(counter);
	}
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

//CREATE function to display you won screen

//CREATE function to modify the timer

//CREATE function to use random number to select question index
	//also make sure question isn't repeated

//OTHER OPTION: Shuffle the question array on start and then output in that order

function resetGame() {
	questionCounter = 1;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	lives = 5;
	counter = 15;
	askedQuestions = [];
	inProcess = true;
}

//Change the Lingo arrays to objects?

var startScreen;
var gameHTML;
var counter = 15;
var questionQueenLingo = [
	"",
	"What does fishy mean?",
	"What does spilling the tea mean?",
	"What does snatched mean?",
	"What does beat mean?",
	"What does ki ki mean?",
	"What does tucking mean?",
	"What does kai kai mean?",
	"What do cakes refer to?",
	"Jesus is a biscuit....",
	"What does serving cheesecake mean?",
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
	["", "", "", ""],
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
	"",
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

var imageArrayCorrect = ["",
									"<img class='img-responsive img-center' src='img/fishy.gif'>",
									"<img class='img-responsive img-center' src='img/tea.gif'>",
									"<img class='img-responsive img-center' src='img/Snatched.gif'>",
									"<img class='img-responsive img-center' src='img/beat.gif'>",
									"<img class='img-responsive img-center' src='img/kiki.gif'>",
									"<img class='img-responsive img-center' src='img/tuck.gif'>",
									"<img class='img-responsive img-center' src='img/kaikai.gif'>",
									"<img class='img-responsive img-center' src='img/cakes.gif'>",
									"<img class='img-responsive img-center' src='img/biscuit.gif'>",
									"<img class='img-responsive img-center' src='img/cheesecake.gif'>",
									"<img class='img-responsive img-center' src='img/trade.gif'>",
									"<img class='img-responsive img-center' src='img/shade.gif'>",
									"<img class='img-responsive img-center' src='img/clocked.gif'>",
									"<img class='img-responsive img-center' src='img/faux.gif'>",
									"<img class='img-responsive img-center' src='img/feelingOats.gif'>",
									"<img class='img-responsive img-center' src='img/5gs.gif'>",
									"<img class='img-responsive img-center' src='img/gods.gif'>",
									"<img class='img-responsive img-center' src='img/forDays.gif'>",
									"<img class='img-responsive img-center' src='img/hunty.gif'>",
									"<img class='img-responsive img-center' src='img/DeathDrop.gif'>",
									"<img class='img-responsive img-center' src='img/mug.gif'>",
									"<img class='img-responsive img-center' src='img/readFilth.gif'>",
									"<img class='img-responsive img-center' src='img/sickening.gif'>",
									"<img class='img-responsive img-center' src='img/squirrel.gif'>",
								 ];

var imageArrayWrong = ["",
									"<img class='img-responsive img-center' src='img/fail1.gif'>",
									"<img class='img-responsive img-center' src='img/fail2.gif'>",
									"<img class='img-responsive img-center' src='img/fail3.gif'>",
									"<img class='img-responsive img-center' src='img/fail4.gif'>",
									"<img class='img-responsive img-center' src='img/fail5.gif'>",
									"<img class='img-responsive img-center' src='img/fail6.gif'>",
									"<img class='img-responsive img-center' src='img/fail7.gif'>",
									"<img class='img-responsive img-center' src='img/fail8.gif'>",
									"<img class='img-responsive img-center' src='img/fail1.gif'>",
									"<img class='img-responsive img-center' src='img/fail2.gif'>",
									"<img class='img-responsive img-center' src='img/fail3.gif'>",
									"<img class='img-responsive img-center' src='img/fail4.gif'>",
									"<img class='img-responsive img-center' src='img/fail5.gif'>",
									"<img class='img-responsive img-center' src='img/fail6.gif'>",
									"<img class='img-responsive img-center' src='img/fail7.gif'>",
									"<img class='img-responsive img-center' src='img/fail8.gif'>",
									"<img class='img-responsive img-center' src='img/fail1.gif'>",
									"<img class='img-responsive img-center' src='img/fail2.gif'>",
									"<img class='img-responsive img-center' src='img/fail3.gif'>",
									"<img class='img-responsive img-center' src='img/fail4.gif'>",
									"<img class='img-responsive img-center' src='img/fail5.gif'>",
									"<img class='img-responsive img-center' src='img/fail6.gif'>",
									"<img class='img-responsive img-center' src='img/fail7.gif'>",
									"<img class='img-responsive img-center' src='img/fail8.gif'>",
									"<img class='img-responsive img-center' src='img/fail1.gif'>",
									"<img class='img-responsive img-center' src='img/fail2.gif'>",
									"<img class='img-responsive img-center' src='img/fail3.gif'>",
									"<img class='img-responsive img-center' src='img/fail4.gif'>",
								 ];

var questionCounter = 1;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var lives = 5;
var clickSound = new Audio("sound/TonguePop.mp3");
var askedQuestions = [];
var inProcess = true;

//Function to generate random Question Order
while(inProcess){
	var randomQuiz = Math.floor(Math.random() * questionQueenLingo.length);
	var isDone = false;

	for (var i = 0; i < askedQuestions.length; i++) {
		if (askedQuestions[i] === randomQuiz)
			isDone = true;
	}
	if (!isDone) {
//		console.log(questionQueenLingo[randomQuiz]);
		askedQuestions.push(randomQuiz);
	}
	if (questionQueenLingo.length == askedQuestions.length)
		inProcess = false;
	}