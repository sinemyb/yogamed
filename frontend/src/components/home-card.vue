<script>
export default {
    name: 'HomeCard',
    props: ['events'],
    data() {
        return {}
    }
}
</script>

<template lang='pug'>
	.box
		#carouselExampleCaptions.carousel.slide(data-bs-ride='carousel')
			.carousel-indicators
				button.active(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
				button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2')
				button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3')
			.carousel-inner
				.carousel-item.active
					img.d-block.w-100(alt="yogamed_main" width=300 src="../assets/yogamed-main.jpeg")
					.carousel-caption.d-none.d-md-block
						h5 EXPLORE THE EVENTS 
						p Join the fun!
				.carousel-item
					img.d-block.w-100(alt="yogamed_main" width=300 src="../assets/yogamed-main.jpeg")
					.carousel-caption.d-none.d-md-block
						h5 DISCOVER EVENTS & GROUPS
						p Yoga 
				.carousel-item
					img.d-block.w-100(alt="yogamed_main" width=300 src="../assets/yogamed-main.jpeg")
					.carousel-caption.d-none.d-md-block
						h5 DISCOVER EVENTS & GROUPS
						p Meditation 
			button.carousel-control-prev(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev')
				span.carousel-control-prev-icon(aria-hidden='true')
				span.visually-hidden Previous
			button.carousel-control-next(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next')
				span.carousel-control-next-icon(aria-hidden='true')
				span.visually-hidden Next			
</template>

<style lang='scss' scoped>


</style>