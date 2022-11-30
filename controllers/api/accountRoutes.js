const router = require('express').Router();
const { Account, User } = require('../../models');


router.get('/', async (req, res) => {
    try {
      const accountData = await Account.findAll({
        include: [{ model: User }],
      })
      res.status(200).json(accountData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  

module.exports = router;