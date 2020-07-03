import request from "./vender/request";
import {
    API_LOGIN_REGISTERED_SMS_DATA,
    API_LOGIN_REGISTERED_DATA,
    API_LOGIN_DATA,
    API_LOGIN_SETFORGOTTEN_FORGET_SMS_DATA,
    API_LOGIN_SETFORGOTTEN_FORGET_DATA
} from "./URLS.js";


// 获取注册验证码
export const postLoginRegisteredSmsData = (item) => {
    return request(API_LOGIN_REGISTERED_SMS_DATA, {
            data: {
                "phoneNum": item
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        });
};

// 获取注册
export const postLoginRegisteredData = (phone, code, pwd) => {
    return request(API_LOGIN_REGISTERED_DATA, {
            data: {
                "phoneNum": phone,
                "code": code,
                "password": pwd
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        });
};

// 获取登录phone, pwd
export const postLoginData = (phone, pwd) => {
    return request(API_LOGIN_DATA, {
            data: {
                "phoneNum": phone,
                "password": pwd
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
};

// 忘记密码验证码
export const postForgesmstData = (phone) => {
    return request(API_LOGIN_SETFORGOTTEN_FORGET_SMS_DATA, {
            data: {
                "phoneNum": phone
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
};


// 忘记密码
export const postForgetData = (phone, code) => {
    return request(API_LOGIN_SETFORGOTTEN_FORGET_DATA, {
            data: {
                "phoneNum": phone,
                "code": code
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
};


// 修改密码
export const postModifyData = (phone, pwd) => {
    return request(API_LOGIN_SETFORGOTTEN_FORGET_DATA, {
            data: {
                "phoneNum": phone,
                "code": pwd
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
};