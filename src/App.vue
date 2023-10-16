<template>
  <v-app>
    
    <v-main>
      <NavBar />
      <br><br>
      <CardComponent />
      <br><br>
      <v-spacer></v-spacer>
      <FooterDemo />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import CardComponent from './components/CardComponent'
import FooterDemo from './components/FooterDemo'

export default {
  name: 'App',

  components: {
    NavBar,CardComponent,FooterDemo,
  },

  data: () => ({
    //
  }),
};
</script>
