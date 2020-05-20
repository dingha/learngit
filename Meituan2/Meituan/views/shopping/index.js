import '../../common/js/rem.js';
import './right/right.js';
import {getShoppingMainData} from '../../../api/index.js';

//引入底部购物框渲染js
import {parseToNode,_} from '../../utlis/index.js'
import './left/left.js';
import './carbottom/carbottom.js';
import {renderShoppingTab,renderTopBar} from '../../components/index.js';

const shop_name=_('.s-header-name');
const footer_container=_('.s-footer-container');

//找到头部名称
const shopName = location.search;

const searchObj = new URLSearchParams(location.search);

const shopname = searchObj.get('txt');
document.title=shopname;

//shop_name.innerHTML=shopname;

//生成头部标签
renderTopBar({title:shopname,backIcon:true,el:_('.s-header')})

//生成底部标签
var shopTSfee='';
getShoppingMainData().then(data=>{
    shopTSfee = data.shopping_cart.shipping_fee_cart_tip;
    _('.s-footer-left-TSfee').textContent=shopTSfee;
})
renderShoppingTab({total:"￥0",TSfee:"",el:footer_container});

//生成点菜 评论 商家导航栏
const temp=`
    <div class="s-nav">
    <span class="s-nav-order">点菜</span>
    <span class="s-nav-comments">评价</span>
     <span class="s-nav-merchants">商家</span>
      </div>
    `
export default ()=>parseToNode(temp)[0]
const navEl=parseToNode(temp)[0]
_('.s-nav').appendChild(navEl);