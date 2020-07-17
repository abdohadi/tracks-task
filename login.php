<?php 

include_once('core/init.php');

if (Request::exists() && !Session::exists('login_id')) {
	Session::put('login_id', random_int(1, 1000));

	echo "success";
} else {
	header('Location: index.php');
}