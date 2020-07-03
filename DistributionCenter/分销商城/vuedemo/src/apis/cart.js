import request from './vender/request.js';
import {
    API_SHOPPING_FOOD_DATA
} from './URLS.js';

//购物车页面数据调取
export const getShoppingMainData = () => {
    return request(API_SHOPPING_FOOD_DATA)
        .then(
            res => {
                return res
            }
        )
        .catch(err => console.dir(err))
}