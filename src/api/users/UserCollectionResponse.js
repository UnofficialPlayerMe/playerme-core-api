import CollectionResponse from '../../request/response/CollectionResponse';
import {UserExtendedModel} from 'player-core-models';

/**
 * Response containing a collection of users
 */
class UserCollectionResponse extends CollectionResponse {
    constructor(rawResponse)
    {
        super(UserExtendedModel, rawResponse);
    }

    /**
     * The users
     * @returns {UserExtendedModel[]}
     */
    get results(){
        return this._results;
    }
}

export default UserCollectionResponse;
