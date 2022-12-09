const express = require("express");
const router = express.Router();

const {
  createReview,
  getAllReview,
  getReview,
} = require("../controllers/review");

router.route("/").post(createReview).get(getAllReview);
router.route("/:id").get(getReview);

module.exports = router;
