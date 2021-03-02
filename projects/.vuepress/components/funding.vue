<template>
	<div class="funding">
		<h2>Sponsor this project</h2>

		<ul>
			<li v-for="link in links" :key="link.name">
				<a :href="link.url" target="_blank">
					<vp-icon :name="link.icon" />
					On {{ link.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ url: 'https://github.com/sponsors/scriptex', name: 'Github', icon: 'github' },
				{ url: 'https://patreon.com/atanas', name: 'Patreon', icon: 'patreon' },
				{ url: 'https://ko-fi.com/scriptex', name: 'Ko-fi', icon: 'ko-fi' },
				{ url: 'https://liberapay.com/scriptex', name: 'Liberapay', icon: 'liberapay' },
				{ url: 'https://issuehunt.io/r/scriptex', name: 'IssueHunt', icon: 'issuehunt' },
				{ url: 'http://paypal.me/scriptex', name: 'PayPal', icon: 'paypal' }
			]
		};
	}
};
</script>

<style lang="stylus">
.funding
	a,
	ul
		display flex
		flex-flow row wrap
		align-items center
		justify-content flex-start

	ul
		padding 0.5rem 0
		margin 0 -0.5rem
		list-style none outside none

	li
		padding 0.5rem 0.5rem

	a
		font-size: 0.75rem;
		color $codeBgColor
		padding 0.25rem 0.75rem
		cursor pointer
		background $textColor
		border-radius 0.75rem

		&:hover
			color $textColor
			text-decoration none !important
			background-color $accentColor

			svg
				fill $codeBgColor


	svg {
		width 1.25rem
		height 1.25rem
		display block
		padding 0.125rem
		margin-right 0.5rem
		background-color $textColor
		border-radius 50%
	}
</style>
