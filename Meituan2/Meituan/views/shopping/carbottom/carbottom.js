import {parseToNode,_,emitter} from '../../../utlis/index.js'
import {allData,carData} from '../data.js'
import {getShoppingMainData} from '../../../api/index.js';
//const bottoncar=_('.car-bottom-nav');
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
        if(_('.car-bottom')) _('.car-bottom').remove();
        _('.s-container').appendChild(parseToNode(cartemp)[0]);
        //_('.s-footer-left-total').textContent="￥"+carData();
        //_('.s-footer-left').carData=car;

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
    })
},10)
//每个食品的加号和减号
function handlePlus(el,item){
    item.itemData.chosenNum++;
    item.querySelector('.food-number').value=item.itemData.chosenNum;
    el.querySelector('.car-bottom-nav-food-number').value=item.itemData.chosenNum;
    //_('.s-footer-left-total').textContent="￥"+carData();
}
function handleMinus(el,item){
    if(item.itemData.chosenNum===0){return;}
    item.itemData.chosenNum--;
    item.querySelector('.food-number').value=item.itemData.chosenNum;
    el.querySelector('.car-bottom-nav-food-number').value=item.itemData.chosenNum;
    if(item.itemData.chosenNum===0){allData.delete(item),el.remove()}
    //_('.s-footer-left-total').textContent="￥"+carData();
}
//发布订阅
//判断是否存在食品，并显示
//emitter.on('footer-left-clicked',e=>{
//    //显示购物车
//    let html='';
//    if(_('.car-bottom')) _('.car-bottom').remove();
//    _('.s-container').appendChild(parseToNode(cartemp)[0]);
//    allData.forEach((item)=> {
//        //console.dir(item);
//        const {itemData,numberData}=item;
//        //const {num}=itemData;
//        //const food = itemData;
//        html= itemtemp
//        .replace('__name__', itemData.name)
//        .replace('__min_price__', itemData.min_price)
//        .replace('__number__', numberData);
//        //生成购物车中每一个食物信息
//        const el=parseToNode(html)[0];
//        el.itemData = itemData
//        _('.car-bottom-nav').appendChild(el);
//        //获取购物篮每个加号和减号
//        const plus=el.querySelector('.car-bottom-nav-food--plus');
//        const minus=el.querySelector('.car-bottom-nav-food-minus');
//        const number=el.querySelector('.car-bottom-nav-food-number');
//        //购物车里的商品添加加减点击事件
//        plus.addEventListener('click', e => {
//            item=symbolClick(item,'plus',number);
//        })
//        minus.addEventListener('click', e => {
//            item=symbolClick(item,'minus',number);})
//    });

//清空购物车
if(_('.car-bottom-top'))
    _('.car-bottom-top').addEventListener('click', e => {
        if(allData!=[])
        {allData.splice(0,allData.length);
            console.log(allData,carData());}
    })

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
//el.itemData = itemData
//_('.car-bottom-nav').appendChild(el);
////获取购物篮每个加号和减号
//const plus=el.querySelector('.car-bottom-nav-food--plus');
//const minus=el.querySelector('.car-bottom-nav-food-minus');
//const number=el.querySelector('.car-bottom-nav-food-number');
////购物车里的商品添加加减点击事件
//plus.addEventListener('click', e => {
//    item=symbolClick(item,'plus',number);
//})
//minus.addEventListener('click', e => {
//    item=symbolClick(item,'minus',number);})

//判断点击的是加号还是减号，并运算
//function symbolClick(item,symbol,number){
//    const {numberData,itemData}=item;
//    if(symbol==='plus'){item.numberData++;}
//    else if(symbol==='minus'&&item.numberData>0){item.numberData--;}
//    number.innerHTML=item.numberData;
//    const el = allData.find(_el => _el.itemData === itemData);
//    el.querySelector(".food-number").textContent = item.numberData;
//    _('.s-footer-left-total').textContent="￥"+carData();
//    return item;
//}