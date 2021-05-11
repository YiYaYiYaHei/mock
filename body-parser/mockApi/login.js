const login = app => {
  app.get("/apis/login", function(req, res) {
    res.json({
      name: "tom"
    });
  });
}

const list = app => {
  app.post("/apis/login", function(req, res) {
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
    res.json({
      data: list,
      status: 200,
      message: '成功'
    });
  });
}

export default {
  login,
  list
}