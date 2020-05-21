import {_,shuffle,debounce,parseToNode,emitter} from '../../utlis/index.js';
import {getShopItemData} from '../../api/home.js';
import {rederLoading} from '../../components/index.js'

import InitFactory from '../../utlis/initFactory.js';
const homemerchants=_('.home-merchants-content');
class ShopList extends InitFactory{
    beforeMount(){
        //发布订阅;
        //这里不会
        emitter.on('data-handled1',e=>{loadingEl.remove()});
        _('.g-view-container').addEventListener( 'scroll', debounce(slidingData))
        emitter.on("bottonscroll",e=>{ this.handleData();})
    }
    getData( ){
        return getShopItemData();
    }
    handleData( ){
        this.getData().then(e=>{this.data=e});
        const data=this.data;
        const frag=document.createDocumentFragment();

        //先判断ul.innerHTML是否存在，存在的话就是新增
        //let htme=ul.innerHTML||"";
        data.forEach(item=>{
            const{name,
                pic_url,
                min_price_tip,
                month_sale_num,
                mt_delivery_time,
                distance,
                wm_poi_score,
                brand_type,
                discounts2
            }=item

            const shopItenEL=parseToNode(
           litemp
              .replace(/__imgPath__/g, pic_url)
              .replace(/__name__/g,name)
              .replace(/__shopName__/g,name)
              .replace( '__sale__',month_sale_num>999 ? '999+' : month_sale_num)
              .replace( '__delivery-time__',mt_delivery_time)
              .replace( '__distance__',distance)
              .replace('__minprice__',min_price_tip)
              .replace('__stars__',getStars(wm_poi_score))
              .replace('__brandText__',brand_type ? '品牌':'新到')
              .replace('__bottom__', getShopItemBottom(discounts2))
              )[0]
            //给每个方法添加点击事件
            //取到点击上的的店铺名称
            shopItenEL.addEventListener('click',e=>{
                location.assign('../shopping/index.html?'+'txt=' + e.currentTarget.dataset.shopName);
            })

            frag.appendChild(shopItenEL);
        });
        ul.appendChild(frag)

        emitter.emit('data-handled1')
        const ulwrapper=document.querySelector('.store-list');

        const con=[ulwrapper,data];
        return con;
        //});
    }
    mountedData( ){
        console.log(this)
    }
}
new ShopList();

//加载框
const loadingEl=rederLoading()
homemerchants.appendChild(loadingEl);
//店家列表样式
const litemp = `
        <div class="shop-item" data-shop-name="__shopName__" 〉
            <div class="shop-item-top">
                <div class="shop-item-left">
                    <span class="shop-ing-box">
                    <img src="__imgPath__" />
                    </span>
                     <span class="shop-brand">__brandText__</span>
                </div>
                <div class="shop-item-right">
                <h3 class="shop-name">__name__</h3>
                <p class= "shop-detaie">
                <span class="stars">__stars__</span>
                <span class="sale">月售__sale__</span>
                <span class='shop-detaie-right'>
                <span class="delivery-tine">__delivery-time__ /</span>
                <span class="distance">&nbsp;__distance__</span>
                </span>
                </p>
                <p class="min-price"> __minprice__ </p>
                </div>
            </div>
          <div class= "shop-item-bottom">__bottom__ </div>
     </div>
    `

//滚动加载店铺商品
//用随机数方法得到json数据
//isok判断是否即将到达底部

//滑动方法
function slidingData(){
    emitter.on('data-handled',()=>{
        console.log(1);
    })

    const { scrollHeight, clientHeight }=_('.g-view-container');
    const scrollTop = document.documentElement.scrollTop||
    document.body.scrollTop||_('.g-view-container').scrollTop;
    const con=scrollHeight - (scrollTop + clientHeight);
    if(scrollHeight - (scrollTop + clientHeight) < 50) {
        if(!loadingEl) return;
        emitter.emit("bottonscroll");
    }
}

//判断店铺星级方法
function getStars(score){
    let htme='';
    const fueestarTemp=`<img src="../../assets/img/fullstar.png" class="star-img"/>`;
    const halfstarTemp=`<img src="../../assets/img/halfstar.png" class="halfstar-img"/>`;
    const grayTarTemp=`<img src="../../assets/img/gray-star.png" class="star-img"/>`;
    const [f,l]  =String(score).split('.');
    const h=l>5?1:0;

    for(let i=0;i<f;i++){
        htme += fueestarTemp
    }
    for(let i=0;i<h;i++){
        htme += halfstarTemp
    }
    for(let i= 0;i<5-f-h;i++) {
        htme += grayTarTemp
    }
    return htme;
}

//每个店铺底部显示的方法
function getShopItemBottom(infoArr){
    const temp=`
        <p>
            <img class="imgPath" src="__imgPath__"/>
            <span>__info__</span>
        </p>
        `
    let htme='';

    infoArr.forEach(({icon_url,info})=>{
        htme += temp.replace( '__imgPath__', icon_url)
            .replace('__info__',info);
    })
    return htme;
}