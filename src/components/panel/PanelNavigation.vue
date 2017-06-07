<template>
  <div>
    <nav class="main-nav-box">
      <ul>
        <router-link tag="li" to="/panel" activeClass="active">Panel</router-link>
        <router-link tag="li" to="/panel/add" activeClass="active">Add New</router-link>
        <router-link tag="li" to="/panel/view" activeClass="active">View All List</router-link>
      </ul>
    </nav>
    <hr/>
  </div>
</template>

<style scoped>
  nav {
      height: 3em;
  }

  ul {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }

  /*.active {
      background-color: rgba(168, 121, 207, 0.91);
      border: 1px solid rgba(168, 121, 207, 0.91);
  }*/

  ul li {
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
