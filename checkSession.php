<?php 

include_once('core/init.php');

if (Session::exists('login_id')) {
	echo 'found';
} else {
	echo 'notfound';
}