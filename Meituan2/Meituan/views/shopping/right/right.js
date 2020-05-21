import {parseToNode,_,emitter} from '../../../utlis/index.js'
import {allData,carData,redData} from '../data.js'
const foodrights = _('.s-view-food-rights')
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
    _('.s-footer-left-total').textContent="￥"+carData();

    _('.s-footer-left-red-dot').textContent=redData();
}
function handleMinus(el){
    if(el.itemData.chosenNum===0){return;}
    allData.add(el);
    el.itemData.chosenNum--;
    el.querySelector('.food-number').value=el.itemData.chosenNum;
    if(el.itemData.chosenNum===0){allData.delete(el)}
    _('.s-footer-left-total').textContent="￥"+carData();

    _('.s-footer-left-red-dot').textContent=redData();
}
//生成右侧食品数据
function getRightItem(item){
    //同步购物车与页面中的数字方法
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
        if(items.itemData.id===item.id) {
            food=items;
        }})
    food.itemData=item;
    return food
}

//同步购物车与页面中的数字方法
function numbersData(spus,car){
    car.forEach(item=>{
        const {food,num}=item;
        if(food.id===spus.id){
            spus.numberData=num;
            return spus.numberData;
        }
    })
}