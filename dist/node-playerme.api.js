var PlayerMe = PlayerMe || {}; PlayerMe["API"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // Load dependencies


	var _entry = __webpack_require__(1);

	var entry = _interopRequireWildcard(_entry);

	var _playerCoreModels = __webpack_require__(9);

	var models = _interopRequireWildcard(_playerCoreModels);

	var _APIService = __webpack_require__(4);

	var _APIService2 = _interopRequireDefault(_APIService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var env = process.env;

	// Debug logging
	if (env.NODE_ENV === 'development') {

	    // Startup test, checking ES2015 is supported
	    try {
	        var testES2015 = function testES2015() {
	            return console.info("Running ", process.mainModule.filename);
	        };
	        testES2015();
	        console.info('');
	    } catch (e) {
	        console.error("ERROR: Startup test failed.");
	        console.error(e);
	        process.exit(1);
	    }

	    var getNameOfClass = function getNameOfClass(classConstructor) {
	        if (typeof classConstructor === 'function' && classConstructor.constructor) {
	            return classConstructor.name;
	        }
	        return null;
	    };

	    var logObject = function logObject(name, entry) {
	        var maxDepth = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	        var currentDepth = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

	        // Get type
	        var entryType = typeof entry === 'undefined' ? 'undefined' : _typeof(entry);
	        var isObject = entryType === 'object';
	        var className = getNameOfClass(entry);

	        // Calculate prefix
	        var prefix = '> ';
	        var prefixes = '';
	        for (var i = 0; i < currentDepth; i++) {
	            prefixes += prefix;
	        } // Log
	        console.info(prefixes + name + " : " + (className || entryType));

	        // Recursively call on children
	        var hasChildren = Boolean(isObject || className);
	        if (hasChildren && currentDepth < maxDepth) {
	            for (var entryKey in entry) {
	                if (!entry.hasOwnProperty(entryKey)) continue;
	                logObject(entryKey, entry[entryKey], maxDepth, currentDepth + 1);
	            }
	        }

	        if (currentDepth == 0) console.info('');
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
	var baseUrl = env.PLAYER_BASE_URL;

	// Override baseUrl
	if (baseUrl) {
	    entry.APIService.baseUrl = baseUrl;
	}

	// Login
	if (username && password) {
	    try {
	        entry.AuthService.login(username, password).then(function (response) {
	            console.log('Login response', {
	                success: response.success,
	                method: response.method,
	                uri: response.uri,
	                statusCode: response.statusCode,
	                statusMessage: response.statusMessage,
	                headers: response.headers,
	                result: response.result
	            });

	            console.log('');
	            console.log("Get feed...");

	            _APIService2.default.get('api/v1/feed').then(function (success) {
	                return console.log("Success", success);
	            }, function (failure) {
	                return console.log("Failure", failure);
	            });
	        }, function (error) {
	            return console.error('Login error', error);
	        });
	    } catch (e) {
	        console.error(e);
	    }
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UsersRepository = exports.AuthService = exports.APIService = exports.settings = exports.adapters = undefined;

	var _settings = __webpack_require__(2);

	var _settings2 = _interopRequireDefault(_settings);

	var _AuthService = __webpack_require__(3);

	var _AuthService2 = _interopRequireDefault(_AuthService);

	var _UsersRepository = __webpack_require__(20);

	var _UsersRepository2 = _interopRequireDefault(_UsersRepository);

	var _APIService = __webpack_require__(4);

	var _APIService2 = _interopRequireDefault(_APIService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Check for dependencies
	function checkDependency(variable, errorMessage) {
	    if (typeof variable !== 'undefined') return;
	    if (typeof alert !== 'undefined') {
	        alert(errorMessage);
	    } else {
	        console.error(errorMessage);
	    }
	}

	checkDependency(Promise, "'Promise' isn't available on this platform and needs a polyfill.");

	var adapters = {};

	// Environment setup
	if (typeof window !== 'undefined') {
	    // If browser
	    adapters.JSONPRequestAdapter = __webpack_require__(22).default;
	    adapters.XMLHttpRequestAdapter = __webpack_require__(24).default;
	    _APIService2.default.setAdapter(adapters.JSONPRequestAdapter);
	} else {
	    // If NodeJs
	    adapters.NodeRequestAdapter = __webpack_require__(27).default;
	    _APIService2.default.setAdapter(adapters.NodeRequestAdapter);
	}

	exports.adapters = adapters;
	exports.settings = _settings2.default;
	exports.APIService = _APIService2.default;
	exports.AuthService = _AuthService2.default;
	exports.UsersRepository = _UsersRepository2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var settings = {};

	exports.default = settings;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIService = __webpack_require__(4);

	var _APIService2 = _interopRequireDefault(_APIService);

	var _LoginResponse = __webpack_require__(6);

	var _LoginResponse2 = _interopRequireDefault(_LoginResponse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 */

	var AuthService = function () {
	    function AuthService() {
	        _classCallCheck(this, AuthService);
	    }

	    _createClass(AuthService, [{
	        key: 'login',

	        /**
	         * This method of login is the regular one, also used in the official front-end app.
	         * This will return a cookie named playerme_session,
	         * make sure you keep that cookie and send it on consequent requests.
	         * @param {string} login The login (username OR email)
	         * @param {string} password The password
	         * @param {boolean} [remember=false] Remember me
	         * @returns {Promise}
	         */
	        value: function login(_login, password) {
	            var remember = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	            // Validate login
	            if (!_login) {
	                throw new ReferenceError("No user login passed to AuthService:login().");
	            }
	            if (typeof _login !== 'string') {
	                throw new TypeError("Login passed to UsersRepository:get() isn't a string. Was [" + (typeof _login === 'undefined' ? 'undefined' : _typeof(_login)) + "].");
	            }

	            // Validate password
	            if (!password) {
	                throw new ReferenceError("No password passed to AuthService:login().");
	            }
	            if (typeof password !== 'string') {
	                throw new TypeError("Password passed to UsersRepository:get() isn't a string. Was [" + (typeof password === 'undefined' ? 'undefined' : _typeof(password)) + "].");
	            }

	            return new Promise(function (resolve, reject) {
	                try {
	                    var promise = _APIService2.default.post('api/v1/auth/login', {
	                        login: _login,
	                        password: password,
	                        remember: remember
	                    });
	                } catch (e) {
	                    reject(e);
	                    return;
	                }

	                promise.then(function (rawResponse) {
	                    resolve(new _LoginResponse2.default(rawResponse));
	                });
	            });
	        }
	    }]);

	    return AuthService;
	}();

	// Return instance, making this a singleton


	exports.default = new AuthService();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractRequestAdapter = __webpack_require__(5);

	var _AbstractRequestAdapter2 = _interopRequireDefault(_AbstractRequestAdapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A singleton wrapper for Request adapters
	 */

	var APIService = function (_AbstractRequestAdapt) {
	    _inherits(APIService, _AbstractRequestAdapt);

	    //
	    // Constructor
	    //

	    function APIService() {
	        _classCallCheck(this, APIService);

	        /**
	         * The URL that gets prepended to partial request URLs
	         * @member {string}
	         * @private
	         */

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(APIService).call(this));

	        _this._baseUrl = '';

	        /**
	         * The adapter used to make requests
	         * @member {object}
	         * @private
	         */
	        _this._adapter = null;

	        // Set defaults
	        _this.baseUrl = "https://player.me/";
	        return _this;
	    }

	    //
	    // Request Methods
	    //

	    // TODO Have success & failure classes


	    _createClass(APIService, [{
	        key: '_request',
	        value: function _request(method, url, data) {
	            var requestBodyRequired = false;
	            switch (method) {
	                case 'get':
	                    requestBodyRequired = false;break;
	                case 'post':
	                    requestBodyRequired = true;break;
	                case 'put':
	                    requestBodyRequired = true;break;
	                case 'del':
	                    requestBodyRequired = false;break;
	                default:
	                    throw new Error("Unhandled method [" + method + "] passed to APIService._request().");
	            }

	            validateURL(method, url);
	            validateData(method, data, requestBodyRequired);

	            var adapter = this.getAdapter(true);
	            url = this.prependBaseUrl(url);
	            return adapter[method](url, data);
	        }
	    }, {
	        key: 'get',
	        value: function get(url, data) {
	            return this._request('get', url, data);
	        }
	    }, {
	        key: 'post',
	        value: function post(url, data) {
	            return this._request('post', url, data);
	        }
	    }, {
	        key: 'put',
	        value: function put(url, data) {
	            return this._request('put', url, data);
	        }
	    }, {
	        key: 'del',
	        value: function del(url, data) {
	            return this._request('del', url, data);
	        }

	        //
	        // Base URL methods
	        //

	        /**
	         * @param {string} str
	         */

	    }, {
	        key: 'prependBaseUrl',


	        /**
	         * Add the baseUrl to the start of the passed address
	         * @param {string} url
	         * @returns {string}
	         */
	        value: function prependBaseUrl(url) {
	            // Skip if passed url has a protocol
	            if (url.indexOf('://') == -1) {
	                var baseUrl = this._baseUrl;

	                // Remove slash at end
	                if (baseUrl.charAt(baseUrl.length - 1) === '/') {
	                    baseUrl = baseUrl.substring(0, baseUrl.length - 1);
	                }
	                // Remove slash at start
	                if (url.charAt(0) === '/') {
	                    url = url.substring(1);
	                }

	                // Add base to url
	                url = baseUrl + '/' + url;
	            }
	            return url;
	        }

	        //
	        // Adapter Methods
	        //

	        /**
	         * Get the current adapter
	         * @param {boolean} [validate=false] Validate the adapter before returning it
	         * @returns {object} The adapter
	         * @throws {TypeError} If adapter is invalid
	         * @throws {ReferenceError} If no adapter is set
	         */

	    }, {
	        key: 'getAdapter',
	        value: function getAdapter() {
	            var validate = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	            if (!this._adapter) {
	                throw new ReferenceError("APIService error: No adapter set");
	            }
	            if (validate) {
	                this.validateAdapter(this._adapter);
	            }
	            return this._adapter;
	        }

	        /**
	         * Set the adapter
	         * @param {AbstractRequestAdapter} adapter Adapter instance or class
	         * @throws {TypeError} If adapter is invalid
	         */

	    }, {
	        key: 'setAdapter',
	        value: function setAdapter(adapter) {
	            // Turn class into an instance
	            if (typeof adapter === 'function' && adapter.constructor) {
	                adapter = new adapter();
	            }

	            this.validateAdapter(adapter);
	            this._adapter = adapter;
	        }

	        /**
	         * Throws an error if the adapter is invalid
	         * @param {object} adapter The adapter to validate
	         * @throws {TypeError}
	         */

	    }, {
	        key: 'validateAdapter',
	        value: function validateAdapter(adapter) {
	            // Assert adapter is an object
	            if ((typeof adapter === 'undefined' ? 'undefined' : _typeof(adapter)) !== 'object') {
	                throw new TypeError('Invalid APIRequest adapter: Not an object.');
	            }

	            // Assert adapter inherits from AbstractRequestAdapter
	            var adapterClass = adapter.constructor;
	            while (adapterClass) {
	                if (adapterClass === _AbstractRequestAdapter2.default) return;
	                adapterClass = Object.getPrototypeOf(adapterClass);
	            }
	            throw new TypeError("Invalid APIRequest adapter: Doesn't inherit from AbstractRequestAdapter.");
	        }

	        /// End of APIService

	    }, {
	        key: 'baseUrl',
	        set: function set(str) {
	            if (typeof str !== 'string') {
	                throw new TypeError("baseUrl passed to APIService is not a string");
	            }
	            if (str.length == 0) {
	                throw new TypeError("baseUrl passed to APIService is empty");
	            }
	            // Must have '://' and at least one character before it
	            if (str.indexOf('://') <= 0) {
	                throw new TypeError("baseUrl is missing protocol");
	            }
	            this._baseUrl = str;
	        }

	        /**
	         * @returns {string}
	         */
	        ,
	        get: function get() {
	            return this._baseUrl;
	        }
	    }]);

	    return APIService;
	}(_AbstractRequestAdapter2.default);

	//
	// Inaccessible Validation Methods
	//

	/**
	 * Validate that the URL is valid
	 * @param {string} method Name of the method this is being called in
	 * @param {string} url The request URL
	 * @throws {ReferenceError}
	 */


	function validateURL(method, url) {
	    var msg;
	    if (!url) {
	        msg = "No URL passed to APIService:" + method + ".";
	        console.error(msg);
	        throw new ReferenceError(msg);
	    }
	    if (typeof url != 'string') {
	        msg = "Invalid URL passed to APIService:" + method + ". Was [" + (typeof url === 'undefined' ? 'undefined' : _typeof(url)) + "].";
	        console.error(msg);
	        throw new ReferenceError(msg);
	    }
	}

	/**
	 * Validate that the data object is valid
	 * @param {string} method Name of the method this is being called in
	 * @param {data} data The data to be used in the request
	 * @param {boolean} required If the request body should be truthy
	 * @throws {ReferenceError}
	 */
	function validateData(method, data, required) {
	    var msg;
	    if (!required && !data) {
	        return;
	    }
	    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object') {
	        msg = "Invalid data passed to APIService:" + method + ". Was [" + (typeof data === 'undefined' ? 'undefined' : _typeof(data)) + "].";
	        console.error(msg);
	        throw new ReferenceError(msg);
	    }
	}

	// Export a singleton instance
	exports.default = new APIService();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AbstractRequestAdapter = function () {
	    function AbstractRequestAdapter() {
	        _classCallCheck(this, AbstractRequestAdapter);

	        var abstractClassName = 'AbstractRequestAdapter';
	        if (this.name === abstractClassName) {
	            throw new Error(abstractClassName + ' was not supposed to be instantiated.');
	        }
	    }

	    /**
	     * The adapter's name
	     * @returns {string}
	     */


	    _createClass(AbstractRequestAdapter, [{
	        key: 'request',


	        /**
	         * Submit request
	         * @param {string} method
	         * @param {string} url
	         * @param {object} data
	         * @return Promise
	         * @throws Error Error when not implemented
	         * TODO Create not-implemented error
	         */
	        value: function request(method, url, data) {
	            throw new Error("request() not implemented by " + this.name);
	        }

	        /**
	         * Submit a GET request
	         * @param {string} url
	         * @param {object} data
	         * @return Promise
	         * @throws Error Error when not implemented
	         * TODO Create not-implemented error
	         */

	    }, {
	        key: 'get',
	        value: function get(url, data) {
	            throw new Error("GET not implemented by " + this.name);
	        }

	        /**
	         * Submit a POST request
	         * @param {string} url
	         * @param {object} data
	         * @return Promise
	         * @throws Error Error when not implemented
	         * TODO Create not-implemented error
	         */

	    }, {
	        key: 'post',
	        value: function post(url, data) {
	            throw new Error("POST not implemented by " + this.name);
	        }

	        /**
	         * Submit a PUT request
	         * @param {string} url
	         * @param {object} data
	         * @return Promise
	         * @throws Error Error when not implemented
	         * TODO Create not-implemented error
	         */

	    }, {
	        key: 'put',
	        value: function put(url, data) {
	            throw new Error("PUT not implemented by " + this.name);
	        }

	        /**
	         * Submit a DELETE request
	         * @param {string} url
	         * @param {object} data
	         * @return Promise
	         * @throws Error Error when not implemented
	         * TODO Create not-implemented error
	         */

	    }, {
	        key: 'del',
	        value: function del(url, data) {
	            throw new Error("DEL not implemented by " + this.name);
	        }

	        /**
	         * Turn an object into a query string
	         * @param {string} url
	         * @param {object} obj
	         * @param {boolean} [keepExisting=true] When true, any keys in `obj` that are in the `url`'s query string will be ignored
	         * @returns {string}
	         */

	    }, {
	        key: 'addToQueryString',
	        value: function addToQueryString(url, obj) {
	            var keepExisting = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	            // Validation
	            if (!url) {
	                throw new ReferenceError('URL not passed to addToQueryString()');
	            }
	            if (typeof url !== 'string') {
	                throw new TypeError('URL passed to addToQueryString() is not a string (' + (typeof url === 'undefined' ? 'undefined' : _typeof(url)) + ').');
	            }
	            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	                throw new TypeError('obj passed to addToQueryString() is not an object (' + (typeof url === 'undefined' ? 'undefined' : _typeof(url)) + ').');
	            }

	            var resultParts = [];
	            if (obj !== null) {

	                // Remove URL's query string and add to obj
	                var urlParts = url.split('?', 2);
	                if (urlParts.length > 1) {
	                    url = urlParts[0]; // Remove query string from URL

	                    // For each part of the query string...
	                    var queryStringArr = urlParts[1].split('&');
	                    var queryStringLength = queryStringArr.length;

	                    for (var i = 0; i < queryStringLength; i++) {
	                        var queryStringItem = queryStringArr[i].split('=', 2);
	                        var queryStringKey = queryStringItem[0];

	                        // If this should override obj, or it doesn't exist on obj, then add it
	                        if (keepExisting || !obj.hasOwnProperty(queryStringKey)) {
	                            obj[queryStringKey] = queryStringItem[1];
	                        }
	                    }
	                }

	                // Convert obj into uri component array
	                for (var objKey in obj) {
	                    if (obj.hasOwnProperty(objKey)) {
	                        resultParts.push(objKey + '=' + encodeURIComponent(obj[objKey]));
	                    }
	                }
	            }

	            // Return
	            var result = url;
	            if (resultParts.length) {
	                result += '?' + resultParts.join('&').replace(/%20/g, '+');
	            }
	            return result;
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this.constructor.name;
	        }
	    }]);

	    return AbstractRequestAdapter;
	}();

	exports.default = AbstractRequestAdapter;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EntityResponse2 = __webpack_require__(7);

	var _EntityResponse3 = _interopRequireDefault(_EntityResponse2);

	var _playerCoreModels = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Response containing a single user
	 */

	var LoginResponse = function (_EntityResponse) {
	    _inherits(LoginResponse, _EntityResponse);

	    function LoginResponse(rawResponse) {
	        _classCallCheck(this, LoginResponse);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginResponse).call(this, _playerCoreModels.UserExtendedModel, rawResponse));
	    }

	    /**
	     * The user
	     * @returns {UserExtendedModel}
	     */


	    _createClass(LoginResponse, [{
	        key: 'result',
	        get: function get() {
	            return this._result;
	        }
	    }]);

	    return LoginResponse;
	}(_EntityResponse3.default);

	exports.default = LoginResponse;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractResponse2 = __webpack_require__(8);

	var _AbstractResponse3 = _interopRequireDefault(_AbstractResponse2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * This is an abstract wrapper around a RawResponse for an entity.
	 * Sub-classes should be tailored to specific APIs.
	 */

	var EntityResponse = function (_AbstractResponse) {
	  _inherits(EntityResponse, _AbstractResponse);

	  /**
	   * @param {function} modelClass
	   * @param {RawResponse} rawResponse
	   * @abstract
	   */

	  function EntityResponse(modelClass, rawResponse) {
	    _classCallCheck(this, EntityResponse);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EntityResponse).call(this, modelClass, rawResponse));

	    _this._assertNotInstanceOfAbstract(EntityResponse);

	    /**
	     * The result object, instantiated with it's model class
	     */
	    _this._result = new modelClass(rawResponse.results);
	    return _this;
	  }

	  /**
	   * The results from the API
	   * @returns {Object}
	   */


	  _createClass(EntityResponse, [{
	    key: 'result',
	    get: function get() {
	      throw new Error('Accessor "result" not implemented by ' + this.className);
	    }
	  }]);

	  return EntityResponse;
	}(_AbstractResponse3.default);

	exports.default = EntityResponse;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * This is an abstract wrapper around a RawResponse.
	 * Sub-classes should be tailored to specific APIs.
	 */

	var AbstractResponse = function () {
	    /**
	     * @param {function} modelClass
	     * @param {RawResponse} rawResponse
	     * @abstract
	     */

	    function AbstractResponse(modelClass, rawResponse) {
	        _classCallCheck(this, AbstractResponse);

	        this._assertNotInstanceOfAbstract(AbstractResponse);

	        // Validate modelClass
	        if (!modelClass) {
	            throw new ReferenceError('No modelClass defined by ' + this.className);
	        }
	        if (typeof modelClass !== 'function') {
	            throw new ReferenceError('Invalid modelClass defined by ' + this.className);
	        }

	        // Validate rawResponse
	        if (!rawResponse) {
	            throw new ReferenceError('No raw defined by ' + this.className);
	        }
	        if ((typeof rawResponse === 'undefined' ? 'undefined' : _typeof(rawResponse)) !== 'object' || rawResponse.constructor.name !== 'RawResponse') {
	            throw new ReferenceError('Invalid raw defined by ' + this.className);
	        }

	        /**
	         * The class used to construct the result
	         * @type {Function}
	         */
	        this._modelClass = modelClass;

	        /**
	         * The raw request this wraps around
	         * @member {RawResponse} _raw
	         */
	        this._raw = rawResponse;
	    }

	    /**
	     * Throw an error if the passed class is at the top of this instance's inheritance chain
	     * @param {function} abstractClass
	     * @throws Error
	     */


	    _createClass(AbstractResponse, [{
	        key: '_assertNotInstanceOfAbstract',
	        value: function _assertNotInstanceOfAbstract(abstractClass) {
	            if (this.constructor === abstractClass) {
	                //TODO Custom AbstractClassError
	                throw new Error(abstractClass.name + ' is abstract and not supposed to be instantiated');
	            }
	        }

	        /**
	         * The name of this instance's class
	         * @returns {string}
	         * @readonly
	         */

	    }, {
	        key: 'className',
	        get: function get() {
	            return this.constructor.name;
	        }

	        /**
	         * Whether the response was successful
	         * @returns {boolean}
	         * @readonly
	         */

	    }, {
	        key: 'success',
	        get: function get() {
	            return this._raw.success;
	        }

	        /**
	         * The resulting status code
	         * @returns {int}
	         * @readonly
	         */

	    }, {
	        key: 'statusCode',
	        get: function get() {
	            return this._raw.statusCode;
	        }

	        /**
	         * The resulting status message
	         * @returns {string}
	         * @readonly
	         */

	    }, {
	        key: 'statusMessage',
	        get: function get() {
	            return this._raw.statusMessage;
	        }

	        /**
	         * The result headers
	         * @returns {string[]}
	         * @readonly
	         */

	    }, {
	        key: 'headers',
	        get: function get() {
	            return this._raw.headers;
	        }

	        /**
	         * The request method used for this response
	         * @returns {string}
	         * @readonly
	         */

	    }, {
	        key: 'method',
	        get: function get() {
	            return this._raw.method;
	        }

	        /**
	         * The request URI used for this response
	         * @returns {string}
	         * @readonly
	         */

	    }, {
	        key: 'uri',
	        get: function get() {
	            return this._raw.uri;
	        }
	    }]);

	    return AbstractResponse;
	}();

	exports.default = AbstractResponse;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GameExtendedModel = exports.GameModel = exports.ActivityModel = exports.CommentModel = exports.UserExtendedModel = exports.UserModel = undefined;

	var _UserModel = __webpack_require__(10);

	var _UserModel2 = _interopRequireDefault(_UserModel);

	var _UserExtendedModel = __webpack_require__(11);

	var _UserExtendedModel2 = _interopRequireDefault(_UserExtendedModel);

	var _CommentModel = __webpack_require__(12);

	var _CommentModel2 = _interopRequireDefault(_CommentModel);

	var _ActivityModel = __webpack_require__(14);

	var _ActivityModel2 = _interopRequireDefault(_ActivityModel);

	var _GameModel = __webpack_require__(18);

	var _GameModel2 = _interopRequireDefault(_GameModel);

	var _GameExtendedModel = __webpack_require__(19);

	var _GameExtendedModel2 = _interopRequireDefault(_GameExtendedModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.UserModel = _UserModel2.default;
	exports.UserExtendedModel = _UserExtendedModel2.default;
	exports.CommentModel = _CommentModel2.default;
	exports.ActivityModel = _ActivityModel2.default;
	exports.GameModel = _GameModel2.default;
	exports.GameExtendedModel = _GameExtendedModel2.default;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A model representing a Player.me User.
	 */

	var UserModel = function () {
	    /**
	     * Create a new User model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function UserModel() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, UserModel);

	        this._id = obj && obj.id || 0;
	        this._username = obj && obj.username || '';
	        this._accountType = obj && obj.account_type || '';
	        this._slug = obj && obj.slug || '';
	        this._avatar = obj && obj.avatar || '';
	        this._cover = obj && obj.cover || '';
	        this._url = obj && obj.url || '';
	        this._followersCount = obj && obj.followers_count || 0;
	        this._isFeatured = obj && obj.is_featured || false;
	        this._isVerified = obj && obj.is_verified || false;
	        this._isPartner = obj && obj.is_partner || false;
	        this._isPrivate = obj && obj.is_private || false;
	    }

	    _createClass(UserModel, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[UserModel';
	            if (this._id) msg += ' #' + this._id;
	            if (this._slug) msg += ' "' + this._slug + '"';
	            return msg + ']';
	        }

	        /**
	         * The user's ID.
	         * @readonly
	         * @member {number} UserModel#id
	         * @returns {number}
	         */

	    }, {
	        key: 'isUser',


	        /**
	         * Whether the account is for a normal user.
	         * @returns {boolean}
	         */
	        value: function isUser() {
	            return this._accountType == 'user';
	        }

	        /**
	         * Whether the account is for a group.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isGroup',
	        value: function isGroup() {
	            return this._accountType == 'group';
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }

	        /**
	         * The user's username.
	         * @readonly
	         * @member {string} UserModel#username
	         * @returns {string}
	         */

	    }, {
	        key: 'username',
	        get: function get() {
	            return this._username;
	        }

	        /**
	         * The type of account.
	         * @readonly
	         * @member {string} UserModel#accountType
	         * @returns {string}
	         */

	    }, {
	        key: 'accountType',
	        get: function get() {
	            return this._accountType;
	        }

	        /**
	         * The URL-friendly version of the user's name.
	         * @readonly
	         * @member {string} UserModel#slug
	         * @returns {string}
	         */

	    }, {
	        key: 'slug',
	        get: function get() {
	            return this._slug;
	        }

	        /**
	         * The URL of the user's avatar.
	         * Player provides a default.
	         * @readonly
	         * @member {string} UserModel#avatar
	         * @returns {string}
	         */

	    }, {
	        key: 'avatar',
	        get: function get() {
	            return this._avatar;
	        }

	        /**
	         * The URL to the user's profile cover image.
	         * @readonly
	         * @member {string} UserModel#cover
	         * @returns {string}
	         */

	    }, {
	        key: 'cover',
	        get: function get() {
	            return this._cover;
	        }

	        /**
	         * A relative URL to the user's profile.
	         * @readonly
	         * @member {string} UserModel#url
	         * @returns {string}
	         */

	    }, {
	        key: 'url',
	        get: function get() {
	            return this._url;
	        }

	        /**
	         * The number of followers the user has.
	         * @readonly
	         * @member {number} UserModel#followersCount
	         * @returns {number}
	         */

	    }, {
	        key: 'followersCount',
	        get: function get() {
	            return this._followersCount;
	        }

	        /**
	         * Whether Player.me has listed this as a featured user.
	         * @readonly
	         * @member {boolean} UserModel#isFeatured
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isFeatured',
	        get: function get() {
	            return this._isFeatured;
	        }

	        /**
	         * Whether Player.me has verified this user.
	         * @readonly
	         * @member {boolean} UserModel#isVerified
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isVerified',
	        get: function get() {
	            return this._isVerified;
	        }

	        /**
	         * Whether this is a Player.me staff member or partner.
	         * @readonly
	         * @member {boolean} UserModel#isPartner
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isPartner',
	        get: function get() {
	            return this._isPartner;
	        }

	        /**
	         * Whether this is a private user.
	         * @readonly
	         * @member {boolean} UserModel#isPrivate
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isPrivate',
	        get: function get() {
	            return this._isPrivate;
	        }
	    }]);

	    return UserModel;
	}();

	exports.default = UserModel;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _UserModel2 = __webpack_require__(10);

	var _UserModel3 = _interopRequireDefault(_UserModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A model representing an extended data set for a Player.me User.
	 * @extends UserModel
	 */

	var UserExtendedModel = function (_UserModel) {
	    _inherits(UserExtendedModel, _UserModel);

	    /**
	     * Create a new extended User model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function UserExtendedModel() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, UserExtendedModel);

	        var toDate = function toDate(str) {
	            if (!str) return null;
	            return new Date(str);
	        };

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserExtendedModel).call(this, obj));

	        var cover = obj && obj.cover || null;
	        var avatar = obj && obj.avatar || null;

	        _this._shortDescription = obj && obj.short_description || '';
	        _this._description = obj && obj.description || '';
	        _this._descriptionHtml = obj && obj.descriptionHtml || '';
	        _this._coverOriginal = cover && cover.original || '';
	        _this._coverCached = cover && cover.cached || '';
	        _this._coverOriginalFilename = cover && cover.original_filename || '';
	        _this._avatarOriginal = avatar && avatar.original || '';
	        _this._avatarCached = avatar && avatar.cached || '';
	        _this._avatarOriginalFilename = avatar && avatar.original_filename || '';
	        _this._createdAt = obj && toDate(obj.created_at) || '';
	        _this._generatedBy = obj && obj.generated_by || null;
	        _this._isCurrentUser = obj && obj.is_current_user || false;
	        _this._isFollowing = obj && obj.is_following || false;
	        _this._isFollowed = obj && obj.is_followed || false;
	        _this._isFriend = obj && obj.is_friend || false;
	        _this._isBlocked = obj && obj.is_blocked || false;
	        _this._canMessage = obj && obj.can_message || false;
	        _this._isOnline = obj && obj.is_online || false;
	        _this._followingCount = obj && obj.following_count || 0;

	        // Group specific
	        _this._isConfirmedGroupMember = obj && obj.is_confirmed_group_member || false;
	        _this._canConfirmMembership = obj && obj.can_confirm_membership || false;
	        _this._canRemoveMembership = obj && obj.can_remove_membership || false;

	        // Overrides
	        if (cover) _this._cover = cover.cached;
	        if (avatar) _this._avatar = avatar.cached;

	        //Convert ISO date strings to Dates
	        _this._createdAt = (_this._createdAt ? new Date(_this._createdAt) : false) || null;
	        return _this;
	    }

	    _createClass(UserExtendedModel, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[UserExtendedModel';
	            if (this._id) msg += ' #' + this._id;
	            if (this._slug) msg += ' "' + this._slug + '"';
	            return msg + ']';
	        }

	        /**
	         * The user's short bio.
	         * @readonly
	         * @member {string} UserExtendedModel#shortDescription
	         * @returns {string}
	         */

	    }, {
	        key: 'shortDescription',
	        get: function get() {
	            return this._shortDescription;
	        }

	        /**
	         * The user's bio.
	         * @readonly
	         * @member {string} UserExtendedModel#description
	         * @returns {string}
	         */

	    }, {
	        key: 'description',
	        get: function get() {
	            return this._description;
	        }

	        /**
	         * The user's bio in HTML.
	         * @readonly
	         * @member {string} UserExtendedModel#descriptionHtml
	         * @returns {string}
	         */

	    }, {
	        key: 'descriptionHtml',
	        get: function get() {
	            return this._descriptionHtml;
	        }

	        /**
	         * The path to the original cover image.
	         * @readonly
	         * @member {string} UserExtendedModel#coverOriginal
	         * @returns {string}
	         */

	    }, {
	        key: 'coverOriginal',
	        get: function get() {
	            return this._coverOriginal;
	        }

	        /**
	         * The original cover image's filename.
	         * @readonly
	         * @member {string} UserExtendedModel#coverOriginalFilename
	         * @returns {string}
	         */

	    }, {
	        key: 'coverOriginalFilename',
	        get: function get() {
	            return this._coverOriginalFilename;
	        }

	        /**
	         * The path to the original avatar.
	         * @readonly
	         * @member {string} UserExtendedModel#avatarOriginal
	         * @returns {string}
	         */

	    }, {
	        key: 'avatarOriginal',
	        get: function get() {
	            return this._avatarOriginal;
	        }

	        /**
	         * The original avatar's filename.
	         * @readonly
	         * @member {string} UserExtendedModel#avatarOriginalFilename
	         * @returns {string}
	         */

	    }, {
	        key: 'avatarOriginalFilename',
	        get: function get() {
	            return this._avatarOriginalFilename;
	        }

	        /**
	         * The date and time the user was created on.
	         * @readonly
	         * @member {Date} UserExtendedModel#createdAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'createdAt',
	        get: function get() {
	            return this._createdAt;
	        }

	        /**
	         * TODO What is a user's generatedBy field?
	         * @readonly
	         * @member {string} UserExtendedModel#generatedBy
	         * @returns {string}
	         */

	    }, {
	        key: 'generatedBy',
	        get: function get() {
	            return this._generatedBy;
	        }

	        /**
	         * Whether this is the logged in user.
	         * @readonly
	         * @member {boolean} UserExtendedModel#isCurrentUser
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isCurrentUser',
	        get: function get() {
	            return this._isCurrentUser;
	        }

	        /**
	         * Whether this user is following the logged in user.
	         * @readonly
	         * @member {boolean} UserExtendedModel#isFollowing
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isFollowing',
	        get: function get() {
	            return this._isFollowing;
	        }

	        /**
	         * Whether the logged in user has followed this user.
	         * @readonly
	         * @member {boolean} UserExtendedModel#isFollowed
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isFollowed',
	        get: function get() {
	            return this._isFollowed;
	        }

	        /**
	         * Whether this and the logged in user are following each other.
	         * @readonly
	         * @member {boolean} UserExtendedModel#isFriend
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isFriend',
	        get: function get() {
	            return this._isFriend;
	        }

	        /**
	         * Whether the logged in user has blocked this user.
	         * @readonly
	         * @member {boolean} UserExtendedModel#isBlocked
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isBlocked',
	        get: function get() {
	            return this._isBlocked;
	        }

	        /**
	         * Whether the logged in user can message this user.
	         * @readonly
	         * @member {boolean} UserExtendedModel#canMessage
	         * @returns {boolean}
	         */

	    }, {
	        key: 'canMessage',
	        get: function get() {
	            return this._canMessage;
	        }

	        /**
	         * Whether the user is logged in.
	         * @readonly
	         * @member {boolean} UserExtendedModel#isOnline
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isOnline',
	        get: function get() {
	            return this._isOnline;
	        }

	        /**
	         * The number of user's this user is following.
	         * @readonly
	         * @member {number} UserExtendedModel#followingCount
	         * @returns {number}
	         */

	    }, {
	        key: 'followingCount',
	        get: function get() {
	            return this._followingCount;
	        }

	        /**
	         * Whether the logged in user is a member of this group.
	         * @readonly
	         * @member {boolean} UserExtendedModel#isConfirmedGroupMember
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isConfirmedGroupMember',
	        get: function get() {
	            return this._isConfirmedGroupMember;
	        }

	        /**
	         * Whether the logged in user has rights to confirm memberships.
	         * TODO Confirm the description for canConfirmMembership() is correct
	         * @readonly
	         * @member {boolean} UserExtendedModel#canConfirmMembership
	         * @returns {boolean}
	         */

	    }, {
	        key: 'canConfirmMembership',
	        get: function get() {
	            return this._canConfirmMembership;
	        }

	        /**
	         * Whether the logged in user has rights to remove memberships.
	         * TODO Confirm the description for canRemoveMembership() is correct
	         * @readonly
	         * @member {boolean} UserExtendedModel#canRemoveMembership
	         * @returns {boolean}
	         */

	    }, {
	        key: 'canRemoveMembership',
	        get: function get() {
	            return this._canRemoveMembership;
	        }
	    }]);

	    return UserExtendedModel;
	}(_UserModel3.default);

	exports.default = UserExtendedModel;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CommentMeta = __webpack_require__(13);

	var _CommentMeta2 = _interopRequireDefault(_CommentMeta);

	var _UserModel = __webpack_require__(10);

	var _UserModel2 = _interopRequireDefault(_UserModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A model representing a Player.me Comment.
	 */

	var CommentModel = function () {
	    /**
	     * Create a new Comment model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function CommentModel() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, CommentModel);

	        var toDate = function toDate(str) {
	            if (!str) return null;
	            return new Date(str);
	        };

	        var data = obj && obj.data || null;

	        this._id = obj && obj.id || 0;
	        this._userId = obj && obj.user_id || 0;
	        this._activityUserId = obj && obj.activity_user_id || 0;
	        this._activityId = obj && obj.activity_id || 0;
	        this._post = data && data.post || '';
	        this._postRaw = data && data.post_raw || '';
	        this._metas = obj && obj.metas.map(function (meta) {
	            return new _CommentMeta2.default(meta);
	        }) || [];
	        this._createdAt = obj && toDate(obj.created_at) || null;
	        this._updatedAt = obj && toDate(obj.updated_at) || null;
	        this._editedAt = obj && toDate(obj.edited_at) || null;
	        this._deletedAt = obj && toDate(obj.deleted_at) || null;
	        this._user = obj && new _UserModel2.default(obj.user) || null;
	        this._userIsBlocked = obj && obj.userIsBlocked || false;
	        this._hasLiked = obj && obj.hasLiked || false;
	        this._url = obj && obj.url || '';
	        this._showDelete = obj && obj.showDelete || false;
	        this._showEdit = obj && obj.showEdit || false;
	        this._isOwnComment = obj && obj.isOwnComment || false;
	        this._likesCount = obj && obj.likesCount || 0;
	    }

	    _createClass(CommentModel, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[ActivityModel';
	            if (this._id) msg += ' #' + this._id;
	            return msg + ']';
	        }

	        /**
	         * The comment's ID number.
	         * @readonly
	         * @member {number} CommentModel#id
	         * @returns {number}
	         */

	    }, {
	        key: 'like',


	        /**
	         * Like the comment and update likesCount.
	         * @param bool
	         */
	        value: function like() {
	            var bool = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	            if (bool == this._hasLiked) return;
	            this._hasLiked = bool;
	            this._likesCount += bool ? 1 : -1; // Update count
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }

	        /**
	         * The ID of the user that posted the comment.
	         * @readonly
	         * @member {number} CommentModel#userId
	         * @returns {number}
	         */

	    }, {
	        key: 'userId',
	        get: function get() {
	            return this._userId;
	        }

	        /**
	         * The ID of the original poster.
	         * @readonly
	         * @member {number} CommentModel#activityUserId
	         * @returns {number}
	         */

	    }, {
	        key: 'activityUserId',
	        get: function get() {
	            return this._activityUserId;
	        }

	        /**
	         * The ID of the activity this comment is on.
	         * @readonly
	         * @member {number} CommentModel#activityId
	         * @returns {number}
	         */

	    }, {
	        key: 'activityId',
	        get: function get() {
	            return this._activityId;
	        }

	        /**
	         * The display text for the comment.
	         * @readonly
	         * @member {string} CommentModel#post
	         * @returns {string}
	         */

	    }, {
	        key: 'post',
	        get: function get() {
	            return this._post;
	        }

	        /**
	         * The entered text for the comment.
	         * @readonly
	         * @member {string} CommentModel#postRaw
	         * @returns {string}
	         */

	    }, {
	        key: 'postRaw',
	        get: function get() {
	            return this._postRaw;
	        }

	        /**
	         * Metadata associated with this comment.
	         * @readonly
	         * @member {CommentMeta[]} CommentModel#metas
	         * @returns {CommentMeta[]}
	         */

	    }, {
	        key: 'metas',
	        get: function get() {
	            return this._metas;
	        }

	        /**
	         * The date and time the comment was created on.
	         * @readonly
	         * @member {Date} CommentModel#createdAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'createdAt',
	        get: function get() {
	            return this._createdAt;
	        }

	        /**
	         * The date and time the comment was last updated on.
	         * @readonly
	         * @member {Date} CommentModel#updatedAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'updatedAt',
	        get: function get() {
	            return this._updatedAt;
	        }

	        /**
	         * The date and time the comment was last edited by the user on (or null).
	         * @readonly
	         * @member {Date|null} CommentModel#editedAt
	         * @returns {Date|null}
	         */

	    }, {
	        key: 'editedAt',
	        get: function get() {
	            return this._editedAt;
	        }

	        /**
	         * The date and time the comment was soft deleted on (or null).
	         * @readonly
	         * @member {Date|null} CommentModel#deletedAt
	         * @returns {Date|null}
	         */

	    }, {
	        key: 'deletedAt',
	        get: function get() {
	            return this._deletedAt;
	        }

	        /**
	         * If the current user has blocked the user that wrote this comment.
	         * @readonly
	         * @member {boolean} CommentModel#userIsBlocked
	         * @returns {boolean}
	         */

	    }, {
	        key: 'userIsBlocked',
	        get: function get() {
	            return this._userIsBlocked;
	        }

	        /**
	         * The user that posted the comment.
	         * @readonly
	         * @member {UserModel} CommentModel#user
	         * @returns {UserModel}
	         */

	    }, {
	        key: 'user',
	        get: function get() {
	            return this._user;
	        }

	        /**
	         * Whether the logged in user has liked this comment.
	         * @readonly
	         * @member {boolean} CommentModel#hasLiked
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasLiked',
	        get: function get() {
	            return this._hasLiked;
	        }

	        /**
	         * The full URL to this post on the main player.me site.
	         * @readonly
	         * @member {string} CommentModel#url
	         * @returns {string}
	         */

	    }, {
	        key: 'url',
	        get: function get() {
	            return this._url;
	        }

	        /**
	         * Whether the logged in user is able to delete this comment.
	         * @readonly
	         * @member {boolean} CommentModel#showDelete
	         * @returns {boolean}
	         */

	    }, {
	        key: 'showDelete',
	        get: function get() {
	            return this._showDelete;
	        }

	        /**
	         * Whether the logged in user is able to edit this comment.
	         * @readonly
	         * @member {boolean} CommentModel#showEdit
	         * @returns {boolean}
	         */

	    }, {
	        key: 'showEdit',
	        get: function get() {
	            return this._showEdit;
	        }

	        /**
	         * Whether this comment belongs to the logged in user.
	         * @readonly
	         * @member {boolean} CommentModel#isOwnComment
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isOwnComment',
	        get: function get() {
	            return this._isOwnComment;
	        }

	        /**
	         * The number of likes this comment has.
	         * @readonly
	         * @member {number} CommentModel#likesCount
	         * @returns {number}
	         */

	    }, {
	        key: 'likesCount',
	        get: function get() {
	            return this._likesCount;
	        }
	    }]);

	    return CommentModel;
	}();

	exports.default = CommentModel;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A class representing a Player.me Comment's assets.
	 */

	var CommentMeta = function () {
	  /**
	   * Create a new Comment Meta instance.
	   * @param {Object} [obj] A player response object to initialise this object with.
	   */

	  function CommentMeta() {
	    var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    _classCallCheck(this, CommentMeta);

	    this._images = obj && obj.images || [];
	    this._url = obj && obj.url || '';
	    this._title = obj && obj.title || '';
	    this._description = obj && obj.description || '';
	    this._provider = obj && obj.provider || '';
	    this._content = obj && obj.content || '';
	    this._isInternal = obj && obj.isInternal || false;
	    this._thumbnail = obj && obj.thumbnail || '';
	  }

	  /**
	   * An array of URLs to images.
	   * @readonly
	   * @member {string[]} CommentMeta#images
	   * @returns {string[]}
	   */


	  _createClass(CommentMeta, [{
	    key: 'isPhoto',


	    /**
	     * Whether this asset is a photo.
	     * @returns {boolean}
	     */
	    value: function isPhoto() {
	      return this._content == 'photo';
	    }

	    /**
	     * Whether this asset is a video.
	     * @returns {boolean}
	     */

	  }, {
	    key: 'isVideo',
	    value: function isVideo() {
	      return this._content == 'video';
	    }
	  }, {
	    key: 'images',
	    get: function get() {
	      return this._images;
	    }

	    /**
	     * Absolute path to this asset.
	     * @readonly
	     * @member {string} CommentMeta#url
	     * @returns {string}
	     */

	  }, {
	    key: 'url',
	    get: function get() {
	      return this._url;
	    }

	    /**
	     * Title of this asset.
	     * @readonly
	     * @member {string} CommentMeta#title
	     * @returns {string}
	     */

	  }, {
	    key: 'title',
	    get: function get() {
	      return this._title;
	    }

	    /**
	     * Description for this asset.
	     * @readonly
	     * @member {string} CommentMeta#description
	     * @returns {string}
	     */

	  }, {
	    key: 'description',
	    get: function get() {
	      return this._description;
	    }

	    /**
	     * The provider that hosts this asset.
	     * @readonly
	     * @member {string} CommentMeta#provider
	     * @returns {string}
	     */

	  }, {
	    key: 'provider',
	    get: function get() {
	      return this._provider;
	    }

	    /**
	     * The type of asset.
	     * @readonly
	     * @member {string} CommentMeta#content
	     * @returns {string}
	     */

	  }, {
	    key: 'content',
	    get: function get() {
	      return this._content;
	    }

	    /**
	     * TODO What is CommentMetaModel isInternal?
	     * @readonly
	     * @member {boolean} CommentMeta#isInternal
	     * @returns {boolean}
	     */

	  }, {
	    key: 'isInternal',
	    get: function get() {
	      return this._isInternal;
	    }

	    /**
	     * The URL of a thumbnail for the asset.
	     * @readonly
	     * @member {string} CommentMeta#thumbnail
	     * @returns {string}
	     */

	  }, {
	    key: 'thumbnail',
	    get: function get() {
	      return this._thumbnail;
	    }
	  }]);

	  return CommentMeta;
	}();

	exports.default = CommentMeta;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _UserModel = __webpack_require__(10);

	var _UserModel2 = _interopRequireDefault(_UserModel);

	var _CommentModel = __webpack_require__(12);

	var _CommentModel2 = _interopRequireDefault(_CommentModel);

	var _ActivityPostData = __webpack_require__(15);

	var _ActivityPostData2 = _interopRequireDefault(_ActivityPostData);

	var _ActivityVideoData = __webpack_require__(17);

	var _ActivityVideoData2 = _interopRequireDefault(_ActivityVideoData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A model representing a Player.me Activity.
	 */

	var ActivityModel = function () {
	    /**
	     * Create a new Activity model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function ActivityModel() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, ActivityModel);

	        var toDate = function toDate(str) {
	            if (!str) return null;
	            return new Date(str);
	        };

	        this._id = obj && obj.id || 0;
	        this._resourceId = obj && obj.resource_id || 0;
	        this._type = obj && obj.type || '';
	        this._user = obj && new _UserModel2.default(obj.user) || null;
	        this._source = obj && obj.source || '';
	        this._sourceUrl = obj && obj.sourceUrl || '';
	        this._url = obj && obj.url || '';
	        this._fullUrl = obj && toDate(obj.full_url) || '';
	        this._publishedAt = obj && toDate(obj.published_at) || null;
	        this._createdAt = obj && toDate(obj.created_at) || null;
	        this._updatedAt = obj && toDate(obj.updated_at) || null;
	        this._editedAt = obj && toDate(obj.edited_at) || null;
	        this._isSubscribed = obj && obj.isSubscribed || false;
	        this._showEdit = obj && obj.showEdit || false;
	        this._showDelete = obj && obj.showDelete || false;
	        this._userIsHidden = obj && obj.userIsHidden || false;
	        this._userIsBlocked = obj && obj.userIsBlocked || false;
	        this._userIsFollowed = obj && obj.userIsFollowed || false;
	        this._isOwnActivity = obj && obj.isOwnActivity || false;
	        this._hasPinned = obj && obj.hasPinned || false;
	        this._pinsCount = obj && obj.pinsCount || 0;
	        this._hasShared = obj && obj.hasShared || false;
	        this._shareCount = obj && obj.shareCount || 0;
	        this._commentsCount = obj && obj.commentsCount || 0;
	        this._fullUrl = obj && obj.fullUrl || '';
	        this._hasLiked = obj && obj.hasLiked || false;
	        this._likesCount = obj && obj.likesCount || 0;

	        this._comments = [];
	        if (obj && obj.comments) {
	            this._comments = obj.comments.map(function (comment) {
	                return new _CommentModel2.default(comment);
	            });
	        }

	        this._postData = null;
	        this._videoData = null;

	        if (obj && obj.data) {
	            if (this.isPost()) {
	                this._postData = new _ActivityPostData2.default(obj.data);
	            }
	            if (this.isVideo()) {
	                this._videoData = new _ActivityVideoData2.default(obj.data);
	            }
	        }
	    }

	    _createClass(ActivityModel, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[ActivityModel';
	            if (this._id) msg += ' #' + this._id;
	            return msg + ']';
	        }

	        /**
	         * The activity's ID number.
	         * @readonly
	         * @member {number} ActivityModel#id
	         * @returns {number}
	         */

	    }, {
	        key: 'isVideo',


	        //////////////
	        //   TYPE   //
	        //////////////

	        /**
	         * True if this Activity's type is a Video.
	         * @returns {boolean}
	         */
	        value: function isVideo() {
	            return this._type == "video";
	        }

	        /**
	         * True if this Activity's type is a Post.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isPost',
	        value: function isPost() {
	            return this._type == "post";
	        }

	        //////////////
	        //  SOURCE  //
	        //////////////

	        /**
	         * True if this Activity's source is YouTube.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isFromYoutube',
	        value: function isFromYoutube() {
	            return this.source == "youtube";
	        }

	        /**
	         * True if this Activity's source is Twitch.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isFromTwitch',
	        value: function isFromTwitch() {
	            return this.source == "twitch";
	        }

	        /**
	         * True if this Activity's source is Player.me.
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isFromPlayer',
	        value: function isFromPlayer() {
	            return this.source == "player";
	        }

	        //////////////
	        // COMMENTS //
	        //////////////

	        /**
	         * If the client has loaded all this activity's comments.
	         * @readonly
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasAllComments',
	        value: function hasAllComments() {
	            return this._comments.length >= this._commentsCount;
	        }

	        /**
	         * Get the comment's index by its ID.
	         * @param commentId
	         * @returns {number}
	         * @private
	         */

	    }, {
	        key: '_getCommentIndex',
	        value: function _getCommentIndex(commentId) {
	            for (var i = 0; i < this.comments.length; i++) {
	                if (this.comments[i].id == commentId) return i;
	            }
	            return -1;
	        }

	        /**
	         * Add a comment to this activity.
	         * @param {CommentModel} comment
	         */

	    }, {
	        key: 'addComment',
	        value: function addComment(comment) {
	            if (this.id != comment.activityId) {
	                throw "This comment doesn't belong to this activity";
	            }
	            this.comments.push(comment);
	            this._commentsCount++;
	        }

	        /**
	         * Override this activity's copy of a comment.
	         * @param {CommentModel} comment
	         * @return {boolean} If there was an original to replace.
	         */

	    }, {
	        key: 'updateComment',
	        value: function updateComment(comment) {
	            if (!comment || !comment.id) {
	                throw "Invalid comment to update on Activity " + this._id;
	            }

	            var index = this._getCommentIndex(comment.id);
	            if (index < 0) return false;

	            this.comments[index] = comment;
	            return true;
	        }

	        /**
	         * Remove the comment.
	         * @param {number} commentId
	         * @returns {boolean} If there was a comment to remove.
	         */

	    }, {
	        key: 'removeComment',
	        value: function removeComment(commentId) {
	            var index = this._getCommentIndex(commentId);
	            if (index < 0) return false;

	            this.comments.splice(index, 1);
	            return true;
	        }

	        /**
	         * Add comments to the start of the list, such as earlier comments.
	         * @param {CommentModel[]} comments
	         */

	    }, {
	        key: 'addCommentsToStart',
	        value: function addCommentsToStart(comments) {
	            if (!Array.isArray(comments)) {
	                throw "Earlier comments to add to Activity " + this._id + " wasn't an array";
	            }
	            this._comments = this._comments ? comments.concat(this._comments) : comments;
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }

	        /**
	         * TODO What is ActivityModel resourceId?
	         * @readonly
	         * @member {number} ActivityModel#resourceId
	         * @returns {number}
	         */

	    }, {
	        key: 'resourceId',
	        get: function get() {
	            return this._resourceId;
	        }

	        /**
	         * The type of activity (i.e. "Video" or "Post").
	         * @readonly
	         * @member {string} ActivityModel#type
	         * @returns {string}
	         */

	    }, {
	        key: 'type',
	        get: function get() {
	            return this._type;
	        }

	        /**
	         * The user that posted this Activity.
	         * @readonly
	         * @member {UserModel} ActivityModel#user
	         * @returns {UserModel}
	         */

	    }, {
	        key: 'user',
	        get: function get() {
	            return this._user;
	        }

	        /**
	         * Where the Activity came from (i.e. "youtube", "twitch" or "player").
	         * @readonly
	         * @member {string} ActivityModel#source
	         * @returns {string}
	         */

	    }, {
	        key: 'source',
	        get: function get() {
	            return this._source;
	        }

	        /**
	         * The URL where this activity originated.
	         * @readonly
	         * @member {string} ActivityModel#sourceUrl
	         * @returns {string}
	         */

	    }, {
	        key: 'sourceUrl',
	        get: function get() {
	            return this._sourceUrl;
	        }

	        /**
	         * The partial URL where this activity is located on player.
	         * @readonly
	         * @member {string} ActivityModel#url
	         * @returns {string}
	         */

	    }, {
	        key: 'url',
	        get: function get() {
	            return this._url;
	        }

	        /**
	         * The full URL where this activity is located on player.
	         * @readonly
	         * @member {string} ActivityModel#fullUrl
	         * @returns {string}
	         */

	    }, {
	        key: 'fullUrl',
	        get: function get() {
	            return this._fullUrl;
	        }

	        /**
	         * The date this activity was published.
	         * @readonly
	         * @member {Date} ActivityModel#publishedAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'publishedAt',
	        get: function get() {
	            return this._publishedAt;
	        }

	        /**
	         * The date this activity row was created.
	         * @readonly
	         * @member {Date} ActivityModel#createdAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'createdAt',
	        get: function get() {
	            return this._createdAt;
	        }

	        /**
	         * The date this activity row was updated.
	         * @readonly
	         * @member {Date} ActivityModel#updatedAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'updatedAt',
	        get: function get() {
	            return this._updatedAt;
	        }

	        /**
	         * The date this activity was edited, or null if never.
	         * @readonly
	         * @member {Date|null} ActivityModel#editedAt
	         * @returns {Date|null}
	         */

	    }, {
	        key: 'editedAt',
	        get: function get() {
	            return this._editedAt;
	        }

	        /**
	         * If the current user has subscribed to this activity.
	         * @readonly
	         * @member {boolean} ActivityModel#isSubscribed
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isSubscribed',
	        get: function get() {
	            return this._isSubscribed;
	        }

	        /**
	         * If the user can edit this activity.
	         * @readonly
	         * @member {boolean} ActivityModel#showEdit
	         * @returns {boolean}
	         */

	    }, {
	        key: 'showEdit',
	        get: function get() {
	            return this._showEdit;
	        }

	        /**
	         * If the user can delete this activity.
	         * @readonly
	         * @member {boolean} ActivityModel#showDelete
	         * @returns {boolean}
	         */

	    }, {
	        key: 'showDelete',
	        get: function get() {
	            return this._showDelete;
	        }

	        /**
	         * If the user has hidden the author.
	         * @readonly
	         * @member {boolean} ActivityModel#userIsHidden
	         * @returns {boolean}
	         */

	    }, {
	        key: 'userIsHidden',
	        get: function get() {
	            return this._userIsHidden;
	        }

	        /**
	         * If the user has blocked the author.
	         * @readonly
	         * @member {boolean} ActivityModel#userIsBlocked
	         * @returns {boolean}
	         */

	    }, {
	        key: 'userIsBlocked',
	        get: function get() {
	            return this._userIsBlocked;
	        }

	        /**
	         * If the user is following the author.
	         * @readonly
	         * @member {boolean} ActivityModel#userIsFollowed
	         * @returns {boolean}
	         */

	    }, {
	        key: 'userIsFollowed',
	        get: function get() {
	            return this._userIsFollowed;
	        }

	        /**
	         * If the user is the author.
	         * @readonly
	         * @member {boolean} ActivityModel#isOwnActivity
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isOwnActivity',
	        get: function get() {
	            return this._isOwnActivity;
	        }

	        /**
	         * If the user has liked this activity.
	         * @readonly
	         * @member {boolean} ActivityModel#hasLiked
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasLiked',
	        get: function get() {
	            return this._hasLiked;
	        }

	        /**
	         * The number of likes this activity has received.
	         * @readonly
	         * @member {number} ActivityModel#likesCount
	         * @returns {number}
	         */

	    }, {
	        key: 'likesCount',
	        get: function get() {
	            return this._likesCount;
	        }

	        /**
	         * If the user has pinned this activity.
	         * @readonly
	         * @member {boolean} ActivityModel#hasPinned
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasPinned',
	        get: function get() {
	            return this._hasPinned;
	        }

	        /**
	         * The number of pins this activity has received.
	         * @readonly
	         * @member {number} ActivityModel#pinsCount
	         * @returns {number}
	         */

	    }, {
	        key: 'pinsCount',
	        get: function get() {
	            return this._pinsCount;
	        }

	        /**
	         * If the user has shared this activity.
	         * @readonly
	         * @member {boolean} ActivityModel#hasShared
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasShared',
	        get: function get() {
	            return this._hasShared;
	        }

	        /**
	         * The number of shares this activity has received.
	         * @readonly
	         * @member {number} ActivityModel#shareCount
	         * @returns {number}
	         */

	    }, {
	        key: 'shareCount',
	        get: function get() {
	            return this._shareCount;
	        }

	        /**
	         * The total number of comments on this activity.
	         * @readonly
	         * @member {number} ActivityModel#commentsCount
	         * @returns {number}
	         */

	    }, {
	        key: 'commentsCount',
	        get: function get() {
	            return this._commentsCount;
	        }

	        /**
	         * An array of comments the client has loaded.
	         * @readonly
	         * @member {CommentModel[]} ActivityModel#comments
	         * @returns {CommentModel[]}
	         */

	    }, {
	        key: 'comments',
	        get: function get() {
	            return this._comments;
	        }

	        /**
	         * Data about the post, if this Activity is the right type.
	         * @readonly
	         * @member {ActivityPostData|null} ActivityModel#post
	         * @returns {ActivityPostData|null}
	         */

	    }, {
	        key: 'post',
	        get: function get() {
	            return this._postData;
	        }

	        /**
	         * Data about the video, if this Activity is the right type.
	         * @readonly
	         * @member {ActivityVideoData|null} ActivityModel#video
	         * @returns {ActivityVideoData|null}
	         */

	    }, {
	        key: 'video',
	        get: function get() {
	            return this._videoData;
	        }
	    }]);

	    return ActivityModel;
	}();

	exports.default = ActivityModel;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ActivityPostMetaData = exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GameMetadataModel = __webpack_require__(16);

	var _GameMetadataModel2 = _interopRequireDefault(_GameMetadataModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The main contents of an ActivityModel of type "post".
	 */

	var ActivityPostData = function () {
	    /**
	     * @param {object} [obj] Part of a player response object to initialise this instance with.
	     */

	    function ActivityPostData() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, ActivityPostData);

	        var game = obj && obj.game || false;

	        this._post = obj && obj.post || '';
	        this._postRaw = obj && obj.post_raw || '';
	        this._metas = obj && obj.metas.map(function (meta) {
	            return new ActivityPostMetaData(meta);
	        }) || [];
	        this._game = game && new _GameMetadataModel2.default(obj.game) || null;
	        this._gameCheckInType = game && game.check_in_type || null;
	    }

	    /**
	     * The post's formatted text.
	     * @readonly
	     * @member {string} ActivityPostData#post
	     * @returns {string}
	     */


	    _createClass(ActivityPostData, [{
	        key: 'isPlayingGame',


	        /**
	         * If the post says the author is playing a game.
	         * @returns {boolean}
	         */
	        value: function isPlayingGame() {
	            return this._gameCheckInType == "playing";
	        }
	    }, {
	        key: 'post',
	        get: function get() {
	            return this._post;
	        }

	        /**
	         * The post's un-formatted text.
	         * @readonly
	         * @member {string} ActivityPostData#postRaw
	         * @returns {string}
	         */

	    }, {
	        key: 'postRaw',
	        get: function get() {
	            return this._postRaw;
	        }

	        /**
	         * The post's related content.
	         * @readonly
	         * @member {ActivityPostMetaData[]} ActivityPostData#meta
	         * @returns {ActivityPostMetaData[]}
	         */

	    }, {
	        key: 'metas',
	        get: function get() {
	            return this._metas;
	        }

	        /**
	         * The game that has been checked in, if any.
	         * @readonly
	         * @member {GameMetadataModel|null} ActivityPostData#game
	         * @returns {GameMetadataModel|null}
	         */

	    }, {
	        key: 'game',
	        get: function get() {
	            return this._game;
	        }

	        /**
	         * The type of check-in for the game, if any (e.g. "playing").
	         * TODO The API can apparently handle other types, but can the client specify them?
	         * @readonly
	         * @member {string|null} ActivityPostData#gameCheckInType
	         * @returns {string|null}
	         */

	    }, {
	        key: 'gameCheckInType',
	        get: function get() {
	            return this._gameCheckInType;
	        }
	    }]);

	    return ActivityPostData;
	}(); // End of ActivityPostData

	/**
	 * Metadata associated with a Post.
	 */


	var ActivityPostMetaData = function () {
	    /**
	     * @param {object} [obj] Part of a player response object to initialise this instance with.
	     */

	    function ActivityPostMetaData() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, ActivityPostMetaData);

	        this._content = obj && obj.content || '';
	        this._title = obj && obj.title || null;
	        this._description = obj && obj.description || null;
	        this._provider = obj && obj.provider || '';
	        this._isInternal = obj && obj.isInternal || false;
	        this._images = obj && obj.images || [];
	        this._url = obj && obj.url || '';
	        this._thumbnail = obj && obj.thumbnail || null;
	    }

	    /**
	     * The meta's content type (i.e. "Photo").
	     * @readonly
	     * @member {string} ActivityPostMetaData#content
	     * @returns {string}
	     */


	    _createClass(ActivityPostMetaData, [{
	        key: 'content',
	        get: function get() {
	            return this._content;
	        }

	        /**
	         * The title of the metadata, if applicable.
	         * @readonly
	         * @member {string|null} ActivityPostMetaData#title
	         * @returns {string|null}
	         */

	    }, {
	        key: 'title',
	        get: function get() {
	            return this._title;
	        }

	        /**
	         * The description for the metadata, if applicable.
	         * @readonly
	         * @member {string|null} ActivityPostMetaData#description
	         * @returns {string|null}
	         */

	    }, {
	        key: 'description',
	        get: function get() {
	            return this._description;
	        }

	        /**
	         * The provider for the metadata (e.g. "Player").
	         * @readonly
	         * @member {string} ActivityPostMetaData#provider
	         * @returns {string}
	         */

	    }, {
	        key: 'provider',
	        get: function get() {
	            return this._provider;
	        }

	        /**
	         * TODO What is ActivityPostMetaData isInternal?
	         * @readonly
	         * @member {boolean} ActivityPostMetaData#isInternal
	         * @returns {boolean}
	         */

	    }, {
	        key: 'isInternal',
	        get: function get() {
	            return this._isInternal;
	        }

	        /**
	         * A list of image URLs.
	         * @readonly
	         * @member {string[]} ActivityPostMetaData#images
	         * @returns {string[]}
	         */

	    }, {
	        key: 'images',
	        get: function get() {
	            return this._images;
	        }

	        /**
	         * The link to whatever's represented by the metadata (e.g. an image)
	         * @readonly
	         * @member {string} ActivityPostMetaData#url
	         * @returns {string}
	         */

	    }, {
	        key: 'url',
	        get: function get() {
	            return this._url;
	        }

	        /**
	         * URL of the metadata's thumbnail.
	         * @readonly
	         * @member {string|null} ActivityPostMetaData#thumbnail
	         * @returns {string|null}
	         */

	    }, {
	        key: 'thumbnail',
	        get: function get() {
	            return this._thumbnail;
	        }
	    }]);

	    return ActivityPostMetaData;
	}(); // End of ActivityPostMetaData

	exports.default = ActivityPostData;
	exports.ActivityPostMetaData = ActivityPostMetaData;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A class representing a game linked to ActivityPostData
	 */

	var GameMetadataModel = function () {
	    /**
	     * Create a new Activity model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function GameMetadataModel() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, GameMetadataModel);

	        var cover = obj && obj.cover || null;
	        var box = obj && obj.box || null;

	        this._id = obj && obj.id || 0;
	        this._title = obj && obj.title || '';
	        this._shortDescription = obj && obj.short_description || '';
	        this._coverCached = cover && cover.cached || null;
	        this._coverOriginal = cover && cover.original || null;
	        this._coverOriginalFilename = cover && cover.original_filename || null;
	        this._boxCached = box && box.cached || null;
	        this._boxOriginal = box && box.original || null;
	        this._boxOriginalFilename = box && box.original_filename || null;
	        this._slug = obj && obj.slug || '';
	        this._url = obj && obj.url || '';
	        this._likesCount = obj && obj.likes_count || 0;
	        this._hasLiked = obj && obj.has_liked || false;
	    }

	    _createClass(GameMetadataModel, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[GameMetadataModel';
	            if (this._id) msg += ' #' + this._id;
	            if (this._slug) msg += ' "' + this._slug + '"';
	            return msg + ']';
	        }

	        /**
	         * The game's ID number.
	         * @readonly
	         * @member {number} GameMetadataModel#id
	         * @returns {number}
	         */

	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }

	        /**
	         * The game's title.
	         * @readonly
	         * @member {string} GameMetadataModel#title
	         * @returns {string}
	         */

	    }, {
	        key: 'title',
	        get: function get() {
	            return this._title;
	        }

	        /**
	         * A short description of the game.
	         * @readonly
	         * @member {string} GameMetadataModel#shortDescription
	         * @returns {string}
	         */

	    }, {
	        key: 'shortDescription',
	        get: function get() {
	            return this._shortDescription;
	        }

	        /**
	         * The URL to the game's cover.
	         * @readonly
	         * @member {string|null} GameMetadataModel#cover
	         * @returns {string|null}
	         */

	    }, {
	        key: 'cover',
	        get: function get() {
	            return this._coverCached;
	        }

	        /**
	         * The original upload of the game's cover.
	         * @readonly
	         * @member {string|null} GameMetadataModel#coverOriginal
	         * @returns {string|null}
	         */

	    }, {
	        key: 'coverOriginal',
	        get: function get() {
	            return this._coverOriginal;
	        }

	        /**
	         * The original filename of the game's cover.
	         * @readonly
	         * @member {string|null} GameMetadataModel#coverOriginalFilename
	         * @returns {string|null}
	         */

	    }, {
	        key: 'coverOriginalFilename',
	        get: function get() {
	            return this._coverOriginalFilename;
	        }

	        /**
	         * The URL to game's box.
	         * @readonly
	         * @member {string|null} GameMetadataModel#boxCached
	         * @returns {string|null}
	         */

	    }, {
	        key: 'box',
	        get: function get() {
	            return this._boxCached;
	        }

	        /**
	         * The original upload of the game's box.
	         * @readonly
	         * @member {string|null} GameMetadataModel#boxOriginal
	         * @returns {string|null}
	         */

	    }, {
	        key: 'boxOriginal',
	        get: function get() {
	            return this._boxOriginal;
	        }

	        /**
	         * The original filename of the game's box.
	         * @readonly
	         * @member {string|null} GameMetadataModel#boxOriginalFilename
	         * @returns {string|null}
	         */

	    }, {
	        key: 'boxOriginalFilename',
	        get: function get() {
	            return this._boxOriginalFilename;
	        }

	        /**
	         * The URL friendly slug for the game.
	         * @readonly
	         * @member {string} GameMetadataModel#slug
	         * @returns {string}
	         */

	    }, {
	        key: 'slug',
	        get: function get() {
	            return this._slug;
	        }

	        /**
	         * The link to the game's page on player.
	         * @readonly
	         * @member {string} GameMetadataModel#url
	         * @returns {string}
	         */

	    }, {
	        key: 'url',
	        get: function get() {
	            return this._url;
	        }

	        /**
	         * The number of likes the game has received.
	         * @readonly
	         * @member {number} GameMetadataModel#likesCount
	         * @returns {number}
	         */

	    }, {
	        key: 'likesCount',
	        get: function get() {
	            return this._likesCount;
	        }

	        /**
	         * If the player has liked the game.
	         * @readonly
	         * @member {boolean} GameMetadataModel#hasLiked
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasLiked',
	        get: function get() {
	            return this._hasLiked;
	        }
	    }]);

	    return GameMetadataModel;
	}();

	exports.default = GameMetadataModel;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The main contents of an ActivityModel of type "video".
	 */

	var ActivityVideoData = function () {
	  /**
	   * @param {object} [obj] Part of a player response object to initialise this instance with.
	   */

	  function ActivityVideoData() {
	    var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    _classCallCheck(this, ActivityVideoData);

	    this._title = obj && obj.title || '';
	    this._description = obj && obj.description || '';
	    this._url = obj && obj.url || '';
	    this._thumbnail = obj && obj.thumbnail || '';
	  }

	  /**
	   * The video's title.
	   * @readonly
	   * @member {string} ActivityVideoData#title
	   * @returns {string}
	   */


	  _createClass(ActivityVideoData, [{
	    key: 'title',
	    get: function get() {
	      return this._title;
	    }

	    /**
	     * The video's description.
	     * @readonly
	     * @member {string} ActivityVideoData#description
	     * @returns {string}
	     */

	  }, {
	    key: 'description',
	    get: function get() {
	      return this._description;
	    }

	    /**
	     * The URL of the video.
	     * @readonly
	     * @member {string} ActivityVideoData#url
	     * @returns {string}
	     */

	  }, {
	    key: 'url',
	    get: function get() {
	      return this._url;
	    }

	    /**
	     * The video's thumbnail.
	     * @readonly
	     * @member {string} ActivityVideoData#thumbnail
	     * @returns {string}
	     */

	  }, {
	    key: 'thumbnail',
	    get: function get() {
	      return this._thumbnail;
	    }
	  }]);

	  return ActivityVideoData;
	}();

	exports.default = ActivityVideoData;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A model representing a Player.me Game.
	 */

	var GameModel = function () {
	    /**
	     * Create a new Activity model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function GameModel() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, GameModel);

	        var cover = obj && obj.cover || null;
	        var box = obj && obj.box || null;

	        this._id = obj && obj.id || 0;
	        this._title = obj && obj.title || '';
	        this._shortDescription = obj && obj.short_description || '';
	        this._coverCached = cover && cover.cached || null;
	        this._coverOriginal = cover && cover.original || null;
	        this._coverOriginalFilename = cover && cover.original_filename || null;
	        this._boxCached = box && box.cached || null;
	        this._boxOriginal = box && box.original || null;
	        this._boxOriginalFilename = box && box.original_filename || null;
	        this._slug = obj && obj.slug || '';
	        this._url = obj && obj.url || '';
	        this._likesCount = obj && obj.likes_count || 0;
	        this._hasLiked = obj && obj.has_liked || false;
	    }

	    _createClass(GameModel, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[GameModel';
	            if (this._id) msg += ' #' + this._id;
	            if (this._slug) msg += ' "' + this._slug + '"';
	            return msg + ']';
	        }

	        /**
	         * The game's ID number.
	         * @readonly
	         * @member {number} GameModel#id
	         * @returns {number}
	         */

	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }

	        /**
	         * The game's title.
	         * @readonly
	         * @member {string} GameModel#title
	         * @returns {string}
	         */

	    }, {
	        key: 'title',
	        get: function get() {
	            return this._title;
	        }

	        /**
	         * A short description of the game.
	         * @readonly
	         * @member {string} GameModel#shortDescription
	         * @returns {string}
	         */

	    }, {
	        key: 'shortDescription',
	        get: function get() {
	            return this._shortDescription;
	        }

	        /**
	         * The URL to the game's cover.
	         * @readonly
	         * @member {string|null} GameModel#cover
	         * @returns {string|null}
	         */

	    }, {
	        key: 'cover',
	        get: function get() {
	            return this._coverCached;
	        }

	        /**
	         * The original upload of the game's cover.
	         * @readonly
	         * @member {string|null} GameModel#coverOriginal
	         * @returns {string|null}
	         */

	    }, {
	        key: 'coverOriginal',
	        get: function get() {
	            return this._coverOriginal;
	        }

	        /**
	         * The original filename of the game's cover.
	         * @readonly
	         * @member {string|null} GameModel#coverOriginalFilename
	         * @returns {string|null}
	         */

	    }, {
	        key: 'coverOriginalFilename',
	        get: function get() {
	            return this._coverOriginalFilename;
	        }

	        /**
	         * The URL to game's box.
	         * @readonly
	         * @member {string|null} GameModel#boxCached
	         * @returns {string|null}
	         */

	    }, {
	        key: 'box',
	        get: function get() {
	            return this._boxCached;
	        }

	        /**
	         * The original upload of the game's box.
	         * @readonly
	         * @member {string|null} GameModel#boxOriginal
	         * @returns {string|null}
	         */

	    }, {
	        key: 'boxOriginal',
	        get: function get() {
	            return this._boxOriginal;
	        }

	        /**
	         * The original filename of the game's box.
	         * @readonly
	         * @member {string|null} GameModel#boxOriginalFilename
	         * @returns {string|null}
	         */

	    }, {
	        key: 'boxOriginalFilename',
	        get: function get() {
	            return this._boxOriginalFilename;
	        }

	        /**
	         * The URL friendly slug for the game.
	         * @readonly
	         * @member {string} GameModel#slug
	         * @returns {string}
	         */

	    }, {
	        key: 'slug',
	        get: function get() {
	            return this._slug;
	        }

	        /**
	         * The link to the game's page on player.
	         * @readonly
	         * @member {string} GameModel#url
	         * @returns {string}
	         */

	    }, {
	        key: 'url',
	        get: function get() {
	            return this._url;
	        }

	        /**
	         * The number of likes the game has received.
	         * @readonly
	         * @member {number} GameModel#likesCount
	         * @returns {number}
	         */

	    }, {
	        key: 'likesCount',
	        get: function get() {
	            return this._likesCount;
	        }

	        /**
	         * If the player has liked the game.
	         * @readonly
	         * @member {boolean} GameModel#hasLiked
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasLiked',
	        get: function get() {
	            return this._hasLiked;
	        }
	    }]);

	    return GameModel;
	}();

	exports.default = GameModel;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GameCompany = exports.GamePlatform = exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GameModel2 = __webpack_require__(18);

	var _GameModel3 = _interopRequireDefault(_GameModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A model representing an extended Player.me Game.
	 */

	var GameExtendedModel = function (_GameModel) {
	    _inherits(GameExtendedModel, _GameModel);

	    /**
	     * Create a new Activity model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function GameExtendedModel() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, GameExtendedModel);

	        var toDate = function toDate(str) {
	            if (!str) return null;
	            return new Date(str);
	        };

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameExtendedModel).call(this, obj));

	        _this._description = obj && obj.description || '';
	        _this._displaySource = obj && obj.display_source || false;
	        _this._releasedAt = obj && toDate(obj.released_at) || null;
	        _this._steamId = obj && obj.steam_id || 0;
	        _this._xbox360Id = obj && obj.xbox360_id || 0;
	        _this._xboxoneId = obj && obj.xboxone_id || 0;
	        _this._createdAt = obj && toDate(obj.created_at) || null;
	        _this._updatedAt = obj && toDate(obj.updated_at) || null;
	        _this._deletedAt = obj && toDate(obj.deleted_at) || null;
	        _this._coverBy = obj && obj.cover_by || 0;
	        _this._website = obj && obj.website || '';
	        _this._facebook = obj && obj.facebook || '';
	        _this._twitter = obj && obj.twitter || '';
	        _this._gplus = obj && obj.gplus || '';
	        _this._steam = obj && obj.steam || '';
	        _this._twitch = obj && obj.twitch || '';
	        _this._youtube = obj && obj.youtube || '';
	        _this._buyLink = obj && obj.buy_link || '';
	        _this._kickstarter = obj && obj.kickstarter || '';
	        _this._favouritesCount = obj && obj.favourites_count || 0;

	        _this._aliases = obj && obj.alias && obj.alias.split('\n') || [];

	        _this._platforms = [];
	        if (obj && obj.platforms) {
	            _this._platforms = obj.platforms.map(function (platform) {
	                return new GamePlatform(platform);
	            });
	        }
	        _this._developers = [];
	        if (obj && obj.developers) {
	            _this._developers = obj.developers.map(function (company) {
	                return new GameCompany(company);
	            });
	        }
	        _this._publishers = [];
	        if (obj && obj.publishers) {
	            _this._publishers = obj.developers.map(function (company) {
	                return new GameCompany(company);
	            });
	        }
	        return _this;
	    }

	    _createClass(GameExtendedModel, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[GameExtendedModel';
	            if (this._id) msg += ' #' + this._id;
	            if (this._slug) msg += ' "' + this._slug + '"';
	            return msg + ']';
	        }

	        /**
	         * A description of the game.
	         * @readonly
	         * @member {string} GameExtendedModel#description
	         * @returns {string}
	         */

	    }, {
	        key: 'description',
	        get: function get() {
	            return this._description;
	        }

	        /**
	         * TODO What is GameExtendedModel displaySource?
	         * @readonly
	         * @member {boolean} GameExtendedModel#displaySource
	         * @returns {boolean}
	         */

	    }, {
	        key: 'displaySource',
	        get: function get() {
	            return this._displaySource;
	        }

	        /**
	         * The date the game was released.
	         * @readonly
	         * @member {Date|null} GameExtendedModel#releasedAt
	         * @returns {Date|null}
	         */

	    }, {
	        key: 'releasedAt',
	        get: function get() {
	            return this._releasedAt;
	        }

	        /**
	         * The game's steam ID.
	         * @readonly
	         * @member {number} GameExtendedModel#steamId
	         * @returns {number}
	         */

	    }, {
	        key: 'steamId',
	        get: function get() {
	            return this._steamId;
	        }

	        /**
	         * The game's XBox 360 ID.
	         * @readonly
	         * @member {number} GameExtendedModel#xbox360Id
	         * @returns {number}
	         */

	    }, {
	        key: 'xbox360Id',
	        get: function get() {
	            return this._xbox360Id;
	        }

	        /**
	         * The game's XBox One ID.
	         * @readonly
	         * @member {number} GameExtendedModel#xboxoneId
	         * @returns {number}
	         */

	    }, {
	        key: 'xboxoneId',
	        get: function get() {
	            return this._xboxoneId;
	        }

	        /**
	         * The date the game's entry was created.
	         * @readonly
	         * @member {Date} GameExtendedModel#createdAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'createdAt',
	        get: function get() {
	            return this._createdAt;
	        }

	        /**
	         * The date the game's entry was last updated.
	         * @readonly
	         * @member {Date} GameExtendedModel#updatedAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'updatedAt',
	        get: function get() {
	            return this._updatedAt;
	        }

	        /**
	         * The date the game's entry was deleted.
	         * @readonly
	         * @member {Date|null} GameExtendedModel#deletedAt
	         * @returns {Date|null}
	         */

	    }, {
	        key: 'deletedAt',
	        get: function get() {
	            return this._deletedAt;
	        }

	        /**
	         * The ID of the user that added the cover.
	         * @readonly
	         * @member {number} GameExtendedModel#coverBy
	         * @returns {number}
	         */

	    }, {
	        key: 'coverBy',
	        get: function get() {
	            return this._coverBy;
	        }

	        /**
	         * Other names that this game goes by.
	         * @readonly
	         * @member {String[]} GameExtendedModel#aliases
	         * @returns {String[]}
	         */

	    }, {
	        key: 'aliases',
	        get: function get() {
	            return this._aliases;
	        }

	        /**
	         * A link to the game's website.
	         * @readonly
	         * @member {string} GameExtendedModel#website
	         * @returns {string}
	         */

	    }, {
	        key: 'website',
	        get: function get() {
	            return this._website;
	        }

	        /**
	         * A link to the game's Facebook page.
	         * @readonly
	         * @member {string} GameExtendedModel#facebook
	         * @returns {string}
	         */

	    }, {
	        key: 'facebook',
	        get: function get() {
	            return this._facebook;
	        }

	        /**
	         * A link to the game's Twitter account.
	         * @readonly
	         * @member {string} GameExtendedModel#twitter
	         * @returns {string}
	         */

	    }, {
	        key: 'twitter',
	        get: function get() {
	            return this._twitter;
	        }

	        /**
	         * A link to the game's Google+ page.
	         * @readonly
	         * @member {string} GameExtendedModel#gplus
	         * @returns {string}
	         */

	    }, {
	        key: 'gplus',
	        get: function get() {
	            return this._gplus;
	        }

	        /**
	         * A link to the game's steam page.
	         * @readonly
	         * @member {string} GameExtendedModel#steam
	         * @returns {string}
	         */

	    }, {
	        key: 'steam',
	        get: function get() {
	            return this._steam;
	        }

	        /**
	         * A link to the game's Twitch page.
	         * @readonly
	         * @member {string} GameExtendedModel#twitch
	         * @returns {string}
	         */

	    }, {
	        key: 'twitch',
	        get: function get() {
	            return this._twitch;
	        }

	        /**
	         * A link to the game's YouTube account.
	         * @readonly
	         * @member {string} GameExtendedModel#youtube
	         * @returns {string}
	         */

	    }, {
	        key: 'youtube',
	        get: function get() {
	            return this._youtube;
	        }

	        /**
	         * A link to the game's shop.
	         * @readonly
	         * @member {string} GameExtendedModel#buyLink
	         * @returns {string}
	         */

	    }, {
	        key: 'buyLink',
	        get: function get() {
	            return this._buyLink;
	        }

	        /**
	         * A link to the game's Kickstarter campaign.
	         * @readonly
	         * @member {string} GameExtendedModel#kickstarter
	         * @returns {string}
	         */

	    }, {
	        key: 'kickstarter',
	        get: function get() {
	            return this._kickstarter;
	        }

	        /**
	         * A list of the game's platforms.
	         * @readonly
	         * @member {GamePlatform[]} GameExtendedModel#platforms
	         * @returns {GamePlatform[]}
	         */

	    }, {
	        key: 'platforms',
	        get: function get() {
	            return this._platforms;
	        }

	        /**
	         * The number of times the game has been favourited.
	         * @readonly
	         * @member {number} GameExtendedModel#favouritesCount
	         * @returns {number}
	         */

	    }, {
	        key: 'favouritesCount',
	        get: function get() {
	            return this._favouritesCount;
	        }

	        /**
	         * A list of the companies that developed the game.
	         * @readonly
	         * @member {GameCompany[]} GameExtendedModel#developers
	         * @returns {GameCompany[]}
	         */

	    }, {
	        key: 'developers',
	        get: function get() {
	            return this._developers;
	        }

	        /**
	         * A list of the companies that published the game.
	         * @readonly
	         * @member {GameCompany[]} GameExtendedModel#publishers
	         * @returns {GameCompany[]}
	         */

	    }, {
	        key: 'publishers',
	        get: function get() {
	            return this._publishers;
	        }
	    }]);

	    return GameExtendedModel;
	}(_GameModel3.default);

	/**
	 * A model representing a platform games may be on.
	 */


	var GamePlatform = function () {
	    /**
	     * Create a new Activity model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function GamePlatform() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, GamePlatform);

	        this._id = obj && obj.id || 0;
	        this._name = obj && obj.name || '';
	        this._order = obj && obj.order || '';
	        this._slug = obj && obj.slug || '';
	        this._displayName = obj && obj.display_name || null;
	    }

	    _createClass(GamePlatform, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[GamePlatform';
	            if (this._id) msg += ' #' + this._id;
	            if (this._slug) msg += ' "' + this._slug + '"';
	            return msg + ']';
	        }

	        /**
	         * The platform's ID.
	         * @readonly
	         * @member {number} GamePlatform#id
	         * @returns {number}
	         */

	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }

	        /**
	         * The platform's name.
	         * @readonly
	         * @member {string} GamePlatform#name
	         * @returns {string}
	         */

	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        }

	        /**
	         * TODO What is GamePlatform.order?
	         * @readonly
	         * @member {string} GamePlatform#order
	         * @returns {string}
	         */

	    }, {
	        key: 'order',
	        get: function get() {
	            return this._order;
	        }

	        /**
	         * The platform URL-friendly name.
	         * @readonly
	         * @member {string} GamePlatform#slug
	         * @returns {string}
	         */

	    }, {
	        key: 'slug',
	        get: function get() {
	            return this._slug;
	        }

	        /**
	         * TODO What is GamePlatform.displayName for?
	         * @readonly
	         * @member {string|null} GamePlatform#displayName
	         * @returns {string|null}
	         */

	    }, {
	        key: 'displayName',
	        get: function get() {
	            return this._displayName;
	        }
	    }]);

	    return GamePlatform;
	}();

	/**
	 * A model representing a game publisher or developer.
	 */


	var GameCompany = function () {
	    /**
	     * Create a new Activity model.
	     * @param {Object} [obj] A player response object to initialise this model with.
	     */

	    function GameCompany() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	        _classCallCheck(this, GameCompany);

	        var toDate = function toDate(str) {
	            if (!str) return null;
	            return new Date(str);
	        };

	        this._id = obj && obj.id || 0;
	        this._userId = obj && obj.user_id || 0;
	        this._name = obj && obj.name || '';
	        this._description = obj && obj.description || '';
	        this._homepage = obj && obj.homepage || '';
	        this._slug = obj && obj.slug || '';
	        this._createdAt = obj && toDate(obj.created_at) || null;
	        this._updatedAt = obj && toDate(obj.updated_at) || null;
	        this._deletedAt = obj && toDate(obj.deleted_at) || null;
	    }

	    _createClass(GameCompany, [{
	        key: 'toString',
	        value: function toString() {
	            var msg = '[GameCompany';
	            if (this._id) msg += ' #' + this._id;
	            if (this._slug) msg += ' "' + this._slug + '"';
	            return msg + ']';
	        }

	        /**
	         * The company's ID.
	         * @readonly
	         * @member {number} GameCompany#id
	         * @returns {number}
	         */

	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }

	        /**
	         * The ID of the company's user.
	         * @readonly
	         * @member {number} GameCompany#userId
	         * @returns {number}
	         */

	    }, {
	        key: 'userId',
	        get: function get() {
	            return this._userId;
	        }

	        /**
	         * The company's name.
	         * @readonly
	         * @member {string} GameCompany#name
	         * @returns {string}
	         */

	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        }

	        /**
	         * A description of the company.
	         * @readonly
	         * @member {string} GameCompany#description
	         * @returns {string}
	         */

	    }, {
	        key: 'description',
	        get: function get() {
	            return this._description;
	        }

	        /**
	         * The company's homepage.
	         * @readonly
	         * @member {string} GameCompany#homepage
	         * @returns {string}
	         */

	    }, {
	        key: 'homepage',
	        get: function get() {
	            return this._homepage;
	        }

	        /**
	         * The URL friendly name of the company.
	         * @readonly
	         * @member {string} GameCompany#slug
	         * @returns {string}
	         */

	    }, {
	        key: 'slug',
	        get: function get() {
	            return this._slug;
	        }

	        /**
	         * The date the game entry was created.
	         * @readonly
	         * @member {Date} GameCompany#createdAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'createdAt',
	        get: function get() {
	            return this._createdAt;
	        }

	        /**
	         * The date the game entry was updated.
	         * @readonly
	         * @member {Date} GameCompany#updatedAt
	         * @returns {Date}
	         */

	    }, {
	        key: 'updatedAt',
	        get: function get() {
	            return this._updatedAt;
	        }

	        /**
	         * The date the game was deleted.
	         * @readonly
	         * @member {Date|null} GameCompany#deletedAt
	         * @returns {Date|null}
	         */

	    }, {
	        key: 'deletedAt',
	        get: function get() {
	            return this._deletedAt;
	        }
	    }]);

	    return GameCompany;
	}();

	exports.default = GameExtendedModel;
	exports.default = GameExtendedModel;
	exports.GamePlatform = GamePlatform;
	exports.GameCompany = GameCompany;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIService = __webpack_require__(4);

	var _APIService2 = _interopRequireDefault(_APIService);

	var _UserEntityResponse = __webpack_require__(21);

	var _UserEntityResponse2 = _interopRequireDefault(_UserEntityResponse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *
	 */

	var UsersRepository = function () {
	    function UsersRepository() {
	        _classCallCheck(this, UsersRepository);
	    }

	    _createClass(UsersRepository, [{
	        key: 'get',

	        /**
	         *
	         * @param {number|string} id The user's ID
	         * @return Promise
	         */
	        value: function get(id) {
	            var idType = typeof id === 'undefined' ? 'undefined' : _typeof(id);

	            if (idType === 'string') {
	                id = parseInt(id, 10);
	                if (isNaN(id)) {
	                    throw new TypeError("id string passed to UsersRepository:get() is NaN. Was ['" + idType + "'].");
	                }
	            } else if (idType !== 'number') {
	                throw new TypeError("id passed to UsersRepository:get() isn't a number. Was [" + idType + "].");
	            }

	            return new Promise(function (resolve, reject) {
	                try {
	                    var promise = _APIService2.default.get('api/v1/users/' + id, null);
	                } catch (e) {
	                    reject(e);
	                    return;
	                }

	                promise.then(function (response) {
	                    if (response.success) {
	                        resolve(new _UserEntityResponse2.default(response));
	                    } else {
	                        reject(response); //TODO Error response
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'list',
	        value: function list() {
	            //TODO
	        }
	    }, {
	        key: 'listOnline',
	        value: function listOnline() {
	            //TODO
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            //TODO
	        }
	    }]);

	    return UsersRepository;
	}();

	// Return instance, making this a singleton


	exports.default = new UsersRepository();

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EntityResponse2 = __webpack_require__(7);

	var _EntityResponse3 = _interopRequireDefault(_EntityResponse2);

	var _playerCoreModels = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Response containing a single user
	 */

	var UserEntityResponse = function (_EntityResponse) {
	    _inherits(UserEntityResponse, _EntityResponse);

	    function UserEntityResponse(rawResponse) {
	        _classCallCheck(this, UserEntityResponse);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserEntityResponse).call(this, _playerCoreModels.UserExtendedModel, rawResponse));
	    }

	    /**
	     * The user
	     * @returns {UserExtendedModel}
	     */


	    _createClass(UserEntityResponse, [{
	        key: 'result',
	        get: function get() {
	            return this._result;
	        }
	    }]);

	    return UserEntityResponse;
	}(_EntityResponse3.default);

	exports.default = UserEntityResponse;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractRequestAdapter = __webpack_require__(5);

	var _AbstractRequestAdapter2 = _interopRequireDefault(_AbstractRequestAdapter);

	var _RawResponse = __webpack_require__(23);

	var _RawResponse2 = _interopRequireDefault(_RawResponse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Process requests using JSONP.
	 * Browsers allow this method for cross-domain calls, but only GET requests.
	 */

	var JSONPRequestAdapter = function (_AbstractRequestAdapt) {
	    _inherits(JSONPRequestAdapter, _AbstractRequestAdapt);

	    function JSONPRequestAdapter() {
	        _classCallCheck(this, JSONPRequestAdapter);

	        /**
	         * The next ID to use in a callback reference name
	         * @member {int}
	         * @private
	         */

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSONPRequestAdapter).call(this));

	        _this._lastCallbackId = 0;

	        /**
	         * The object-chain up from window, where JSONP callbacks are stored.
	         * @member {string}
	         * @private
	         */
	        _this._callbackNamespace = "playermeJSONP.callbacks";

	        /**
	         * The top object defined by CALLBACK_NAMESPACE, where JSONP callbacks are stored.
	         * @member {object}
	         * @private
	         */
	        _this._callbackContainer = _this._setupCallbackContainer(_this._callbackNamespace);
	        return _this;
	    }

	    /**
	     * Sets up the object-chain where callbacks are stored.
	     * @param {string} namespace A period-delimited list of child object names, starting from window
	     * @returns {object} The topmost object in the chain.
	     * @private
	     */


	    _createClass(JSONPRequestAdapter, [{
	        key: '_setupCallbackContainer',
	        value: function _setupCallbackContainer(namespace) {
	            // Split string into individual object names
	            var namespaces = namespace.split(".");

	            // Create the object chain of namespaces, starting at window
	            var currentTarget = window;
	            for (var i = 0; i < namespaces.length; i++) {
	                currentTarget = this._createObjectOnParent(currentTarget, namespaces[i]);
	            }

	            // Return the top of the namespace
	            return currentTarget;
	        }

	        /**
	         * Create an object on the parent, with the given name
	         * @param {object} parent
	         * @param {string} objectName
	         * @returns {object}
	         * @private
	         */

	    }, {
	        key: '_createObjectOnParent',
	        value: function _createObjectOnParent(parent, objectName) {
	            if (_typeof(parent[objectName]) !== 'object') {
	                parent[objectName] = {};
	            }
	            return parent[objectName];
	        }

	        /**
	         * Get the next available reference name of a callback
	         * @returns {string}
	         * @private
	         */

	    }, {
	        key: '_generateCallbackRef',
	        value: function _generateCallbackRef() {
	            var currentCallbackId = (this._lastCallbackId + 1) % Number.MAX_SAFE_INTEGER; // Wrap around so ID doesn't get too high
	            this._lastCallbackId = currentCallbackId;
	            return 'jsonp_' + currentCallbackId;
	        }
	    }, {
	        key: 'get',
	        value: function get(url, data) {
	            var _this2 = this;

	            return new Promise(function (resolve, reject) {
	                try {

	                    // Setup defaults
	                    if (!data || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	                        data = {};
	                    }

	                    // Get the reference for this callback
	                    var callbackRef = _this2._generateCallbackRef();

	                    // Create a script element for JSONP
	                    var scriptElement = document.createElement('script');
	                    var documentHead = document.getElementsByTagName("head")[0];

	                    // Setup callback wrapper
	                    _this2._callbackContainer[callbackRef] = function (payload) {
	                        try {
	                            // Remove script and callback
	                            documentHead.removeChild(scriptElement);
	                            delete _this2._callbackContainer[callbackRef];
	                            resolve(new _RawResponse2.default(payload));
	                        } catch (e) {
	                            reject(e);
	                        }
	                    };

	                    // Add the full callback path to player.me's JSON callback parameter
	                    data.callback = _this2._callbackNamespace + '.' + callbackRef;

	                    // Attach the script tag for this JSONP request
	                    scriptElement.setAttribute("data-callback", callbackRef);
	                    scriptElement.setAttribute("src", _this2.addToQueryString(url, data));
	                    documentHead.appendChild(scriptElement);
	                } catch (e) {
	                    //TODO Tidy up if it gets here
	                    reject(e);
	                }
	            });
	        }
	    }, {
	        key: 'post',
	        value: function post() {
	            throw new Error("POST method not available for JSONPRequestAdapter");
	        }
	    }, {
	        key: 'put',
	        value: function put() {
	            throw new Error("PUT method not available for JSONPRequestAdapter");
	        }
	    }, {
	        key: 'del',
	        value: function del() {
	            throw new Error("DELETE method not available for JSONPRequestAdapter");
	        }
	    }]);

	    return JSONPRequestAdapter;
	}(_AbstractRequestAdapter2.default);

	// Return single instance, making it a singleton


	exports.default = new JSONPRequestAdapter();

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A class representing the raw output from player.
	 */

	var RawResponse = function () {
	  /**
	   *
	   * @param {Object}                  body           The raw response body
	   * @param {int}                     statusCode     The status code
	   * @param {string}                  statusMessage  The status code's message
	   * @param {Object.<string,string>}  headers        Result headers
	   */

	  function RawResponse(body, statusCode, statusMessage, headers) {
	    _classCallCheck(this, RawResponse);

	    this._body = body;
	    this._results = body && body.results ? body.results : null;
	    this._statusCode = statusCode;
	    this._statusMessage = statusMessage;
	    this._headers = headers;
	    this._success = Boolean(body && body.success);
	  }

	  /**
	   * The body of the request
	   * @returns {Object}
	   * @readonly
	   */


	  _createClass(RawResponse, [{
	    key: "body",
	    get: function get() {
	      return this._body;
	    }

	    /**
	     * The result of the request
	     * @returns {Object}
	     * @readonly
	     */

	  }, {
	    key: "results",
	    get: function get() {
	      return this._results;
	    }

	    /**
	     * Whether this response was successful
	     * @returns {boolean}
	     * @readonly
	     */

	  }, {
	    key: "success",
	    get: function get() {
	      return this._success;
	    }

	    /**
	     * The request method used for this response
	     * @returns {string}
	     * @readonly
	     */

	  }, {
	    key: "method",
	    get: function get() {
	      return this._body.method;
	    }

	    /**
	     * The request URI used for this response
	     * @returns {string}
	     * @readonly
	     */

	  }, {
	    key: "uri",
	    get: function get() {
	      return this._body.uri;
	    }

	    /**
	     * The resulting status code
	     * @returns {int}
	     * @readonly
	     */

	  }, {
	    key: "statusCode",
	    get: function get() {
	      return this._statusCode;
	    }

	    /**
	     * The resulting status message
	     * @returns {string}
	     * @readonly
	     */

	  }, {
	    key: "statusMessage",
	    get: function get() {
	      return this._statusMessage;
	    }

	    /**
	     * The result headers
	     * @returns {string[]}
	     * @readonly
	     */

	  }, {
	    key: "headers",
	    get: function get() {
	      return this._headers;
	    }
	  }]);

	  return RawResponse;
	}();

	exports.default = RawResponse;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractRequestAdapter = __webpack_require__(5);

	var _AbstractRequestAdapter2 = _interopRequireDefault(_AbstractRequestAdapter);

	var _RawResponse = __webpack_require__(23);

	var _RawResponse2 = _interopRequireDefault(_RawResponse);

	var _ErrorResponse = __webpack_require__(25);

	var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);

	var _cookie = __webpack_require__(26);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var cookieJar = [];

	function getSessionCookie(hostname) {
	    var cookies = cookieJar[hostname] || [];

	    for (var i in cookies) {
	        var cookie = cookies[i];

	        for (var key in cookie) {
	            if (key === 'playerme_session' || key === 'staging_playerme_session') {
	                return key + "=" + cookie[key];
	            }
	        }
	    }
	    return null;
	}

	/**
	 *
	 * @param {string} url
	 * @returns {{protocol:string, host:string, path:string, query:string}}
	 */
	function parseUrl(url) {
	    var response = {};

	    // Get protocol
	    // 'http://google.com/a/b?c=d' => ['http', 'google.com/a/b?c=d']
	    var split = url.split('://', 2);
	    if (split.length < 2) {
	        throw new Error("Invalid URL in XHR passed to XMLHttpRequestAdapter's getURLObjectFromXHR [" + url + "]");
	    }
	    response.protocol = split[0];

	    // Get host
	    // 'google.com/a/b?c=d' => ['google.com', 'a/b?c=d']
	    split = split[1].split('/', 2);
	    if (split.length < 2) {
	        throw new Error("Invalid URL in XHR passed to XMLHttpRequestAdapter's getURLObjectFromXHR [" + url + "]");
	    }
	    response.host = split[0];

	    // Get path
	    // 'a/b?c=d' => ['a/b', 'c=d']
	    split = split[1].split('?', 2);
	    response.path = split[0];

	    // Get query string
	    response.query = split[1];

	    return response;
	}

	/**
	 * Takes a XMLHttpRequest and returns the headers in key-value pairs.
	 * @param {XMLHttpRequest} XHR
	 * @returns {Object.<string,string>}
	 */
	function getHeadersFromXHR(XHR) {
	    var result = {};
	    var headers = XHR.getAllResponseHeaders().split('\r\n');
	    for (var i = 0; i < headers.length; i++) {
	        var split = headers[i].split(': ', 2);
	        if (split.length == 2) {
	            var key = split[0].toLowerCase();
	            result[key] = split[1];
	        }
	    }
	    return result;
	}

	/**
	 * Returns the XHR's response in JSON form, or null if invalid
	 * @param {XMLHttpRequest} XHR
	 * @returns {Object|null}
	 */
	function getJSONFromXHR(XHR) {
	    try {
	        return JSON.parse(XHR.responseText);
	    } catch (e) {
	        return null;
	    }
	}

	/**
	 *
	 * @param {XMLHttpRequest} XHR
	 * @returns {RawResponse|null}
	 */
	function getRawResponse(XHR) {
	    try {
	        return new _RawResponse2.default(JSON.parse(XHR.responseText), XHR.status, XHR.statusText, getHeadersFromXHR(XHR));
	    } catch (e) {
	        return null;
	    }
	}
	function getErrorResponse(XHR) {
	    return new _ErrorResponse2.default(XHR.responseText, XHR.status, XHR.statusText, getHeadersFromXHR(XHR));
	}

	/**
	 * Process requests using JSONP.
	 * Browsers allow this method for cross-domain calls, but only GET requests.
	 */

	var XMLHttpRequestAdapter = function (_AbstractRequestAdapt) {
	    _inherits(XMLHttpRequestAdapter, _AbstractRequestAdapt);

	    function XMLHttpRequestAdapter() {
	        _classCallCheck(this, XMLHttpRequestAdapter);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(XMLHttpRequestAdapter).apply(this, arguments));
	    }

	    _createClass(XMLHttpRequestAdapter, [{
	        key: 'request',

	        /**
	         * Submit a request
	         * @param {string} method
	         * @param {string} url
	         * @param {Object} [data]
	         * @returns {Promise}
	         */
	        value: function request(method, url) {
	            var data = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	            return new Promise(function (resolve, reject) {
	                var XHR = new XMLHttpRequest();
	                var urlObject = parseUrl(url);

	                XHR.addEventListener('load', function () {
	                    var response = getRawResponse(XHR);
	                    var headers = getHeadersFromXHR(XHR);
	                    var setCookie = headers['set-cookie'];

	                    if (setCookie) {
	                        cookieJar[urlObject.host] = setCookie.map(function (current) {
	                            return _cookie2.default.parse(current);
	                        });
	                    }

	                    if (response) {
	                        resolve(response);
	                    } else {
	                        reject(getErrorResponse(XHR));
	                    }
	                });

	                XHR.addEventListener('error', function (event) {
	                    console.log('XMLHttpRequestAdapter error', event, XHR);
	                    reject(event); // TODO Handle
	                });
	                XHR.addEventListener('timeout', function (event) {
	                    console.log('XMLHttpRequestAdapter timeout', event, XHR);
	                    reject(event); // TODO Handle
	                });
	                // XHR.addEventListener('abort', function(event) {
	                //     console.log('XMLHttpRequestAdapter abort', event, XHR);
	                //     reject(event);
	                // });

	                try {
	                    XHR.open(method, url);
	                    XHR.setRequestHeader("Content-Type", "application/json");
	                    var sessionCookie = getSessionCookie(urlObject.host);
	                    if (sessionCookie) {
	                        XHR.setRequestHeader("Cookie", sessionCookie);
	                    }
	                    XHR.send(data ? JSON.stringify(data) : null);
	                } catch (e) {
	                    console.log('XMLHttpRequestAdapter exception', e);
	                    reject(e);
	                }
	            });
	        }

	        /**
	         * Submit a GET request
	         * @param {string} url
	         * @param {Object} data
	         * @returns {Promise}
	         */

	    }, {
	        key: 'get',
	        value: function get(url, data) {
	            return this.request('GET', this.addToQueryString(url, data));
	        }

	        /**
	         * Submit a POST request
	         * @param {string} url
	         * @param {Object} data
	         * @returns {Promise}
	         */

	    }, {
	        key: 'post',
	        value: function post(url, data) {
	            return this.request('POST', url, data);
	        }

	        /**
	         * Submit a PUT request
	         * @param {string} url
	         * @param {Object} data
	         * @returns {Promise}
	         */

	    }, {
	        key: 'put',
	        value: function put(url, data) {
	            return this.request('PUT', url, data);
	        }

	        /**
	         * Submit a DELETE request
	         * @param {string} url
	         * @param {Object} data
	         * @returns {Promise}
	         */

	    }, {
	        key: 'del',
	        value: function del(url, data) {
	            return this.request('DELETE', url, data);
	        }
	    }]);

	    return XMLHttpRequestAdapter;
	}(_AbstractRequestAdapter2.default);

	// Return single instance, making it a singleton


	exports.default = new XMLHttpRequestAdapter();

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A class representing the raw output from player.
	 */

	var RawResponse = function () {
	  /**
	   *
	   * @param {string}                  text           The raw text
	   * @param {int}                     statusCode     The status code
	   * @param {string}                  statusMessage  The status code's message
	   * @param {Object.<string,string>}  headers        Result headers
	   */

	  function RawResponse(text, statusCode, statusMessage, headers) {
	    _classCallCheck(this, RawResponse);

	    this._text = text;
	    this._statusCode = statusCode;
	    this._statusMessage = statusMessage;
	    this._headers = headers;
	  }

	  /**
	   * The body of the request
	   * @returns {string}
	   * @readonly
	   */


	  _createClass(RawResponse, [{
	    key: "text",
	    get: function get() {
	      return this._text;
	    }

	    /**
	     * The request method used for this response
	     * @returns {string}
	     * @readonly
	     */

	  }, {
	    key: "method",
	    get: function get() {
	      return this._body.method;
	    }

	    /**
	     * The request URI used for this response
	     * @returns {string}
	     * @readonly
	     */

	  }, {
	    key: "uri",
	    get: function get() {
	      return this._body.uri;
	    }

	    /**
	     * The resulting status code
	     * @returns {int}
	     * @readonly
	     */

	  }, {
	    key: "statusCode",
	    get: function get() {
	      return this._statusCode;
	    }

	    /**
	     * The resulting status message
	     * @returns {string}
	     * @readonly
	     */

	  }, {
	    key: "statusMessage",
	    get: function get() {
	      return this._statusMessage;
	    }

	    /**
	     * The result headers
	     * @returns {string[]}
	     * @readonly
	     */

	  }, {
	    key: "headers",
	    get: function get() {
	      return this._headers;
	    }
	  }]);

	  return RawResponse;
	}();

	exports.default = RawResponse;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module exports.
	 * @public
	 */

	exports.parse = parse;
	exports.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {};
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;

	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');

	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }

	    var key = pair.substr(0, eq_idx).trim();
	    var val = pair.substr(++eq_idx, pair.length).trim();

	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }

	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var str = name + '=' + value;

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    str += '; Domain=' + opt.domain;
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    str += '; Path=' + opt.path;
	  }

	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }

	    str += '; Expires=' + opt.expires.toUTCString();
	  }

	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }

	  if (opt.secure) {
	    str += '; Secure';
	  }

	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;

	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }

	  return str;
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractRequestAdapter = __webpack_require__(5);

	var _AbstractRequestAdapter2 = _interopRequireDefault(_AbstractRequestAdapter);

	var _RawResponse = __webpack_require__(23);

	var _RawResponse2 = _interopRequireDefault(_RawResponse);

	var _url = __webpack_require__(28);

	var _url2 = _interopRequireDefault(_url);

	var _https = __webpack_require__(29);

	var _https2 = _interopRequireDefault(_https);

	var _cookie = __webpack_require__(26);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO Split request adapter out, as 'cookie' module isn't required for web

	var cookieJar = [];

	function getSessionCookie(hostname) {
	    var cookies = cookieJar[hostname] || [];

	    for (var i in cookies) {
	        var cookie = cookies[i];

	        for (var key in cookie) {
	            if (key === 'playerme_session' || key === 'staging_playerme_session') {
	                return key + "=" + cookie[key];
	            }
	        }
	    }
	    return null;
	}

	/**
	 * Process requests using https://www.npmjs.com/package/request
	 * For use in environments where cross-domain requests isn't an issue (i.e. Node.js, Cordova, etc)
	 */

	var NodeRequestAdapter = function (_AbstractRequestAdapt) {
	    _inherits(NodeRequestAdapter, _AbstractRequestAdapt);

	    function NodeRequestAdapter() {
	        _classCallCheck(this, NodeRequestAdapter);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NodeRequestAdapter).apply(this, arguments));
	    }

	    _createClass(NodeRequestAdapter, [{
	        key: 'request',

	        /**
	         * Issue a request
	         * @param {string} method The request method
	         * @param {string} url The target URL
	         * @param {object} [body] The request body
	         * @return Promise
	         */
	        value: function request(method, url, body) {
	            var urlObject = _url2.default.parse(url);
	            var json = body ? JSON.stringify(body) : '';

	            var options = {
	                method: method,
	                host: urlObject.hostname,
	                port: urlObject.port,
	                path: urlObject.path,
	                headers: {
	                    "Content-Type": "application/json",
	                    "Content-Length": Buffer.byteLength(json)
	                }
	            };

	            var sessionCookie = getSessionCookie(urlObject.hostname);
	            if (sessionCookie) {
	                options.headers['Cookie'] = sessionCookie;
	            }

	            return new Promise(function (resolve, reject) {
	                // TODO Reject errors
	                var request = _https2.default.request(options, function (response) {

	                    var str = '';

	                    //another chunk of data has been received, so append it to `str`
	                    response.on('data', function (chunk) {
	                        str += chunk;
	                    });

	                    //the whole response has been received, so we just print it out here
	                    response.on('end', function () {
	                        try {
	                            // Store cookies
	                            var setCookie = response.headers['set-cookie'];
	                            if (setCookie) {
	                                cookieJar[urlObject.hostname] = setCookie.map(function (current) {
	                                    return _cookie2.default.parse(current);
	                                });
	                            }

	                            // Resolve response
	                            resolve(new _RawResponse2.default(JSON.parse(str), response.statusCode, response.statusMessage, response.headers));
	                        } catch (e) {
	                            return reject(str); //TODO Error response
	                        }
	                    });
	                });

	                request.on('error', function (e) {
	                    reject(e);
	                });
	                if (json) {
	                    request.write(json);
	                }
	                request.end();
	            });
	        }
	    }, {
	        key: 'get',
	        value: function get(url, data) {
	            if (data) {
	                url = this.addToQueryString(url, data);
	            }
	            return this.request('GET', url, null);
	        }
	    }, {
	        key: 'post',
	        value: function post(url, data) {
	            return this.request('POST', url, data);
	        }
	    }, {
	        key: 'put',
	        value: function put(url, data) {
	            return this.request('PUT', url, data);
	        }
	    }, {
	        key: 'del',
	        value: function del(url, data) {
	            if (data) {
	                url = this.addToQueryString(url, data);
	            }
	            return this.request('DELETE', url, null);
	        }
	    }]);

	    return NodeRequestAdapter;
	}(_AbstractRequestAdapter2.default);

	exports.default = NodeRequestAdapter;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("https");

/***/ }
/******/ ]);