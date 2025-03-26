<template>
  <Navbar/>
  <main>
    <router-view/>
  </main>
  
</template>
<script>
import Navbar from './components/NavbarComp'

export default{
  components : {
    Navbar
  }
}
</script>

<style src="./assets/css/styles.css" >
</style>
