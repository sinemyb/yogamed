<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password,
        })

        this.$router.push('/member')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.login
    form(@submit="submitLogin")
      h1 Log in 
      label(for="email") Email&nbsp;
        input(v-model="email" id="email" type="email" placeholder="example@email.com" required)
      label(for="password") Password&nbsp;
        input(v-model="password" id="password" type="password" required)
      input(type="submit" value="Log in")
    div(v-if="backendError") {{ backendError }}
    div.foot-note Don't you have an account yet? <router-link to="/register">Sign up</router-link>
</template>

<style lang="scss" scoped>
.login {
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