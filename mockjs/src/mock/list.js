//引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

//当post请求到/apis/list/1路由时Mock会拦截请求并返回上面的数据
Mock.mock(/\/apis\/list\/\d+/, 'post', (req, res) => {
  let list = [];
  for(let i = 0; i < 30; i++) {
    let listObject = {
      title: Random.csentence(5, 10),    //随机生成一段中文文本。
      company: Random.csentence(5, 10),
      attention_degree: Random.integer(100, 9999),    //返回一个随机的整数。
      photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js'),
      time: +new Date(),
      proto: 'ip'
    }
    list.push(listObject);
  }
  return {
    data: list,
    status: 200,
    message: '成功'
  }
});

//当post请求到/apis/list?id=1或者/apis/list/1路由时Mock会拦截请求并返回上面的数据
Mock.mock(/\/apis\/list.*/, 'post', (req, res) => {
  let list = [];
  for(let i = 0; i < 30; i++) {
    let listObject = {
      title: Random.csentence(5, 10),    //随机生成一段中文文本。
      company: Random.csentence(5, 10),
      attention_degree: Random.integer(100, 9999),    //返回一个随机的整数。
      photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js'),
      time: +new Date(),
      proto: 'ip'
    }
    list.push(listObject);
  }
  return {
    data: list,
    status: 200,
    message: '成功'
  }
});