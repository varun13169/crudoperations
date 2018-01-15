import Api from '@/services/Api'
//
// module.exports.create =  function(body){
//     return Api().post(`create`, body)
//       .then(function (res) {
//         console.log(res);
//       });
//   };

// export default {
//   create(body, ){
//     return Api().post(`create`, body)
//       .then(function (res) {
//         console.log(res);
//       });
//   }
// }
//
export default {
  create(body){
    console.log(body);
    return Api().post(`create`, body)
      .then(function (res) {
        console.log(res);
      });}
};


//
// module.exports.update = {
//   update(body){
//     return Api().post(`update`, body)
//       .then(function (res) {
//         console.log(res);
//       });
//   }
// }
//
// module.exports.read = {
//   read(){
//     return Api().get(`read`)
//       .then(function (res) {
//         console.log(res);
//       });
//   }
// }
//
//
// module.exports.delete = {
//   delete(body){
//     return Api().post(`delete`, body)
//       .then(function (res) {
//         console.log(res);
//       });
//   }
// }


