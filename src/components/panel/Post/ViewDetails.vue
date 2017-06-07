<template>
  <div>
   <div class="navigation">
       <button @click="goBack">Go back</button>
   </div>

   <div class="detail-box">
       <div class="img-title-box">
           <img :src="post.img"  :alt="post.title">
           <p>{{ post.title }}</p>
       </div>

       <div class="plot-genre-category-box">
           <div class="plot">
               <p>{{ post.plot }}</p>
           </div>
           <div class="category">
               <p>Category: {{post.category}}</p>
           </div>
           <div class="genres">
               <p>Genres: </p>
               <p v-for="genre in post.genres"> {{genre}}</p>
           </div>
       </div>
   </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        paramsCategory: this.$route.params.category,
        paramsTitle: this.$route.params.title
      }
    },
    computed: {
      post() {
        const posts = this.$store.getters.posts;
        const record = posts.find(post => post.title === this.paramsTitle);
        return {
          title: record.title,
          genres: record.genres,
          img: record.image,
          category: record.category,
          plot: record.plot
        }
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .detail-box {
      width: 95%;
      margin: auto;
      display: flex;
  }

  .img-title-box {
      flex-basis: 30%;
      height: 500px;
      position: relative;
  }

  .img-title-box img {
      width: 100%;
      height: 500px;
  }

  .img-title-box p {
      width: 100%;
      font-size: 140%;
      background-color: black;
      color: white;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 0;
      letter-spacing: 3px;
  }

  .plot-genre-category-box {
      flex-basis: 70%;
  }

  .plot,
  .category,
  .genres {
      width: 90%;
      margin: auto;
      height: auto;
      line-height: 2;
      word-spacing: 4px;
      letter-spacing: 2px;
      text-align: center;
      text-align-last: center;
  }

  .plot {
      font-size: 110%;
      margin-bottom: 50px;
  }

  .category,
  .genres {
      font-size: 80%;
  }

  .plot > p {
    margin: 0;
  }

  .genres {
    display: flex;
    justify-content: center;
  }

  .genres p {
    margin: 2px;
  }


  /*========================*/
      /* Navigation */
  /*========================*/

  .navigation {
      width: 95%;
      margin: 20px auto;
      height: 50px;
  }

  .navigation button {
      width: 30%;
      height: 30px;
      border: 1px solid black;
      background-color: white;
      border-radius: 10px;
      font-size: 100%;
      letter-spacing: 3px;
  }
</style>
