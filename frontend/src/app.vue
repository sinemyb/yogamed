<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
    hideNavBar() {
      document.addEventListener('click', function(event) {
        if (event.target.classList.contains('navbar-toggler-icon')) {
          document.getElementById('navbarNav').classList.toggle('show');
        } else if (event.target.classList.contains('nav-link')) {
          document.getElementById('navbarNav').classList.remove('show');
        }
      });
    },
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>

<template lang='pug'>
  #app
    #nav
      .home
      nav.navbar.navbar-expand-lg.navbar-light.bg-light.navbar.fixed-top.navbar-light.bg-light.fixed-top
        .container-fluid
          a.nav-link(href='/') YOGAMED
          button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
          #navbarNav.collapse.navbar-collapse
            ul.navbar-nav
              li.nav-item
                a.nav-link(href='/') Home
              li.nav-item
                a.nav-link(href='/events') Yoga & Meditation
              li.nav-item
                a.nav-link(href='/profile') Members
            ul.nav-buttons(:user='user')
              .user-buttons(v-if='user')
                a.button.btn.btn-primary.nav-item(@click='doLogout') Logout
              .user-profile-buttons(v-else)
                a.button.btn.btn-primary.nav-item(href='/login') Log in
                a.button.btn.btn-primary.nav-item(href='/register') Sign up
    router-view

 </template>

<style lang='scss'>
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #4d5965;
  
}

#nav {
  padding: 50px;

  a {
    font-weight: bold;
    color: #4d5965;

    &.router-link-exact-active {
      color: #00c2cb;
    }
  }
  .nav-buttons {
    margin-left: auto;
    padding: 10px;
  }
  .nav-item {
    margin-left: 20px;
  }
}
</style>
