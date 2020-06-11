const store = require('./store')

const signUpSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#sign-up-content').text('Sign up complete ' + response.user.email)
  $('#sign-up-content').show()
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
  $('#change-pw').addClass('success')
}

const changePwFailure = function () {
  $('form').trigger('reset')
  $('#change-pw').text('Password change failed')
  $('#change-pw').removeClass()
  $('#change-pw').addClass('failure')
}

const signOutSuccess = function () {
  $('#sign-out').text('Signed out successfully. Please sign in again to play.').fadeOut(6000)
  $('#sign-out').removeClass()
  $('#sign-out').addClass('success')
  $('#new-game').addClass('hidden')
  $('#change-pw').addClass('hidden')
  $('.show').show()
  $('.row').hide()
  $('#sign-up-content').hide()
  $('.message').hide()
  store.user = null
}

const signOutFailure = function () {
  $('#sign-out').text('Signed Out Failed')
  $('#sign-out').removeClass()
  $('#sign-out').addClass('failure')
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
