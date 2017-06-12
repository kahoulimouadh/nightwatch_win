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
      .useXpath()
      .click('//input[@class="sc_button_content_2 submit"]')
      .pause(1000)
  },

  'espace client v3: step three' : function (browser) {
    browser
      .waitForElementVisible('ec-account ec-account-gp', 5000)
      .assert.elementPresent(".ec-icon icon-avatar")
      .assert.elementPresent(".btn btn-default btn-default-alone-sosh")
      .end();
  }
};