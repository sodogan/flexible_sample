sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sodogan/custompage/test/integration/FirstJourney',

    ],
    function(JourneyRunner, opaJourney, ) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sodogan/custompage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 

                }
            },
            opaJourney.run
        );
    }
);