<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card dark color="secondary" class="delete-card">

          <v-card-text class="px-0">
            <h1>DELETE</h1>
          </v-card-text>

          <v-text-field
            name="Name"
            label="Name"
            id="delete_name"
            v-model="deleteUser.name"
          ></v-text-field>

          <v-text-field
            name="input-10-2"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="deleteUser.password"
            min="8"
            :append-icon="deletePass ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (deletePass = !deletePass)"
            value=""
            class="input-group--focused"
            :type="deletePass ? 'password' : 'text'"
          ></v-text-field>

          <v-btn color="primary" @click="deleteUserFunc(deleteUser)">Delete User</v-btn>

        </v-card>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
  import ApiServices from '../services/ApiServices'

  export default {
    name: "delete-emp",
    data() {
      return {
        deletePass: false,

        deleteUser: {}
      }
    },
    methods: {
      deleteUserFunc: function (username) {
        ApiServices.methods.deleteEmp({
          name: username.name,
          password: username.password
        });
      }
    }
  }
</script>

<style scoped>
  @import "../styles/styles.css";
  .delete-card {
    /*animation-name: first;*/
    /*animation-duration: 3s;*/
    /*animation-delay: 2s;*/
    /*animation-fill-mode: forwards;*/
    animation: first 3s 1s forwards;
  }

  @keyframes first {
    0%      {transform: translateX(0) translateY(0);}
    16.67%  {transform: translateX(0) translateY(300px);}
    33.33%  {transform: translateX(0) translateY(-300px);}

    50.00%  {transform: translateX(0) translateY(0);}
    66.67%  {transform: translateX(300px) translateY(0);}
    83.34%  {transform: translateX(-300px) translateY(0);}

    100%    {transform: translateX(0) translateY(0);}
  }

</style>
