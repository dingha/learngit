import axios from "axios";

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
    })
    .catch(err => {
      console.log(err)
    });
};