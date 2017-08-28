$(document).ready(function () {
	$('.enter').on('click', function() {
		$('.welcome').addClass('hidden');
		$('.instructions').removeClass('hidden');
	})
	$('#instructions-next').on('click', function() {
		$('.instructions').addClass('hidden');
		$('.category').removeClass('hidden');
	})
	$('#btn-queen-lingo').on('click', function() {
		$('.category').addClass('hidden');
		$('.queen-lingo').removeClass('hidden');
	})
	$('#btn-name-queen').on('click', function() {
		$('.category').addClass('hidden');
		$('.name-queen').removeClass('hidden');
	})
	$('#btn-who-said').on('click', function() {
		$('.category').addClass('hidden');
		$('.who-said').removeClass('hidden');
	})
	$('#btn-herstory').on('click', function() {
		$('.category').addClass('hidden');
//	$('.').removeClass('hidden');
	})
	$('#btn-drag-transform').on('click', function() {
		$('.category').addClass('hidden');
//	$('.').removeClass('hidden');
	})
	$('#btn-mix-all').on('click', function() {
		$('.category').addClass('hidden');
//	$('.').removeClass('hidden');
	})
	$('#home').on('click', function() {
		$('.welcome').removeClass('hidden');
		$('.instructions').addClass('hidden');
		$('.category').addClass('hidden');
		$('.queen-lingo').addClass('hidden');
		$('.name-queen').addClass('hidden');
		$('.who-said').addClass('hidden');

	})
	$('#instructions').on('click', function() {
		$('.instructions').removeClass('hidden');
		$('.welcome').addClass('hidden');
		$('.category').addClass('hidden');
		$('.queen-lingo').addClass('hidden');
		$('.name-queen').addClass('hidden');
			$('.who-said').addClass('hidden');

	})
	$('#categories').on('click', function() {
		$('.category').removeClass('hidden');
		$('.welcome').addClass('hidden');
		$('.instructions').addClass('hidden');
		$('.queen-lingo').addClass('hidden');
		$('.name-queen').addClass('hidden');
		$('.who-said').addClass('hidden');
	})
})


//way to hide current