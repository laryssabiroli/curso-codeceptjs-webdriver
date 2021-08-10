const { I } = inject();
const cpfName = require('../utils/cpf_name');

Feature('Login');

BeforeSuite(() => {
	console.log(cpfName.cpfName())
    
})

Before(() => {
	I.amOnPage('/') 
    // limpar do scenario exemplo e deixar aqui, ex. pois o começo será igual 
})

After(() => {
	console.log('After')
})

AfterSuite(() => {

	console.log('Depois de tudo')
})


 Scenario('Validate Empty Email on Create Account', ({ I }) => {
     //I.amOnPage('/') 
     //colocar no before por exemplo, caso tenha algum outro scenario que use mesmo comando.
     //pause()   //para debugar
     I.click('.login')
     I.click('#SubmitCreate')
     I.see('Invalid email address.')      
 });

