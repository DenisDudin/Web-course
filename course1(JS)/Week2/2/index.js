/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var hashtag = []
    for (var i = 0; i < hashtags.length; i++) {
         hashtag.push(hashtags[i].toLowerCase());
    }
    var uniqueArray = hashtag.filter(function(item, pos) {
        return hashtag.indexOf(item) == pos;
    })

    return uniqueArray.join(', ');
};
