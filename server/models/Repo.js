const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { Schema } = mongoose

// TODO: ENV management
// TODO: Consolidate mongoose initialization
mongoose.connect('mongodb://127.0.0.1:27017/gitalong', {
  useMongoClient: true
})

const repoSchema = new Schema({
  name: { type: String, index: true },
  githubId: { type: Number, index: { unique: true } },
  pushedAt: Date,
  createdAt: Date,
  language: String,
  stargazersCount: Number,
  htmlUrl: String,
  description: String,
  ownerLogin: String,
  topics: [String],
  owner: { type: Schema.Types.ObjectId, ref: 'User', index: true }
})

module.exports = mongoose.model('Repo', repoSchema)
