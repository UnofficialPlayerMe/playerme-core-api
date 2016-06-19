import Response from './Response';
import PagerData from './PagerData';

/**
 * A response of a collection of entities
 */
class CollectionResponse extends Response {
    constructor(rawObject)
    {
        super(rawObject);
        this._pager = new PagerData(rawObject.pager);
    }

    /**
     * All the results in the collection
     * @returns {Array}
     */
    get results(){
        return this._raw.results;
    }

    /**
     * The paging status
     * @returns {PagerData}
     */
    get pager(){
        return this._pager;
    }
}

export default CollectionResponse;
