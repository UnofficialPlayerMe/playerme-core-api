import AbstractRequestAdapter from './adapter/AbstractRequestAdapter';

/**
 * A singleton wrapper for Request adapters
 */
class APIService extends AbstractRequestAdapter{

    //
    // Constructor
    //

    constructor()
    {
        super();

        /**
         * The URL that gets prepended to partial request URLs
         * @member {string}
         * @private
         */
        this._baseUrl = '';

        /**
         * The adapter used to make requests
         * @member {object}
         * @private
         */
        this._adapter = null;

        // Set defaults
        this.baseUrl = "https://player.me/";
    }

    //
    // Request Methods
    //

    // TODO Use promises, rather than callbacks?
    // TODO Have success & failure classes
    _request(method, url, data, callback, callbackThis){
        var requestBodyRequired = false;
        switch(method){
            case 'get':  requestBodyRequired = false; break;
            case 'post': requestBodyRequired = true;  break;
            case 'put':  requestBodyRequired = true;  break;
            case 'del':  requestBodyRequired = false; break;
            default: throw new Error("Unhandled method ["+method+"] passed to APIService._request().");
        }

        validateURL(method, url);
        validateData(method, data, requestBodyRequired);
        validateCallback(method, callback, callbackThis);

        var adapter = this.getAdapter(true);
        url = this.prependBaseUrl(url);

        return adapter[method](url, data, callback, callbackThis);
    }

    get(url, data, callback, callbackThis){
        return this._request('get', url, data, callback, callbackThis);
    }

    post(url, data, callback, callbackThis){
        return this._request('post', url, data, callback, callbackThis);
    }

    put(url, data, callback, callbackThis){
        return this._request('put', url, data, callback, callbackThis);
    }

    del(url, data, callback, callbackThis){
        return this._request('del', url, data, callback, callbackThis);
    }

    //
    // Base URL methods
    //

    /**
     * @param {string} str
     */
    set baseUrl(str){
        if (typeof str !== 'string'){
            throw new TypeError("baseUrl passed to APIService is not a string");
        }
        if (str.length == 0){
            throw new TypeError("baseUrl passed to APIService is empty");
        }
        // Must have '://' and at least one character before it
        if (str.indexOf('://') <= 0){
            throw new TypeError("baseUrl is missing protocol");
        }
        this._baseUrl = str;
    }

    /**
     * @returns {string}
     */
    get baseUrl(){
        return this._baseUrl;
    }

    /**
     * Add the baseUrl to the start of the passed address
     * @param {string} url
     * @returns {string}
     */
    prependBaseUrl(url){
        // Skip if passed url has a protocol
        if (url.indexOf('://') == -1){
            var baseUrl = this._baseUrl;

            // Remove slash at end
            if (baseUrl.charAt(baseUrl.length-1) === '/'){
                baseUrl = baseUrl.substring(0, baseUrl.length-1);
            }
            // Remove slash at start
            if (url.charAt(0) === '/'){
                url = url.substring(1);
            }

            // Add base to url
            url = baseUrl + '/' + url;
        }
        return url;
    }

    //
    // Adapter Methods
    //

    /**
     * Get the current adapter
     * @param {boolean} [validate=false] Validate the adapter before returning it
     * @returns {object} The adapter
     * @throws {TypeError} If adapter is invalid
     * @throws {ReferenceError} If no adapter is set
     */
    getAdapter(validate=false){
        if (!this._adapter) {
            throw new ReferenceError("APIService error: No adapter set");
        }
        if (validate){
            this.validateAdapter(this._adapter);
        }
        return this._adapter;
    }

    /**
     * Set the adapter
     * @param {AbstractRequestAdapter} adapter Adapter instance or class
     * @throws {TypeError} If adapter is invalid
     */
    setAdapter(adapter){
        // Turn class into an instance
        if (typeof adapter === 'function' && adapter.constructor){
            adapter = new adapter();
        }

        this.validateAdapter(adapter);
        this._adapter = adapter;
    }

    /**
     * Throws an error if the adapter is invalid
     * @param {object} adapter The adapter to validate
     * @throws {TypeError}
     */
    validateAdapter(adapter){
        // Assert adapter is an object
        if (typeof adapter !== 'object') {
            throw new TypeError('Invalid APIRequest adapter: Not an object.');
        }

        // Assert adapter inherits from AbstractRequestAdapter
        var adapterClass = adapter.constructor;
        while (adapterClass){
            if (adapterClass === AbstractRequestAdapter) return;
            adapterClass = Object.getPrototypeOf(adapterClass);
        }
        throw new TypeError("Invalid APIRequest adapter: Doesn't inherit from AbstractRequestAdapter.");
    }

    /// End of APIService
}

//
// Inaccessible Validation Methods
//

/**
 * Validate that the URL is valid
 * @param {string} method Name of the method this is being called in
 * @param {string} url The request URL
 * @throws {ReferenceError}
 */
function validateURL(method, url){
    if (!url){
        throw new ReferenceError("No URL passed to APIService:"+method+".");
    }
    if (typeof url != 'string'){
        throw new ReferenceError("Invalid URL passed to APIService:"+method+". Was ["+typeof url+"].");
    }
}

/**
 * Validate that the data object is valid
 * @param {string} method Name of the method this is being called in
 * @param {data} data The data to be used in the request
 * @param {boolean} required If the request body should be truthy
 * @throws {ReferenceError}
 */
function validateData(method, data, required){
    if (!required && !data){
        return;
    }
    if (typeof data != 'object'){
        throw new ReferenceError("Invalid data passed to APIService:"+method+". Was ["+typeof data+"].");
    }
}

/**
 * Validate that the callback is valid
 * @param {string} method Name of the method this is being called in
 * @param {function} callback The callback when the request has been fulfilled
 * @param {object} [callbackThis] The 'this' to use on the callback
 * @throws {ReferenceError}
 */
function validateCallback(method, callback, callbackThis){
    if (!callback){
        throw new ReferenceError("No callback passed to APIService:"+method+".");
    }
    if (typeof callback != 'function'){
        throw new ReferenceError("Invalid callback passed to APIService:"+method+". Was ["+typeof callback+"].");
    }
    if (callbackThis && typeof callbackThis != 'object'){
        throw new ReferenceError("Invalid callbackThis passed to APIService:"+method+". Was ["+typeof callbackThis+"].");
    }
}

// Export a singleton instance
export default new APIService;
