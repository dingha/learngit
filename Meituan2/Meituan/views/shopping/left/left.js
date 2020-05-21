import {parseToNode,_,emitter} from '../../../utlis/index.js'
import {getShoppingMainData} from '../../../api/index.js';

import InitFactory from '../../../utlis/initFactory.js';
const foodleft = _('.s-view-food-left');

const temp =`
            <div class="s-view-food-species hairline-bottom">
            __imgSpecies__
            __specie__</div>
        `

class LeftNav extends InitFactory{
    beforeMount(){
        //默认第一个被点击
    }
    getData( ){
        return getShoppingMainData();
    }

    handleData( ){
        //默认第一个被点击
        let is0k=true;
        emitter.on('data-leftel',e=>{
            if (is0k===true)
                e.click();;is0k=false});
    }

    mounted( ){
        const data=this.data.food_spu_tags;
        data.forEach((item)=> {
            const {name,spus,icon}=item;
            const html= temp
             .replace('__specie__', name)
             .replace('__imgSpecies__', (icon)?`<img src="${icon}"/>` :icon);

            const el=parseToNode(html)[0];
            el.itemData=item;
            el.addEventListener('click',handleClick);

            emitter.emit('data-leftel',el);
            return foodleft.appendChild(el);
        } )
    }
}
new LeftNav();

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