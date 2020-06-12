// 短路径配置
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("utils", "@/utils");
  },
  // 配置服务器地址
  devServer: {
    proxy: {
      compress: true,
      "/api/": {
        target: "http://192.168.0.26:8080",
        // secure: false,
        changeOrigin: true,
        
        pathRewrite: {
          "^/api/": ""
        }
        // changeOrigin: true,
        // logLevel: "debug"
      }
    }
  }
};
