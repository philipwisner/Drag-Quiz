$(document).ready(function () {
	$('.enter').on('click', function () {
		$('.welcome').addClass('hidden');
		$('.instructions').removeClass('hidden');
	});
	$('#instructions-next').on('click', function () {
		$('.instructions').addClass('hidden');
		$('.category').removeClass('hidden');
	});
	$('#btn-queen-lingo').on('click', function () {
		$('.category').addClass('hidden');
		$('.queen-lingo').removeClass('hidden');
	});
	$('#btn-name-queen').on('click', function () {
		$('.category').addClass('hidden');
		$('.name-queen').removeClass('hidden');
	});
	$('#btn-who-said').on('click', function () {
		$('.category').addClass('hidden');
		$('.who-said').removeClass('hidden');
	});
	$('#btn-herstory').on('click', function () {
		$('.category').addClass('hidden');
		$('.herstory').removeClass('hidden');
	});
	$('#btn-drag-transform').on('click', function () {
		$('.category').addClass('hidden');
		$('.drag-transform').removeClass('hidden');
	});
	$('#btn-mix-all').on('click', function () {
		$('.category').addClass('hidden');
		$('.mix-all').removeClass('hidden');
	});
	function hideCards () {
		$('.queen-lingo').addClass('hidden');
		$('.queen-lingo-question').addClass('hidden');
		$('.name-queen').addClass('hidden');
		$('.name-queen-question').addClass('hidden');
		$('.who-said').addClass('hidden');
		$('.who-said-question').addClass('hidden');
		$('.herstory').addClass('hidden');
		$('.herstory-question').addClass('hidden');
		$('.drag-transform').addClass('hidden');
		$('.drag-transform-question').addClass('hidden');
		$('.mix-all').addClass('hidden');
		$('.correct').addClass('hidden');
		$('.wrong').addClass('hidden');
		$('.game-over').addClass('hidden');
}
	$('#home').on('click', function () {
		$('.welcome').removeClass('hidden');
		$('.instructions').addClass('hidden');
		$('.category').addClass('hidden');
		hideCards();
	});
	$('#instructions').on('click', function () {
		$('.instructions').removeClass('hidden');
		$('.welcome').addClass('hidden');
		$('.category').addClass('hidden');
		hideCards();
	});
	$('#categories').on('click', function () {
		$('.category').removeClass('hidden');
		$('.welcome').addClass('hidden');
		$('.instructions').addClass('hidden');
		hideCards();
	});
	$('#queen-lingo-quiz').on('click', function () {
		
	});
});



//way to hide current
