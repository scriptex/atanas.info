<?php
function autoversion($url) {
	$ver  = filemtime(dirname(__FILE__) . DIRECTORY_SEPARATOR . $url);
	echo $url . '?v=' . $ver;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once('head.php'); ?>
</head>
<body>
	<?php include_once('assets/dist/sprite.svg'); ?>

	<div class="o-wrapper">
		<?php include_once('header.php'); ?>

		<div class="o-main">
			<?php include_once('sections/hello.php'); ?>

			<?php include_once('sections/about.php'); ?>

			<?php include_once('sections/skills.php'); ?>
		</div><!-- /.o-main -->

		<?php include_once('footer.php'); ?>
	</div><!-- /.o-wrapper -->

	<script src="<?php autoversion('assets/dist/app.js'); ?>"></script>

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-83446952-1"></script>

	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'UA-83446952-1');
	</script>
</body>
</html>
