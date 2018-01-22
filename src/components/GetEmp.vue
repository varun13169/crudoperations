<template>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="read-card">
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Employee List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <template v-for="user in userList">
            <!--<v-subheader v-if="user.header" v-text="user.header"></v-subheader>-->
            <!--<v-divider v-else-if="user.divider" v-bind:inset="user.inset"></v-divider>-->
            <!--<v-list-tile avatar v-else v-bind:key="user.name" @click="">-->

              <!--<v-list-tile-avatar>-->
                <!--<img v-bind:src="item.avatar">-->
              <!--</v-list-tile-avatar>-->
              <v-list-tile-content>
                <v-list-tile-title v-html="user.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="user.password"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="user.salary1"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="user.salary2"></v-list-tile-sub-title>
              </v-list-tile-content>
            <v-divider></v-divider>
            <!--</v-list-tile>-->
          </template>
        </v-list>

      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
  import ApiServices from '../services/ApiServices'
    export default {
        name: "get-emp",
      data(){
          return{
            userList: []
          }
      },
      created: function () {
          ApiServices.methods.read()
            .then((res) => {
              console.log(res);
              this.userList = res;
            });

      },
      methods: {

      }
    }
</script>

<style scoped>
  @import "../styles/styles.css";

  .read-card{
    top: -700px;
    animation: bounce 3s ease forwards;
  }

  @keyframes bounce {
    0%   {}
    70%  {transform: translateY(800px)}
    100% {transform: translateY(750px)}
  }

</style>
