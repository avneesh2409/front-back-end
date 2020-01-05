<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table border='1'>
    	<tr><th>Username</th><th>password</th><th>email</th><th>color</th></tr>
    	<tr v-for="(user,id) in users" :key="id">
    	<td>{{user.username}}</td>
    	<td>{{user.password}}</td>
    	<td>{{user.email}}</td>
    	<td>{{user.color}}</td>
    	</tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to our Products Page',
      users:[]
    }
  },
  created(){
  	this.getData()
  },
  methods:{

  	getData(){
  	let url = "http://localhost:2002/products/get"
  		this.$http.get(url).then(response => {
   				this.users = response.body.data
   				
  		})
  	}
  }
}
</script>


<style scoped>
table{
	border:5px solid #ccc;
	background:burlywood;
	border-collapse:collapse;
	width:100%;
}
tr td{
padding:5px;
}
</style>
