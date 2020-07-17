<?php 
	include_once('core/init.php');
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Tracks Task</title>

	<link rel="stylesheet" href="layout/css/style.css">
</head>
<body>

	<section class="main overlay flex">
		<div class="left column-center">
			<div>
				<h1>WELCOME TO OUR PLAYLIST</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas distinctio optio aspernatur, quas vero, ipsam. Saepe vel eum, repellendus temporibus?</p>
			</div>
		</div>
		
		<div class="right">
			<div class="tracks-container column-center">
				<div class="tracks">
					<h2 class="tracks-heading">CHOOSE YOUR FAVOURITE TRACK</h2>
	
					<!-- All tracks are added here -->
				</div>
			</div>
		</div>
	</section>

	<div class="form-section overlay">
		<div class="form-container">
			<div class="form-head">You need to login in order to download</div>

			<form class="login-form" action="login.php" method="POST">
				<div>
					<input type="text" name="username" placeholder="Username">
				</div>

				<div>
					<input type="password" name="password" placeholder="Password">
				</div>
				
				<div>
					<input type="submit" value="Login" class="btn login-btn">
				</div>
			</form>

			<span class="x" draggable="true">x</span>
		</div>
	</div>

	<div class="downloading"><span>Preparing the file.... <br> Please wait!</span></div>


	<script type="text/javascript" src="layout/js/jquery.min.js"></script>
	<script type="text/javascript" src="layout/js/script.js"></script>
</body>
</html>