<template>
  <div>
    <router-link class="link" to="/">Home</router-link> |
    <router-link class="link" to="/reactgame">React Test Game</router-link> |
    <router-link class="link" to="/signup">Sign Up</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{
  },
  methods:{
    confirm(e){
      if(!window.confirm('Are you sure?')){
        e.preventDefault()
      }
    }
  }
}
</script>

<style>
*{
  margin: 0; 
  padding: 0;
}
a{
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  background: rgb(242, 242, 242);
  height: 100%;
}
.link{
  margin:10px;
  font-weight: bold;
  font-size: 25px;
  color: rgb(182, 61, 182);
}
</style>