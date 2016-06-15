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
     * @return Promise
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

        return new Promise((resolve, reject)=>{
            try {
                var promise = APIService.get('api/v1/users/' + id, null);
            }catch(e){
                reject(e);
                return;
            }

            promise.then((response)=>{
                if (response.results){
                    console.log('UsersRepository', response); //TODO Custom response class
                    resolve(new UserExtendedModel(response.results));
                } else {
                    reject(response);
                }
            });
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
