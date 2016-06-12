import settings from './settings';

import UsersRepository from './api/users/UsersRepository';

import APIService from './request/APIService';
import RestfulJSRequestAdapter from './request/adapter/RestfulJSRequestAdapter';
// import JSONPRequestAdapter from './request/adapter/JSONPRequestAdapter';

var adapters = {
    //JSONP: JSONPRequestAdapter,
    RestfulJS: RestfulJSRequestAdapter
};

export {
    settings,
    adapters,
    APIService,

    UsersRepository
};