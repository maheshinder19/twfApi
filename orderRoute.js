const express = require("express"),
  router = express.Router(),
  findMinCost = require("./minCost");



//get  minimum cost

router.post("/", (req, res, next) => {
  if (req.body.order == undefined) {
    next({ message: "Please provide valid order input!" });
  } else {
    const minCost = findMinCost(req.body.order);

    res.send(`Minimum cost is ${minCost}`);
    console.log(`Minimum cost is ${minCost}`);
  }
});

module.exports = router;
