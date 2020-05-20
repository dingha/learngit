//import {parseToNode,_} from '../../utlis/index.js'
//import {getShoppingMainData} from '../../api/index.js';
//const foodleft = _('.s-view-food-left');
//const foodrights = _('.s-view-food-rights')

//const temps=`
//            <div class="s-view-food-right"></div>
//        `
//const temp =`
//            <div class="s-view-food-species hairline-bottom">
//            __imgSpecies__
//            __specie__</div>
//        `
//let isok=true;

//const righttemp =`
//            <div class="s-view-food-right-species">__species__</div>
//        `
//const foodtemp =`
//            <div class="s-view-food-spus">
//                <div class="food-item-left" >
//                <img src="__imgPath__" alt="Alternate Text" />
//                </div>
//                <div class="food-item-right">
//                    <h3 class="food-name">__name__</h3>
//                    <p class="food-material">__material__</p>
//                    <p class="food-praise">__praise__</p>
//                    <div class="food-bottom">
//                        <div class="food-unitprice">
//                            <span class="food-price">__price__</span>
//                            <span class="food-case"> /例</span>
//                        </div>
//                        <div class="food-bottom-right">
//                            <span class="food-minus"></span>
//                            <span class="food-number">0</span>
//                            <span class="food-plus"></span>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        `
//let html = '';

////生成左侧商品类别方法
//function handleData(){
//    getShoppingMainData().then(data=>{
//        data.forEach((item,i)=> {
//            const {name,spus,icon}=item;
//            //console.log(spus);
//            html += temp
//                .replace('__specie__', name)
//                .replace('__imgSpecies__', (icon)?` <img src="${icon}"  />` :
//                icon);

//            const specie=parseToNode(html)[i];
//            foodleft.appendChild(specie);
//            specie.addEventListener('click',e=>{
//                if(isok===true){
//                    isok=false;
//                    foodrights.appendChild(parseToNode(temps)[0]);
//                    foodData(spus,name);
//                }
//                else{
//                    _('.s-view-food-right').remove();
//                    foodrights.appendChild(parseToNode(temps)[0]);
//                    foodData(spus,name);
//                }
//            })
//        })
//    })
//}
//export default handleData

////生成食品数据方法
//function foodData(spus,name){
//    let foodhtml = '';
//    console.log(spus,name)
//    const foodright=_('.s-view-food-right')
//    const rightfood=parseToNode(righttemp.replace('__species__', name) )[0];
//    foodright.appendChild(rightfood);
//    //console.log(spus.length)
//    console.log(foodhtml.length)
//    //遍历生成每个食品数据方法
//    spus.forEach((spus,i)=> {
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
//        const food=parseToNode(foodhtml)[i];
//        //console.log(food)
//        foodright.appendChild(food);
//    })
//}