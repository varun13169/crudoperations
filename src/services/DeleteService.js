import Api from '@/services/Api'


export default {
  delete(body){
    console.log(body);
    return Api().post(`delete`, body)
      .then(function (res) {
        console.log(res);
      });}
};
