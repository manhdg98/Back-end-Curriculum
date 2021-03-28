const mongoose = require('mongoose')

const TimelineSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
}, { timestamps: true })

const Timeline = mongoose.model('Timeline', TimelineSchema)

module.exports = Timeline

