const express = require("express"),
  router = express.Router(),
  findMinCost = require("./minCost");



//get  minimum cost

router.get("/", (req, res, next) => {
  const minCost = findMinCost(req.body.order);
  res.send(`Minimum cost is ${minCost}`);
  console.log(`Minimum cost is ${minCost}`);
});

module.exports = router;
