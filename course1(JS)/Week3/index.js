var dateRegexp = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/;
var availableDurations = ['years', 'months', 'days', 'hours', 'minutes'];


function addZero(value) {
    value = String(value);
    return value.length < 2 ? '0' + value : value;
}



function formatDate(date) {
    var res = '';
    res += date.getFullYear();
    res += '-';
    res += addZero(date.getMonth() + 1);
    res += '-';
    res += addZero(date.getDate());
    res += ' ';
    res += addZero(date.getHours());
    res += ':';
    res += addZero(date.getMinutes());

    return res;
}


function changeDate(date, value, duration) {
    switch (duration) {
        case 'years':
            value = date.getFullYear() + value;
            date.setFullYear(value);
            break;
        case 'months':
            value = date.getMonth() + value;
            date.setMonth(value);
            break;
        case 'days':
            value = date.getDate() + value;
            date.setDate(value);
            break;
        case 'hours':
            value = date.getHours() + value;
            date.setHours(value);
            break;
        case 'minutes':
            value = date.getMinutes() + value;
            date.setMinutes(value);
            break;
        default:
            break;
    }
}


function checkValue(value, duration) {
    if (value < 0) {
        throw new TypeError('The value is negative');
    }

    if (availableDurations.indexOf(duration) === -1) {
        throw new TypeError('Unknown time');
    }
}


module.exports = function (dateStr) {
    var match = dateStr.match(dateRegexp);
    var date = new Date(match[1], match[2] - 1, match[3], match[4], match[5]);

    return {
        get value() {
            return formatDate(date);
        },

        add: function (value, duration) {
            checkValue(value, duration);
            changeDate(date, value, duration);

            return this;
        },

        subtract: function (value, duration) {
            checkValue(value, duration);
            changeDate(date, -1 * value, duration);

            return this;
        }
    };
};