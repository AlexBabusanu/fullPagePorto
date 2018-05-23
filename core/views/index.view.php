<?php require("shared/header.php"); ?>


<div class="navigation">
	<div class="navTop">
		<ul>
		<?php foreach ($info as $site) :?>
			<li>
				<h3><?= $site["name"] ?></h3>
				<div class="breakW"></div>
			</li>
			
		<?php endforeach; ?>
		</ul>
	</div>
	<div class="main">
	<ul class="front">
		<?php foreach ($info as $site) :?>
			<li><h1><a href="website/<?= $site["name"] ?>"><?= $site["name"] ?></a></h1></li>
			
		<?php endforeach; ?>
	</ul>
</div>
	<div class="navBot">
		<ul>
		<?php foreach ($info as $site) :?>			
			<li>
				<div class="breakW"></div>
				<h3><?= $site["name"] ?></h3>
			</li>
		<?php endforeach; ?>
	</ul>
	</div>
</div>
<div class="images">
	<?php foreach($info as $site) : ?>
		<div class="page">
			<div class="pageName"><a href=""><h1><?= $site["name"] ?></h1></a></div>
			<div class="image">
				
				<img src="<?=$site['image']?>">
			</div>
			
			<div class="cover"></div>
		</div>
	<?php endforeach; ?>
</div>

<?php require("shared/footer.php"); ?>