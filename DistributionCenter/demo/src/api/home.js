import request from "./vender/request";
import {
  API_HOME_DATA,
  API_HOME_GOODS_PARAMETER_DATA,
  API_HOME_GOODS_EVALUATION_DATA
} from "./URLS.js";

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

// 获取具体商品（全部）
export const postHomeParameterData = (item) => {
  return request(API_HOME_GOODS_PARAMETER_DATA, {
      data: {
        "goods": {
          "id": item
        }
      }
    })
    .then(data => {
      return data.data;
    })
    .catch(err => {
      return err;
    });
};

// 获取商品所有评价
export const postHomeEvaluationData = (item) => {
  return request(API_HOME_GOODS_EVALUATION_DATA, {
      data: {
        "comment": {
          "goodsId": item
        }
      }
    })
    .then(data => {
      return data.data;
    })
    .catch(err => {
      return err;
    });
};