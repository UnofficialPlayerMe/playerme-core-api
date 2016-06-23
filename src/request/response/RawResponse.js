/**
 * A generic player response
 */
class RawResponse {
    /**
     *
     * @param {Object}   body           The raw response body
     * @param {int}      statusCode     The status code
     * @param {string}   statusMessage  The status code's message
     * @param {string[]} headers        Result headers
     */
    constructor(body, statusCode, statusMessage, headers)
    {
        this._body          = body;
        this._results       = body && body.results ? body.results : null;
        this._statusCode    = statusCode;
        this._statusMessage = statusMessage;
        this._headers       = headers;
        this._success       = Boolean(body && body.success);
    }

    /**
     * The body of the request
     * @returns {Object}
     */
    get body(){
        return this._body;
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
        return this._success;
    }

    /**
     * The request method used for this response
     * @returns {string}
     * @readonly
     */
    get method(){
        return this._body.method;
    }

    /**
     * The request URI used for this response
     * @returns {string}
     * @readonly
     */
    get uri(){
        return this._body.uri;
    }

    /**
     * The resulting status code
     * @returns {int}
     */
    get statusCode(){
        return this._statusCode;
    }

    /**
     * The resulting status message
     * @returns {string}
     */
    get statusMessage(){
        return this._statusMessage;
    }

    /**
     * The result headers
     * @returns {string[]}
     */
    get headers(){
        return this._headers;
    }
}

export default RawResponse;
