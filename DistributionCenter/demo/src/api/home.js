import request from "./vender/request";
import {
  API_HOME_DATA,
  API_HOME_GOODS_DATA,
  API_HOME_GOODS_EVALUATION_DATA,
  API_HOME_HEADER_SEARCH_DATA,
  API_HOME_POSITIONING_DATA,
  API_HOME_CAR_GOODS_DATA
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

// 获取首页定位数据
export const postHomePositioningData = (item) => {
  return request(API_HOME_POSITIONING_DATA, {
      data: {
        "city": {
          "name": item
        }
      }
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};


// 获取具体商品（全部）
export const postHomeParameterData = (item) => {
  return request(API_HOME_GOODS_DATA, {
      data: {
        "goods": {
          "categoryFid": item
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
// 获取具体商品（购物车）
export const postHomeCarData = (item) => {
  return request(API_HOME_CAR_GOODS_DATA, {
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
// 商品搜索
export const postHomeGoodsSearchData = (item) => {
  return request(API_HOME_GOODS_DATA, {
      data: {
        "goods": {
          "name": item
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

// 头部商品搜索
export const postHomeHeaderSearchData = () => {
  return request(API_HOME_HEADER_SEARCH_DATA, {
      data: {
        "goods": {
          "title": "拖鞋"
        }
      }
    })
    .then(data => {
      // console.log(111, data)
      return data;
    })
    .catch(err => {
      return err;
    });
};