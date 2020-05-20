import {parseToNode,_,emitter} from '../../../utlis/index.js'
const foodrights = _('.s-view-food-rights')

import {allData,carData} from '../data.js'
const temps=`
            <div class="s-view-food-right"></div>
        `
const righttemp =`
            <div class="s-view-food-right-species">__species__</div>
        `
const foodtemp =`
            <div class="s-view-food-spus">
                <div class="food-item-left" >
                <img src="__imgPath__" alt="Alternate Text" />
                </div>
                <div class="food-item-right">
                    <h3 class="food-name">__name__</h3>
                    <p class="food-material">__material__</p>
                    <p class="food-praise">__praise__</p>
                    <div class="food-bottom">
                        <div class="food-unitprice">
                            <span class="food-price">__price__</span>
                            <span class="food-case"> /例</span>
                        </div>
                        <div class="food-bottom-right">
                            <span class="food-minus"></span>
                            <input class="food-number" value="__number__" type="number" placeholder="0"></span>
                            <span class="food-plus"></span>
                        </div>
                    </div>
                </div>
            </div>
        `
let isok=true;
let html = '';
var car=[];
//发布订阅
//判断是否存在食品，并显示
emitter.on('left-item-clicked',data=>{
    foodrights.innerHTML='';
    handleData(data);
});
//数据处理
function handleData(data){
    data.spus.forEach((item,i)=> {
        //同步购物车与页面中的数字方法
        const food= getRightItem(item);
        food.addEventListener('click',e=>{
            const className=e.target.className;
            if(className==='food-plus'){
                handlePlus(e.currentTarget)
            }
            else if(className==='food-minus'){
                handleMinus(e.currentTarget)
            }
        })
        foodrights.append(food);
    })
}
//每个食品的加号和减号
function handlePlus(el){
    allData.add(el);
    el.itemData.chosenNum++;
    el.querySelector('.food-number').value=el.itemData.chosenNum;
    //_('.s-footer-left-total').textContent="￥"+carData();
}
function handleMinus(el){
    if(el.itemData.chosenNum===0){return;}
    allData.add(el);
    el.itemData.chosenNum--;
    el.querySelector('.food-number').value=el.itemData.chosenNum;
    if(el.itemData.chosenNum===0){allData.delete(el)}
}
//生成右侧食品数据
function getRightItem(item){
    //同步购物车与页面中的数字方法
    //numbersData(spus,car)
    let foodhtml = '';
    const {
        name,
        description,
        praise_content,
        min_price,
        picture,
        chosenNum
    }=item;
    foodhtml += foodtemp
        .replace('__name__', name)
        .replace('__material__', description)
        .replace('__praise__', praise_content)
        .replace('__price__', min_price)
        .replace('__imgPath__',picture)
        .replace('__number__',chosenNum||(item.chosenNum=0)||'')
    let food=parseToNode(foodhtml)[0];
    //遍历allData，如果存在就插入allData值
    allData.forEach(items=>{
        //console.log(item);
        if(items.itemData.id===item.id) {
            food=items;
        }})
    food.itemData=item;
    return food
}

////生成食品数据方法
//function foodData(data){
//    const {name,spus}=data;
//    let foodhtml = '';
//    const foodright=_('.s-view-food-right')
//    const rightfood=parseToNode(righttemp.replace('__species__', name) )[0];
//    foodright.appendChild(rightfood);
//    //console.log(spus.length)
//    //遍历生成每个食品数据方法
//    spus.forEach((spus,i)=> {
//        //同步购物车与页面中的数字方法
//        numbersData(spus,car)
//        const {
//            name,
//            description,
//            praise_content,
//            min_price,
//            picture
//        }=spus;
//        foodhtml += foodtemp
//            .replace('__name__', name)
//            .replace('__material__', description)
//            .replace('__praise__', praise_content)
//            .replace('__price__', min_price)
//            .replace('__imgPath__',picture)
//        let food=parseToNode(foodhtml)[i];
//        const plus=food.querySelector('.food-plus');
//        const minus=food.querySelector('.food-minus');
//        const numbers=food.querySelector('.food-number');
//        //遍历allData，如果存在就插入allData值
//        allData.forEach(item=>{
//            if(item.itemData===spus) {
//                item.querySelector(".food-number").textContent = item.numberData;
//                food=item;
//            }})
//        foodright.appendChild(food);
//        food.itemData = spus;
//        //给每个加号减号添加事件
//        let number=numbers.innerHTML;
//        //保留数量
//        plus.addEventListener('click', e => {
//            //数组去重
//            allData.forEach(item=>{
//                if(item.itemData===spus) {
//                    allData.pop();number=item.numberData}
//            })
//            number++
//            food.numberData=number;
//            allData.push(food);
//            numbers.innerHTML=number;
//            spus.number=number;
//            _('.s-footer-left-total').textContent="￥"+carData();
//        })
//        minus.addEventListener('click', e => {
//            if(number===0){return;}
//            //数组去重
//            allData.forEach(item=>{
//                if(item.itemData===spus){
//                    allData.pop();number=item.numberData}
//            })
//            number--;
//            food.numberData=number;
//            allData.push(food);
//            numbers.innerHTML=number;
//            spus.number=number;
//            //数组去0
//            car.forEach(cars=>{
//                if(cars.num==0)car.pop();
//            })
//            _('.s-footer-left-total').textContent="￥"+carData();
//        })
//    })
//}

//同步购物车与页面中的数字方法
function numbersData(spus,car){
    //console.log(spus,car)
    car.forEach(item=>{
        const {food,num}=item;
        if(food.id===spus.id){
            spus.numberData=num;
            return spus.numberData;
        }
    })
}