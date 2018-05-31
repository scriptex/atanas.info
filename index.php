<?php
function critical_css($path = '/assets/dist/critical.css') {
	$critical = __DIR__ . $path;

	if ( file_exists($critical) ) {
		$critical_css = file_get_contents($critical);

		echo '<style type="text/css" id="critical-css">' . $critical_css . '</style>';
	}
}

function autoversion($url) {
	echo $url . '?v=' . filemtime(__DIR__ . DIRECTORY_SEPARATOR . $url);
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

			<?php include_once('sections/slides.php'); ?>
		</div><!-- /.o-main -->

		<?php include_once('footer.php'); ?>
	</div><!-- /.o-wrapper -->

	<script src="<?php autoversion('assets/dist/app.js'); ?>" async defer></script>
</body>
</html>
