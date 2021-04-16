<template>
    <div>
        <form @submit.prevent="login">
            <div class="input-group">
                <label for="email">Email:</label><br>
                <input type="email" v-model="email"><br>

                <label for="password">Password:</label><br>
                <input type="password" v-model="password"><br>

                <label for="roles">Role:</label><br>
                <select id="roles" v-model="role">
                    <option value="Web Developer">Web Developer</option>
                    <option value="App Developer">App Developer</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Full Stack">Full Stack</option>
                </select> <br>

                <label for="skills">Skills</label><br>
                <input type="text"> <br>

                <div class="terms">
                    <input v-model="terms" class="check" type="checkbox" id="conditions" required> <label for="conditions">Accept terms and conditions</label> 
                </div>
                <button>Create an Account</button>
            </div>       
            
        </form>
    </div>
</template>

<script>
    
    export default {
        name: 'login',
        data(){
            return{
                email: '',
                password: '',
                role: 'Web Developer',
                terms: false
            }
        },
        methods:{
            handleSubmit(){
                console.log(this.email);
                console.log("Submit")
            },
          
        }
    }
</script>

<style lang="scss">
    .input-group {
        text-align: left;
        display: inline-block;
        flex-direction: column;
        // width: 40%;
        background: rgb(255, 255, 255);
        margin: 1rem auto;
        padding: 2rem;
        border-radius: 20px;
        margin-bottom: 120px;
        label {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: rgb(151, 151, 151);
            text-transform: uppercase;
            margin-right: 0.5rem;
        }
        input, select{
            border: none;
            border-bottom: gray 2px solid;
            width: 100%;
        }
        select{
            font-size: 18px;
            padding: 10px 20px;
            color: rgb(135, 135, 135);
            margin-bottom: 20px;
        }
        .check{
            width: 20px;
        }
        input, label{
            padding: 10px;
            font-size: 18px;
            margin-bottom: 20px;
        }
        button{
            border: none;
            color: white;
            border-radius: 100px;
            padding: 10px;
            font-size: 18px;
            margin: 20px auto;
            background: rgb(34, 125, 243);
        }
    }
</style>