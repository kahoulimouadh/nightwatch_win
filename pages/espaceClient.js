module.exports = {
  url : 'https://espaceclientv3.orange.fr',
  elements:{
    loginItem: '#o-nav-item-login',
    idButton:{
      selector: '//a[@title="Identifiez-vous"]',
      locateStrategy: 'xpath'
    },
    authId: '#default_f_credential',
    authPassword: '#default_f_password',
    idSubmit:{
      selector: '//input[@class="sc_button_content_2 submit"]',
      locateStrategy: 'xpath'
    },
    bandeau: '.ec-account-gp',
    avatar: '.ec-icon',
    infoPerso: '.btn-default-alone-sosh',
  }
};