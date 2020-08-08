/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var wordList = tweet.split (' ');

    var tagList = [];
    for (var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        if (word[0] === '#') {
            tagList.push(word.slice(1));
        }
    }
    return tagList;
};
