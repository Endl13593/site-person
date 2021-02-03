<template>
  <header class="header_area">
  <div class="main_menu">
    <nav class="navbar navbar-expand-lg navbar-light" style="background: #347dbe">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <router-link :to="{ name: 'Home' }" class="navbar-brand" style="color: white"><strong>EDUARDO NUNES</strong></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fa fa-bars" style="color: white"></span>
        </button>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
          <ul class="nav navbar-nav menu_nav ml-auto">
            <li class="nav-item"><router-link :to="{ name: 'Home' }" class="nav-link">Início</router-link></li>
            <li class="nav-item"><router-link :to="{ name: 'About' }" class="nav-link">Sobre</router-link></li>
            <li class="nav-item"><router-link :to="{ name: 'Contact' }" class="nav-link">Contato</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>