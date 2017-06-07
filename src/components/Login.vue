<template>
    <div>
      <div class="login-box">
          <h1>Login</h1>
      </div>

      <div>
          <div class="input-box">
              <input type="text" v-model="user.username" placeholder="Your Username">
              <input type="password" v-model="user.password" placeholder="Your Password">
          </div>
          <div class="button-box">
              <div class="button-back">
                  <button @click="navigateHome">
                      Go Back
                  </button>
              </div>
              <div class="button-login">
                  <button @click="loginUser">
                      Login Now
                  </button>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
      data () {
        return {
          user: {
            username: '',
            password: ''
          }
        }
      },
      computed: {
        authenticated() {
          return this.$store.getters.authenticated;
        }
      },
      methods: {
        ...mapActions([
          'logingInUser'
        ]),
        navigateHome() {
          this.$router.go(-1);
        },
        loginUser() {
          const userInfo = {
            username: this.user.username,
            password: this.user.password
          };
          // console.log('user', user);
          this.logingInUser(userInfo);

          if (this.authenticated) {
            this.$router.push({path: '/panel'});
          }

          this.user = {
            username: '',
            password: ''
          };
        }
      }
    }
</script>

<style scoped>
  /*========================*/
          /* Login Box */
  /*========================*/
  .login-box {
      display: flex;
      justify-content: center;
      border: 2px solid #4b4be5;
      width: 700px;
      margin: 0 auto;
      margin-top: 20px;
      border-radius: 20px;
  }
  .login-box h1 {
      font-size: 100px;
      margin: 10px;
  }

  /*========================*/
          /* Form Box */
  /*========================*/
  .input-box {
      display: flex;
      flex-direction: column;
      width: 40%;
      margin: 5% auto;
  }
  .input-box input {
      padding: 20px;
      font-size: 20px;
      margin: 10px;
      text-align: center;
      border: 2px solid #6fcfeb;
  }
  .input-box input:nth-child(1) {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
  }
  .input-box input:nth-child(2) {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
  }

  /*========================*/
          /* Button Box */
  /*========================*/
  .button-box {
      display: flex;
      justify-content: space-around;
      width: 60%;
      margin: 0 auto;
      margin-top: 5%;
      height: 100px;
  }
  .button-back,
  .button-login {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .button-back button,
  .button-login button {
      display: flex;
      flex-grow: 1;
      height: 100%;
      font-size: 130%;
      border: 2px solid #4b4be5;
      justify-content: center;
  }
  .button-back button {
      border-top-left-radius: 40%;
      border-bottom-left-radius: 40%;
      background-color: #fff;
  }
  .button-login button {
      border-top-right-radius: 40%;
      border-bottom-right-radius: 40%;
      background-color: #6fcfeb;
  }
</style>
