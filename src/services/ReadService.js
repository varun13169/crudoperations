import Api from '@/services/Api'


export default {
  read(){
    return Api().get(`read`)
      .then(function (res) {
        // console.log(res.data);
        var a=res.data;
        return a;
      });}
};
