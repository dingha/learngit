import {parseToNode,getsingle} from '../../utlis/index.js'

//export default ()=>parseToNode(temp)[0]

getToast =getsingle(getToast);

let showing=false;

//取到返回的text，并显示到提示框中
export default (text) =>{
    if(showing) return;
    showing=true;
    const toastEL= getToast();
    toastEL.querySelector('.toast-text').textContent=text;
    showToast(toastEL)&&hideToast(toastEL);
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
function hideToast(el){
    setTimeout(()=>{
        el.classList.remove('show')
        showing=false;
        setTimeout(()=>{el.remove()},300)
    },3000)
}

function getToast() {
    const toastEL=parseToNode(temp)[0]
    return toastEL;
}

const temp =`
    <div class="toast">
        <p class="toast-text"></p>
    </div>
`