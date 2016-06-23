/**
 * Abstract response class
 */
class AbstractResponse {
    /**
     * @param {RawResponse} rawResponse
     * @abstract
     */
    constructor(rawResponse)
    {
        /**
         * @member {RawResponse} _raw
         * @private
         */
        this._raw = rawResponse;

        if (this.constructor.name === 'AbstractResponse'){
            //TODO Custom AbstractClassError
            throw new Error('AbstractResponse was not supposed to be instantiated');
        }
    }
}

export default AbstractResponse;
