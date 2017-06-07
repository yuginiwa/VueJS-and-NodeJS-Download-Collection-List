<template>
    <div>
      <div class="register-box">
          <h1>Register</h1>
      </div>
      <div>
          <div class="input-box">
              <input type="text" v-model="user.username" placeholder="Desire Username">
              <input type="password" v-model="user.password" placeholder="Desire Password">
              <input type="password" v-model="user.confirmPassword" placeholder="Re-type Password">
              <div class="input-gender-box">
                  <div class="input-gender">
                      Gender :
                      <input type="radio" v-model="user.gender" value="Male"> Male
                      <input type="radio" v-model="user.gender" value="Female"> Female
                  </div>
              </div>
              <input type="email" v-model="user.email" placeholder="Your Email Address">
              <input type="email" v-model="user.confirmEmail" placeholder="Re-type Email">
          </div>
          <div class="button-box">
              <div class="button-back">
                  <button @click="navigateHome">
                      Go Back
                  </button>
              </div>
              <div class="button-register">
                  <button @click='registerUser'>
                      Register Now!
                  </button>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
      data () {
        return {
          user: {
            username: '',
            password: '',
            confirmPassword: '',
            gender: 'Male',
            email: '',
            confirmEmail: ''
          }
        }
      },
      methods: {
        ...mapActions({
          registerUserActions: 'registerUser'
        }),
        ...mapGetters[
          'message'
        ],
        navigateHome() {
          this.$router.push({name: 'Home' })
        },
        registerUser() {
          if (this.user.password !== this.user.confirmPassword) {
            return this.message = 'Please confirm your password';
          }

          if (this.user.email !== this.user.confirmEmail) {
            return this.message = 'Please confirm your email';
          }

          const userInfo = {
            username: this.user.username,
            password: this.user.password,
            gender: this.user.gender,
            email: this.user.email
          };

          this.registerUserActions(userInfo);
          this.user = {
            username: '',
            password: '',
            confirmPassword: '',
            gender: 'Male',
            email: '',
            confirmEmail: ''
          };
        }
      }
    }
</script>

<style scoped>
  /*========================*/
          /* Register Box */
  /*========================*/
  .register-box {
      display: flex;
      justify-content: center;
      border: 2px solid #4b4be5;
      width: 700px;
      margin: 0 auto;
      margin-top: 20px;
      border-radius: 20px;
  }
  .register-box h1 {
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
      height: 500px;
  }
  .input-box input,
  .input-gender-box {
      font-size: 20px;
      margin: 10px;
      text-align: center;
      border: 2px solid #6fcfeb;
      flex-basis: 100px;
  }
  .input-box input:nth-child(1) {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
  }
  .input-box input:last-child {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
  }
  .input-gender {
      padding-top: 15px;
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
  .button-register {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .button-back button,
  .button-register button {
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
  .button-register button {
      border-top-right-radius: 40%;
      border-bottom-right-radius: 40%;
      background-color: #6fcfeb;
  }
</style>
