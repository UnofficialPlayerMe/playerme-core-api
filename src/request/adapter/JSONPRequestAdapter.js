import {createQueryString} from '../helpers/AdapterHelper';

/**
 * Global variable containing the next available ID for an adaptor
 * @type {number}
 */
var lastAdapterId = 0;

/**
 * Process requests using JSONP.
 * Browsers allow this method for cross-domain calls, but only GET requests.
 */
class JSONPRequestAdapter {
    constructor()
    {
        /**
         * The Unique ID of this instance
         * @type {number}
         * @private
         */
        this._instanceId = lastAdapterId+1 % 5000; // Wrap at 5000 so ID doesn't get too high
        lastAdapterId = this._instanceId;

        /**
         * The next ID to use in a callback reference name
         * @@member {number}
         * @private
         */
        this._lastCallbackId = 1;

        /**
         * The object-chain up from window, where JSONP callbacks are stored.
         * @member {string}
         * @private
         */
        this._callbackNamespace = "playermeJSONP.callbacks";

        /**
         * The top object defined by CALLBACK_NAMESPACE, where JSONP callbacks are stored.
         * @member {object}
         * @private
         */
        this._callbackContainer = this._setupCallbackContainer(
            this._callbackNamespace
        );

        //TODO Remove test
        this.get("https://player.me/api/v1/feed", null, (payload) => {
            console.log("JSONP Test Callback", payload)
        });

        //TODO If promises are added, check that the Promise class exists
    }

    /**
     * Sets up the object-chain where callbacks are stored.
     * @param {string} namespace A period-delimited list of child object names, starting from window
     * @returns {object} The topmost object in the chain.
     * @private
     */
    _setupCallbackContainer(namespace){
        // Split string into individual object names
        var namespaces = namespace.split(".");

        // Create the object chain of namespaces, starting at window
        var currentTarget = window;
        for (var i=0; i < namespaces.length; i++){
            currentTarget = this._createObjectOnParent(currentTarget, namespaces[i]);
        }

        // Return the top of the namespace
        return currentTarget;
    }

    /**
     * Create an object on the parent, with the given name
     * @param {object} parent
     * @param {string} objectName
     * @returns {object}
     * @private
     */
    _createObjectOnParent(parent, objectName){
        if (typeof parent[objectName] !== 'object'){
            parent[objectName] = {};
        }
        return parent[objectName];
    }

    /**
     * Get the next available reference name of a callback
     * @returns {string}
     * @private
     */
    _generateCallbackRef(){
        var currentCallbackId = this._lastCallbackId+1 % 5000;// Wrap at 5000 so ID doesn't get too high
        this._lastCallbackId = currentCallbackId;
        return 'jsonp'+this._instanceId + '_' + currentCallbackId;
    }

    // TODO Replace callback with promise
    get(url, data, callback, callbackThis){
        // Setup defaults
        if (!data || typeof data !== 'object'){
            data = {};
        }

        // Get the reference for this callback
        var callbackRef = this._generateCallbackRef();

        // Create a script element for JSONP
        var scriptElement = document.createElement('script');
        var documentHead = document.getElementsByTagName("head")[0];

        // Setup callback wrapper
        this._callbackContainer[callbackRef] = (payload) => {
            // Remove script and callback
            documentHead.removeChild(scriptElement);
            delete this._callbackContainer[callbackRef];

            // Run callback
            callback.call(callbackThis || this, payload);
        };

        // Add the full callback path to player.me's JSON callback parameter
        data.callback = this._callbackNamespace + '.' + callbackRef;

        // Build query string
        var queryString = createQueryString(data);

        // Attach the script tag for this JSONP request
        scriptElement.setAttribute("data-callback", callbackRef);
        scriptElement.setAttribute("src", url + queryString);
        documentHead.appendChild(scriptElement);
    }

    post(){
        throw new Error("POST method not available for JSONPRequestAdapter")
    }

    put(){
        throw new Error("PUT method not available for JSONPRequestAdapter")
    }

    del(){
        throw new Error("DELETE method not available for JSONPRequestAdapter")
    }
}

export default JSONPRequestAdapter;
