import {parseToNode,_,emitter} from '../../../utlis/index.js'
import {allData,carData,redData} from '../data.js'
import {getShoppingMainData} from '../../../api/index.js';
import {rendercontoast} from '../../../components/index.js';

let i=1;
const cartemp =`
            <div class="car-bottom">
            <div class="car-bottom-top">清空购物车</div>
            <div class="car-bottom-nav">
            </div>
        </div>
        `
const shadow=`
            <div class="shadow"></div>
    `
const itemtemp =`
            <div class="car-bottom-nav-food hairline-bottom">
                    <samp class="car-bottom-nav-food-name">__name__</samp>
                    <samp class="car-bottom-nav-food-right">
                        <samp class="car-bottom-nav-food-price">__min_price__</samp>
                        <span class="car-bottom-nav-food-minus"></span>
                        <input class="car-bottom-nav-food-number" value="__number__" type="number" placeholder="0"></span>
                        <span class="car-bottom-nav-food--plus"></span>
                    </samp>
                </div>
        `
let isok=true;

//购物车点击事件
setTimeout(()=>{
    _('.s-footer-left').addEventListener('click', e => {
        if(allData.size===0){return}
        if(_('.car-bottom')) _('.car-bottom').remove();
        _('.s-container').appendChild(parseToNode(cartemp)[0]);
        _('.s-footer-left-total').textContent="￥"+carData();

        allData.forEach((item)=> {
            const el=getCarItem(item);
            el.addEventListener('click',e=>{
                const className=e.target.className;
                if(className==='car-bottom-nav-food--plus'){
                    handlePlus(e.currentTarget,item)
                }
                else if(className==='car-bottom-nav-food-minus'){
                    handleMinus(e.currentTarget,item)
                }
            })
            _('.car-bottom-nav').append(el);
        })
        //阴影部分,和删除购物车
        if(isok==false){_('.shadow').remove();_('.car-bottom').remove();isok=true;}
        else{
            _('.s-view-food').append(parseToNode(shadow)[0]);
            isok=false;}
        //清空购物车
        if(_('.car-bottom-top'))
            _('.car-bottom-top').addEventListener('click', e => {
                //清空提示框点击事件点击事件
                rendercontoast({text:"是否清除购物车",event:e=>{
                    if(_('.shadow')) _('.shadow').remove();
                    if(_('.car-bottom')) _('.car-bottom').remove();
                    allData.forEach(item=>{
                        item.itemData.chosenNum=0;
                        item.querySelector('.food-number').value=item.itemData.chosenNum;
                    })

                    allData.clear();
                    _('.s-footer-left-total').textContent="￥"+carData();

                    _('.s-footer-left-red-dot').textContent=allData.size;
                    isok=true;}});
            })
    })
},10)

//每个食品的加号和减号
function handlePlus(el,item){
    item.itemData.chosenNum++;
    item.querySelector('.food-number').value=item.itemData.chosenNum;
    el.querySelector('.car-bottom-nav-food-number').value=item.itemData.chosenNum;
    _('.s-footer-left-total').textContent="￥"+carData();
    _('.s-footer-left-red-dot').textContent=redData();
}
function handleMinus(el,item){
    if(item.itemData.chosenNum===0){return;}
    item.itemData.chosenNum--;
    item.querySelector('.food-number').value=item.itemData.chosenNum;
    el.querySelector('.car-bottom-nav-food-number').value=item.itemData.chosenNum;
    if(item.itemData.chosenNum===0){allData.delete(item),el.remove()};
    if(allData.size===0){_('.shadow').remove();_('.car-bottom').remove();isok=true;}
    _('.s-footer-left-total').textContent="￥"+carData();
    _('.s-footer-left-red-dot').textContent=redData();
}

function getCarItem(item){
    item.itemData.chosenNum;
    item.itemData.name;
    let html='';
    html= itemtemp
    .replace('__name__', item.itemData.name)
    .replace('__min_price__', item.itemData.min_price)
    .replace('__number__',  item.itemData.chosenNum);
    //生成购物车中每一个食物信息
    const el=parseToNode(html)[0];
    return el;
}