import request from "./vender/request";
import { API_HOME_DATA, API_HOME_GOODS_PARAMETER_DATA } from "./URLS.js";

// 获取首页数据
export const postHomeData = () => {
  request(API_HOME_DATA)
    .then(data => {
      return data;
      // console.log(data, "home");
    })
    .catch(err => {
      console.log(err);
    });
};

// 获取首页商-品参数数据
export const postHomeParameterData = () => {
  return request(API_HOME_GOODS_PARAMETER_DATA, {
    data: {
      category: {
        pid: "1"
      }
    }
  })
    .then(data => {
      // console.log(data, "parameter");
      return data;
    })
    .catch(err => {
      console.log(err, 2);
      return err;
    });
};
// console.log(postHomeParameterData())
postHomeData();
// postHomeParameterData()
// console.log("postHomeParameterData", postHomeParameterData());
