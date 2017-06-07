<template>
  <div>
    <section class="welcome-box">
        <h1>Welcome to My Download Collections</h1>
        <span></span>
        <p>Here you can documents all the soft/hard collection files you have. You can organize every details and also you can share to your friends all the list you have!
        </p>
        <p>So what are you waiting for? Register or Log in now!</p>
    </section>

    <section class="register-login-box">
        <router-link tag="a" class="login-box" to="/login">Login</router-link>
        <router-link tag="a" class="register-box" to="/register">Register</router-link>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  /*========================*/
      /* SECTION - WELCOME */
  /*========================*/

  .welcome-box {
      margin-top: 6%;
      height: 300px;
      border: 1px solid black;
      border-radius: 20px;
  }

  .welcome-box h1 {
      display: flex;
      justify-content: center;
      margin: 5% 5% 0 5%;
      font-size: 200%;
  }

  .welcome-box p {
      width: 90%;
      display: flex;
      justify-content: center;
      margin-left: 5%;
      font-size: 150%;
  }

  /*========================*/
  /* SECTION - Register Login Box */
  /*========================*/

  .register-login-box {
      margin-top: 2%;
      height: 150px;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }

  .register-login-box a {
      height: 100px;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 300%;
      text-decoration: none;
      color: #000;
  }

  .login-box {
      border: 2px solid #4b4be5;
      background-color: #6fcfeb;
      border-radius: 20px;
  }

  .register-box {
      border: 4px solid #f29c37;
      border-radius: 20px;
  }
</style>
