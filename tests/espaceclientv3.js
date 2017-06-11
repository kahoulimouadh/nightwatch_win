module.exports = {
  'espace client v3: step one' : function (browser) {
    browser
      .url('https://espaceclientv3.orange.fr')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .assert.elementPresent("#o-nav-item-login")
      .click('a[title=Identifiez-vous]')
  },

  'espace client v3: step two' : function (browser) {
    browser
      .url('https://id.orange.fr/auth_user/bin/auth_user.cgi?return_url=http://www.orange.fr/portail')
      .pause(1000)
      .setValue('#default_f_credential', '0672088197')
      .setValue('#default_f_password', '0672088197')
      .click('input[type=submit]')
      .pause(1000)
      .url('https://espaceclientv3.orange.fr')
      .pause(1000)
      .end();
  }
};