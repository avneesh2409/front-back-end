<template>
  <div class="hello">
    <form enctype="multipart/form-data" v-if="!isLoggedIn">
    	    <h1>{{ msg }} : Enter the details</h1>
    	<p>Username  :  <input type="text" v-model="username" /></p>
    	<p>Password : <input type="password" v-model="password" /></p>
    	<p>Email : <input type="email" v-model="email" /></p>
    	<p>Color : <input type="color" v-model="color" /></p>
    	<p><button @click.prevent = "submithandler" >Submit</button></p>
    	
    </form>
<div v-else>
<Products />
</div>
  </div>
</template>

<script>
import Products from '@/components/Products'
export default {
  name: 'Users',
  components:{Products},
  data () {
    return {
      msg: 'Welcome to our Users Page',
      username:'',
      password:'',
      email:'',
      color:'',
      isLoggedIn:false
    }
  },
  methods:{

  	submithandler(){
  	  let url = "http://localhost:2002/users/post"
	this.$http.post(url,{
	username:this.username,
	password:this.password,
	email:this.email,
	color:this.color
	}).then(response => {
   				this.result = response.body
   				console.log(response)
  		})
  	this.isLoggedIn = true
  	},
  	file(event){
  		console.log(event)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
