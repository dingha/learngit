import {shuffle,_} from '../../utlis/index.js';
import request from './vender/request.js';
import {API_HOME_NAV_DATA,API_HOME_SHOP_DATA,API_SHOPPING_FOOD_DATA} from './URLS.js';
import {rederLoading} from '../components/index.js'
const homemerchants=_('.home-merchants-content');
const swiperWrapper = _('.swiper-wrapper');
//加载框
const loadingEl=rederLoading()

//获取轮播的json数据
//export const getHomeNavData=()=>{
//    return request({url: API_HOME_NAV_DATA},_('.swiper-wrapper')).then(
//        data=>data.primary_filter
// )
//}
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

//export const getHomeSHopList = (()=>{
//    const params =  {
//        page: 1,
//        pageSize: 10
//    }
//const options ={
//    url: HOME_API_SHOP_LIST_DATA,
//    params
//    }

//let loading = false

//return ()=>{
//    if (loading) return Promise.resolve([])
//    loading = true

//    return request( options,-( '.shop-list- wrapper')).then(data => {
//        params.page++
//        loading = false
//        return shuffle( data.poilist).slice(0,10)
//    })
//}
//})()

export const getShopItemData=()=>{
    return request(API_HOME_SHOP_DATA)
    .then(
        res=>{
            homemerchants.appendChild(loadingEl);
            return shuffle(res.poilist).slice(0,5)}
   )
        .catch( err=>console.dir(err))
}

////购物车页面数据调取
//export const getShoppingMainData=()=>{
//    return request(API_SHOPPING_FOOD_DATA)
//    .then(
//        res=>{
//            return res.food_spu_tags}
//   )
//        .catch( err=>console.dir(err))
//}

//export const getShoppingMainData=()=>{
//    return request(API_SHOPPING_FOOD_DATA)
//    .then(
//        res=>{
//            console.log(res)
//        }
//   )
//        .catch( err=>console.dir(err))
//}