const Sequelize = require("sequelize");

const sequelize = new Sequelize("sakura", "sakura","sakura12#$",{
    dialect : "mysql", host : "docker.zepinos.com", port: 13306
})


module.exports = sequelize;