import settings from './settings';

import UsersRepository from './api/users/UsersRepository';

import APIService          from './request/APIService';
import NodeRequestAdapter  from './request/adapter/NodeRequestAdapter';
import JSONPRequestAdapter from './request/adapter/JSONPRequestAdapter';

// Environment setup
if (typeof window !== 'undefined'){ // If browser
    APIService.setAdapter(JSONPRequestAdapter);
} else { // If NodeJs
    APIService.setAdapter(NodeRequestAdapter);
}

export {
    settings,
    APIService,

    UsersRepository
};