// models.js
const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserProfile',
  },
});

// UserProfile schema
const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  avatarUrl: String,
  bio: String,
  playlists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist',
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

// Playlist schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tracks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track',
  }],
});

// Track schema
const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: String,
  album: String,
  duration: String,  // e.g., '3:15' format
  url: String,  // URL for the track (e.g., file path or external link)
});

// Session schema (for JWT-based session management)
const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // Session expires after 1 hour
  },
});

module.exports = {
  User: mongoose.model('User', userSchema),
  UserProfile: mongoose.model('UserProfile', userProfileSchema),
  Playlist: mongoose.model('Playlist', playlistSchema),
  Track: mongoose.model('Track', trackSchema),
  Session: mongoose.model('Session', sessionSchema),
};
