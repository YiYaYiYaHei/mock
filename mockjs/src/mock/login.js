//引入mockjs
const Mock = require('mockjs');

Mock.mock('/apis/login', 'post', (req, res) => {
  return {
    "status": 200,
    "message": "成功",
    "data": {
      "token": "ehsdjskdhajhdklj"
    }
}
});
Mock.mock('/apis/logout', 'get', (req, res) => {
  return {
    "status": 200,
    "message": "成功"
  }
})