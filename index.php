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

	<?php critical_css(); ?>

	<link rel="preload" href="<?php autoversion('assets/dist/app.css'); ?>" as="style" />
</head>
<body>
	<?php include_once('assets/dist/sprite.svg'); ?>

	<div class="o-wrapper">
		<?php include_once('header.php'); ?>

		<div class="o-main">
			<?php include_once('sections/hello.php'); ?>

			<?php include_once('sections/about.php'); ?>

			<?php include_once('sections/skills.php'); ?>

			<?php include_once('sections/portfolio.php'); ?>

			<?php include_once('sections/slides.php'); ?>
		</div><!-- /.o-main -->

		<?php include_once('footer.php'); ?>
	</div><!-- /.o-wrapper -->

	<div id="music"></div>

	<link rel="stylesheet" href="<?php autoversion('assets/dist/app.css'); ?>" />

	<?php if (file_exists('assets/dist/app.m.js')): ?>
		<script type="module" src="<?php autoversion('assets/dist/app.m.js'); ?>" async defer></script>

		<script type="nomodule" src="<?php autoversion('assets/dist/app.js'); ?>" async defer></script>
	<?php else: ?>
		<script src="<?php autoversion('assets/dist/app.js'); ?>" async defer></script>
	<?php endif; ?>

	<script src="https://profile.codersrank.io/widget/widget.js"></script>
</body>
</html>
