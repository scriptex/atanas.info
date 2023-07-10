import { Property } from 'csstype';
import { css, SerializedStyles } from '@emotion/react';

export type FlexOptions = {
	wrap: Property.FlexWrap;
	display: 'flex' | 'inline-flex';
	direction: Property.FlexDirection;
	alignItems: Property.AlignItems;
	justifyContent: Property.JustifyContent;
};

export type HoudiniPaints = 'bubbles' | 'circles' | 'parallelowow' | 'bytemare' | 'blotto';

export const flex = ({
	wrap = 'nowrap',
	display = 'flex',
	direction = 'row',
	alignItems = 'center',
	justifyContent = 'space-between'
}: Partial<FlexOptions> = {}): SerializedStyles => css`
	display: ${display};
	flex-flow: ${direction} ${wrap};
	align-items: ${alignItems};
	justify-content: ${justifyContent};
`;

export const onHover = (style: TemplateStringsArray): SerializedStyles => css`
	@media (-ms-high-contrast: none), (-ms-high-contrast: active), (-moz-touch-enabled: 0), (hover) {
		${css(style)};
	}
`;

export const onTabletLandscape = (style: TemplateStringsArray): SerializedStyles => css`
	@media (max-width: 1279px) {
		${css(style)};
	}
`;

export const onTabletPortrait = (style: TemplateStringsArray): SerializedStyles => css`
	@media (max-width: 1023px) {
		${css(style)};
	}
`;

export const onMobile = (style: TemplateStringsArray): SerializedStyles => css`
	@media (max-width: 767px) {
		${css(style)};
	}
`;

export const prefersReducedMotion = (style: TemplateStringsArray): SerializedStyles => css`
	@media (prefers-reduced-motion: reduce) {
		${css(style)};
	}
`;

export const withHoudiniSupport =
	(paint: HoudiniPaints): ((style: TemplateStringsArray) => SerializedStyles) =>
	(style: TemplateStringsArray): SerializedStyles => css`
		@supports (background-image: paint(${paint})) {
			.${paint} {
				${css(style)};
			}
		}
	`;

export const cssCustomProperties: SerializedStyles = css`
	:root {
		--base: 51, 51, 51;
		--primary: 255, 255, 255;
		--secondary: 0, 0, 0;
		--action: 239, 76, 35;
		--font-sans-serif: system-ui;
		--color-base: rgb(var(--base));
		--color-primary: rgb(var(--primary));
		--color-secondary: rgb(var(--secondary));
		--color-action: rgb(var(--action));
		--color-calendar-graph-day-bg: #ebedf0;
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.07);
		--color-calendar-graph-day-L0-bg: #ededed !important;
		--color-calendar-graph-day-L1-bg: #acd5f2 !important;
		--color-calendar-graph-day-L2-bg: #7fa8c9 !important;
		--color-calendar-graph-day-L3-bg: #527ba0 !important;
		--color-calendar-graph-day-L4-bg: #254e77 !important;
		/* prettier-ignore */
		--houdini-color: var(--color-action), rgba(var(--action), 0.2), rgba(var(--action), 0.4);
		--parallelowow-tile-width: 24;
		--parallelowow-base-colors: var(--houdini-color);
		--parallelowow-probability: 0.5;
		--parallelowow-stroke-weight: 0.5;
		--bytemare-gap: 1;
		--bytemare-colors: var(--houdini-color);
		--bytemare-tile-size: 16;
		--bytemare-probability: 0.5;
		--blotto-color: var(--color-action);
		--blotto-tile-size: 8;
		--blotto-amplitude: 2.25;
		--blotto-max-opacity: 1;
		--blotto-blend-mode: multiply;
	}

	.theme-light {
		--color-base: rgb(var(--base));
		--color-primary: rgb(var(--secondary));
		--color-secondary: rgb(var(--primary));
		--color-action: rgb(var(--action));
		--color-calendar-graph-day-border: rgba(27, 31, 35, 0.3);
	}
`;

export const svgIconsStyles: SerializedStyles = css`
	[class^='svg-'] {
		display: inline-block;
		vertical-align: middle;
	}

	.c-svg-email {
		width: 1.5rem;
		height: 1.69rem;
		fill: currentColor;
	}

	.c-svg-github {
		width: 1.5rem;
		height: 1.63rem;
		fill: currentColor;
	}

	.c-svg-gitlab {
		width: 1.5rem;
		height: 1.63rem;
		fill: currentColor;
	}

	.c-svg-twitter {
		width: 1.5rem;
		height: 1.38rem;
		fill: currentColor;
	}

	.c-svg-npm {
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--color-secondary);
		background-color: currentColor;
		border-radius: 0.25rem;
	}

	.c-svg-stackoverflow {
		width: 1.5rem;
		height: 1.5rem;
		fill: currentColor;
	}

	.c-svg-youtube {
		width: 3rem;
		height: 1.5rem;
		fill: currentColor;
	}

	.c-svg-linkedin {
		width: 1.5rem;
		height: 1.63rem;
		fill: currentColor;
	}

	.c-svg-logo {
		width: 3.13rem;
		height: 3.13rem;
		fill: currentColor;
		stroke: currentColor;
		stroke-width: 0.25rem;
	}

	.c-svg-google-plus {
		width: 1.5rem;
		height: 1.5rem;
		fill: currentColor;
	}

	.c-svg-codepen {
		width: 1.5rem;
		height: 1.5rem;
		fill: currentColor;
	}

	.c-svg-codersrank {
		width: 2.5rem;
		height: 1.5rem;
	}

	.c-svg-external-link {
		fill: currentcolor;
		width: 1em;
		height: 1em;
		display: inline-block;
		vertical-align: middle;
		margin: -0.0625rem 0 0 0.25rem;
	}

	.svg-disconnected {
		& rect {
			fill: var(--color-secondary);
		}
	}
`;

export const fontStyles: SerializedStyles = css`
	[class^='icon-']:before,
	[class*=' icon-']:before {
		font-family: 'fontello', fantasy;
		font-style: normal;
		font-weight: normal;
		display: inline-block;
		text-decoration: inherit;
		width: 1em;
		margin-right: 0.2em;
		text-align: center;
		font-variant: normal;
		text-transform: none;
		line-height: 1em;
		margin-left: 0.2em;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-phone:before {
		content: '\\e800';
	}

	.icon-mail:before {
		content: '\\e801';
	}

	.icon-location:before {
		content: '\\e802';
	}

	.icon-link:before {
		content: '\\e803';
	}

	.icon-calendar:before {
		content: '\\e804';
	}

	.icon-star:before {
		content: '\\e805';
	}

	.icon-brush:before {
		content: '\\e806';
	}

	.icon-clock:before {
		content: '\\e807';
	}

	.icon-print:before {
		content: '\\e808';
	}

	.icon-download:before {
		content: '\\e809';
	}

	.icon-share:before {
		content: '\\f1e0';
	}
`;

export const keyframes: SerializedStyles = css`
	@keyframes float {
		0%,
		100% {
			transform: translate(0rem, 0rem);
		}

		50% {
			transform: translate(-1rem, -1rem);
		}
	}

	@keyframes stars {
		from {
			transform: translateY(0px);
		}

		to {
			transform: translateY(-2000px);
		}
	}

	@keyframes drop-vertical {
		from {
			top: -50%;
		}

		to {
			top: 110%;
		}
	}

	@keyframes drop-horizontal {
		from {
			left: -50%;
		}

		to {
			left: 110%;
		}
	}

	@keyframes loading {
		0% {
			width: 0;
			height: 0;
			opacity: 1;
		}

		100% {
			width: 4.5rem;
			height: 4.5rem;
			opacity: 0;
		}
	}
`;

export const mainStyles: SerializedStyles = css`
	html,
	body,
	#root,
	#__next,
	.c-music,
	.o-main--high,
	.c-section--hello,
	.c-section--music,
	.c-section--music .o-shell {
		height: 100%;
	}

	body {
		color: var(--color-primary);
		background-color: var(--color-secondary);
	}

	@media (--hover) {
		a:hover {
			text-decoration: none;
		}
	}

	.o-grid {
		justify-content: flex-start;
	}

	.o-grid__item {
		padding-bottom: 1rem;
	}

	@media (--mobile) {
		.o-grid__item + .o-grid__item {
			padding-top: 1rem;
		}
	}

	.bubbles,
	.circles {
		background-attachment: initial;
	}

	${withHoudiniSupport('bubbles')`
		background-image: paint(bubbles);
		--bubbles-background: var(--color-secondary);
	`};

	${withHoudiniSupport('circles')`
		background-image: paint(circles);
	`};

	${withHoudiniSupport('parallelowow')`wow {
		background-color: var(--color-action);
		background-image: paint(parallelowow);
	`};

	${withHoudiniSupport('bytemare')`{
		background-color: var(--color-action);
		background-image: paint(bytemare);
	`};

	${withHoudiniSupport('blotto')`
		background-image: paint(blotto);
	`};

	${prefersReducedMotion`
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	`}
`;

export const globalStyles: SerializedStyles = css`
	${cssCustomProperties};
	${svgIconsStyles};
	${fontStyles};
	${keyframes};
	${mainStyles}
`;

export const slanted = (): SerializedStyles => css`
	color: var(--color-primary);
	display: inline-block;
	padding: 0.5rem 1rem;
	background: var(--color-action);

	@supports (background: paint(slanted-background)) {
		--slanted-background-color: var(--color-action);
		--slanted-background-opacity: 0.35;
		padding: 0.5rem 2rem 0.5rem 1rem;
		background: paint(slanted-background);
	}
`;

export const polygon = (sides: number): SerializedStyles => css`
	--avatar-sides: ${sides};
	--avatar-angle: 0deg;
	border-radius: 0;
	mask-image: paint(avatar-polygon);
`;

export const centered: SerializedStyles = css`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
`;

export const overlay: SerializedStyles = css`
	content: '';
	${centered};
	z-index: 1;
`;

export const withLoader: SerializedStyles = css`
	position: relative;

	& > div {
		${centered};
		z-index: 1;
	}
`;
