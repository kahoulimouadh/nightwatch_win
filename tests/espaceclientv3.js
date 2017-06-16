module.exports = {
  'espace client v3: page 1': function (browser) {
    var page = browser.page.espaceClient();
    page.navigate()
      .waitForElementVisible('body', 1000)
      .assert.elementPresent("@loginItem")
      .click('@idButton')

      .setValue('@authId', 'giacomo.porcu@orange.fr')
      .setValue('@authPassword', 'olmedo36')
      .click('@idSubmit')

      .waitForElementVisible("@bandeau", 5000)
      .assert.elementPresent("@avatar")
      .assert.elementPresent("@infoPerso")
      .assert.elementPresent("@iconAvatar")
      .assert.containsText("@accountName", "Votre compte Orange")
      .assert.containsText("@accountMail", "mireille48@orange.fr")
      .assert.containsText("@accountNum", "06 89 70 28 77")
      .assert.attributeContains('@btn1', 'href', 'espaceclientv3.orange.fr')
      .assert.attributeContains('@btn2', 'href', 'espaceclientv3.orange.fr')
      .click('@btn2')
      browser.pause(2000)
    },

    'espace client v3: page 2' : function (browser) {
    var page = browser.page.page2();
    page.navigate()
      .setValue('@authId', 'giacomo.porcu@orange.fr')
      .setValue('@authPassword', 'olmedo36')
      .click('@idSubmit')
      .waitForElementVisible('body', 1000)
      browser.end();
    }
};