<template>
  <div>
    <router-link :to="{ name: 'login'}">vai pro login</router-link>

    <v-btn @click="redirectToLogin">vai pro login</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
    
    }
  },
  methods: {
    redirectToLogin() {
      this.$router.push('login')

    }
  }
}
</script>