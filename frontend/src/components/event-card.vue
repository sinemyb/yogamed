<script>
export default {
  name: 'EventCard',
  props: ['event'],
  data() {
    return {};
  },
}
</script>

<template lang="pug">
.box
  div
    p Name  {{event.name}}
    p Date and Time {{ event.date }} at {{ event.time }}
    p Location {{ event.location }}
    p Attendees {{ event.acceptedBy }}
    p Organizer {{ event.createdBy }}

</template>

<style lang="scss" scoped>
.box {
  padding: 2em;
  border: 1px solid #212121;
  background: #00c2cb;
  border-radius: 0.3rem;
}
</style>


