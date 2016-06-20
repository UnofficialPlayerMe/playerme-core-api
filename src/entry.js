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

// Environment setup
if (typeof window !== 'undefined'){ // If browser
    APIService.setAdapter(
        require('./request/adapter/JSONPRequestAdapter').default
    );
} else { // If NodeJs
    APIService.setAdapter(
        require('./request/adapter/NodeRequestAdapter').default
    );
}

export {
    settings,
    APIService,
    AuthService,
    UsersRepository
};