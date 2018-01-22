import Api from '@/services/Api'


export default {
  methods :{
    create: function(body){
      console.log(body);
      return Api().post(`create`, body)
        .then(function (res) {
          console.log(res);
        });},

    update: function(body){
      console.log(body);
      return Api().post(`update`, body)
        .then(function (res) {
          console.log(res);
        });},

    read: function(){
      return Api().get(`read`)
        .then(function (res) {
          // console.log(res.data);
          var a=res.data;
          return a;
        });},

    delete: function(body){
      console.log(body);
      return Api().post(`delete`, body)
        .then(function (res) {
          console.log(res);
        });},


    createEmp: function(body){
      console.log(body);
      return Api().post(`create`, body)
        .then(function (res) {
          console.log(res);
        });},

    updateEmp: function(body){
      console.log(body);
      return Api().post(`update`, body)
        .then(function (res) {
          console.log(res);
        });},

    readEmp: function(){
      return Api().get(`read`)
        .then(function (res) {
          // console.log(res.data);
          var a=res.data;
          return a;
        });},

    deleteEmp: function(body){
      console.log(body);
      return Api().post(`delete`, body)
        .then(function (res) {
          console.log(res);
        });}

  }

};
