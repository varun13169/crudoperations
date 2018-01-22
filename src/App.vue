<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-navigation-drawer clipped
                           fixed
                           v-model="drawer"
                           app>
        <v-list dense>
          <v-list-tile @click="createEmp">
            <v-list-tile-action>
              <v-icon>C</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Create</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="readEmp">
            <v-list-tile-action>
              <v-icon>R</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Read</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="updateEmp">
            <v-list-tile-action>
              <v-icon>U</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Update</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="deleteEmp">
            <v-list-tile-action>
              <v-icon>D</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Delete</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>

      </v-navigation-drawer>

      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title @click="home">Application</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>

          <router-view></router-view>
        </v-container>
      </v-content>


      <v-footer app fixed>Varun @ TFT</v-footer>
    </v-app>

    <!--<v-app>-->
      <!--<main>-->
        <!--<v-container >-->

          <!--<router-view></router-view>-->

        <!--</v-container>-->
      <!--</main>-->

    <!--</v-app>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      drawer: false
    }
  },
  methods: {
    home: function () {
      location.href = "#/";
      this.drawer= false;
    },
    createEmp: function () {
      location.href = "#/create";
      this.drawer= false;
    },
    readEmp: function () {
      location.href = "#/read";
      this.drawer= false;
    },
    updateEmp: function () {
      location.href = "#/update";
      this.drawer= false;
    },
    deleteEmp: function () {
      location.href = "#/delete";this.drawer= false;
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
