import AbstractRequestAdapter from './AbstractRequestAdapter';

import URL from 'url';
import HTTPS from 'https';

/**
 * Process requests using https://www.npmjs.com/package/request
 * For use in environments where cross-domain requests isn't an issue (i.e. Node.js, Cordova, etc)
 */
class NodeRequestAdapter extends AbstractRequestAdapter{
    constructor()
    {
        super();
    }

    /**
     * Issue a request
     * @param {string} method The request method
     * @param {string} url The target URL
     * @param {object} body The request body
     * @param {function} callback Callback upon completion
     * @param {object} [callbackThis] The 'this' to apply to the callback
     * @private
     */
    _request(method, url, body, callback, callbackThis){
        var urlObject = URL.parse(url);

        var options = {
            method: method,
            host: urlObject.hostname,
            port: urlObject.port,
            path: urlObject.path
        };

        HTTPS.request(options, (response)=>{
            var str = '';

            //another chunk of data has been received, so append it to `str`
            response.on('data', (chunk)=>{
                str += chunk;
            });

            //the whole response has been received, so we just print it out here
            response.on('end', () => {
                var response;
                try {
                    response = JSON.parse(str);
                }catch(e){
                    response = str;
                }
                callback.call(callbackThis, response);
            });
        }).end();
    }

    //TODO implement objectToQueryString
    get(url, data, callback, callbackThis){
        url = this.objectToQueryString(data);
        this._request('GET', url, null, callback, callbackThis);
    }
    post(url, data, callback, callbackThis){
        this._request('POST', url, data, callback, callbackThis);
    }
    put(url, data, callback, callbackThis){
        this._request('PUT', url, data, callback, callbackThis);
    }
    del(url, data, callback, callbackThis){
        url = this.objectToQueryString(data);
        this._request('DELETE', url, null, callback, callbackThis);
    }
}

export default NodeRequestAdapter;
