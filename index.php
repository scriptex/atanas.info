<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>Atanas Atanasov | Full Stack Web Developer</title>

	<link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicon/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicon/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicon/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicon/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicon/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicon/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicon/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicon/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="assets/images/favicon/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="assets/images/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="assets/images/favicon/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="assets/images/favicon/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="assets/images/favicon/favicon-128.png" sizes="128x128" />
	<link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon/favicon.ico" />
	<meta name="application-name" content="Atanas Atanasov"/>
	<meta name="msapplication-TileColor" content="#000000" />
	<meta name="msapplication-TileImage" content="assets/images/favicon/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="assets/images/favicon/mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="assets/images/favicon/mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="assets/images/favicon/mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="assets/images/favicon/mstile-310x310.png" />
	<meta name="theme-color" content="#000000" />

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quattrocento+Sans%7CWork+Sans" />
	<link rel="stylesheet" href="assets/dist/app.css" />
</head>
<body>
	<?php include_once('assets/dist/sprite.svg'); ?>

	<div class="o-wrapper">
		<?php include_once('header.php'); ?>

		<div class="o-main">
			<section class="c-section c-section--hello" id="hello">
				<div class="o-shell">
					<div class="c-canvas" id="canvas"></div><!-- /.c-canvas -->

					<div class="c-slider" id="slider-hello">
						<h1>Hello World! <br>I am Atanas Atanasov, a</h1>

						<div class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<h2>Full Stack Web Developer</h2>
								</div><!-- /.swiper-slide -->

								<div class="swiper-slide">
									<h2>CSS Experimenter</h2>
								</div><!-- /.swiper-slide -->

								<div class="swiper-slide">
									<h2>JavaScript Master</h2>
								</div><!-- /.swiper-slide -->

								<div class="swiper-slide">
									<h2>Father</h2>
								</div><!-- /.swiper-slide -->

								<div class="swiper-slide">
									<h2>NodeJS Enthusiast</h2>
								</div><!-- /.swiper-slide -->
							</div><!-- /.swiper-wrapper -->
						</div><!-- /.swiper-container -->
					</div><!-- /#slider-hello.c-slider -->
				</div><!-- /.o-shell -->
			</section><!-- /#hello.c-section c-section-/-hello -->

			<section class="c-section c-section--about fullsize-background" id="about" style="background-image: url(assets/images/temp/desktop.jpg);">
				<div class="o-shell">About</div><!-- /.o-shell -->
			</section><!-- /#about.c-section c-section-/-about fullsize-background -->

			<section class="c-section c-section--skills" id="skills">
				<div class="o-shell">Skills</div><!-- /.o-shell -->
			</section><!-- /#skills.c-section c-section-/-skills -->

			<section class="c-section c-section--portfolio" id="portfolio">
				<div class="o-shell">Portfolio</div><!-- /.o-shell -->
			</section><!-- /#portfolio.c-section c-section-/-portfolio -->

			<section class="c-section c-section--hire" id="hire">
				<div class="o-shell">Hire</div><!-- /.o-shell -->
			</section><!-- /#hire.c-section c-section-/-hire -->
		</div><!-- /.o-main -->

		<?php include_once('footer.php'); ?>
	</div><!-- /.o-wrapper -->

	<script src="assets/dist/app.js"></script>
</body>
</html>
