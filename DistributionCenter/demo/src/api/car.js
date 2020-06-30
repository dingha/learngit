import request from "./vender/request";
import {
    API_CAR_ORDER_DATA,
    API_CAR_ADDSHOPCARORDER_DATA,
    API_CAR_DELETE_DATA
} from "./URLS.js";

// 购物车订单信息
export const postCarOrderData = () => {
    return request(API_CAR_ORDER_DATA, {
            data: {},
            headers: {
                "Content-Type": "application/json",
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTY3NTUxOTAyNiJ9.8And-u_VNz5z9GLkBxT6voFIYbgpyDfhvd7a6PGzl7U"
            }
        })
        .then(data => {

            return data;
        })
        .catch(err => {
            return err;
        });
};

// 购物车下订单
export const postCarAddshopcarorderData = (item) => {
    return request(API_CAR_ADDSHOPCARORDER_DATA, {
            data: {
                "shopCar[0]": {
                    goodsId: item.goodsId,
                    goodsSkuId: item.goodsSkuId,
                    name: item.name,
                    price: item.price,
                    num: item.num,
                    addressId: 1,
                    img: item.img
                }
            },
            headers: {
                "Content-Type": "application/json",
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTY3NTUxOTAyNiJ9.8And-u_VNz5z9GLkBxT6voFIYbgpyDfhvd7a6PGzl7U"
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        });
};
// 删除购物车
export const postCarDeleteData = (item) => {
    return request(API_CAR_DELETE_DATA, {
            data: {
                "shopCar": {
                    "id": item
                }
            },
            headers: {
                "Content-Type": "application/json",
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTY3NTUxOTAyNiJ9.8And-u_VNz5z9GLkBxT6voFIYbgpyDfhvd7a6PGzl7U"
            }
        })
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(err => {
            return err;
        });
};