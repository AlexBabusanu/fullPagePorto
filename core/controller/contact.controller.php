<?php



if(isset($_POST["submitted"])){
	
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$error = [];	

	if(strlen($name) < 3 || strlen($name) > 50){
		$error["name"] ="The name must be between 3 and 50 characters long.";
	}
	if(!preg_match("/^[a-zA-Z ]*$/", $name)) {
		$error["name"] = "The name must contain only letters and white spaces.";
	}
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$error["email"] = "The email must be vaild";
	}
	if(strlen($message) < 1) {
		$error["message"] = "Please include a message";
	}

	else {
		mail("babusanualex@yahoo.com", $name, $message, $email);
	}
}




require_once("core/views/contact.view.php");
