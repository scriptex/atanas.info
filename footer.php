<?php $links = [
	[
		'url'  => 'mailto:hi@atanas.info',
		'icon' => 'email'
	],
	[
		'url'  => 'https://www.linkedin.com/in/scriptex/',
		'icon' => 'linkedin'
	],
	[
		'url'  => 'https://github.com/scriptex',
		'icon' => 'github'
	],
	[
		'url'  => 'https://gitlab.com/scriptex',
		'icon' => 'gitlab'
	],
	[
		'url'  => 'https://twitter.com/scriptexbg',
		'icon' => 'twitter'
	],
	[
		'url'  => 'https://www.npmjs.com/~scriptex',
		'icon' => 'npm'
	],
]; ?>

<div class="c-footer">
	<div class="o-shell o-shell--flex">
		<p>&copy; <?php echo date( 'Y' ); ?> Atanas Atanasov. All rights reserved.</p>

		<nav class="c-socials">
			<ul>
				<?php foreach ($links as $link) : ?>
					<li>
						<a href="<?php echo $link['url'] ?>">
							<svg class="svg-<?php echo $link['icon'] ?>">
								<use xlink:href="#svg-<?php echo $link['icon'] ?>" />
							</svg>
						</a>
					</li>
				<?php endforeach ?>
			</ul>
		</nav><!-- /.c-socials -->
	</div><!-- /.o-shell o-shell-/-flex -->
</div><!-- /.c-footer -->
