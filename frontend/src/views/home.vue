<script>
import HomeCard from '@/components/home-card.vue'
import { mapActions } from 'vuex'

export default {
    name: 'Home',
    components:  { HomeCard },
    data() {
        return {
            events: []
        }
    },
    async created() {
        this.events = await this.fetchEvents()
    },
    methods: {
        ...mapActions(['fetchEvents']),
		},
}
</script>

<template lang='pug'>
.home
	h2.text-primary Practice Yoga and Meditation with your favourite groups!
		HomeCard
</template>

<style lang='scss' scoped>
h2 {
	margin-top: 20px;
    font-weight: bold;
    text-align: center
}
</style>



