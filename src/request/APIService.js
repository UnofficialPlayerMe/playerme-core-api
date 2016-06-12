// import JSONPRequestAdapter from './adapter/JSONPRequestAdapter';

class APIService {

    //
    // Constructor
    //

    constructor()
    {
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
        // this.setAdapter(new JSONPRequestAdapter); //TODO Set default adapter
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
     */
    getAdapter(validate=false){
        if (validate){
            this.validateAdapter(this._adapter);
        }
        return this._adapter;
    }

    /**
     * Set the adapter
     * @param {object} adapter Instance of an adapter
     */
    setAdapter(adapter){
        this.validateAdapter(adapter);
        this._adapter = adapter;
    }

    /**
     * Throws an error if the adapter is invalid
     * @param {object} adapter The adapter to validate
     * @throws {TypeError}
     */
    validateAdapter(adapter){
        // Wrap up logic for creating error
        var typeError = function(description){
            if (typeof description !== 'string'){
                description = '';
            }else{
                description = ' '+description
            }
            return new TypeError("APIRequest adapter is invalid." + description);
        };

        // Assert adapter is an object
        if (typeof adapter !== 'object') {
            throw typeError();
        }

        // Assert adapter has each method
        if (typeof adapter.get !== 'function') {
            throw typeError('No GET method');
        }
        if (typeof adapter.post !== 'function') {
            throw typeError('No POST method');
        }
        if (typeof adapter.put !== 'function') {
            throw typeError('No PUT method');
        }
        if (typeof adapter.del !== 'function') {
            throw typeError('No DELETE method');
        }
    }

    /// End of APIService
}

export default new APIService;
