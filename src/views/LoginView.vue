<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-title class="justify-center">
            <span class="headline">Login</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login()">
              <v-text-field v-model="user.email" label="E-mail" outlined></v-text-field>
              <v-text-field v-model="user.password" label="Senha" outlined type="password"></v-text-field>
              <v-btn type="submit" color="primary" block>Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'pinia';
import { useAuthenticationStore } from "@/stores/authentication.js"

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      }
    };
  },
  watch:{
    'user.email'(newValue) {
      this.setUserMail(newValue)
    },
    'user.password'(newValue) {
      this.setPassword(newValue)
    }
  },
  methods: {
    ...mapActions(useAuthenticationStore, ['doLogin', 'setUserMail', 'setPassword']),
    login() {
      this.doLogin()
      this.$router.push('home')
    }
  }
};
</script>

<style>
.elevation-12 {
  padding: 20px;
  border-radius: 8px;
}
</style>