import EntityResponse from '../../request/response/EntityResponse';
import {UserExtendedModel} from 'player-core-models';

/**
 * Response containing a single user
 */
class UserEntityResponse extends EntityResponse {
    constructor(rawResponse)
    {
        super(UserExtendedModel, rawResponse);
    }

    /**
     * The user
     * @returns {UserExtendedModel}
     */
    get result(){
        return this._result;
    }
}

export default UserEntityResponse;
