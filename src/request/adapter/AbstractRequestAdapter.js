class AbstractRequestAdapter {
    constructor()
    {
        var abstractClassName = 'AbstractRequestAdapter';
        if (this.name === abstractClassName){
            throw new Error(abstractClassName+' was not supposed to be instantiated.');
        }
    }

    /**
     * The adapter's name
     * @returns {string}
     */
    get name(){
        return this.constructor.name;
    }

    /**
     * Perform a GET request
     * @param {string} url
     * @param {object} data
     * @param {function} callback
     * @param {object} callbackThis
     * @throws Error Error when not implemented
     * TODO Create not-implemented error
     * TODO Replace callback with promise
     */
    get(url, data, callback, callbackThis){
        throw new Error("GET not implemented by "+this.name);
    }

    /**
     * Perform a POST request
     * @param {string} url
     * @param {object} data
     * @param {function} callback
     * @param {object} callbackThis
     * @throws Error Error when not implemented
     * TODO Create not-implemented error
     * TODO Replace callback with promise
     */
    post(url, data, callback, callbackThis){
        throw new Error("POST not implemented by "+this.name);
    }

    /**
     * Perform a PUT request
     * @param {string} url
     * @param {object} data
     * @param {function} callback
     * @param {object} callbackThis
     * @throws Error Error when not implemented
     * TODO Create not-implemented error
     * TODO Replace callback with promise
     */
    put(url, data, callback, callbackThis){
        throw new Error("PUT not implemented by "+this.name);
    }

    /**
     * Perform a DELETE request
     * @param {string} url
     * @param {object} data
     * @param {function} callback
     * @param {object} callbackThis
     * @throws Error Error when not implemented
     * TODO Create not-implemented error
     * TODO Replace callback with promise
     */
    del(url, data, callback, callbackThis){
        throw new Error("DEL not implemented by "+this.name);
    }

    /**
     * Turn an object into a query string
     * @param data
     * @returns {string}
     */
    objectToQueryString(data){ //TODO
        return '';
    }
}

export default AbstractRequestAdapter;
