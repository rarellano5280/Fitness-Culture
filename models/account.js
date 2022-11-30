const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }
Account.init ({

   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
   },
   
   phone: {
    type: DataTypes.STRING,
    allowNull: false,
   },

   address: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   
   user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'user',
        key: 'id'
    }
   }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'account'
    }
);

module.exports = Account;