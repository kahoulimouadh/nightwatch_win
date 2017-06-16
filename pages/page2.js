module.exports = {
  url : 'https://espaceclientv3.orange.fr/?page=programmepremium',
  elements:{
  	authId: '#default_f_credential',
    authPassword: '#default_f_password',
    idSubmit:{
      selector: '//input[@class="sc_button_content_2 submit"]',
      locateStrategy: 'xpath'
    }    
  }
};