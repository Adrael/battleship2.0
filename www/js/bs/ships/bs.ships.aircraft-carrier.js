(function () {

    'use strict';

    console.debug('BATTLESHIP 2.0 - Loading AIRCRAFT-CARRIER...');

    /**********************************************************************************/
    /*                                                                                */
    /*                                     SETUP                                      */
    /*                                                                                */
    /**********************************************************************************/

    bs.ships.push({

        name: 'AIRCRAFT-CARRIER',
        length: 5,
        sprite: {
            HORIZONTAL: {
                x: 15,
                y: 626,
                width: 982,
                height: 158
            },
            VERTICAL: {
                x: 626,
                y: 11,
                width: 158,
                height: 980
            }
        }

    });

})();
