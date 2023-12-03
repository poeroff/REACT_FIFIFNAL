const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const userinfo = sequelize.define("user_info",{
    user_seq : {
        type : Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false,
    },

    email : {
        type : Sequelize.STRING,
        allowNull : false,

    },
    password :{
        type : Sequelize.STRING,
        allowNull : false,

    },
    role: {
        type : Sequelize.STRING,
        defaultValue : "admin",
        allowNull : false,

    },
    name : {
        type : Sequelize.STRING,
        allowNull : true,
        
    },
    profile_image : {
        type : Sequelize.STRING,
        allowNull : true,
       

    },
    point:{
        type : Sequelize.BIGINT,
        allowNull : false,
        defaultValue : 0 

    },
    is_validated : {
        type : Sequelize.BOOLEAN,
        defaultValue : false ,
       

    },
    address :{
        type : Sequelize.STRING,
        allowNull : true,

    },
    phone : {
        type : Sequelize.STRING,
        allowNull : true,

    },
},{
    hooks : {
        
    }

})

module.exports = userinfo;