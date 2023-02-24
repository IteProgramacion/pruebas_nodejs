const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db");
const Profile = require("./profile");

class User extends Model {
}

User.init({
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});
(async () => {
    const object = await User.sync();
    console.log('---------- User.sync: '+ object);
})();
User.hasOne(Profile);
Profile.belongsTo(User);
module.exports = User;