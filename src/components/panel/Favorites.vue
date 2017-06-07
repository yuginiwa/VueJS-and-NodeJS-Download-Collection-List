<template>
  <div>
    Favorites Page

    <div>
      <button @click="click">Click</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$http.post('https://anilist.co/api/auth/access_token', {
        grant_type    : "client_credentials",
        client_id     :  "yuginiwa-snpwj",
        client_secret :  "IetwaLYu80nuUnPrDQwxaSr5nJ"
      }).then(response => response.json())
        .then(data => console.log(data));
    }
  }
}
</script>

<style scoped>
  div {
    height: 300px;
    border: 1px solid Violet;
    background-color: Violet;
    width: 100%;
  }
</style>
