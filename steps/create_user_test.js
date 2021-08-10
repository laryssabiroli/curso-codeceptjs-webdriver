var validacao = require('assert');
const { create } = require('domain');
var faker = require('faker')

const {I, home_page, login_page, create_user_page, my_account_page} = inject()

Feature('Create User');

Scenario('Login with sucess', async ({login}) => {
	await login('user')
});

Scenario('Create a New Account', async () => {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    I.amOnPage('/')

    // home
    //    -- antes de separar = I.click('.login') ....depois --> 
    home_page.acessLoginPage()

    // login
    /*
        Antes de usar objetos
        // I.fillField('#email_create', 'laryssa3@teste.com')
        I.fillField('#email_create', faker.internet.email())
        I.click('#SubmitCreate')
        ...Depois ->
    */
    login_page.submitCreateNewAccount(faker.internet.email())

    // create user
    create_user_page.fillFieldsCreateUser(firstName, lastName)
    create_user_page.createUser()

    //my_account
    /* antes
        I.waitForElement('.header_user_info')
        I.see(`${firstName} ${lastName}`) 
        Depois... ->
    */
    my_account_page.validateUserLogged(firstName, lastName)


    /*
    Validar que está na conta
    I.waitForElement('.page-heading', 10)
    I.see('My account')
    */

    I.wait(5)


});

