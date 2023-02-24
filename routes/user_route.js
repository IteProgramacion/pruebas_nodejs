const {Router} = require('express')
const {listUsers} = require("../controller/user_controller");
const router = Router();

router.post('/listUser', listUsers);

module.exports = router;