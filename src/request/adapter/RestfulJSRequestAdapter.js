import AbstractRequestAdapter from './AbstractRequestAdapter';
import restfulJs from 'restful.js';

/**
 * Process requests using https://www.npmjs.com/package/request
 * For use in environments where cross-domain requests isn't an issue (i.e. Node.js, Cordova, etc)
 */
class RestfulJSRequestAdapter extends AbstractRequestAdapter{
    constructor()
    {
        super();
        
        console.log("RestfulJSRequestAdapter", {restfulJs:restfulJs});
    }

    get(url, data, callback, callbackThis){
        throw new Error("RestfulJSRequestAdapter GET not implemented");
    }

    post(){
        throw new Error("RestfulJSRequestAdapter POST not implemented");
    }

    put(){
        throw new Error("RestfulJSRequestAdapter PUT not implemented");
    }

    del(){
        throw new Error("RestfulJSRequestAdapter DELETE not implemented");
    }
}

export default RestfulJSRequestAdapter;
