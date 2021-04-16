<template>
  <div>
      <div class="cube" @click="finish">
        <p v-if="showResult" class="result">Result: {{result}} ms</p><br>
      </div>
  </div>
</template>

<script>

export default {
    name: "Game",
    props:["startTime","isFinished","showButton"],
    data(){
        return{
            endTime: 0,
            result:0,
            showResult: false
        }
    },
    computed:{
       
    },
    methods:{
        finish(event){
            var ele = event.target;
            var finish = this.isFinished
            finish = true
            this.$emit("update-finish", finish)
            this.endTime = new Date()
            this.result = this.endTime - this.startTime
            this.showResult = true
            ele.style.pointerEvents = "none"
        }
    },
    components:{
    }
}
</script>

<style>
.cube{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 315px;
  height: 315px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background: rgb(2, 202, 2);
}
.result{
    color: wheat;
}
</style>