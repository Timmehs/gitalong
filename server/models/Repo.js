const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { Schema } = mongoose

// TODO: ENV management
// TODO: Consolidate mongoose initialization
mongoose.connect('mongodb://127.0.0.1:27017/gitalong', {
  useMongoClient: true
})

const repoSchema = new Schema({
  name: String,
  githubId: Number,
  pushedAt: Date,
  createdAt: Date,
  stargazersCount: Number,
  htmlUrl: String,
  description: String,
  ownerLogin: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Repo', repoSchema)
