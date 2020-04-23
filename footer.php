<?php $links = [
	[
		'url'   => 'mailto:hi@atanas.info',
		'icon'  => 'email',
		'title' => 'Send me an email',
	],
	[
		'url'   => 'https://www.linkedin.com/in/scriptex/',
		'icon'  => 'linkedin',
		'title' => 'Find me on LinkedIn',
	],
	[
		'url'   => 'https://github.com/scriptex',
		'icon'  => 'github',
		'title' => 'See my projects on Github',
	],
	[
		'url'   => 'https://gitlab.com/scriptex',
		'icon'  => 'gitlab',
		'title' => 'See my projects on Gitlab',
	],
	[
		'url'   => 'https://twitter.com/scriptexbg',
		'icon'  => 'twitter',
		'title' => 'Follow me on Twitter',
	],
	[
		'url'   => 'https://www.npmjs.com/~scriptex',
		'icon'  => 'npm',
		'title' => 'See my packages on NPM',
	],
	[
		'url'   => 'https://codepen.io/scriptex/',
		'icon'  => 'codepen',
		'title' => 'See my work on Codepen',
	],
	[
		'url'	=> 'https://profile.codersrank.io/user/scriptex',
		'icon'	=> 'codersrank',
		'title'	=> 'See my profile on Codersrank'
	]
]; ?>

<footer class="c-footer">
	<div class="o-shell o-shell--flex">
		<p>&copy; <?php echo date( 'Y' ); ?> Atanas Atanasov. <br class="visible-xs-block">All rights reserved.</p>

		<nav class="c-socials">
			<ul>
				<?php foreach ($links as $link) : ?>
					<li>
						<a href="<?php echo $link['url']; ?>" title="<?php echo $link['title']; ?>" target="_blank" rel="noopener noreferrer nofollow">
							<svg class="svg-<?php echo $link['icon']; ?>">
								<use xlink:href="#svg-<?php echo $link['icon']; ?>" />
							</svg>
						</a>
					</li>
				<?php endforeach ?>

				<li>
					<a href="https://sourcerer.io/scriptex" target="_blank" rel="noopener noreferrer nofollow" title="See my profile on Sourcerer">
						<img src="https://sourcerer.io/icons/logo-sharing.svg" width="32" alt="Sourcerer brand image" />
					</a>
				</li>
			</ul>
		</nav><!-- /.c-socials -->
	</div><!-- /.o-shell o-shell-/-flex -->
</footer><!-- /.c-footer -->
