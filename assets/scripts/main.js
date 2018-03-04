import { initSliders } from './slider';
import { initCanvas, createDots } from './canvas';

const canvas = initCanvas('canvas');

createDots(canvas);
initSliders();
