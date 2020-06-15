import request from "./vender/request";
request("/api/wangh_fxsc/category/lookCategory.Action")
    //172.18.0.1:8880/FXSC/category/selCategory.Action
    .then(data => {
        console.log(data, 1)
    }).catch(err => {
        console.log(err, 2)
    })

// export const getHomeNavData={}=>{
// http://localhost:8080/192.168.0.26:8080/wangh_fxsc/category/selCategory.Action 404 (Not Found)
//     return request("http://localhost:8080/head.json")
// }http://172.18.0.1:8080/172.18.0.1:8880/FXSC/category/selCategory.Action