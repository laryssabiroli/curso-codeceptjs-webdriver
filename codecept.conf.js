const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './steps/*login_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/index.php',
      browser: process.env.BROWSER || 'firefox', //caso queira em outro navegador só alterar no lugar do chrome, ex 'firefox' 
      //ou pode passar na hora do teste, exemplo: BROWSER=firefox npx codeceptjs run --steps
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: 
        {
          /*args: [
                    "--headless", // fazer o teste sem precisar abrir o navegador
                    "--window-size=1920,1200" // definir o tamanho da janela que abrirá
                ]
          */
        }

      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    create_user_page: './pages/create_user_page.js',
    my_account_page: './pages/my_account_page.js',
  },
  bootstrap: null,
  teardown: null,
  /*bootstrap: './server/server.js',
  teardown: './server/server.js',*/
  mocha: {},
  name: 'Automacao_CodeceptJS',
  plugins: {
    allure: {
      enabled: true
    },
    mocha: {
      reporterOptions: {
      }
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false, 
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('/');
            I.click('.login')
            I.fillField('#email', 'joao@teste.com')
            console.log('preencheu e-mail')
            I.fillField('#passwd', secret('123456'))
            console.log('preencheu senha')
            I.click('#SubmitLogin')
            console.log('logou')
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
             I.amOnPage('/');
             I.see('João Silva');
          }
        }
      }
    }
  }
}