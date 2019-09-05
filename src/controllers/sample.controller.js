const SampleModel = require("../models/sample.model.js");

const getSomething = async (req, res, next) => {
  try {
    const something = await SampleModel.find();
    res.status(200).json(something);
  } catch (err) {
    next(err);
  }
};

module.exports = { getSomething };
