$(function() {
	// Get tracks from the API
	$.get('https://api.jsonbin.io/b/5eafd4ca47a2266b1472794c', addTracksToDOM)
	.done(showElements)
	.fail(showFailedMessage);

});


/**********************
 * CUSTOM FUNCTIONS
 */

// Show elements with animation
function showElements() {
	$('.main .left h1, .tracks-heading').fadeIn(1000);

	$('.main .left p').animate({
		opacity: 1,
		top: 0
	}, 1000);

	$('.track').each(function(index) {
		let seconds = 200 * (index + 1);

		$(this).animate({
			bottom: 0,
			opacity: 1
		}, seconds);
	});
}

// Append all tracks to the DOM
function addTracksToDOM(data) {
	data.tracks.forEach((track, index) => {
		let html = `
			<div class="track flex">
				<div class="track-num column-center">
					<div class="num-circle overlay"><span>${index + 1}</span></div>
				</div>

				<div class="track-info flex">
					<div class="column-center">
						<h3 class="track-name">${track.name}</h3>
						<div class="track-artist">${track.artist}</div>
					</div>

					<div class="track-length column-center">
						<span>${track.length}</span>
					</div>
				</div>

				<div class="track-download column-center">
					<button class="download-btn">Download</button>
				</div>
			</div>
		`;

		$('.tracks').append(html);
	});
}

// Show message when the API fails
function showFailedMessage() {
	let html = `
		<div class="fail">Sorry! Something went wrong. <br> Please try again later.</div>
	`;

	$('.main').append(html);
	$('.fail').fadeIn(1000);
}