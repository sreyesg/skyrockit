const { application } = require('express');
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true,
  },
  postingLink: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum:['interested','applied','interviewing','rejected']},
  
  })

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
