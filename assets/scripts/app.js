'use strict'
const credsEvent = require('./events.js')
const gameEvent = require('./games/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', credsEvent.onSignUp)
  $('#sign-in').on('submit', credsEvent.onSignIn)
  $('#change-pw').on('submit', credsEvent.onChangePw)
  $('#sign-out').on('submit', credsEvent.onSignOut)
  $('#new-game').on('submit', gameEvent.onCreateGame)
  $('#new-game').hide()
  $('.row').hide()
})
