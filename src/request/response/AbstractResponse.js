/**
 * This is an abstract wrapper around a RawResponse.
 * Sub-classes should be tailored to specific APIs.
 */
class AbstractResponse {
    /**
     * @param {function} modelClass
     * @param {RawResponse} rawResponse
     * @abstract
     */
    constructor(modelClass, rawResponse)
    {
        this._assertNotInstanceOfAbstract(AbstractResponse);

        // Validate modelClass
        if (!modelClass){
            throw new ReferenceError('No modelClass defined by '+this.className);
        }
        if (typeof modelClass !== 'function'){
            throw new ReferenceError('Invalid modelClass defined by '+this.className);
        }

        // Validate rawResponse
        if (!rawResponse){
            throw new ReferenceError('No raw defined by '+this.className);
        }
        if (typeof rawResponse !== 'object' || rawResponse.constructor.name !== 'RawResponse'){
            throw new ReferenceError('Invalid raw defined by '+this.className);
        }

        /**
         * The class used to construct the result
         * @type {Function}
         */
        this._modelClass = modelClass;

        /**
         * The raw request this wraps around
         * @member {RawResponse} _raw
         */
        this._raw = rawResponse;
    }

    /**
     * Throw an error if the passed class is at the top of this instance's inheritance chain
     * @param {function} abstractClass
     * @throws Error
     */
    _assertNotInstanceOfAbstract(abstractClass){
        if (this.constructor === abstractClass){
            //TODO Custom AbstractClassError
            throw new Error(abstractClass.name+' is abstract and not supposed to be instantiated');
        }
    }

    /**
     * The name of this instance's class
     * @returns {string}
     */
    get className(){
        return this.constructor.name;
    }
}

export default AbstractResponse;
