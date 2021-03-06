// Load dependencies
import * as entry from './entry';
import * as models from 'player-core-models';

import APIService from './request/APIService';

var env = process.env;

// Debug logging
if (env.NODE_ENV === 'development') {

    // Startup test, checking ES2015 is supported
    try {
        let testES2015 = () => console.info("Running ", process.mainModule.filename);
        testES2015();
        console.info('');
    } catch(e) {
        console.error("ERROR: Startup test failed.");
        console.error(e);
        process.exit(1);
    }

    var getNameOfClass = function(classConstructor){
        if (typeof classConstructor === 'function' && classConstructor.constructor){
            return classConstructor.name;
        }
        return null;
    };

    var logObject = function(name, entry, maxDepth=1, currentDepth=0){
        // Get type
        var entryType = typeof entry;
        var isObject = entryType === 'object';
        var className = getNameOfClass(entry);

        // Calculate prefix
        var prefix = '> ';
        var prefixes = '';
        for (let i=0; i < currentDepth; i++) prefixes += prefix;

        // Log
        console.info(prefixes + name + " : "+(className || entryType));

        // Recursively call on children
        var hasChildren = Boolean(isObject || className);
        if (hasChildren && currentDepth < maxDepth) {
            for (var entryKey in entry) {
                if (!entry.hasOwnProperty(entryKey)) continue;
                logObject(entryKey, entry[entryKey], maxDepth, currentDepth + 1);
            }
        }

        if (currentDepth==0) console.info('');
    };

    // Log modules
    // logObject('Models', models, 1);
    // logObject('Entry', entry, 2);

    // Instantiate test UsersRepository
    // console.log("Creating new UsersRepository...");
    // var UsersRepository = entry.UsersRepository;
    // logObject('new UsersRepository', new UsersRepository(), 2);

    // console.log("Load post...");
    // entry.APIService.get('api/v1/feed/13112', null, (payload)=> {
    //     console.log("Post result:", payload);
    // });

    // console.log("Load comment...");
    // entry.APIService.get('api/v1/feed/13112/comments', {_limit:1}, (payload)=> {
    //     console.log("Comment result:", payload);
    // });

    // console.log("Load user...");
    // entry.UsersRepository.get(1).then((user)=>{
    //     console.log('');
    //     console.log('User', user);
    // })
}

// setInterval(()=>{ console.log("Keep-alive tick") }, 5*1000);

var username = env.PLAYER_USERNAME;
var password = env.PLAYER_PASSWORD;
var baseUrl  = env.PLAYER_BASE_URL;

// Override baseUrl
if (baseUrl){
    entry.APIService.baseUrl = baseUrl;
}

// Login
if (username && password) {
    try{
        entry.AuthService.login(
            username, password
        ).then(
            (response) => {
                console.log('Login response', {
                    success:        response.success,
                    method:         response.method,
                    uri:            response.uri,
                    statusCode:     response.statusCode,
                    statusMessage:  response.statusMessage,
                    headers:        response.headers,
                    result:         response.result
                });

                console.log('');
                console.log("Get feed...");

                APIService.get('api/v1/feed').then(
                    (success)=> console.log("Success", success),
                    (failure)=> console.log("Failure", failure)
                );
            },
            (error) => console.error('Login error', error)
        );
    }catch(e){
        console.error(e);
    }
}
