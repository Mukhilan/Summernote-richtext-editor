(function() {
    var ZE = window.App;

    ZE.setupForTesting();
    ZE.injectTestHelpers();

    ZE.reopen({
        rootElement: ".ember-app"
    });

}());
