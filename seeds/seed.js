const sequelize = require('../config/connection');
const { User } = require('../models');
const { Account } = require('../models')

const userData = require('./userData.json');
const accountData = require('./accountSeed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Account.bulkCreate(accountData, {
  });

  process.exit(0);
};

seedDatabase();
