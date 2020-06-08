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
}

const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-up-content').text('Signed in failed')
  $('#sign-up-content').show()
}

// const signOutSuccess = function (reponse) {
//   $('#sign-up-content').text('Sign out successful')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // signOutSuccess
}
