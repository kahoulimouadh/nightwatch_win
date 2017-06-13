module.exports = {
  'espace client v3: step one' : function (browser) {
    var page = browser.page.espaceClient();
    page.navigate()
      .waitForElementVisible('body', 1000)
      .assert.elementPresent("@loginItem")
      .click('@idButton')

      .setValue('@authId', '0672088197')
      .setValue('@authPassword', 'Test.123')
      .click('@idSubmit')

      .waitForElementVisible("@bandeau", 5000)
      .assert.elementPresent("@avatar")
      .assert.elementPresent("@infoPerso")
      browser.end();
    }
};