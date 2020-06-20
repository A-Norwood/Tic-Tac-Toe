const store = require('./store')

const signUpSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#sign-up-content').text('Sign up complete ' + response.user.email)
  $('#sign-up-content').show()
  $('#signout-message').text('Signed out successfully. Please sign in again to play.').hide()
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#sign-up-content').text('Sign up failed')
  $('#sign-up-content').show()
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#sign-up-content').text('Signed in ' + response.user.email)
  $('#sign-up-content').show()
  $('.hidden').removeClass()
  $('.show').hide()
  $('#new-game').show()
  $('#sign-out-stuff').show()
  $('#sign-out').show()
  $('#signout-message').text('Signed out successfully. Please sign in again to play.').hide()
  store.user = response.user
}

const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-up-content').text('Signed in failed')
  $('#sign-up-content').show()
}

const changePwSuccess = function () {
  $('form').trigger('reset')
  $('#change-pw').text('Password changed successfully')
  $('#change-pw').removeClass()
}

const changePwFailure = function () {
  $('form').trigger('reset')
  $('#change-pw').text('Password change failed')
  $('#change-pw').removeClass()
}

const signOutSuccess = function () {
  $('#signout-message').text('Signed out successfully. Please sign in again to play.').show()
  $('#new-game').addClass('hidden')
  $('#change-pw').addClass('hidden')
  $('.show').show()
  $('.row').hide()
  $('#sign-up-content').hide()
  $('.message').hide()
  $('.game-content').hide()
  $('.invalid-move').hide()
  $('#sign-out').hide()
  // store.user = null
  // store.game = null
  // store.store = null
  console.log(store)
}

const signOutFailure = function () {
  $('#sign-out').text('Signed Out Failed')
  $('#sign-out').removeClass()
  $('.invalid-move').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
