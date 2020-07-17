<?php 

class File
{
	public static function download($url)
	{
		return file_put_contents('files/' . basename($url), file_get_contents($url));
	}
}