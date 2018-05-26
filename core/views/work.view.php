<?php require("shared/header.php"); ?>

<div class="website">
	<div class="title">
		<h1><?= $_GET["w"] ?></h1>
	</div>
	<img src="<?= $website["image"] ?>">
	
</div>
<div class="details">
	<div class="container">
		<h1>The website</h1>
		<div class="break"></div>
		<p><?= $website["about"] ?></p>				
	</div>
</div>
<div class="responsiveImg">
<img src="<?= $website["imageResponsive"] ?>">
</div>
<div class="details">
<div class="container">
	<div class="info">
			<img src="<?= $website["imageFull"]?>">
			<div class="aboutWebsite">
				<h2><?= $website["info"]["title"] ?> </h2>
				<div class="break"></div>
				<p><?= $website["info"]["detail"] ?></p>
			</div>
		</div>
</div>
</div>
<div class="arrows">
	<div class="leftArrow"><a href="/website?w=<?= $prev?>"><?= $prev; ?><br>Previous Project</a></div>
	<div class="rightArrow"><a href="/website?w=<?= $next?>"><?= $next; ?><br>Next Project</a></div>
</div>

<?php require("shared/footer.php"); ?>