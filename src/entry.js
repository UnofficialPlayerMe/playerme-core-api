import settings from './settings';

import UsersRepository from './api/users/UsersRepository';

import JSONPRequestAdapter from './request/adapter/JSONPRequestAdapter';

var adapters = {
    JSONP: new JSONPRequestAdapter
};

export {
    settings,
    adapters,
    UsersRepository
};