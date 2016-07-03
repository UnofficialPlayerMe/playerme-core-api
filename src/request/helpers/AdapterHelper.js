/**
 * Turns an object into a query string
 * @param {object} data The object to turn into a query string.
 * @returns {string}
 */
function createQueryString(data){
    if (!data || typeof data !== 'object'){
        data = {};
    }
    var params = [];
    for (var key in data){
        if (data.hasOwnProperty(key)) {
            var param = key + "=" + encodeURIComponent(data[key]);
            params.push(param);
        }
    }
    if (params.length){
        return '?' + params.join('&').replace(/%20/g, '+');
    }
    return '';
}

export {
    createQueryString
};
