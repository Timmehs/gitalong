const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { Schema } = mongoose

// TODO: ENV management
// TODO: Consolidate mongoose initialization
mongoose.connect('mongodb://127.0.0.1:27017/gitalong', {
  useMongoClient: true
})

const userSchema = new Schema({
  avatarUrl: String,
  githubUrl: String,
  login: { type: String, index: { unique: true } },
  lastLogin: Date,
  githubId: { type: String, index: { unique: true } },
  accessToken: String,
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followingEtag: String,
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followersEtag: String,
  repos: [{ type: Schema.Types.ObjectId, ref: 'Repo' }],
  reposEtag: String
})

module.exports = mongoose.model('User', userSchema)
