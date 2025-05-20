let swiperInstance = null; 
function swiperCard() {
	if (window.innerWidth <= 767) {
		swiperInstance = swiperInstance || new Swiper('.swiper', {
			direction: 'horizontal',
			autoHeight: false,
			freeMode: false,
			slidesPerView: 1.2,
			spaceBetween: 32,
			loop: false,
			breakpoints: {
				480: {
					slidesPerView: 1.7,
				}
			}
		});
	} else if (swiperInstance) {
		swiperInstance.destroy(true, true);
		swiperInstance = null;
	}
}

window.addEventListener("resize", swiperCard);
document.addEventListener("DOMContentLoaded", swiperCard);