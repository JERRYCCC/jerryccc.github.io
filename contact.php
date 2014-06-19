<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];


	if($_POST['submit']){

		mail("czwjerry@gmail.com", $name, $message))
	}
?>

