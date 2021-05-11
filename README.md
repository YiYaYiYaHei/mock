前端mock数据
<a href="https://www.jianshu.com/p/ad5a55de78cf" target="_blank">详细使用介绍见简书</a>

# 一、NodeServe--node搭建的express+body-parser服务
[express+body-parser](https://segmentfault.com/a/1190000020989763?utm_source=tag-newest?_blank)
1. 安装supervisor: npm install supervisor -g
2. 安装依赖包：npm i
3. 启动命令: supervisor app.js
4. vue.config.js 代理地址: http://127.0.0.1:13999
- #####优点
1. 不限制请求方法；
2. 对打包无影响；
3. 可以模拟请求头带token的情况;

- #####缺点
1. 多人开发时，需要同步代码；
2. 返回的数据写死了；

***
# 二、local-mock(不推荐)
1. 本地请求json文件；在public下创建mock文件夹，同时请求路径为"/mock/login.json"
2. 只能使用get请求
- #####缺点
 1.  打包：因为是放在public下，所以打包的时候，会将mock文件夹打进去；
![image.png](https://upload-images.jianshu.io/upload_images/26128988-e9a5a46edf99d299.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 只能使用get请求，其他请求方法会报404；
3. 返回的数据写死了，和直接在代码里写返回没有太大区别；
4. 多人开发时，需要同步代码；
5. 无法模拟请求头带token的情况;


***
# 三、mockjs
1. 安装mockjs：npm install mockjs --save
2. main.js引入mock: require('./mock/index.js');
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
1. 安装body-parser: npm i body-parser -S
2. [可以在vue.config.js中直接写，但是效果不好，每次更改都要重启~](https://blog.csdn.net/hl971115/article/details/92412501?_blank)
3. [body-parser,需要node和NodeService差不多（暂未完成）](https://segmentfault.com/a/1190000020989763?utm_source=tag-newest?_blank)
4. [body-parser配置](https://segmentfault.com/a/1190000022547716?_blank)

***
# 五、xl_mock
1. 全局安装：npm install -g xl_mock
2. 在项目里开启：xl_mock start -p 2048（启动成功后，会自动打开一个可视化界面）
- #####注意:
1. 创建接口后，会在项目根目录生成mock文件夹; (在项目里执行xl_mock start -p 2048，使用项目里的mock；多个项目同时访问xl_mock，以最后开启的xl_mock为准)
![image.png](https://upload-images.jianshu.io/upload_images/26128988-8a527dc8625c81a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- #####优点：
1. 可视化界面;
2. 生成的mock数据，打包的时候不会打进去;
3. 多人开发时, 无须同步代码，只需接口请求代理到指定人电脑即可，然后访问他的ip，也能添加接口
![image.png](https://upload-images.jianshu.io/upload_images/26128988-dc5d1db00b368c24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- #####缺点：
1. 需要手动添加返回字段;
2. 无法模拟请求头带token的情况;
3. 无法动态返回数据，都是再创建的时候写死了；

