module.exports = {
  'espace client v3: step one' : function (browser) {
    browser
      .url('https://espaceclientv3.orange.fr')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent("#o-nav-item-login")
      .click('a[title=Identifiez-vous]')
  },

  'espace client v3: step two' : function (browser) {
    browser
      .setValue('#default_f_credential', '0672088197')
      .setValue('#default_f_password', 'Test.123')
      .click('input[value=s’identifier]')
      .pause(5000)
  }
};