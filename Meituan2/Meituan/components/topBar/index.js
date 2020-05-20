import {parseToNode,_,escape} from '../../utlis/utils.js'

const temp=`
    <header class="s-header hairline-bottom">
    __backIcon__
    <span class="s-header-name">__title__</span>
    </header>
    `

export default({title='标题',backIcon=false,el=_('.s-header')})=>{
    let html='';

    title=escape(title);

    html=temp.replace('__backIcon__', (backIcon)?`
    <div class="s-header-rtn"> <img src="../../assets/img/back.png"/></div>
    ` :"")
    .replace('__title__',title);

    const topBarEL=el.appendChild(parseToNode(html)[0]);
    //点击返回事件
    topBarEL.addEventListener('click',e=>history.back());
}