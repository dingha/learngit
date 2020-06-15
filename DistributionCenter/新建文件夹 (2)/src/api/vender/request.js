import axios from "axios";
// import "../../../vue.config";
const baseOptions = {
  method: "POST",
  timeout: 10000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  }
};

// axios
//   // .post("http://192.168.0.26:8080/wangh_fxsc/category/lookCategory.Action")
//   .post("https://www.baidu.com/img/flexible/logo/pc/result.png")
//   .then(res =>{
//     console.log(res);
//   })
//   .catch(err => console.log(err)

// axios.defaults.header.post['Content-Type'] = 'application/json';
export default ({
  url
}) => {
  return axios({
      url,
      ...baseOptions
      // ...options
    }).then(res => {
      console.log(res, 3);
      // const { code, data } = res;
      // if (status == 200 && code == 0) {
      //   return data;
      // }
    })
    .catch(err => {
      const {
        message
      } = err;
      console.log(message.toLowerCase(), 3)
      // return err;
    })
};

// function handleError(message) {
//   if (message.includes('timeout')) return "请求超时，请稍后重试";
//   else if (message.includes('network')) return "数据加载失败，请稍后重试";
//   return "未知错误，请稍后重试";
// }