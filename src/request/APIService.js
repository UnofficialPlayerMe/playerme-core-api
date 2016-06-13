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

    get(url, data, callback, callbackThis){
        var adapter = this.getAdapter(true);
        url = this.prependBaseUrl(url);

        return adapter.get(url, data, callback, callbackThis);
    }

    post(url, data, callback, callbackThis){
        var adapter = this.getAdapter(true);
        url = this.prependBaseUrl(url);

        return adapter.get(url, data, callback, callbackThis);
    }

    put(url, data, callback, callbackThis){
        var adapter = this.getAdapter(true);
        url = this.prependBaseUrl(url);

        return adapter.get(url, data, callback, callbackThis);
    }

    del(url, data, callback, callbackThis){
        var adapter = this.getAdapter(true);
        url = this.prependBaseUrl(url);

        return adapter.get(url, data, callback, callbackThis);
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

// Export a singleton instance
export default new APIService;
