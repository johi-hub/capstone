const router = require("express").Router();

const getWisdomAPI = async () => {
  router.post("/", (req, res) => {
    console.log(req);
    let userInput = req.body.userInput;
    let response;
    if (userInput === "hi" || userInput === "hello") {
      response = "what's up";
      res.send(response);
    }
  });
};
module.exports = router;
