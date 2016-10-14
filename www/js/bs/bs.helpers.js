(function () {

    'use strict';

    /**********************************************************************************/
    /*                                                                                */
    /*                                     SETUP                                      */
    /*                                                                                */
    /**********************************************************************************/

    bs.helpers.validObject = validObject;

    /**********************************************************************************/
    /*                                                                                */
    /*                               PUBLIC FUNCTIONS                                 */
    /*                                                                                */
    /**********************************************************************************/

    /**
     * @name validObject
     * @kind function
     *
     * @description
     * Parses the given object and validate each of its properties against the selected array of properties.
     *
     * @param {Object} object Source object.
     * @param {Array} requiredProperties Required properties.
     */
    function validObject(object, requiredProperties) {
        forEach(requiredProperties, function (property) {
            if (!object.hasOwnProperty(property)) {
                throw new bs.exceptions.BSMissingPropertyException(property, requiredProperties);
            }

            if (bs.utils.isUndefined(object[property]) || bs.utils.isNull(object[property])) {
                throw new bs.exceptions.BSInvalidValueException(object[property], property);
            }
        });
    }



    /**********************************************************************************/
    /*                                                                                */
    /*                              PRIVATE FUNCTIONS                                 */
    /*                                                                                */
    /**********************************************************************************/



})();
