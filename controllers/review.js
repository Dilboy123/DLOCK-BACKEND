const Review = require("../models/Review");
const { statusCodes, StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllReview = async (req, res) => {
  const reviews = await Review.find({}).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};

const getReview = async (req, res) => {
  const {
    user: { userId },
    params: { id: reviewId },
  } = req;

  const review = await Review.findOne({
    _id: reviewId,
    createdBy: userId,
  });
  if (!review) {
    throw new NotFoundError(`No review with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

const createReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
};

module.exports = {
  createReview,
  getAllReview,
  getReview,
};
