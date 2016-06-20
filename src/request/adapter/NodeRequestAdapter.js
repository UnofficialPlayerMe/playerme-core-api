import AbstractRequestAdapter from './AbstractRequestAdapter';

import URL from 'url';
import HTTPS from 'https';

/**
 * Process requests using https://www.npmjs.com/package/request
 * For use in environments where cross-domain requests isn't an issue (i.e. Node.js, Cordova, etc)
 */
class NodeRequestAdapter extends AbstractRequestAdapter{
    /**
     * Issue a request
     * @param {string} method The request method
     * @param {string} url The target URL
     * @param {object} [body] The request body
     * @return Promise
     * @private
     */
    _request(method, url, body){
        var urlObject = URL.parse(url);
        var json = body ? JSON.stringify(body) : '';

        var options = {
            method: method,
            host: urlObject.hostname,
            port: urlObject.port,
            path: urlObject.path,
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(json)
            }
        };

        return new Promise((resolve, reject)=>{ // TODO Reject errors
            var request = HTTPS.request(options, (response)=>{

                var str = '';

                //another chunk of data has been received, so append it to `str`
                response.on('data', (chunk)=>{ str += chunk });

                //the whole response has been received, so we just print it out here
                response.on('end', () => {
                    var response;
                    try {
                        response = JSON.parse(str);
                    }catch(e){
                        response = str;
                    }
                    resolve(response);
                });
            });

            request.on('error', (e) => { reject(e) });
            if (json) {
                request.write(json);
            }
            request.end();
        });
    }

    get(url, data){
        if (data) {
            url = this.addToQueryString(url, data);
        }
        return this._request('GET', url, null);
    }
    post(url, data){
        return this._request('POST', url, data);
    }
    put(url, data){
        return this._request('PUT', url, data);
    }
    del(url, data){
        if (data) {
            url = this.addToQueryString(url, data);
        }
        return this._request('DELETE', url, null);
    }
}

export default NodeRequestAdapter;
