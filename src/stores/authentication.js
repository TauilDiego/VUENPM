import axios from 'axios';
import {
  defineStore
} from 'pinia'


export const useAuthenticationStore = defineStore('authentication', {

  state: () => ({
    userIsLogged: false,
    user: {
      email: "",
      password: ""
    }
  }),

  getters: {
    getAuthUser: (state) => state.user
  },

  actions: {
    setUserMail(payload){ this.user.email = payload },
    setPassword(payload){ this.user.password = payload },

    doLogin() {
      axios({
        method: "post",
        url: "http://localhost/login",
        data: this.getAuthUser,
      })
      .then(() =>{
        this.userIsLogged = true
      })
    }
  }
})