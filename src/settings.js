import JSONPRequestAdapter from './request/adapter/JSONPRequestAdapter'

var settings = {
    get adapter(){
        return this._adapter;
    },
    set adapter(str){
        this._adapter = str;
    },
    _adapter: JSONPRequestAdapter
};

export default settings;
