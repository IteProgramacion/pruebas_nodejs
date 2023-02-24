const {Model, DataTypes} = require("sequelize");
const sequelize = require('../db');
const User = require('./users');
class Profile extends Model{

}

Profile.init({
    nombre: {
        type: DataTypes.STRING,
    }, apellidop: {
        type: DataTypes.STRING,
    }, apellidom: {
        type: DataTypes.STRING,
    },
},{
    sequelize,
    modelName: 'Profile'
});
(async () => {await Profile.sync();})();

module.exports = Profile;