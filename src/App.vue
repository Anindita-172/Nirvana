<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Nirvana logo"
          class="shrink mr-2"
          contain
          src="@/assets/Nirvana.png"
          transition="scale-transition"
          width="30"
        />

        <h2 >Nirvana</h2>
      </div>
    </v-app-bar>
    <v-main>
     <router-view/>
    </v-main>
    
  </v-app>
  
  
</template>

<script>

export default {
  name: 'App',
  components:
  {

  },
 data() {
  return {
    key: value
  }
 },
};
</script>
