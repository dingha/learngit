import {parseToNode,_,emitter} from '../../../utlis/index.js'
import {getShoppingMainData} from '../../../api/index.js';
const foodleft = _('.s-view-food-left');

const temp =`
            <div class="s-view-food-species hairline-bottom">
            __imgSpecies__
            __specie__</div>
        `

//生成左侧商品类别方法
getShoppingMainData().then(data=>{
    data=data.food_spu_tags;
    data.forEach((item,i)=> {handleData(item,i)});
})

//函数重写
function handleData(item,i){
    //默认第一个被点击
    const el=_handleData(item);
    el.click();
    handleData=_handleData;
}

function _handleData(item,i){
    const {name,spus,icon}=item;
    const html= temp
     .replace('__specie__', name)
     .replace('__imgSpecies__', (icon)?`<img src="${icon}"/>` :icon);

    const el=parseToNode(html)[0];
    el.itemData=item;
    el.addEventListener('click',handleClick);
    return foodleft.appendChild(el);
}

//点击事件方法
function handleClick(){
    //添加变为数组并且遍历
    Array.from(foodleft.querySelectorAll('.s-view-food-species')).forEach(el=>{
        el.classList.remove('active')
    })
    this.classList.add('active');

    //发布订阅
    emitter.emit('left-item-clicked',this.itemData);
}