export const _=(selector=>document.querySelector(selector));
export const __=(selector=>Array.from( document.querySelectorAll(selector)));

export const parseToNode=str=>{
    let div=document.createElement('div')
    div.innerHTML=str;
    const children=div.children;
    div = null;
    return children;
}

//随机数
export const shuffle = arr=>{
    const _arr = arr.slice()
    let randomNum =0;

    for (let i =0, len = _arr.length; i < len; i++) {
        randomNum = Math.floor(Math.random() * len)
        ;[_arr[i], _arr[randomNum]] = [_arr[randomNum], _arr[i]]
    }
    return _arr;
}
//防抖函数

export const debounce=(fn,delay=300)=>{
    return function debounce(...args){
        fn.tid &&clearTimeout(fn.tid)
        fn.tid =setTimeout(()=>{
            fn.call(this,...args)
        },delay)
    }
}

//滚动加载

export const rolling=(ids)=>{
    //提示:这里监听的是window, 但如果滚动的不是window， 那么就不会触发scroll事件，这里 就需要根据实际情况监听元素
    ids.addEventListener( 'scroll', e => {
        // 拿到页面中高度以及设 备视口高度
        const { scrollHeight, clientHeight }=ids; //. 拿到已滚动的高度
        const scrollTop = document.documentElement.scrollTop||
    document.body.scrollTop||ids.scrollTop;
        if(scrollHeight - (scrollTop + clientHeight) < 50) {
            isok=true
            if(isok==true){
                isok=false
                request('../../assets/json/homelist.json')
            .then(res=>{
                const {poilist}=res;
                const rs=shuffle(res.poilist).slice(0,5);

                return handleData(rs);//返回得到的json数据
            })
            }
        }
        else{ isok=false}
    })}

//单例
export const getsingle = fn =>{
    let instance
    return function (...args) {
        return instance || (instance = fn.call( this,...args));
    }
}

//转义字符，字符实体
export const escape =str=>str.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&/g,'&amp;');