const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const userinfo = sequelize.define("user_info",{
    user_seq : {
        type : Sequelize.BIGINT,
        allowNull : false,

    },
    id : {
        type : Sequelize.STRING,
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
        allowNull : false,

    },
    name : {
        type : Sequelize.STRING,
        
    },
    profile_image : {
        type : Sequelize.STRING,
       

    },
    cover_image:{
        type : Sequelize.STRING,

    },
    point:{
        type : Sequelize.BIGINT,
        allowNull : false,

    },
    is_validated : {
        allowNull : false,

    },
    date_add:{
        type : Sequelize.DATE,
        allowNull : false,

    },
    date_mode:{
        type : Sequelize.DATE,
        allowNull : false,

    },
    address :{
        type : Sequelize.STRING,

    },
    phone : {
        type : Sequelize.STRING,

    },
},{
    hooks : {
        
    }

})

module.exports = userinfo;