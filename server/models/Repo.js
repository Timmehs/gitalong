const mongoose = require('mongoose')
const { Schema } = mongoose

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
  topics: [],
  owner: { type: Schema.Types.ObjectId, ref: 'User', index: true }
})

module.exports = mongoose.model('Repo', repoSchema)
