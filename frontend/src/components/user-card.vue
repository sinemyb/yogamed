<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'This user has no bio.'
    }
  }
}
</script>

<template lang="pug">
.box
  h1 {{ user.name }} 
  p Location: {{ user.location }}
  p Introduction: {{ user.bio || defaultBio }}
  h2 Event(s) ({{ user.events.length }})   
  .event(v-for="event in user.events")
    router-link(:to="`/events/${event._id}`") {{ event.name }}
  div(v-if='!user.events.length')
    | no events yet

</template>

<style lang="scss" scoped>
.box {
  padding: 2em;
  border: 1px solid #00c2cb;
  background: #00c2cb;
  border-radius: 0.3rem;
}
</style>


