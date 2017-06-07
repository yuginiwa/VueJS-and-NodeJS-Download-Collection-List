<template>
  <div>
    <nav class="main-nav-box">
        <ul>
          <router-link tag="li" to="/" activeClass="active" exact>Home</router-link>
          <router-link tag="li" to="/contact" activeClass="active">Contact</router-link>
          <router-link tag="li" to="/about" activeClass="active">About</router-link>
          <router-link tag="li" to="/panel" activeClass="active" v-if="loggedIn">Panel</router-link>
        </ul>
    </nav>
    <hr />
  </div>
</template>


<script>
  export default {
    data () {
      return {
        loggedIn: true
      }
    }
  }
</script>

<style scoped>
  .main-nav-box {
      height: 3em;
  }

  .main-nav-box ul {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }

  /*.active {
      background-color: rgba(168, 121, 207, 0.91);
      border: 1px solid rgba(168, 121, 207, 0.91);
  }*/

  .main-nav-box ul li {
      font-size: 140%;
      width: 15%;
      text-align: center;
      border: 1px solid rgba(78, 221, 227, 0.91);
      background-color: rgba(78, 221, 227, 0.91);
      color: #2f2f2f;
      list-style: none;
      border-radius: 20px;
      cursor: pointer;
  }


</style>
