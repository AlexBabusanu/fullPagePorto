<?php require("shared/header.php"); ?>

<div class="website" style="background-image:url(<?= $website["image"] ?>)">
	<div class="title">
		<h1><?= $_GET["w"] ?></h1>
		<a href="/"><i class="far fa-times-circle"></i></a>
	</div>

	<!-- <img src="<?= $website["image"] ?>"> -->
	
</div>
<div class="details">
	<div class="visit">
		<a href="" class="visitButton">Visit Website</a>
	</div>
	<div class="textSegment">
			<h1>The website</h1>
			<div class="break"></div>
			<p><?= $website["about"] ?></p>
	</div>
	<div class="responsiveImg">
			<img src="<?= $website["imageResponsive"] ?>">
	</div>	
	<div class="container">
	
		<div class="textSegment">
				<h2><?= $website["info"]["title"] ?> </h2>
				<div class="break"></div>
				<p><?= $website["info"]["detail"] ?></p>
			</div>
		<div class="info">			
			<img src="<?= $website["imageFull"]?>">			
		</div>	
		<div class="imagesText">
			<h4>Technologies used</h4>
			<div class="break"></div>
			<p><?= $website["tech"] ?></p>
		</div>
		<div class="dualImages">
			<img src="<?=$website["firstHalfImage"]?>">
			<img src="<?=$website["secondHalfImage"]?>">
		</div>		
	</div>
</div>

<div class="arrows">
	<a href="/website?w=<?= $prev?>">
		<?= $prev; ?>
		<br>
		<p>Previous Project</p>
		<i style="left:10px" class="fas fa-arrow-alt-circle-left"></i>
	</a>
	<a href="/website?w=<?= $next?>">
		<?= $next; ?>
		<br>
		<p>Next Project</p>
		<i style="right:10px" class="fas fa-arrow-alt-circle-right"></i>
	</a>
</div>

<?php require("shared/footer.php"); ?>