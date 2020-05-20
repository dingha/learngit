//发布订阅
class EventEmitter {
    emit(type,...args){
        const fns=this.listeners[type];
        if(!fns||fns.length===0)return;
        fns.forEach(fn=>fn.call(this,...args));
    }
    on(type,cb){
        const fns = this.listeners[type] || (this.listeners[type] = [])
        fns.push(cb)
        return this;
    }
    constructor(){
        this.listeners = {}
    }
    off(type,cb){
        const fns = this.listeners[type]
        if(!fns||fns.length === 0) return;
        this.listeners[type]=this.listeners.filter(fn=>fn!==cb)
        return this;
    }
}

//单例
export default (()=>{
    let instance
    return {
        init(){
            return instance||( instance= new EventEmitter());
        }
    }
})()