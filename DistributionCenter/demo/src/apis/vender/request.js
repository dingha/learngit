import {SUCCESS_CODE,TIMEOUT} from './constants.js';
import {_,shuffle,debounce} from '../../utlis/index.js';
import {rendertoast} from '../../components/index.js';
import {ERROR_TIMEOUT,ERROR_NETWORK,ERROR_UNKNOWN}from './errorMsg.js';

const gcontainer=_('.g-container');
//const prrprompt=E1rrPrompt()

const baseOptions={
    method:'get',
    timeout:10000
}

export default (url,options)=>{
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    return new Promise((resolve,reject)=>{
        return axios({
            url,
        ...baseOptions,
        ...options
        }).then(res=>{
            const {
                status,
                data:{code,data}
            }=res;
            if(status==200&&code==SUCCESS_CODE ){
                setTimeout(()=>{
                    resolve(data);
                },1000);
            }
        })
        .catch(err=>{
            reject(err)
        })
    }).then(data=>{
        return data;
    })
     .catch(err=>{
         const {message}=err;
         rendertoast(handleError(message.toLowerCase()));
     })
}

function handleError(message){
    if(message.includes('timeout')) return ERROR_TIMEOUT;
    else if(message.includes('network')) return ERROR_NETWORK;
    return ERROR_UNKNOWN;
}