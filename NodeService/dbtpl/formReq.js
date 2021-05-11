const mockData = require("../mock/data");

module.exports = app => {
    app.get('/plat/cabinet', async (req, res) => {
        res.send(mockData.cabinetList);
    });
    app.get('/plat/net', async (req, res) => {
        res.send(mockData.cabinetNetList);
    });
};
