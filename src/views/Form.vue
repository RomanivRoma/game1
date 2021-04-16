<template>
    <div class="modal" @click.self="closeModal">
        <div class="white-back">
            <span>Hello, It`s a new component</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['msg'],
    data(){
        return{

        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
.modal{
     height: 100%; 
     width: 100%;
    position: fixed;
    background: rgba($color: #000000, $alpha: 0.5);
    left: 0;
    top: 0;
    // margin: 0;
    // padding: 0;
    .white-back{
        color: gray;
        background: white;
        border-radius: 80px;
        padding: 20px;
    }
}
</style>