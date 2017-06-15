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
    bandeau: '.ec-account-first',
    avatar: '.ec-account-img',
    iconAvatar: '.icon-avatar',
    accountName: '.ec-account-name',
    infoPerso: '.btn-default-alone-sosh',
    accountMail: {
      selector: '//p[@class="ec-account-infos"][1]',
      locateStrategy: 'xpath'
    },
    accountNum: {
      selector: '//p[@class="ec-account-infos"][2]',
      locateStrategy: 'xpath'
    },
    btn1: '.ec-account-btn .btn-default-alone-sosh',
    btn2: '.ec-account-btn .btn-default'
  }
};