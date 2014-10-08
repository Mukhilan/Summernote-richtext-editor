(function() {
    var ZE = window.ZE;

    ZE.setupForTesting();
    ZE.injectTestHelpers();

    ZE.reopen({
        rootElement: "#ember-app"
    });

    ZE.ApplicationAdapter = DS.FixtureAdapter.extend({
        simulateRemoteResponse: false,

        queryFixtures: function(records, query, type) {
            return records.filter(function(record) {
                for (var key in query) {
                    if (!query.hasOwnProperty(key)) {
                        continue;
                    }
                    var value = query[key],
                        recordValue = record[key];

                    if (recordValue instanceof Object && recordValue.get) {
                        if (recordValue.get("id") !== value) {
                            return false;
                        }
                    } else if (record[key] !== value) {
                        return false;
                    }
                }
                return true;
            });
        }
    });

    $(document).ready(function() {
        moment.lang('en');

        //So that ember doesn't send a request to 'self'
        ZE.UserAdapter = null;
        mocha.run();
        $(".minimize_btn").click(function() {
            $(".ember-app-container").toggleClass('minimized');
        });

        $("body").on("mouseover", "a", function(e) {
            var href = $(this).attr('href');
            if (href && href.indexOf("?") === 0) {
                $(this).attr('href', window.location.pathname + href);
            }
        });

        MockUtil.mockGoogleMaps();
    });
}());
