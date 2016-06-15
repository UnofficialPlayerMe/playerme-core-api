import settings from './settings';

import UsersRepository from './api/users/UsersRepository';

import APIService          from './request/APIService';
import NodeRequestAdapter  from './request/adapter/NodeRequestAdapter';
import JSONPRequestAdapter from './request/adapter/JSONPRequestAdapter';

// Check for dependencies
function checkDependency(variable, errorMessage){
    if (typeof variable !== 'undefined') return;
    if (typeof alert !== 'undefined'){
        alert(errorMessage);
    }else{
        console.error(errorMessage);
    }
}

checkDependency(Promise, "'Promise' isn't available on this platform and needs a pollyfill.");

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