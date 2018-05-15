<?php require("shared/header.php"); ?>

<div class="navigation">
	<?php foreach ($info as $site) :?>
		<p><a href=""><?= $site["name"] ?></a></p>
	<?php endforeach; ?>
</div>
<div class="images">
<?php foreach($info as $site) : ?>
	<div class="page"">
		<div class="image">
			<img src="<?=$site['image']?>">
		</div>
		<div class="hello">
			<h1><?= $site["name"] ?></h1>
		</div>
		<div class="cover"></div>
	</div>
<?php endforeach; ?>
</div>


<?php require("shared/footer.php"); ?>