const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(`mongodb+srv://manhnt:a3580323A@cluster0.4pa11.mongodb.net/curriculum?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} else {
  mongoose.connect('mongodb+srv://manhnt:a3580323A@cluster0.4pa11.mongodb.net/curriculum?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
  })
}

const Curriculum = require('./Curriculum')
const User = require('./User')
const Verification = require('./Verification')
const Timeline = require('./Timeline')

module.exports = {
  Curriculum,
  User,
  Verification,
  Timeline
}
