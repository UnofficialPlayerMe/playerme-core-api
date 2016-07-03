import settings        from './settings';
import AuthService     from './api/auth/AuthService';
import UsersRepository from './api/users/UsersRepository';
import APIService      from './request/APIService';

// Check for dependencies
function checkDependency(variable, errorMessage){
    if (typeof variable !== 'undefined') return;
    if (typeof alert !== 'undefined'){
        alert(errorMessage);
    }else{
        console.error(errorMessage);
    }
}

checkDependency(Promise, "'Promise' isn't available on this platform and needs a polyfill.");

var adapters = {};

// Environment setup
if (typeof window !== 'undefined'){ // If browser
    adapters.JSONPRequestAdapter = require('./request/adapter/JSONPRequestAdapter').default;
    adapters.XMLHttpRequestAdapter = require('./request/adapter/XMLHttpRequestAdapter').default;
    APIService.setAdapter(adapters.JSONPRequestAdapter);
} else { // If NodeJs
    adapters.NodeRequestAdapter = require('./request/adapter/NodeRequestAdapter').default;
    APIService.setAdapter(adapters.NodeRequestAdapter);
}

export {
    adapters,
    settings,
    APIService,
    AuthService,
    UsersRepository
};