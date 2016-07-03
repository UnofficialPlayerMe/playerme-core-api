import AbstractRequestAdapter from './AbstractRequestAdapter';
import {createQueryString} from '../helpers/AdapterHelper';
import RawResponse from '../response/RawResponse';

/**
 * Process requests using JSONP.
 * Browsers allow this method for cross-domain calls, but only GET requests.
 */
class XMLHttpRequestAdapter extends AbstractRequestAdapter {
    constructor()
    {
        super();
    }

    get(url, data){
        return new Promise((resolve, reject)=>{
            var XHR = new XMLHttpRequest();

            XHR.addEventListener('load', function(event) {
                console.log('XMLHttpRequestAdapter load', event);
                resolve(event);
            });
            XHR.addEventListener('error', function(event) {
                console.log('XMLHttpRequestAdapter error', event);
                reject(event);
            });

            try {
                XHR.open('GET', url + createQueryString(data));
                XHR.send();
            }catch(e){
                console.log('XMLHttpRequestAdapter exception', e);
                reject(e);
            }
        });
    }

    post(){
        throw new Error("POST method not available for XMLHttpRequestAdapter")
    }

    put(){
        throw new Error("PUT method not available for XMLHttpRequestAdapter")
    }

    del(){
        throw new Error("DELETE method not available for XMLHttpRequestAdapter")
    }
}

// Return single instance, making it a singleton
export default new XMLHttpRequestAdapter();
