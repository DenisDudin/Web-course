/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function listCopy(obj) {
    var newObj = [];
    for(var i = 0; i < obj.length; i++) {
        newObj[i] = Object.assign({}, obj[i]);
    }
    return newObj
}


function query(collection) {
    var newCollection = listCopy(collection);
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].name === 'filterIn') {
            newCollection = arguments[i](newCollection);
        }
    }
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].name === 'select') {
            newCollection = arguments[i](newCollection);
        }
    }
    return newCollection
}


function select() {
    var fields = arguments;
    return function select(collection) {
        var selectedCollection = [];
        for (var i = 0; i < collection.length; i++) {
            selectedCollection[i] = {};
            for (let field of fields) {
                if (Object.keys(collection[i]).includes(field)) {
                    selectedCollection[i][field] = collection[i][field];
                }
            }
        }
        return selectedCollection
    }
}


function filterIn(property, values) {
    return function filterIn(collection) {
        var filtredCollection = [];
        for (var i = 0; i < collection.length; i++) {
            if (values.includes(collection[i][property])) {
                filtredCollection.push(collection[i])
            }
        }
        return filtredCollection
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
