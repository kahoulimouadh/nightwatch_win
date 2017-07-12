/* jshint expr: true */
var o_confCommon = {

        headerDisplay : true,
                domainTitle : "Actualités",
        domainUrl : '//actu.orange.fr',
                domainRef : "actu",
        polarisMode : true,
        slimServiceZone : true,
        tracking : {
                        //enable iQ TMS
            Tealium: {
                activate : true
            }

        },
        underlineLeftItem : '0',
        unifiedSearchEngine : {
            label: "Rechercher dans Actualités",
            queryAdditionalParams : "module=chaine&bhv=actu&ap=-1",
            cmplBlocks : [{ baseId : '-actu' }],
                            toptrendCategory : "orange.actu",                toptrend : true
                    }
    };
module.exports = {
  tags: ['abc'],
  'Demo test Google' : function (client) {
    client
      .url('http://actu.orange.fr')
      .pause(1000);

    client.expect.element('body').to.be.present;

    client.end();
  }
};