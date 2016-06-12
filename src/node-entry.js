// Load dependencies
var entry = require('./entry');
var models = require('../node_modules/playerme-core-models/src/entry');

// Debug logging
if (process.env.NODE_ENV === 'development') {
    // Startup test, checking ES2015 is supported
    try {
        let testES2015 = () => console.info("Running ", process.mainModule.filename);
        testES2015();
        console.info('');
    }catch(e){
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
    // var getClassNameOfInstance = function(instance){
    //     if (typeof instance === 'object' && instance.constructor){
    //         return instance.constructor.name;
    //     }
    //     return null;
    // };

    var logModule = function(name, entry, maxDepth=1, currentDepth=0){
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
                logModule(entryKey, entry[entryKey], maxDepth, currentDepth + 1);
            }
        }

        if (currentDepth==0) console.info('');
    };

    logModule('Models', models, 1);
    logModule('Entry', entry, 2);
}
