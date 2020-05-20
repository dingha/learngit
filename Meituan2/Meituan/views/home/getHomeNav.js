import {_,parseToNode,emitter} from '../../utlis/index.js';
import {getHomeNavData} from '../../api/home.js';
import {rederLoading} from '../../components/index.js'
//import {DATA_HANDLE} from './constants.js'

const swiperWrapper = _('.swiper-wrapper');

//加载框
const loadingEl=rederLoading()
swiperWrapper.appendChild(loadingEl);
//发布订阅
emitter.on('data-handled',()=>{
    loadingEl.remove();
})


//轮播框样式
const
    temp = `
    <div class="swiper-slide">__slide__</div>
    <div class="swiper-slide">__slide__</div>
    <div class="swiper-slide">__slide__</div>
        `
const itemTemp = `
        <div class="home-nav-item">
            <span class="home-nav-item-img-box square-box">
                <img class="home-nav-item-img" src="__imgPath__"/>
            </span>
            <p class="home-nav-item-name">__name__</p>
        </div>
             `

//emitter.on(DATA_HANDLE,()=>{
//    new Swiper(".swiper-contatainer")
//})

//删除loadingEl加载框 //获取json数据并且每8个放入轮播内
getHomeNavData().then(data=> {
    handleData(data)
    new Swiper('.swiper-container');
})


function handleData(data){
    let iterations = Math.ceil(data.length/8);

    while (iterations--) {
        let html = '';
        for (let i = 0, item; i < 8 && (item = data.shift()) ; i++) {
            const{url,name}=item
            html += itemTemp
                .replace('__imgPath__', url)
                .replace('__name__', name)
        }
        swiperWrapper.appendChild(parseToNode(temp.replace('__slide__', html))[0])
    }
    emitter.emit('data-handled')
}