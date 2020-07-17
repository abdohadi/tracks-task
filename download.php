<?php

include_once('core/init.php');

if (Session::exists('login_id')) {
	// Download file
	$url = Request::get('url');
	if(File::download($url)) { 
		echo 'success';
	} 
}
