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
		<div class="c-header">
			<div class="o-shell o-shell--flex">
				<a href="#hello" class="c-logo js-internal-link">
					<svg class="svg-logo">
						<use xlink:href="#svg-logo" />
					</svg><!-- /.svg-logo -->
				</a>

				<nav class="c-nav">
					<ul>
						<li>
							<a href="#about" class="js-internal-link">About Me</a>
						</li>

						<li>
							<a href="#skills" class="js-internal-link">Skills</a>
						</li>

						<li>
							<a href="#portfolio" class="js-internal-link">Portfolio</a>
						</li>

						<li>
							<a href="#hire" class="js-internal-link">Hire Me</a>
						</li>
					</ul>
				</nav><!-- /.c-nav -->
			</div><!-- /.o-shell o-shell-/-flex -->
		</div><!-- /.c-header -->

		<div class="o-main">
			<section class="c-section c-section--hello is--current" id="hello">
				<div class="o-shell">Hello</div><!-- /.o-shell -->
			</section><!-- /#hello.c-section c-section-/-hello -->

			<section class="c-section c-section--about" id="about">
				<div class="o-shell">About</div><!-- /.o-shell -->
			</section><!-- /#about.c-section c-section-/-about -->

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

		<div class="c-footer">
			<div class="o-shell o-shell--flex">
				<p>&copy; <?php echo date( 'Y' ); ?> Atanas Atanasov. All rights reserved.</p>

				<nav class="c-socials">
					<ul>
						<li>
							<a href="mailto:hi@atanas.info" target="_blank" rel="noopener noreferrer">
								<svg class="svg-email">
									<use xlink:href="#svg-email" />
								</svg><!-- /.svg-email -->
							</a>
						</li>

						<li>
							<a href="https://github.com/scriptex" target="_blank" rel="noopener noreferrer">
								<svg class="svg-github">
									<use xlink:href="#svg-github" />
								</svg><!-- /.svg-github -->
							</a>
						</li>

						<li>
							<a href="https://gitlab.com/scriptex" target="_blank" rel="noopener noreferrer">
								<svg class="svg-gitlab">
									<use xlink:href="#svg-gitlab" />
								</svg><!-- /.svg-gitlab -->
							</a>
						</li>

						<li>
							<a href="https://twitter.com/scriptexbg" target="_blank" rel="noopener noreferrer">
								<svg class="svg-twitter">
									<use xlink:href="#svg-twitter" />
								</svg><!-- /.svg-twitter -->
							</a>
						</li>

						<li>
							<a href="https://www.npmjs.com/~scriptex" target="_blank" rel="noopener noreferrer">
								<svg class="svg-npm">
									<use xlink:href="#svg-npm" />
								</svg><!-- /.svg-npm -->
							</a>
						</li>

						<li>
							<a href="https://www.linkedin.com/in/scriptex/" target="_blank" rel="noopener noreferrer">
								<svg class="svg-linkedin">
									<use xlink:href="#svg-linkedin" />
								</svg><!-- /.svg-linkedin -->
							</a>
						</li>
					</ul>
				</nav><!-- /.c-socials -->
			</div><!-- /.o-shell o-shell-/-flex -->
		</div><!-- /.c-footer -->
	</div><!-- /.o-wrapper -->

	<script src="assets/dist/app.js"></script>
</body>
</html>
