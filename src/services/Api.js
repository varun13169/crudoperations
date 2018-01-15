import axios from 'axios'

var port = 5000;

export default() => {
  return axios.create({
    baseURL:`http://localhost:${port}/`
  })
}
