this.demoTestSosh = function (browser) {
  browser
    .url('http://www.sosh.fr')
    .waitForElementVisible('body', 100)
    .pause(1000)
    .assert.containsText('#o-suivi-de-commande', 'Suivi de commande')
    .assert.containsText('#o-aide-contact', 'Aide et contact')
    .assert.containsText('#o-nav-item-login', 'Connexion')
    .click('a[title=Identifiez-vous]')

    .end();
};