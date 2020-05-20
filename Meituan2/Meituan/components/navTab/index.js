const temp = `
    <div class="nav-tab">__item__</div>
        `
const itemTemp = `
    <a class ="nav-tab-item" href="__to__">
        <span class ="nav-tab-box square-box">
            <img class ="nav-tab-img" src="__iconPath__" alt="__altText__" />
       </span>
           <p class ="nav-tab-name">__navName__</p>
     </a>
    `
export default class NavTab{
    constructor(el,data){
        this.el=el;
        this.data = data;
        this.path = location.pathname;
        this.init();
    }

    init(){
        this.handleData()
        this.bindEvent()
    }

    handleData(){
        const data=this.data;
        let html = '';
        data.forEach(item=> {
            html += itemTemp
                .replace('__to__', item.to)
                .replace(
                '__iconPath__',
                getPath(this.path) === item.path ? item.activeIcon :
                item.icon
                )
                .replace('__altText__', item.alt)
                .replace('__navName__', item.text)
        })
        this.el.innerHTML = temp.replace('__item__', html);
    }

    bindEvent(){
        const el=this.el;
        Array.from(el.querySelectorAll('.nav-tab-item')).forEach(a=>
            a.addEventListener('click', this.handleclick.bind(this))
   )}
    handleclick(e) {
        if (getPath(this.path) === getPath(e.currentTarget.href))
            e.preventDefault();
    }
}

function getPath(path){
    if(path.includes('home')) return 'home';
    if(path.includes('my')) return 'my';
    if(path.includes('order')) return 'order';
}