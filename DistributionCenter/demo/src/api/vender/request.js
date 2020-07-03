import axios from "axios";
import Toast from "vant";
const baseOptions = {
  method: "POST",
  timeout: 10000

};
export default (url, options) => {
  return axios({
      url,
      ...options,
      ...baseOptions,

    })
    .then(res => {
      const {
        status,
        data: {
          code
        },
      } = res;
      if (status == 200 && code == 0) {
        return res;
      }
      else{
        Toast("访问失败")
      }
    })
    .catch(err => {
      console.log(err)
    });
};