import { Hello } from '.';
import { Slider } from './slider';
import { mockUseEffect } from '../../scripts/shared';
import { snapshotTestWithUnmount } from '..';

describe('Slider component', () => {
	snapshotTestWithUnmount(Slider);
});

describe('Hello component', () => {
	mockUseEffect();
	snapshotTestWithUnmount(Hello);
});
