import request from "./vender/request";
import {
    API_LOGIN_REGISTERED_SMS_DATA,
    API_LOGIN_REGISTERED_DATA,
    API_LOGIN_DATA
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
                "password":pwd
            }
        })
        .then(data => {
            console.log(123,data)
            return data;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
};
