<template>
  <div>
    <div class="form-box">
        <div class="input-box">

            <div v-if="isCategorySelectedFirst">
              <div class="input">
                <select v-model="post.category">
                  <option value="">Select Category</option>
                  <option
                    v-for="(categoryList, indexOf) in categoriesArray"
                    key="indexOf">{{categoryList}}
                  </option>
                </select>
              </div>
              <div class="navigation">
                  <div>
                      <button @click="goBackTo">Go Back</button>
                  </div>

                  <div>
                      <button @click="proceedTo">Go Next!</button>
                  </div>
              </div>
            </div>

            <div v-else>
              <div class="input">
                  <label for="title">Title</label>
                  <input type="text" name="title" v-model="post.title">
              </div>

              <div class="input">
                  <label for="image">Image URL</label>
                  <input type="text" name="image" v-model="post.image">
              </div>

              <div class="input">
                  <label for="title">Plot</label>
                  <textarea name="" id="" cols="30" rows="10" v-model="post.plot"></textarea>
              </div>

              <div class="genres-box">
                <label for="genres">
                    Genres
                </label>
                <div id="input-genre-box">
                  <input type="text" name="image" v-model="newGenre">
                  <button @click="addNewGenre">Add new genre</button>
                </div>

                <div>
                  <p>New Genres</p>
                  <ul class="genres-item">
                    <li class="selected" v-for="(genre, index) in newGenreArray" @click="removeGenre(index)">
                      {{genre}}
                    </li>
                  </ul>
                </div>


                <div>
                  <p>Select Genres</p>
                  <ul class="genres-item">
                     <li class="noClass" v-for="(genre, index) in genresArray" @click="toggleGenre(genre.genre, index, $event)"> {{genre.genre}}</li>
                  </ul>
                </div>
            </div>

              <div class="navigation">
                  <div>
                      <button @click="goBack">Go Back</button>
                  </div>

                  <div>
                      <button @click="addPost">Add new post!</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        post: {
          category: '',
          title: '',
          genre: [],
          image: '',
          plot: ''
        },
        isCategorySelectedFirst: true,
        newGenreArray: [],
        newGenre: '',
        bgColor: 'white',
        border: '1px solid #bfbfbf'
      }
    },
    computed: {
      categoriesArray() {
        return this.$store.getters.categories;
      },
      genresArray() {
        return this.$store.getters.genres;
      }
    },
    methods: {
      proceedTo() {
        this.isCategorySelectedFirst = false;
      },
      goBack() {
        this.isCategorySelectedFirst = true;
      },
      goBackTo() {
        this.$router.go(-1);
      },
      addNewGenre() {
        this.newGenreArray.push(this.newGenre);
        this.newGenre = '';
        console.log('this.newGenreArray',this.newGenreArray);
      },
      toggleGenre(genre, index, event) {
        console.log('genre', genre, 'index', index);
        console.log('this.$event', event.target.className);
        if (event.target.className === 'noClass') {
          this.post.genre.push(genre);
          event.target.className = 'selected';
        }else if (event.target.className === 'selected') {
          event.target.className = 'noClass'
          this.post.genre = this.post.genre.filter((g) => {
            return g !== genre;
          });
        }
      },
      removeGenre(index) {
        this.newGenreArray.splice(index, 1);
        console.log('click')
      },
      addPost() {
        let user = this.$store.getters.user;
        const newGenreArray = this.newGenreArray;

        const genres = this.post.genre.concat(this.newGenreArray);

        let post = {
          category: this.post.category,
          title: this.post.title,
          genres,
          image: this.post.image,
          plot: this.post.plot,
          userId: user._id,
          newGenreArray
        };
        console.log('genres', genres);
        console.log('newGenreArray', newGenreArray);
        this.$store.dispatch('addNewPost', post);
      }
    }
  }
</script>

<style scoped>
.form-box {
    width: 95%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
}


.input-box,
.navigation {
    margin: 0 auto;
    width: 70%;
}

.input label {
    font-size: 130%;
    margin-bottom: 10px;
}

.input {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 15px;
    padding: 10px;
    font-weight: 100;
}

.input input {
    height: 35px;
    font-size: 120%;
    text-align: center;
}

.input textarea {
    font-size: 120%;
}


.navigation {
    display: flex;
    justify-content: space-between;
}

.navigation div{
    margin: 10px;
    height: 60px;
    display: flex;
    width: 250px;
}

.navigation button {
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 30px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
}

.genres-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 15px;
    font-weight: 100;
}

.genres-box label {
    font-size: 130%;
    margin-bottom: 10px;
}

.genres-box button {
    border: none;
    background-color: #cb0f0f;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 80%;
    color: #ffffff;
}

.genres-item {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0;
}

.genres-item li {
    list-style: none;
    font-weight: 100;
    margin: 0 10px 10px 0;
    font-size: 120%;
    padding: 5px;
    border: 1px solid #bfbfbf;
    cursor: pointer;
    flex: 1 0 auto;
}

.genres-item li:first-child {
    margin-right: 10px;
}


.genres-item li.selected {
    border: none;
    background: #0e9155;
    color: #fff;
}


</style>
