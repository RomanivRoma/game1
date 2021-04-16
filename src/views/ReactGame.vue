<template>
  <div>
    <div class="game">
      <!-- <button @click="toggleModal" class="modalButton"><span>Push me</span></button> -->
      <h1>Test your reaction</h1>
      
      <Game v-if="isPlaying" :startTime="startTime" :isFinished="isFinished" @update-finish="update"/>
      <div class="example" @click.self="lost">
        <p>Wait for green cube here.</p> 
        
      </div>
      <div class="buttons">
          <button v-show="isFinished" class="play" @click="start" :disabled="disableButton"><span>play</span></button>
          <button v-show="isFinished" @click="restart" :disabled="!isPlaying"><span>restart</span></button>
        </div>
      <Lost v-if="lostGame"/>
    </div>
    <Form v-if="showModal" id="modal" @close="toggleModal"/>
  </div>
</template>

<script>
import Form from './Form'
import Game from './Game'
import Lost from './Lost'

var t = null
export default {
    name: "ReactGame",
  components:{
    Form,
    Game,
    Lost
  },
  data(){
    return{
      showModal: false,
      isPlaying: false,
      delay: null,
      startTime: 0,
      lostGame: false,
      isFinished: true,
      disableButton: false,
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    },
    start(){
      this.isFinished = false
      this.disableButton = true
      this.showButton = false
      this.delay = 2000 + Math.random() * 5000
      t = setTimeout(() =>{   
                this.isPlaying = true
                this.startTime = new Date()
      },this.delay)
      t.setTimeout
    },
    lost(){
      if(!this.isPlaying && this.disableButton){
        clearTimeout(t)
        this.lostGame = true
        this.isPlaying = !this.isPlaying
        this.isFinished = true
      }
    },
    restart(){
      this.lostGame = false
      this.isPlaying = false
      this.isFinished = true
      this.disableButton = false
    },
    update(prop){
      this.isFinished = prop
    }

  }
}
</script>
<style lang="scss">

.game{
  margin-top: 30px;
}
.example{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  border: dashed 6px rgb(116, 116, 116);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
}
.buttons{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 5;

}
.buttons button{
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 25px;
}
#modal{
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalButton{
  padding: 10px 20px;
  margin: 50px;
}
</style>
