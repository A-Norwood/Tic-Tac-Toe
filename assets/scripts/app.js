'use strict'
const credsEvent = require('./events.js')
const gameEvent = require('./games/events.js')
const updateGame = require('./games/events.js')
const gamesEvents = require('./games/events.js')
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
  $('#0').on('click', updateGame.onUpdateGame)
  $('#1').on('click', updateGame.onUpdateGame)
  $('#2').on('click', updateGame.onUpdateGame)
  $('#3').on('click', updateGame.onUpdateGame)
  $('#4').on('click', updateGame.onUpdateGame)
  $('#5').on('click', updateGame.onUpdateGame)
  $('#6').on('click', updateGame.onUpdateGame)
  $('#7').on('click', updateGame.onUpdateGame)
  $('#8').on('click', updateGame.onUpdateGame)
  $('#stats').hide()
  $('#stats').on('submit', gamesEvents.onGetGames)
})
