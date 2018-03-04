import Swiper from 'swiper/dist/js/swiper';

export const initSliders = () => {
	const hello = new Swiper('#slider-hello .swiper-container', {
		speed: 700,
		loop: true,
		effect: 'cube',
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		}
	});

	return {
		hello
	};
};
