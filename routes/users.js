var express = require('express');
var faker = require("faker")
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const num = faker.datatype.number({min:5, max: 30})
  const users = []

  for (let i = 0; i < num; i++) {
    users.push({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email_address: faker.internet.email().toLowerCase()
    })
  }

  res.json(users);
});

module.exports = router;
