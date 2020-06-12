import {shuffle,_} from '../../utlis/index.js';
import request from './vender/request.js';
import {API_HOME_NAV_DATA,API_HOME_SHOP_DATA,API_SHOPPING_FOOD_DATA} from './URLS.js';
import {rederLoading} from '../components/index.js'
const homemerchants=_('.home-merchants-content');
const swiperWrapper = _('.swiper-wrapper');
//加载框
const loadingEl=rederLoading()
//获取轮播的json数据
export const getHomeNavData=()=>{
    return request(API_HOME_NAV_DATA).then(
        data=>{
            return  data.primary_filter
        }
 ) .catch(err=>{
     console.log(err)
 })
}


export const getShopItemData=()=>{
    return request(API_HOME_SHOP_DATA)
    .then(
        res=>{
            homemerchants.appendChild(loadingEl);
            return shuffle(res.poilist).slice(0,5)}
   )
        .catch( err=>console.dir(err))
}