import settings from './settings';

import UsersRepository from './api/users/UsersRepository';

import APIService from './request/APIService';
import JSONPRequestAdapter from './request/adapter/JSONPRequestAdapter';

var adapters = {
    JSONP: new JSONPRequestAdapter
};

export {
    settings,
    adapters,
    APIService,

    UsersRepository
};