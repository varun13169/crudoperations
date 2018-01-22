<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs3>
        <v-card dark color="secondary">
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

          <v-btn color="primary" @click="newUserFunc">Create User</v-btn>

        </v-card>
      </v-flex>


      <v-flex xs3>
        <v-card dark color="secondary">

          <v-card-text class="px-0">
            <h1>UPDATE</h1>
          </v-card-text>

          <v-text-field
            name="Name"
            label="Name"
            id="update_name"
            v-model="updateUser.name"
          ></v-text-field>

          <v-text-field
            name="input-10-2"
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

          <v-btn color="primary" @click="updateUserFunc">Update User</v-btn>

        </v-card>
      </v-flex>


      <v-flex xs3>
        <v-card dark color="secondary">

          <v-card-text class="px-0">
            <h1>READ</h1>
          </v-card-text>

          <v-text-field
            name="Filler1"
            label="Filler Text Field 1"
            id="filler_1"
          ></v-text-field>

          <v-text-field
            name="Filler2"
            label="Filler Text Field 2"
            id="filler_2"
          ></v-text-field>

          <v-btn color="primary" @click="readUserFunc">Read User</v-btn>

        </v-card>
      </v-flex>


      <v-flex xs3>
        <v-card dark color="secondary">

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


    <v-layout row wrap>

      <v-list two-line>
        <template v-for="user in userReadList">

          <v-list-tile-content>
            <v-list-tile-title v-html="user.name">sdcd</v-list-tile-title>
            <v-list-tile-sub-title v-html="user.password"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-divider></v-divider>

        </template>
      </v-list>


    </v-layout>

  </v-container>


</template>


<script>
  import ApiServices from '../services/ApiServices'

  export default {
    name: "c-u-r-d",
    data() {
      return {
        createPass: false,
        updatePass: false,
        deletePass: false,

        newUser: {},
        updateUser: {},
        readUser: {},
        deleteUser: {},

        userReadList: [],
        userList: []
      }
    },

    methods: {
      newUserFunc: function () {
        console.log("newuse")

        ApiServices.methods.create({name: this.newUser.name,
                            password: this.newUser.password})


      },

      updateUserFunc: function () {

        ApiServices.methods.update({name: this.newUser.name,
                            password: this.newUser.password})
      },

      readUserFunc: function () {

        ApiServices.methods.read()
          .then((res) => {
                console.log(res);
                this.userReadList = res;
              });
      },

      deleteUserFunc: function (username) {
        ApiServices.methods.delete({name: username.name,
                            password: username.password});
      }

    }


  }
</script>

<style scoped>

</style>
