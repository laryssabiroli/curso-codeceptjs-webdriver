const { I } = inject();

module.exports = {

  fields: {

  }, 
  button: {
    userName: '.header_user_info'
  },
  messages: {

  }, 
  validateUserLogged(firstName, lastName) {
    I.waitForElement(this.button.userName)
    I.see(`${firstName} ${lastName}`)
  } 
}
