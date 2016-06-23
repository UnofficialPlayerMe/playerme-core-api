import AbstractResponse from '../../request/response/AbstractResponse';
import {UserExtendedModel} from 'player-core-models';

/**
 * Response containing a single user
 */
class UserEntityResponse extends AbstractResponse {
    constructor(rawResponse)
    {
        super(rawResponse);

        //TODO throw exceptions if response is invalid
        
        this._user = new UserExtendedModel(rawResponse.result);
    }

    /**
     * @returns {UserExtendedModel}
     */
    get user(){
        return this._user;
    }
}

export default UserEntityResponse;
