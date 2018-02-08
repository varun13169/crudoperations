<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card dark color="secondary" class="update-card">
          <v-card-text class="px-0">
            <h1>UPDATE</h1>
          </v-card-text>

          <v-text-field
            name="Name"
            label="Name"
            id="create_name"
            v-model="updateUser.name"
          ></v-text-field>

          <v-text-field
            name="Password"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="updateUser.password"
            min="8"
            :append-icon="updatePass ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (updatePass = !updatePass)"
            value=""
            class="input-group--focused"
            :type="updatePass ? 'password' : 'text'"
          ></v-text-field>

          <v-text-field
            name="Salary 1"
            label="Salary 1"
            id="salary_1"
            v-model="updateUser.salary1"
          ></v-text-field>
          <v-text-field
            name="Salary 2"
            label="Salary 2"
            id="salary_2"
            v-model="updateUser.salary2"
          ></v-text-field>

          <v-btn color="primary" @click="updateUserFunc">Update User</v-btn>

        </v-card>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
  import ApiServices from '../services/ApiServices'

  export default {
    name: "update-emp",
    data() {
      return {
        updatePass: false,
        updateUser: {}
      }
    },
    methods: {
      updateUserFunc: function () {
        console.log("update")

        ApiServices.methods.updateEmp({ name     : this.updateUser.name,
                                        password : this.updateUser.password,
                                        salary1  : this.updateUser.salary1,
                                        salary2  : this.updateUser.salary2})
      }
    }
  }
</script>

<style scoped>
  @import "../styles/styles.css";

  .update-card {
    transition: 2s ease-in;
  }

  .update-card:hover{
    transform: rotate(360deg);
  }
</style>
