import request from "./vender/request";
import { API_CLASS_class_CATEGORY_CATEGORY_DATA } from "./URLS.js";

export const postClassData = (item) => {
  return request(API_CLASS_class_CATEGORY_CATEGORY_DATA, {
    data: {
      category: {
      pid:item
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

export const postClassData2 = item => {
  return request(API_CLASS_class_CATEGORY_CATEGORY_DATA, {
    data: {
      category: {
        fid: item
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
