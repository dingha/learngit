import {emitter} from './index.js'
const eventMap={
    BEFORE_MOUNT:'before-mount' ,
    GOT_DATA:'got-data ',
    DATA_HANDLED: 'data-handled',
    MOUNTED:"mounted"
}

export default class InitFactory{
    constructor( ){
        this.data=null;
        Object.assign(this,eventMap)
        this.init( )
    }
    //异步函数
    async init() {
        this.beforeMount();
        emitter.emit(this.BEFORE_MOUNT)
        this.data=await this.getData( )
        emitter.emit(this.GOT_DATA)
        this.handleData( )
        emitter.emit(this.DATA_HANDLED)
        this.mounted()
        emitter.emit(this.MOUNTED)
    }
    beforeMount(){}
    getData(){
        throw Error("必须复写父类getData");
    }
    handleData(){
        throw Error("必须复写父类handleData");
    }
    mounted(){}
}