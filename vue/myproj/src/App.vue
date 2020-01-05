<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul type='none' class="ul">
      <li><router-link to="/home" class="nav-link">Home</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      <li><router-link to="/users" class="nav-link">Users</router-link></li>
        <li><router-link to="/events" class="nav-link">Events</router-link></li>
      <li><router-link to="/products" class="nav-link">Products</router-link></li>
    </ul>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.ul{
  background:#ccc;
}
.ul li{
  float:left;
  padding:10px;
}
.nav-link:hover{
  color:red;
}
.nav-link{
 color:black;
 text-decoration:none; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
