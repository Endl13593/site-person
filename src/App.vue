<template>
  <div id="app">
    <HeaderComponent />
      <router-view/>
  </div>

</template>

<script>
import HeaderComponent from "@/views/includes/Header";
export default {
  components: {
    HeaderComponent
  }
}
</script>
