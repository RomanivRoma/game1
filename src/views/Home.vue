<template>
  <div class="home">
    <h1>Home page</h1>
  <h1>
    {{ count }} DC Heroes
    <ul>
      <li v-for="(hero, index) in listHero" :key="index">{{ index+1 }}). {{ hero.name }}<button class="remove" @click="remove(index)">X</button></li>
    </ul>
    <form @submit.prevent="add">
      <input type="text" v-model="hero" >
      <button>Add</button> <br>
      <p class="red" v-if="compClass">Please, enter something</p>
    </form>
  </h1>
  </div>
</template>

<script>
import {persons} from '../data/data.js'
export default {
  name: 'Home',
  data(){
    let nameArr = []
    let heroList = [
      { name: "Batman" },
      { name: "Spider-man"},
      { name: "Iron man"}
    ]
    return{
      names: nameArr,
        users: persons,
        reversed: "",
        message: nameArr.toString(),

        hero: '',
        heroName: '',
        listHero: heroList, 
        red: false
    }
  },
  methods:{
    add: function(){
      if(this.hero.trim()){
        this.listHero.push({name: this.hero})
        this.red = false
      }else{
        alert("Please, enter the name")
        this.red = true
      }
      this.hero = ''
    },
    remove: function(index){
      this.listHero = this.listHero.filter((val, i) => i != index)
    }
  },
  computed:{
    count: function(){
      return this.listHero.length
    },
    reverseWord: function(){
      return this.reversed.split('').reverse().join('')
    },
    showMessage: function(){
      return "You selected: " + this.names.toString()
    },
    compClass: function(){
      return this.red
      
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
  h2{
    color: white;
    text-align: left;
  }
  li{
    margin-top: 20px;
  }
  .remove{
    margin-left: 10px;
    padding: 8px;
    border-radius: 50%;
    border: red 2px solid;
  }
  .red{
    color: red;
  }
</style>