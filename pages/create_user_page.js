var validacao = require('assert');
const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
    firstName: '#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    address: '#address1',
    day: '#days', 
    month: '#months',
    year: '#years',
    city: '#city',
    state: '#id_state',
    postCode: '#postcode',
    phone: '#phone_mobile'
  }, 
  button: {
    male: '#id_gender1',
    register: 'Register'
    
  },
  messages: {

  }, 
  labels: {
    createAnAccount: '.page-heading'
  },

  fillFieldsCreateUser(firstName, lastName) {
    I.waitForElement(this.fields.firstName,10)

    I.see('CREATE AN ACCOUNT')
    //var mainTitle = await I.grabTextFrom(this.labels.createAnAccount)
    //validacao.equal(mainTitle, 'CREATE AN ACCOUNT')

    //I.click('#id_gender1')
    I.click(this.button.male)
    I.fillField(this.fields.firstName, firstName)
    I.fillField(this.fields.lastName, lastName)
    I.fillField(this.fields.password, secret('12345'))
    I.selectOption(this.fields.day, '1')
    I.selectOption(this.fields.month, '1')
    I.selectOption(this.fields.year, '1996')
    I.fillField(this.fields.address, 'Rua xpto, 55')
    I.fillField(this.fields.city, 'São Paulo')
    I.selectOption(this.fields.state,'Alabama')
    I.fillField(this.fields.postCode, '00000')
    I.fillField(this.fields.phone, '+55 048 999999999')
  },
  createUser(){
    I.click(this.button.register)
  }
}
