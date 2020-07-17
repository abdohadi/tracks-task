$(function() {
	// Show left side elements 
	showLeftElements();


	// Get tracks from the API
	$.get('https://api.jsonbin.io/b/5eafd4ca47a2266b1472794c', addTracksToDOM)
		.done(showTracks)
		.fail(showFailedMessage);


	// Hide login form
	$(document).on('click', (e) => {
		if (e.target.classList.contains('x') || e.target.classList.contains('form-section')) {
			hideLoginSection();
		}
	});


	// Send request to download page when clicking the download btn 
	$(document).on('click', '.download-btn', (e) => {
		e.preventDefault();

		// Get and save download url
		window.curDownloadURL = e.target.href;

		$.get('checkSession.php', (response) => {
			if (response == 'notfound') {
				// Clear inputs
				$('.form-section').find('input[name="username"]').val('');

				// Show login from
				showLoginSection();
			} else {
				download();
			}
		})
		.fail(showFailedMessage);
	});


	// Log user in when submitting login form and redirect to download page
	$('.login-form').on('submit', (e) => {
		e.preventDefault();

		let data = {
			username: $(this).find('input[name="username"]').val(),
			password: $(this).find('input[name="password"]').val()
		};

		if (window.curDownloadURL) {
			// Hide login form
			hideLoginSection();

			// Login user
			$.post('login.php', data, function(response) {
				if (response == 'success') {
					download();
				}
			})
			.fail(showFailedMessage);
		}
	});

	
	// Show session message after downloading
	$('.msg').each((index, el) => {
		if (el.innerHTML != '') {
			el.style.left = '10px';
		}
	});

	setTimeout(() => {
		$('.msg').animate({
			left: "-350px"
		}, 500);
	}, 5000);
});


/**********************
 * CUSTOM FUNCTIONS
 */

function showLeftElements() {
	$('.main .left h1').fadeIn(1000);

	$('.main .left p').animate({
		opacity: 1,
		top: 0
	}, 1000);
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
					<a href="download.php?url=${track.url}" class="download-btn btn">Download</a>
				</div>
			</div>
		`;

		$('.tracks').append(html);
	});
}

// Show elements with animation
function showTracks() {
	$('.main .left h1, .tracks-heading').fadeIn(1000);
	
	$('.track').each(function(index) {
		let seconds = 200 * (index + 1);

		$(this).animate({
			bottom: 0,
			opacity: 1
		}, seconds);
	});
}

// Show message when the API fails
function showFailedMessage() {
	let html = `
		<div class="fail msg">Sorry! Something went wrong. The API could not load. <br> Please try again later.</div>
	`;

	$('body').append(html);

	$('.fail').css('left', '10px');
}

// Show login form
function showLoginSection() {
	$('.form-section').animate({
		right: 0
	}, 400);
}

// Hide login form
function hideLoginSection() {
	$('.form-section').animate({
		right: "1500px"
	}, 400);
}

// Download track
function download() {
	// Show the download waiting layer
	$('.downloading').css({
		left: 0,
		right: 0
	}).fadeIn(500);

	// Download file to our server then to user
	$.get(window.curDownloadURL, (response) => {
		if (response == 'success') {
			$('.d-link').remove();
			
			let filename = window.curDownloadURL.substring(window.curDownloadURL.lastIndexOf('/') + 1);
			let fileURL = `/files/${filename}`;

			$('body').append(`<a class="d-link" target="_blank" href="${fileURL}" download></a>`);

			$('.d-link')[0].click();
		}

		// hide the download waiting layer
		$('.downloading').css({
			left: "-160px",
			right: "auto"
		}).fadeOut(200);
	})
	.fail(showFailedMessage);
}