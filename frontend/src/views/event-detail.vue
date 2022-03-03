<script>
import EventCard from '@/components/event-card.vue'
import { mapActions } from 'vuex'

export default {
    name: 'EventDetail',
    components: { EventCard },
    data() {
        return {
            event: null,
    }
},
async created() {
    this.event = await this.fetchEvent(this.$route.params.id)
    
},
methods: {
    ...mapActions(['fetchEvent']),
    
    },
}
</script>

<template lang="pug">
    .about
        h1 Event detail
        EventCard(:event="event")
        
</template>