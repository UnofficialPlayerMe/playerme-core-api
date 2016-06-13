import settings from './settings';

import UsersRepository from './api/users/UsersRepository';

import APIService              from './request/APIService';
import RestfulJSRequestAdapter from './request/adapter/RestfulJSRequestAdapter';
import JSONPRequestAdapter     from './request/adapter/JSONPRequestAdapter';

// Environment setup
if (window){ // If browser
    APIService.setAdapter(JSONPRequestAdapter);
} else { // If NodeJs
    APIService.setAdapter(RestfulJSRequestAdapter);
}

export {
    settings,
    APIService,

    UsersRepository
};