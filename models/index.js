const User = require('./User');
const Account = require('./account')

Account.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Account, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Account};

