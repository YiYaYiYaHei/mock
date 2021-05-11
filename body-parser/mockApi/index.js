/* import loginApi from './login.js';
console.log(loginApi)
export default {
  ...loginApi
} */

/* const fs = require("fs");
const path = __dirname;
const files = fs.readdirSync(path + "/mockList");
const mockList = [];
files.forEach(function(filename) {
  let model = require(path + "/mockList/" + filename);
  mockList.push(...model);
});
console.log(123)
function handleMock(app) {
  mockList.forEach(func => {
    func(app);
  });
}

module.exports = handleMock; */
const feMock = app => {
  /* app.get("/apis/list", function(req, res) {
    let list = [];
    for(let i = 0; i < 30; i++) {
      let listObject = {
        title: `标题${i}`,
        company: `company${i}`,
        attention_degree: `attention_degree${i}`,
        photo: `photo${i}`,
        time: +new Date(),
        proto: 'ip'
      }
      list.push(listObject);
    }
    console.log(list);
    res.json({
      data: list,
      status: 200,
      message: '成功'
    });
  }); */
  app.get("/apis/list", function(req, res) {
    res.json({
      name: "tom"
    });
  });
};
module.exports=feMock;