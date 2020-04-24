<?php $badges = [
	'https://img.shields.io/badge/JavaScript-1112%20commits-yellow.svg',
	'https://img.shields.io/badge/CSS-658%20commits-blue.svg',
	'https://img.shields.io/badge/PHP-430%20commits-purple.svg',
	'https://img.shields.io/badge/HTML-305%20commits-pink.svg',
	'https://img.shields.io/badge/TypeScript-160%20commits-lightblue.svg',
	'https://img.shields.io/badge/Wolfram-5%20commits-orange.svg',
	'https://img.shields.io/badge/C-5%20commits-grey.svg',
	'https://img.shields.io/badge/Gradle-5%20commits-red.svg',
	'https://img.shields.io/badge/Java-5%20commits-green.svg',
	'https://img.shields.io/badge/Objective–C-5%20commits-lightgrey.svg',
	'https://img.shields.io/badge/Shell-1%20commits-darkred.svg',
]; ?>

<section class="c-section c-section--skills" id="skills">
	<h2>Skills <br><small>(Drag the bubbles to play)</small></h2>

	<div id="skills-graph"></div><!-- /#skills-graph -->

	<div class="c-section__actions">
		<?php include('hire-me.php'); ?>
	</div><!-- /.c-section__actions -->
</section><!-- /#skills.c-section c-section-/-skills -->

<section class="c-section c-section--stats" id="stats">
	<div class="o-shell">
		<h1>Stats</h1>

		<div class="o-grid">
			<div class="o-grid__item o-grid__item--1of2">
				<h2>Commits (based on data by <a href="https://sourcerer.io/scriptex" target="_blank" rel="noopener noreferrer nofollow">Sourcerer</a>)</h2>

				<ul>
					<?php foreach ($badges as $badge) : ?>
						<li>
							<a href="https://sourcerer.io/scriptex" target="_blank" rel="noopener noreferrer nofollow">
								<img src="<?php echo $badge; ?>">
							</a>
						</li>
					<?php endforeach ?>
				</ul>
			</div>

			<div class="o-grid__item o-grid__item--1of2">
				<h2><a href="https://profile.codersrank.io/user/scriptex" target="_blank" rel="noopener noreferrer nofollow">Codersrank</a> Profile</h2>

				<codersrank-widget username="scriptex"></codersrank-widget>
			</div>
		</div>

		<div class="c-section__actions">
			<?php include('hire-me.php'); ?>
		</div><!-- /.c-section__actions -->
	</div>
</section>
