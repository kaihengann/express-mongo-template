const mongoose = require('mongoose')

const SampleSchema = new mongoose.Schema({
  name: { type: String, required: true}
 })

const SampleModel = mongoose.model('something', SampleSchema)

module.exports = SampleModel