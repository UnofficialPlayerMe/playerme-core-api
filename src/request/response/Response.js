/**
 * A standard response
 */
class Response {

    /**
     *
     * @param {Object} rawObject The raw response
     * @param {function} [modelClass] The class of a class to convert results to
     */
    constructor(rawObject, modelClass)
    {
        this._raw = rawObject;
        this._results = rawObject.results;

        // Convert results to modalClass
        if (typeof modelClass === 'function'){
            if (typeof this._results === 'object'){

                if (Array.isArray(this._results)){
                    this._results = this._results.map( (result) => new modelClass(result) );
                }else{
                    this._results = new modelClass(this._results);
                }

            }else{
                throw new TypeError('Results passed to Response was not an object ['+(typeof this._results)+"].");
            }
        }
    }

    /**
     * The result of the request
     * @returns {Object}
     */
    get results(){
        return this._results;
    }

    /**
     * Whether this response was successful
     * @returns {boolean}
     */
    get success(){
        return this._raw.success;
    }

    /**
     * The request method used for this response
     * @returns {string}
     * @readonly
     */
    get method(){
        return this._raw.method;
    }

    /**
     * The request URI used for this response
     * @returns {string}
     * @readonly
     */
    get uri(){
        return this._raw.uri;
    }
}

export default Response;
