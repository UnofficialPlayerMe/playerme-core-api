import APIService from '../../request/APIService';
import {UserExtendedModel} from 'player-core-models';

/**
 *
 */
class UsersRepository {
    constructor()
    {

    }

    /**
     *
     * @param {number|string} id The user's ID
     * TODO Use callback/promise
     */
    get(id)
    {
        var idType = typeof id;

        if (idType === 'string'){
            id = parseInt(id, 10);
            if (isNaN(id)){
                throw new TypeError("id string passed to UsersRepository:get() is NaN. Was ['"+idType+"'].");
            }
        }else if (idType !== 'number'){
            throw new TypeError("id passed to UsersRepository:get() isn't a number. Was ["+idType+"].");
        }

        console.log('UsersRepository.get('+id+')...');

        APIService.get('api/v1/users/'+id, null, (payload)=> {
            console.log('... UsersRepository.get('+id+'):');
            console.log('> Payload:', payload);

            if (payload.results){
                console.log('> User:', new UserExtendedModel(payload.results));
            }
        });
    }

    list()
    {
        //TODO
    }

    listOnline()
    {
        //TODO
    }

    update()
    {
        //TODO
    }
}

// Return instance, making this a singleton
export default new UsersRepository();
