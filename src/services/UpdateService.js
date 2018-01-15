import Api from '@/services/Api'


export default {
  update(body){
    console.log(body);
    return Api().post(`update`, body)
      .then(function (res) {
        console.log(res);
      });}
};
