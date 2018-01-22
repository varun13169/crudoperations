<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs12>
          <v-card dark color="secondary" class="create-card">
            <v-card-text class="px-0">
              <h1>CREATE</h1>
            </v-card-text>

            <v-text-field
              name="Name"
              label="Name"
              id="create_name"
              v-model="newUser.name"
            ></v-text-field>

            <v-text-field
              name="Password"
              label="Enter your password"
              hint="At least 8 characters"
              v-model="newUser.password"
              min="8"
              :append-icon="createPass ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (createPass = !createPass)"
              value=""
              class="input-group--focused"
              :type="createPass ? 'password' : 'text'"
            ></v-text-field>

            <v-text-field
              name="Salary 1"
              label="Salary 1"
              id="salary_1"
              v-model="newUser.salary1"
            ></v-text-field>
            <v-text-field
              name="Salary 2"
              label="Salary 2"
              id="salary_2"
              v-model="newUser.salary2"
            ></v-text-field>

            <v-btn color="primary" @click="newUserFunc">Create User</v-btn>

          </v-card>
      </v-flex>


    </v-layout>
  </v-container>


</template>

<style scoped>
  @import "../styles/styles.css";

  .create-card {
    transition: 2s ease-in;
  }

  .create-card:hover{
    transform: rotate(360deg);
  }
  /*<link href = "./src/styles/styles.css" rel="stylesheet" text="text/css">*/

</style>

<script>
  import ApiServices from '../services/ApiServices'

  export default {
    name: "create-emp",
    data() {
      return {
        createPass: false,

        newUser: {}
      }
    },
    methods: {
      newUserFunc: function () {
        console.log("newuse")

        ApiServices.methods.createEmp({
          name: this.newUser.name,
          password: this.newUser.password,
          salary1: this.newUser.salary1,
          salary2: this.newUser.salary2
        })

      }
    }
  }
</script>
