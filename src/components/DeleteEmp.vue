<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card dark color="secondary" class="card">

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
          ApiServices.methods.deleteEmp({name: username.name,
            password: username.password});
        }
      }
    }
</script>

<style scoped>

</style>
