import AbstractResponse     from '../../request/response/AbstractResponse';
import PagerData            from '../../request/response/PagerData';
import {UserExtendedModel}  from 'player-core-models';

/**
 * Response containing a collection of users
 */
class UserCollectionResponse extends AbstractResponse {
    constructor(rawResponse)
    {
        super(rawResponse);

        //TODO throw exceptions if response is invalid

        this._users = rawResponse.results.map(function(result){
            return new UserExtendedModel(result);
        });
        this._pager = new PagerData(rawObject.pager);
    }

    /**
     * @returns {UserExtendedModel[]}
     */
    get users(){
        return this._users;
    }
}

export default UserCollectionResponse;
