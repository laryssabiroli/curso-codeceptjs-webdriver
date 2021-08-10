const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
    emailAddressRegister: '#email_create'

  }, 
  button: {
    createAccountButton: '#SubmitCreate'
    
  },
  messages: {

  }, 
  submitCreateNewAccount(email) {
    //I.fillField(this.fields.emailAddressRegister,fake.internet.email())
    I.fillField(this.fields.emailAddressRegister, email)
    I.click(this.button.createAccountButton)
  }
}
