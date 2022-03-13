<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      location: '',
      email: '',
      password: '',

      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          location: this.location,
          email: this.email,
          password: this.password,
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.register
    h1 Sign up 
    form( @submit="submitLogin")
      label(for="name") Name&nbsp;
        input(v-model="name" id="name" type="text" required)
      label(for="email") Email&nbsp;
        input(v-model="email" id="email" type="email" placeholder="example@email.com" required)
      label(for="password") Password&nbsp;
        input(v-model="password" id="password" type="password" required)
      label(for="location") Location&nbsp;
        input(v-model="location" id="location" type="location" required)
      input(type="submit" value="Sign up")
    div(v-if="backendError") {{ backendError }}
    div.foot-note Already a member? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin: 50px;

  h1 {
    color: #00c2cb;
    font-size: 30px;
    text-align: center;
  }

  .label {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-size: 20px;
    text-align: left;
  }
  .foot-note {
    margin-top: 40px;
    font-size: 20px;

    a {
      color: #00c2cb;
    }
  }
  button {
    background-color: #00c2cb;
  }
}
label {
  display: block;
  margin: 1rem 0;
  font-size: 20px;

  input {
    width: 100%;
    border-color: #00030642;
    font-size: 18px;
    border-radius: 8px;
    background: none;
  }
}
.text-error {
  color: white;
  font-weight: bold;
  margin: 20px;
}
</style>
