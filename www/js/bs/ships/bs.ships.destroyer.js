(function () {

    'use strict';

    console.debug('BATTLESHIP 2.0 - Loading DESTROYER...');

    /**********************************************************************************/
    /*                                                                                */
    /*                                     SETUP                                      */
    /*                                                                                */
    /**********************************************************************************/

    bs.ships.push({

        name: 'DESTROYER',
        length: 4,
        sprite: {
            HORIZONTAL: {
                x: 13,
                y: 436,
                width: 556,
                height: 172
            },
            VERTICAL: {
                x: 436,
                y: 437,
                width: 172,
                height: 556
            }
        }

    });

})();
