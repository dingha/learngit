import axios from "axios";

const baseOptions = {
  method: "POST",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

export default (url, options) => {
  return axios({
    url,
    ...options,
    ...baseOptions
  })
    .then(res => {
      const {
        status,
        data: { code,data }
      } = res;
      if (status == 200 && code == 0) {
        return data;
      }
    })
    .catch(err => {
      const { message } = err;
      console.log(message.toLowerCase());
    });
};

// function handleError(message) {
//   if (message.includes('timeout')) return "请求超时，请稍后重试";
//   else if (message.includes('network')) return "数据加载失败，请稍后重试";
//   return "未知错误，请稍后重试";
// }
