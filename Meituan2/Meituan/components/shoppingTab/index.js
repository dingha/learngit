import {parseToNode} from '../../utlis/index.js'
const temp=`
    <div class="s-footer-container ">
    <div class="s-footer-left">
                <img class="s-footer-left-icon" src="../../assets/img/shop-icon.png">
                <div class="s-footer-left-text">
                    <p class="s-footer-left-total">__total__</p>
                    <p class="s-footer-left-TSfee">__TSfee__</p>
                </div>
                </div>
     <div class="s-footer-right">去结算</div>
      </div>
    `
//export default ()=>parseToNode(temp)[0]
export default({total='￥0',TSfee="另需配送费 ￥0",el=_('.s-footer-container')})=>{
    let html='';
    html=temp.replace('__total__',total)
        .replace('__total__',total)
    .replace('__TSfee__',TSfee);

    const shoppingTabEL=el.appendChild(parseToNode(html)[0]);
    ////点击跳转事件
    //shoppingTabEL.addEventListener('click',e=>history.back());
}