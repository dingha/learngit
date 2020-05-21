import {parseToNode,getsingle} from '../../utlis/index.js'

//export default ()=>parseToNode(temp)[0]

getToast =getsingle(getToast);

let showing=false;

//取到返回的text，并显示到提示框中
export default ({text,event}) =>{
    if(showing) return;
    showing=true;
    const toastEL= getToast();
    const ok= toastEL.querySelector('.ok');
    const no= toastEL.querySelector('.no');
    no.addEventListener('click',e=>{handNo(toastEL)});
    ok.addEventListener('click',e=>{event(); handNo(toastEL);});
    toastEL.querySelector('.contoast-text').textContent=text;
    showToast(toastEL)

    //console.log(toastEL)
}
//显示提示框
function showToast(el){
    document.body.append(el);;
    setTimeout(()=>{
        el.classList.add('show')
    },10)
    return true;
}

//取消提示框
function handNo(el){
    setTimeout(()=>{
        el.classList.remove('show')
        showing=false;
        setTimeout(()=>{el.remove()},300)
    },30)
}

function getToast() {
    const toastEL=parseToNode(contemp)[0]
    return toastEL;
}

//const temp =`
//    <div class="toast">
//        <p class="toast-text"></p>
//    </div>
//`
const contemp =`

    <div class="contoast">
        <p class="contoast-text">是否清空购物车</p>
        <div class="submits">
            <span class="ok">确认</span>
            <span class="no">取消</span>
        </div>
    </div>
`