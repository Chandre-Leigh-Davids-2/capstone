<template>
  <Navbar/>
  <main>
    <router-view/>
  </main>
  <Footer/>
  
</template>
<script>
import Navbar from './components/NavbarComp'
import Footer from './components/Footer'

export default{
  components : {
    Navbar,
    Footer
  }
}
</script>

<style src="./assets/css/styles.css" >
</style>
