<?php 
require("shared/header.php");
?>


<div class="contact">
	<h1>Contact Me</h1>
	<div class="break"></div>
	<form action="/contact" method="post">
		<div class="input">
		<label>Your Name</label>
		<input type="text" name="name">
		<div class="error">
			<?php if(isset($error["name"])){
				echo $error["name"];
			} ?>
		</div>
		</div>
		<div class="input">
		<label>Your Email Adress</label>
		<input type="text" name="email">
		<div class="error">
			<?php if(isset($error["email"])){
				echo $error["email"];
			} ?>
		</div>
	</div>
	<div class="textArea">
		<label>Your Message</label>
		<textarea name="message"></textarea>
		<div class="error">
			<?php if(isset($error["message"])){
				echo $error["message"];
			} ?>
		</div>
	</div>
		<button type="submit" name="submitted">Submit</button>
	</form>
	<ul>
	<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
	<li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
	<li><a href=""><i class="fab fa-github"></i></a></li>
	<li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
</ul>
</div>

<?php require("shared/footer.php"); ?>