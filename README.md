前端mock数据
[详细使用介绍见简书](https://www.jianshu.com/writer#/notebooks/49873774/notes/87623874)

# 一、NodeServe--node搭建的express服务
1. 安装supervisor: npm install supervisor -g
2. 安装依赖包：npm i
3. 启动命令: supervisor app.js
4. vue.config.js 代理地址: http://127.0.0.1:13999

***
# 二、local-mock(不推荐)
1. 本地请求json文件；在public下创建mock文件夹，同时请求路径为"/mock/login.json"
2. 只能使用get请求

***
# 三、mockjs
- #####注意:
1. 请求地址后面接参数，mock是拦截不到的，此时接口会报404（请求地址是精确匹配滴）;
解决：接口地址使用url
```
// 当请求地址为/apis/list?id=1或者/apis/list/1路由时Mock会拦截请求并返回上面的数据
Mock.mock(/\/apis\/list.*/, 'get', () => {})
```
2. 注意请求地址前缀和axios.baseurl相对应；
- #####优点:
1. 不限制请求方法；
2. 打包的时候，mock数据不会打进去；
3. 可以随机生成数据;
- #####缺点:
1. f12上看不到请求
2. 请求地址后面接参数，拦截不到；需使用正则匹配地址

***
# 四、body-parser