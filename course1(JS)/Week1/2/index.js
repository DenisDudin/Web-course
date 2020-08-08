/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if (hours>=0 && hours<=23){
        if (minutes>=0 && minutes<=59){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};
