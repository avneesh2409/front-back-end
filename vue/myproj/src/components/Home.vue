<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Message  => {{result.message}} </h1>
    <h1>data => {{result.data}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to our Home Page',
      result:[]
    }
  },
  created(){
  let url = "http://localhost:2002/users/get"
  this.sendRequest(url)
  },
  methods:{
  sendRequest(url){
  		this.$http.get(url).then(response => {
   				this.result = response.body
   				console.log(response)
  		})
  }
  }
}
</script>

<style scoped>

</style>
