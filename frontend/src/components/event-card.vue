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
	.container
		.card(style='width: 18rem;')
				img.card-img-top(alt="yoga_centralpark" width=300 src="../assets/yoga-centralpark.jpeg")
				.card-body
						h5.card-title {{ event.name }}
						p.card-text
								| XXXXXXXXXXXX
				ul.list-group.list-group-flush
						li.list-group-item Date and Time : {{ event.date }} {{ event.time }}
						li.list-group-item Location : {{ event.location }}
						li.list-group-item Attendees : {{ event.acceptedBy }}
				.card-body
						router-link.card-link(:to='`/events/${event._id}`') See more events...

</template>

<style lang="scss" scoped>
.box {
  padding: 2em;
  border: 1px solid #212121;
  border-radius: 0.3rem;
  background: rgb(52, 102, 133);
  color: #00c2cb;
}
</style>


