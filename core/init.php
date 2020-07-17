<?php 

session_start();

set_time_limit(0);

spl_autoload_register(function($className) {
	include_once $_SERVER['DOCUMENT_ROOT'] . '/classes/' . $className . '.php';
});