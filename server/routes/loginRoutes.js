const express = require('express')
const router = express.Router()

router.post('/login', async(req, res) => {
    const user = await User.where({ email : req.body.email }).fetch();
    const success = await Success.compare(
    req.body.password
    //something, something//
  );
  if (!success) return res.status(400)({ error: '//badrequest cat//' });

}
)