import {createQueryString} from '../helpers/AdapterHelper';

/**
 * Process requests using JSONP.
 * Browsers allow this method for cross-domain calls, but only GET requests.
 */
class JSONPRequestAdapter {
    constructor()
    {
        /**
         * The object-chain up from window, where JSONP callbacks are stored.
         * @type {string}
         */
        this._callbackNamespace = "playermeJSONP.callbacks";

        /**
         * The top object defined by CALLBACK_NAMESPACE, where JSONP callbacks are stored.
         * @type {object}
         * @private
         */
        this._callbackContainer = this._setupCallbackContainer(
            this._callbackNamespace
        );

        //TODO Remove test
        this.get("https://player.me/api/v1/feed", null, (payload) => {
            console.log("Callback", payload)
        });
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

    // TODO Replace callback with promise
    get(url, data, callback, callbackThis){
        // Setup defaults
        if (!data || typeof data !== 'object'){
            data = {};
        }

        //TODO Generate unique name
        var callbackName = "testCallback";

        // Create a script element for JSONP
        var scriptElement = document.createElement('script');
        var documentHead = document.getElementsByTagName("head")[0];

        // Setup callback
        this._callbackContainer[callbackName] = (payload) => {
            console.log("CallbackContainer", payload);
            // Remove script and callback
            documentHead.removeChild(scriptElement);
            delete this._callbackContainer[callbackName];

            // Run callback
            callback.call(callbackThis || this, payload);
        };

        // Add the full callback path to player.me's JSON callback parameter
        data.callback = this._callbackNamespace+"."+callbackName;

        // Build query string
        var queryString = createQueryString(data);

        // Attach the script tag for this JSONP request
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
