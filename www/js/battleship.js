(function () {

    'use strict';

    /**********************************************************************************/
    /*                                                                                */
    /*                                 CONFIGURATION                                  */
    /*                                                                                */
    /**********************************************************************************/

    if(/*__debugDisabled__*/ false /*__debugDisabled__*/) {

        // CONSOLE OVERRIDE
        var console = {};
        console.log = function () { /* noop */ };
        console.info = function () { /* noop */ };
        console.error = function () { /* noop */ };
        console.debug = function () { /* noop */ };
        window.console = console;

    }

    console.debug('BATTLESHIP 2.0 - Loading game...');

    /**********************************************************************************/
    /*                                                                                */
    /*                                     SETUP                                      */
    /*                                                                                */
    /**********************************************************************************/

    document.addEventListener('DOMContentLoaded', function() {

        bs.display.drawGrid();
        bs.display.drawIndexes();
        bs.display.drawRandomShips();

    });

})();
