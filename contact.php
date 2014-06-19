<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];


	if($_POST['submit']){

		if(mail("czwjerry@gmail.com", $name, $email, $from)){
			echo "Your message has been sent!";
		}else{
			echo "Finish the form and Try again!";
		}
	}
?>