"use strict";
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 4800:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var axios = (__webpack_require__(658)["default"]);
var nodeify = __webpack_require__(2954);
var _require = __webpack_require__(2855), isNonNullObject = _require.isNonNullObject;
var allowedHeaders = {
    "X-Razorpay-Account": "",
    "Content-Type": "application/json"
};
function getValidHeaders(headers) {
    var result = {};
    if (!isNonNullObject(headers)) {
        return result;
    }
    return Object.keys(headers).reduce(function(result, headerName) {
        if (allowedHeaders.hasOwnProperty(headerName)) {
            result[headerName] = headers[headerName];
        }
        return result;
    }, result);
}
function normalizeError(err) {
    throw {
        statusCode: err.response.status,
        error: err.response.data.error
    };
}
var API = function() {
    function API(options) {
        _classCallCheck(this, API);
        this.version = "v1";
        this.rq = axios.create({
            baseURL: options.hostUrl,
            auth: {
                username: options.key_id,
                password: options.key_secret
            },
            headers: Object.assign({
                "User-Agent": options.ua
            }, getValidHeaders(options.headers))
        });
    }
    _createClass(API, [
        {
            key: "getEntityUrl",
            value: function getEntityUrl(params) {
                return params.hasOwnProperty("version") ? "/" + params.version + params.url : "/" + this.version + params.url;
            }
        },
        {
            key: "get",
            value: function get(params, cb) {
                return nodeify(this.rq.get(this.getEntityUrl(params), {
                    params: params.data
                }).catch(normalizeError), cb);
            }
        },
        {
            key: "post",
            value: function post(params, cb) {
                return nodeify(this.rq.post(this.getEntityUrl(params), params.data).catch(normalizeError), cb);
            }
        },
        {
            key: "postFormData",
            value: function postFormData(params, cb) {
                return nodeify(this.rq.post(this.getEntityUrl(params), params.formData, {
                    "headers": {
                        "Content-Type": "multipart/form-data"
                    }
                }).catch(normalizeError), cb);
            }
        },
        {
            key: "put",
            value: function put(params, cb) {
                return nodeify(this.rq.put(this.getEntityUrl(params), params.data).catch(normalizeError), cb);
            }
        },
        {
            key: "patch",
            value: function patch(params, cb) {
                return nodeify(this.rq.patch(this.getEntityUrl(params), params.data).catch(normalizeError), cb);
            }
        },
        {
            key: "delete",
            value: function _delete(params, cb) {
                return nodeify(this.rq.delete(this.getEntityUrl(params)).catch(normalizeError), cb);
            }
        }
    ]);
    return API;
}();
module.exports = API;


/***/ }),

/***/ 7054:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var API = __webpack_require__(4800);
var pkg = __webpack_require__(4667);
var _require = __webpack_require__(2855), _validateWebhookSignature = _require.validateWebhookSignature;
var Razorpay = function() {
    _createClass(Razorpay, null, [
        {
            key: "validateWebhookSignature",
            value: function validateWebhookSignature() {
                return _validateWebhookSignature.apply(undefined, arguments);
            }
        }
    ]);
    function Razorpay() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Razorpay);
        var key_id = options.key_id, key_secret = options.key_secret, headers = options.headers;
        if (!key_id) {
            throw new Error("`key_id` is mandatory");
        }
        this.key_id = key_id;
        this.key_secret = key_secret;
        this.api = new API({
            hostUrl: "https://api.razorpay.com",
            ua: "razorpay-node@" + Razorpay.VERSION,
            key_id: key_id,
            key_secret: key_secret,
            headers: headers
        });
        this.addResources();
    }
    _createClass(Razorpay, [
        {
            key: "addResources",
            value: function addResources() {
                Object.assign(this, {
                    accounts: __webpack_require__(460)(this.api),
                    stakeholders: __webpack_require__(1125)(this.api),
                    payments: __webpack_require__(9932)(this.api),
                    refunds: __webpack_require__(7285)(this.api),
                    orders: __webpack_require__(8980)(this.api),
                    customers: __webpack_require__(7488)(this.api),
                    transfers: __webpack_require__(7436)(this.api),
                    tokens: __webpack_require__(3734)(this.api),
                    virtualAccounts: __webpack_require__(4680)(this.api),
                    invoices: __webpack_require__(5300)(this.api),
                    iins: __webpack_require__(5397)(this.api),
                    paymentLink: __webpack_require__(97)(this.api),
                    plans: __webpack_require__(2812)(this.api),
                    products: __webpack_require__(697)(this.api),
                    subscriptions: __webpack_require__(1377)(this.api),
                    addons: __webpack_require__(8061)(this.api),
                    settlements: __webpack_require__(4136)(this.api),
                    qrCode: __webpack_require__(9640)(this.api),
                    fundAccount: __webpack_require__(4702)(this.api),
                    items: __webpack_require__(7226)(this.api),
                    cards: __webpack_require__(2810)(this.api),
                    webhooks: __webpack_require__(4634)(this.api),
                    documents: __webpack_require__(3504)(this.api),
                    disputes: __webpack_require__(1614)(this.api)
                });
            }
        }
    ]);
    return Razorpay;
}();
Razorpay.VERSION = pkg.version;
module.exports = Razorpay;


/***/ }),

/***/ 460:
/***/ ((module) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
module.exports = function(api) {
    var BASE_URL = "/accounts";
    return {
        create: function create(params, callback) {
            return api.post({
                version: "v2",
                url: "" + BASE_URL,
                data: params
            }, callback);
        },
        edit: function edit(accountId, params, callback) {
            return api.patch({
                version: "v2",
                url: BASE_URL + "/" + accountId,
                data: params
            }, callback);
        },
        fetch: function fetch(accountId, callback) {
            return api.get({
                version: "v2",
                url: BASE_URL + "/" + accountId
            }, callback);
        },
        delete: function _delete(accountId, callback) {
            return api.delete({
                version: "v2",
                url: BASE_URL + "/" + accountId
            }, callback);
        },
        uploadAccountDoc: function uploadAccountDoc(accountId, params, callback) {
            var file = params.file, rest = _objectWithoutProperties(params, [
                "file"
            ]);
            return api.postFormData({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/documents",
                formData: _extends({
                    file: file.value
                }, rest)
            }, callback);
        },
        fetchAccountDoc: function fetchAccountDoc(accountId, callback) {
            return api.get({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/documents"
            }, callback);
        }
    };
};


/***/ }),

/***/ 8061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*
 * DOCS: https://razorpay.com/docs/subscriptions/api/
 */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function(api) {
    var BASE_URL = "/addons", MISSING_ID_ERROR = "Addon ID is mandatory";
    return {
        fetch: function fetch(addonId, callback) {
            /*
       * Fetches addon given addon id
       * @param {String} addonId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!addonId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + addonId;
            return api.get({
                url: url
            }, callback);
        },
        delete: function _delete(addonId, callback) {
            /*
       * Deletes addon given addon id
       * @param {String} addonId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!addonId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + addonId;
            return api.delete({
                url: url
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Get all Addons
       *
       * @param {Object} params
       * @param {Funtion} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        }
    };
};


/***/ }),

/***/ 2810:
/***/ ((module) => {


module.exports = function(api) {
    return {
        fetch: function fetch(itemId, callback) {
            if (!itemId) {
                throw new Error("`card_id` is mandatory");
            }
            return api.get({
                url: "/cards/" + itemId
            }, callback);
        },
        requestCardReference: function requestCardReference(params, callback) {
            return api.post({
                url: "/cards/fingerprints",
                data: params
            }, callback);
        }
    };
};


/***/ }),

/***/ 7488:
/***/ ((module) => {


module.exports = function(api) {
    return {
        create: function create(params, callback) {
            return api.post({
                url: "/customers",
                data: params
            }, callback);
        },
        edit: function edit(customerId, params, callback) {
            return api.put({
                url: "/customers/" + customerId,
                data: params
            }, callback);
        },
        fetch: function fetch(customerId, callback) {
            return api.get({
                url: "/customers/" + customerId
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var count = params.count, skip = params.skip;
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: "/customers",
                data: {
                    count: count,
                    skip: skip
                }
            }, callback);
        },
        fetchTokens: function fetchTokens(customerId, callback) {
            return api.get({
                url: "/customers/" + customerId + "/tokens"
            }, callback);
        },
        fetchToken: function fetchToken(customerId, tokenId, callback) {
            return api.get({
                url: "/customers/" + customerId + "/tokens/" + tokenId
            }, callback);
        },
        deleteToken: function deleteToken(customerId, tokenId, callback) {
            return api.delete({
                url: "/customers/" + customerId + "/tokens/" + tokenId
            }, callback);
        },
        addBankAccount: function addBankAccount(customerId, params, callback) {
            return api.post({
                url: "/customers/" + customerId + "/bank_account",
                data: params
            }, callback);
        },
        deleteBankAccount: function deleteBankAccount(customerId, bankId, callback) {
            return api.delete({
                url: "/customers/" + customerId + "/bank_account/" + bankId
            }, callback);
        },
        requestEligibilityCheck: function requestEligibilityCheck(params, callback) {
            return api.post({
                url: "/customers/eligibility",
                data: params
            }, callback);
        },
        fetchEligibility: function fetchEligibility(eligibilityId, callback) {
            return api.get({
                url: "/customers/eligibility/" + eligibilityId
            }, callback);
        }
    };
};


/***/ }),

/***/ 1614:
/***/ ((module) => {


module.exports = function(api) {
    var BASE_URL = "/disputes";
    return {
        fetch: function fetch(disputeId, callback) {
            return api.get({
                url: BASE_URL + "/" + disputeId
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var count = params.count, skip = params.skip;
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: "" + BASE_URL,
                data: {
                    count: count,
                    skip: skip
                }
            }, callback);
        },
        accept: function accept(disputeId, callback) {
            return api.post({
                url: BASE_URL + "/" + disputeId + "/accept"
            }, callback);
        },
        contest: function contest(disputeId, param, callback) {
            return api.patch({
                url: BASE_URL + "/" + disputeId + "/contest",
                data: param
            }, callback);
        }
    };
};


/***/ }),

/***/ 3504:
/***/ ((module) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
module.exports = function(api) {
    var BASE_URL = "/documents";
    return {
        create: function create(params, callback) {
            var file = params.file, rest = _objectWithoutProperties(params, [
                "file"
            ]);
            return api.postFormData({
                url: "" + BASE_URL,
                formData: _extends({
                    file: file.value
                }, rest)
            }, callback);
        },
        fetch: function fetch(documentId, callback) {
            return api.get({
                url: BASE_URL + "/" + documentId
            }, callback);
        }
    };
};


/***/ }),

/***/ 4702:
/***/ ((module) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
module.exports = function(api) {
    return {
        create: function create(params, callback) {
            /*
       * Create a Fund Account
       *
       * @param {String} customerId
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ return api.post({
                url: "/fund_accounts",
                data: _extends({}, params)
            }, callback);
        },
        fetch: function fetch(customerId, callback) {
            if (!customerId) {
                return Promise.reject("Customer Id is mandatroy");
            }
            return api.get({
                url: "/fund_accounts?customer_id=" + customerId
            }, callback);
        }
    };
};


/***/ }),

/***/ 5397:
/***/ ((module) => {


module.exports = function(api) {
    var BASE_URL = "/iins";
    return {
        fetch: function fetch(tokenIin, callback) {
            return api.get({
                url: BASE_URL + "/" + tokenIin
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            return api.get({
                url: BASE_URL + "/list",
                data: params
            }, callback);
        }
    };
};


/***/ }),

/***/ 5300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*
 * DOCS: https://razorpay.com/docs/invoices/
 */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function invoicesApi(api) {
    var BASE_URL = "/invoices", MISSING_ID_ERROR = "Invoice ID is mandatory";
    /**
   * Invoice entity gets used for both Payment Links and Invoices system.
   * Few of the methods are only meaningful for Invoices system and
   * calling those for against/for a Payment Link would throw
   * Bad request error.
   */ return {
        create: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Creates invoice of any type(invoice|link|ecod).
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL;
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        edit: function edit(invoiceId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * Patches given invoice with new attributes
       *
       * @param {String} invoiceId
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + invoiceId;
            if (!invoiceId) {
                return Promise.reject("Invoice ID is mandatory");
            }
            return api.patch({
                url: url,
                data: params
            }, callback);
        },
        issue: function issue(invoiceId, callback) {
            /*
       * Issues drafted invoice
       *
       * @param {String} invoiceId
       * @param {Function} callback
       * 
       * @return {Promise}
       */ if (!invoiceId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + invoiceId + "/issue";
            return api.post({
                url: url
            }, callback);
        },
        delete: function _delete(invoiceId, callback) {
            /*
       * Deletes drafted invoice
       *
       * @param {String} invoiceId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!invoiceId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + invoiceId;
            return api.delete({
                url: url
            }, callback);
        },
        cancel: function cancel(invoiceId, callback) {
            /*
       * Cancels issued invoice
       * 
       * @param {String} invoiceId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!invoiceId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + invoiceId + "/cancel";
            return api.post({
                url: url
            }, callback);
        },
        fetch: function fetch(invoiceId, callback) {
            /*
       * Fetches invoice entity with given id
       *
       * @param {String} invoiceId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!invoiceId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + invoiceId;
            return api.get({
                url: url
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Fetches multiple invoices with given query options
       *
       * @param {Object} invoiceId
       * @param {Function} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        },
        notifyBy: function notifyBy(invoiceId, medium, callback) {
            /*
       * Send/re-send notification for invoice by given medium
       * 
       * @param {String} invoiceId
       * @param {String} medium
       * @param {Function} callback
       * 
       * @return {Promise}
       */ if (!invoiceId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            if (!medium) {
                return Promise.reject("`medium` is required");
            }
            var url = BASE_URL + "/" + invoiceId + "/notify_by/" + medium;
            return api.post({
                url: url
            }, callback);
        }
    };
};


/***/ }),

/***/ 7226:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function(api) {
    return {
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var from = params.from, to = params.to, count = params.count, skip = params.skip, authorized = params.authorized, receipt = params.receipt;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: "/items",
                data: {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip,
                    authorized: authorized,
                    receipt: receipt
                }
            }, callback);
        },
        fetch: function fetch(itemId, callback) {
            if (!itemId) {
                throw new Error("`item_id` is mandatory");
            }
            return api.get({
                url: "/items/" + itemId
            }, callback);
        },
        create: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var amount = params.amount, currency = params.currency, rest = _objectWithoutProperties(params, [
                "amount",
                "currency"
            ]);
            currency = currency || "INR";
            if (!amount) {
                throw new Error("`amount` is mandatory");
            }
            var data = Object.assign(_extends({
                currency: currency,
                amount: amount
            }, rest));
            return api.post({
                url: "/items",
                data: data
            }, callback);
        },
        edit: function edit(itemId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            if (!itemId) {
                throw new Error("`item_id` is mandatory");
            }
            var url = "/items/" + itemId;
            return api.patch({
                url: url,
                data: params
            }, callback);
        },
        delete: function _delete(itemId, callback) {
            if (!itemId) {
                throw new Error("`item_id` is mandatory");
            }
            return api.delete({
                url: "/items/" + itemId
            }, callback);
        }
    };
};


/***/ }),

/***/ 8980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function(api) {
    return {
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var from = params.from, to = params.to, count = params.count, skip = params.skip, authorized = params.authorized, receipt = params.receipt;
            var expand = void 0;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            if (params.hasOwnProperty("expand[]")) {
                expand = {
                    "expand[]": params["expand[]"]
                };
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            authorized = authorized;
            return api.get({
                url: "/orders",
                data: {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip,
                    authorized: authorized,
                    receipt: receipt,
                    expand: expand
                }
            }, callback);
        },
        fetch: function fetch(orderId, callback) {
            if (!orderId) {
                throw new Error("`order_id` is mandatory");
            }
            return api.get({
                url: "/orders/" + orderId
            }, callback);
        },
        create: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var currency = params.currency, otherParams = _objectWithoutProperties(params, [
                "currency"
            ]);
            currency = currency || "INR";
            var data = Object.assign(_extends({
                currency: currency
            }, otherParams));
            return api.post({
                url: "/orders",
                data: data
            }, callback);
        },
        edit: function edit(orderId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            if (!orderId) {
                throw new Error("`order_id` is mandatory");
            }
            return api.patch({
                url: "/orders/" + orderId,
                data: params
            }, callback);
        },
        fetchPayments: function fetchPayments(orderId, callback) {
            if (!orderId) {
                throw new Error("`order_id` is mandatory");
            }
            return api.get({
                url: "/orders/" + orderId + "/payments"
            }, callback);
        },
        fetchTransferOrder: function fetchTransferOrder(orderId, callback) {
            if (!orderId) {
                throw new Error("`order_id` is mandatory");
            }
            return api.get({
                url: "/orders/" + orderId + "/?expand[]=transfers&status"
            }, callback);
        },
        viewRtoReview: function viewRtoReview(orderId, callback) {
            return api.post({
                url: "/orders/" + orderId + "/rto_review"
            }, callback);
        },
        editFulfillment: function editFulfillment(orderId) {
            var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            return api.post({
                url: "/orders/" + orderId + "/fulfillment",
                data: param
            });
        }
    };
};


/***/ }),

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*
 * DOCS: https://razorpay.com/docs/payment-links/
 */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function paymentLinkApi(api) {
    var BASE_URL = "/payment_links", MISSING_ID_ERROR = "Payment Link ID is mandatory";
    return {
        create: function create(params, callback) {
            /*
       * Creates Payment Link.
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL;
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        cancel: function cancel(paymentLinkId, callback) {
            /*
       * Cancels issued paymentLink
       *
       * @param {String} paymentLinkId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!paymentLinkId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + paymentLinkId + "/cancel";
            return api.post({
                url: url
            }, callback);
        },
        fetch: function fetch(paymentLinkId, callback) {
            /*
       * Fetches paymentLink entity with given id
       *
       * @param {String} paymentLinkId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!paymentLinkId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + paymentLinkId;
            return api.get({
                url: url
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Fetches multiple paymentLink with given query options
       *
       * @param {Object} paymentLinkId
       * @param {Function} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        },
        edit: function edit(paymentLinkId, params, callback) {
            return api.patch({
                url: BASE_URL + "/" + paymentLinkId,
                data: params
            }, callback);
        },
        notifyBy: function notifyBy(paymentLinkId, medium, callback) {
            /*
       * Send/re-send notification for invoice by given medium
       * 
       * @param {String} paymentLinkId
       * @param {String} medium
       * @param {Function} callback
       * 
       * @return {Promise}
       */ if (!paymentLinkId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            if (!medium) {
                return Promise.reject("`medium` is required");
            }
            var url = BASE_URL + "/" + paymentLinkId + "/notify_by/" + medium;
            return api.post({
                url: url
            }, callback);
        }
    };
};


/***/ }),

/***/ 9932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
var ID_REQUIRED_MSG = "`payment_id` is mandatory", BASE_URL = "/payments";
module.exports = function(api) {
    return {
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var from = params.from, to = params.to, count = params.count, skip = params.skip;
            var expand = void 0;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            if (params.hasOwnProperty("expand[]")) {
                expand = {
                    "expand[]": params["expand[]"]
                };
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: "" + BASE_URL,
                data: {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip,
                    expand: expand
                }
            }, callback);
        },
        fetch: function fetch(paymentId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            var expand = void 0;
            if (!paymentId) {
                throw new Error("`payment_id` is mandatory");
            }
            if (params.hasOwnProperty("expand[]")) {
                expand = {
                    "expand[]": params["expand[]"]
                };
            }
            return api.get({
                url: BASE_URL + "/" + paymentId,
                data: {
                    expand: expand
                }
            }, callback);
        },
        capture: function capture(paymentId, amount, currency, callback) {
            if (!paymentId) {
                throw new Error("`payment_id` is mandatory");
            }
            if (!amount) {
                throw new Error("`amount` is mandatory");
            }
            var payload = {
                amount: amount
            };
            /**
       * For backward compatibility,
       * the third argument can be a callback
       * instead of currency.
       * Set accordingly.
       */ if (typeof currency === "function" && !callback) {
                callback = currency;
                currency = undefined;
            } else if (typeof currency === "string") {
                payload.currency = currency;
            }
            return api.post({
                url: BASE_URL + "/" + paymentId + "/capture",
                data: payload
            }, callback);
        },
        createPaymentJson: function createPaymentJson(params, callback) {
            var url = BASE_URL + "/create/json", rest = _objectWithoutProperties(params, []), data = Object.assign(rest);
            return api.post({
                url: url,
                data: data
            }, callback);
        },
        createRecurringPayment: function createRecurringPayment(params, callback) {
            return api.post({
                url: BASE_URL + "/create/recurring",
                data: params
            }, callback);
        },
        edit: function edit(paymentId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            if (!paymentId) {
                throw new Error("`payment_id` is mandatory");
            }
            return api.patch({
                url: BASE_URL + "/" + paymentId,
                data: params
            }, callback);
        },
        refund: function refund(paymentId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            if (!paymentId) {
                throw new Error("`payment_id` is mandatory");
            }
            return api.post({
                url: BASE_URL + "/" + paymentId + "/refund",
                data: params
            }, callback);
        },
        fetchMultipleRefund: function fetchMultipleRefund(paymentId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * Fetch multiple refunds for a payment
       *
       * @param {String} paymentId 
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL + "/" + paymentId + "/refunds";
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        },
        fetchRefund: function fetchRefund(paymentId, refundId, callback) {
            if (!paymentId) {
                throw new Error("payment Id` is mandatory");
            }
            if (!refundId) {
                throw new Error("refund Id` is mandatory");
            }
            return api.get({
                url: BASE_URL + "/" + paymentId + "/refunds/" + refundId
            }, callback);
        },
        fetchTransfer: function fetchTransfer(paymentId, callback) {
            /*
       * Fetch transfers for a payment
       *
       * @param {String} paymentId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!paymentId) {
                throw new Error("payment Id` is mandatory");
            }
            return api.get({
                url: BASE_URL + "/" + paymentId + "/transfers"
            }, callback);
        },
        transfer: function transfer(paymentId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            if (!paymentId) {
                throw new Error("`payment_id` is mandatory");
            }
            return api.post({
                url: BASE_URL + "/" + paymentId + "/transfers",
                data: params
            }, callback);
        },
        bankTransfer: function bankTransfer(paymentId, callback) {
            if (!paymentId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            return api.get({
                url: BASE_URL + "/" + paymentId + "/bank_transfer"
            }, callback);
        },
        fetchCardDetails: function fetchCardDetails(paymentId, callback) {
            if (!paymentId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            return api.get({
                url: BASE_URL + "/" + paymentId + "/card"
            }, callback);
        },
        fetchPaymentDowntime: function fetchPaymentDowntime(callback) {
            return api.get({
                url: BASE_URL + "/downtimes"
            }, callback);
        },
        fetchPaymentDowntimeById: function fetchPaymentDowntimeById(downtimeId, callback) {
            /*
       * Fetch Payment Downtime
       *
       * @param {String} downtimeId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!downtimeId) {
                return Promise.reject("Downtime Id is mandatory");
            }
            return api.get({
                url: BASE_URL + "/downtimes/" + downtimeId
            }, callback);
        },
        otpGenerate: function otpGenerate(paymentId, callback) {
            /*
       * OTP Generate
       *
       * @param {String} paymentId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!paymentId) {
                return Promise.reject("payment Id is mandatory");
            }
            return api.post({
                url: BASE_URL + "/" + paymentId + "/otp_generate"
            }, callback);
        },
        otpSubmit: function otpSubmit(paymentId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * OTP Submit
       *
       * @param {String} paymentId
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!paymentId) {
                return Promise.reject("payment Id is mandatory");
            }
            return api.post({
                url: BASE_URL + "/" + paymentId + "/otp/submit",
                data: params
            }, callback);
        },
        otpResend: function otpResend(paymentId, callback) {
            /*
       * OTP Resend
       *
       * @param {String} paymentId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!paymentId) {
                return Promise.reject("payment Id is mandatory");
            }
            return api.post({
                url: BASE_URL + "/" + paymentId + "/otp/resend"
            }, callback);
        },
        createUpi: function createUpi() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Initiate a payment
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/create/upi", rest = _objectWithoutProperties(params, []), data = Object.assign(rest);
            return api.post({
                url: url,
                data: data
            }, callback);
        },
        validateVpa: function validateVpa() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Validate the VPA
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/validate/vpa", rest = _objectWithoutProperties(params, []), data = Object.assign(rest);
            return api.post({
                url: url,
                data: data
            }, callback);
        },
        fetchPaymentMethods: function fetchPaymentMethods(callback) {
            /*
       * Validate the VPA
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = "/methods";
            return api.get({
                url: url
            }, callback);
        }
    };
};


/***/ }),

/***/ 2812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*
 * DOCS: https://razorpay.com/docs/subscriptions/api/
 */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function plansApi(api) {
    var BASE_URL = "/plans", MISSING_ID_ERROR = "Plan ID is mandatory";
    return {
        create: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Creates a plan
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL;
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        fetch: function fetch(planId, callback) {
            /*
       * Fetches a plan given Plan ID
       *
       * @param {String} planId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!planId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + planId;
            return api.get({
                url: url
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Get all Plans
       *
       * @param {Object} params
       * @param {Funtion} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        }
    };
};


/***/ }),

/***/ 697:
/***/ ((module) => {


module.exports = function(api) {
    var BASE_URL = "/accounts";
    return {
        requestProductConfiguration: function requestProductConfiguration(accountId, params, callback) {
            return api.post({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/products",
                data: params
            }, callback);
        },
        edit: function edit(accountId, productId, params, callback) {
            return api.patch({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/products/" + productId,
                data: params
            }, callback);
        },
        fetch: function fetch(accountId, productId, callback) {
            return api.get({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/products/" + productId
            }, callback);
        },
        fetchTnc: function fetchTnc(productName, callback) {
            return api.get({
                version: "v2",
                url: "/products/" + productName + "/tnc"
            }, callback);
        }
    };
};


/***/ }),

/***/ 9640:
/***/ ((module) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
module.exports = function(api) {
    var BASE_URL = "/payments/qr_codes";
    return {
        create: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Creates a QrCode
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL;
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Fetch all fund accounts
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL;
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        },
        fetchAllPayments: function fetchAllPayments(qrCodeId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * Fetch all payment for a qrCode
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL + "/" + qrCodeId + "/payments";
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        },
        fetch: function fetch(qrCodeId, callback) {
            if (!qrCodeId) {
                return Promise.reject("qrCode Id is mandatroy");
            }
            return api.get({
                url: BASE_URL + "/" + qrCodeId
            }, callback);
        },
        close: function close(qrCodeId, callback) {
            if (!qrCodeId) {
                return Promise.reject("qrCode Id is mandatroy");
            }
            var url = BASE_URL + "/" + qrCodeId + "/close";
            return api.post({
                url: url
            }, callback);
        }
    };
};


/***/ }),

/***/ 7285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate, normalizeNotes = _require.normalizeNotes;
module.exports = function(api) {
    return {
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var from = params.from, to = params.to, count = params.count, skip = params.skip, payment_id = params.payment_id;
            var url = "/refunds";
            if (payment_id) {
                url = "/payments/" + payment_id + "/refunds";
            }
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                }
            }, callback);
        },
        edit: function edit(refundId, params, callback) {
            if (!refundId) {
                throw new Error("refund Id is mandatory");
            }
            return api.patch({
                url: "/refunds/" + refundId,
                data: params
            }, callback);
        },
        fetch: function fetch(refundId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            var payment_id = params.payment_id;
            if (!refundId) {
                throw new Error("`refund_id` is mandatory");
            }
            var url = "/refunds/" + refundId;
            if (payment_id) {
                url = "/payments/" + payment_id + url;
            }
            return api.get({
                url: url
            }, callback);
        }
    };
};


/***/ }),

/***/ 4136:
/***/ ((module) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
module.exports = function(api) {
    var BASE_URL = "/settlements";
    return {
        createOndemandSettlement: function createOndemandSettlement() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Create on-demand settlement
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/ondemand";
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Fetch all settlements
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL;
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        },
        fetch: function fetch(settlementId, callback) {
            /*
       * Fetch a settlement
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!settlementId) {
                return Promise.reject("settlement Id is mandatroy");
            }
            return api.get({
                url: BASE_URL + "/" + settlementId
            }, callback);
        },
        fetchOndemandSettlementById: function fetchOndemandSettlementById(settlementId) {
            var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            var expand = void 0;
            /*
       * Fetch On-demand Settlements by ID
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!settlementId) {
                return Promise.reject("settlment Id is mandatroy");
            }
            if (param.hasOwnProperty("expand[]")) {
                expand = {
                    "expand[]": param["expand[]"]
                };
            }
            return api.get({
                url: BASE_URL + "/ondemand/" + settlementId,
                data: {
                    expand: expand
                }
            }, callback);
        },
        fetchAllOndemandSettlement: function fetchAllOndemandSettlement() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Fetch all demand settlements
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var expand = void 0;
            var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL + "/ondemand";
            if (params.hasOwnProperty("expand[]")) {
                expand = {
                    "expand[]": params["expand[]"]
                };
            }
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip,
                    expand: expand
                })
            }, callback);
        },
        reports: function reports() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
      * Settlement report for a month
      *
      * @param {Object} params
      * @param {Function} callback
      *
      * @return {Promise}
      */ var day = params.day, count = params.count, skip = params.skip, url = BASE_URL + "/recon/combined";
            return api.get({
                url: url,
                data: _extends({}, params, {
                    day: day,
                    count: count,
                    skip: skip
                })
            }, callback);
        }
    };
};


/***/ }),

/***/ 1125:
/***/ ((module) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
module.exports = function(api) {
    var BASE_URL = "/accounts";
    return {
        create: function create(accountId, params, callback) {
            return api.post({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/stakeholders",
                data: params
            }, callback);
        },
        edit: function edit(accountId, stakeholderId, params, callback) {
            return api.patch({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/stakeholders/" + stakeholderId,
                data: params
            }, callback);
        },
        fetch: function fetch(accountId, stakeholderId, callback) {
            return api.get({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/stakeholders/" + stakeholderId
            }, callback);
        },
        all: function all(accountId, callback) {
            return api.get({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/stakeholders"
            }, callback);
        },
        uploadStakeholderDoc: function uploadStakeholderDoc(accountId, stakeholderId, params, callback) {
            var file = params.file, rest = _objectWithoutProperties(params, [
                "file"
            ]);
            return api.postFormData({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/stakeholders/" + stakeholderId + "/documents",
                formData: _extends({
                    file: file.value
                }, rest)
            }, callback);
        },
        fetchStakeholderDoc: function fetchStakeholderDoc(accountId, stakeholderId, callback) {
            return api.get({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/stakeholders/" + stakeholderId + "/documents"
            }, callback);
        }
    };
};


/***/ }),

/***/ 1377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*
 * DOCS: https://razorpay.com/docs/subscriptions/api/
 */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function subscriptionsApi(api) {
    var BASE_URL = "/subscriptions", MISSING_ID_ERROR = "Subscription ID is mandatory";
    return {
        create: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Creates a Subscription
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL;
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        fetch: function fetch(subscriptionId, callback) {
            /*
       * Fetch a Subscription given Subcription ID
       *
       * @param {String} subscriptionId
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!subscriptionId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            var url = BASE_URL + "/" + subscriptionId;
            return api.get({
                url: url
            }, callback);
        },
        update: function update(subscriptionId, params, callback) {
            /*
       * Update Subscription
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + subscriptionId;
            if (!subscriptionId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            return api.patch({
                url: url,
                data: params
            }, callback);
        },
        pendingUpdate: function pendingUpdate(subscriptionId, callback) {
            /*
       * Update a Subscription
       *
       * @param {String} subscription
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + subscriptionId + "/retrieve_scheduled_changes";
            if (!subscriptionId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            return api.get({
                url: url
            }, callback);
        },
        cancelScheduledChanges: function cancelScheduledChanges(subscriptionId, callback) {
            /*
       * Cancel Schedule  
       *
       * @param {String} subscription
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + subscriptionId + "/cancel_scheduled_changes";
            if (!subscriptionId) {
                return Promise.reject("Subscription Id is mandatory");
            }
            return api.post({
                url: url
            }, callback);
        },
        pause: function pause(subscriptionId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * Pause a subscription 
       *
       * @param {String} subscription
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + subscriptionId + "/pause";
            if (!subscriptionId) {
                return Promise.reject("Subscription Id is mandatory");
            }
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        resume: function resume(subscriptionId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * resume a subscription 
       *
       * @param {String} subscription
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + subscriptionId + "/resume";
            if (!subscriptionId) {
                return Promise.reject("Subscription Id is mandatory");
            }
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        deleteOffer: function deleteOffer(subscriptionId, offerId, callback) {
            /*
      * Delete an Offer Linked to a Subscription
      *
      * @param {String} subscription
      * @param {String} offerId
      * @param {Function} callback
      *
      * @return {Promise}
      */ var url = BASE_URL + "/" + subscriptionId + "/" + offerId;
            if (!subscriptionId) {
                return Promise.reject("Subscription Id is mandatory");
            }
            return api.delete({
                url: url
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Get all Subscriptions
       *
       * @param {Object} params
       * @param {Funtion} callback
       *
       * @return {Promise}
       */ var from = params.from, to = params.to, count = params.count, skip = params.skip, url = BASE_URL;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: _extends({}, params, {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                })
            }, callback);
        },
        cancel: function cancel(subscriptionId) {
            var cancelAtCycleEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var callback = arguments[2];
            /*
       * Cancel a subscription given id and optional cancelAtCycleEnd
       *
       * @param {String} subscription
       * @param {Boolean} cancelAtCycleEnd
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + subscriptionId + "/cancel";
            if (!subscriptionId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            return api.post(_extends({
                url: url
            }, cancelAtCycleEnd && {
                data: {
                    cancel_at_cycle_end: 1
                }
            }), callback);
        },
        createAddon: function createAddon(subscriptionId, params, callback) {
            /*
       * Creates addOn for a given subscription
       *
       * @param {String} subscriptionId
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ var url = BASE_URL + "/" + subscriptionId + "/addons";
            if (!subscriptionId) {
                return Promise.reject(MISSING_ID_ERROR);
            }
            return api.post({
                url: url,
                data: _extends({}, params)
            }, callback);
        },
        createRegistrationLink: function createRegistrationLink() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            /*
       * Creates a Registration Link
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ return api.post({
                url: "/subscription_registration/auth_links",
                data: params
            }, callback);
        }
    };
};


/***/ }),

/***/ 3734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _require = __webpack_require__(2855), normalizeNotes = _require.normalizeNotes;
module.exports = function(api) {
    var BASE_URL = "/tokens";
    return {
        create: function create(params, callback) {
            return api.post({
                url: "" + BASE_URL,
                data: params
            }, callback);
        },
        fetch: function fetch(params, callback) {
            return api.post({
                url: BASE_URL + "/fetch",
                data: params
            }, callback);
        },
        delete: function _delete(params, callback) {
            return api.post({
                url: BASE_URL + "/delete",
                data: params
            }, callback);
        },
        processPaymentOnAlternatePAorPG: function processPaymentOnAlternatePAorPG(params, callback) {
            return api.post({
                url: BASE_URL + "/service_provider_tokens/token_transactional_data",
                data: params
            }, callback);
        }
    };
};


/***/ }),

/***/ 7436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function(api) {
    return {
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var from = params.from, to = params.to, count = params.count, skip = params.skip, payment_id = params.payment_id, recipient_settlement_id = params.recipient_settlement_id;
            var url = "/transfers";
            if (payment_id) {
                url = "/payments/" + payment_id + "/transfers";
            }
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: {
                    from: from,
                    to: to,
                    count: count,
                    skip: skip,
                    recipient_settlement_id: recipient_settlement_id
                }
            }, callback);
        },
        fetch: function fetch(transferId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            var payment_id = params.payment_id;
            if (!transferId) {
                throw new Error("`transfer_id` is mandatory");
            }
            var url = "/transfers/" + transferId;
            return api.get({
                url: url
            }, callback);
        },
        create: function create(params, callback) {
            return api.post({
                url: "/transfers",
                data: params
            }, callback);
        },
        edit: function edit(transferId, params, callback) {
            return api.patch({
                url: "/transfers/" + transferId,
                data: params
            }, callback);
        },
        reverse: function reverse(transferId, params, callback) {
            if (!transferId) {
                throw new Error("`transfer_id` is mandatory");
            }
            var url = "/transfers/" + transferId + "/reversals";
            return api.post({
                url: url,
                data: params
            }, callback);
        },
        fetchSettlements: function fetchSettlements(callback) {
            return api.get({
                url: "/transfers?expand[]=recipient_settlement"
            }, callback);
        }
    };
};


/***/ }),

/***/ 4680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate, normalizeNotes = _require.normalizeNotes;
var BASE_URL = "/virtual_accounts", ID_REQUIRED_MSG = "`virtual_account_id` is mandatory";
module.exports = function(api) {
    return {
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var from = params.from, to = params.to, count = params.count, skip = params.skip, otherParams = _objectWithoutProperties(params, [
                "from",
                "to",
                "count",
                "skip"
            ]);
            var url = BASE_URL;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            return api.get({
                url: url,
                data: _extends({
                    from: from,
                    to: to,
                    count: count,
                    skip: skip
                }, otherParams)
            }, callback);
        },
        fetch: function fetch(virtualAccountId, callback) {
            if (!virtualAccountId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            var url = BASE_URL + "/" + virtualAccountId;
            return api.get({
                url: url
            }, callback);
        },
        create: function create() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            return api.post({
                url: BASE_URL,
                data: params
            }, callback);
        },
        close: function close(virtualAccountId, callback) {
            if (!virtualAccountId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            return api.post({
                url: BASE_URL + "/" + virtualAccountId + "/close"
            }, callback);
        },
        fetchPayments: function fetchPayments(virtualAccountId, callback) {
            if (!virtualAccountId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            var url = BASE_URL + "/" + virtualAccountId + "/payments";
            return api.get({
                url: url
            }, callback);
        },
        addReceiver: function addReceiver(virtualAccountId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * Add Receiver to an Existing Virtual Account
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!virtualAccountId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            return api.post({
                url: BASE_URL + "/" + virtualAccountId + "/receivers",
                data: params
            }, callback);
        },
        allowedPayer: function allowedPayer(virtualAccountId) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var callback = arguments[2];
            /*
       * Add an Allowed Payer Account
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */ if (!virtualAccountId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            return api.post({
                url: BASE_URL + "/" + virtualAccountId + "/allowed_payers",
                data: params
            }, callback);
        },
        deleteAllowedPayer: function deleteAllowedPayer(virtualAccountId, allowedPayerId, callback) {
            /*
      * Delete an Allowed Payer Account
      * @param {String} virtualAccountId
      * @param {String} allowedPayerId
      * @param {Function} callback
      *
      * @return {Promise}
      */ if (!virtualAccountId) {
                return Promise.reject(ID_REQUIRED_MSG);
            }
            if (!allowedPayerId) {
                return Promise.reject("allowed payer id is mandatory");
            }
            return api.delete({
                url: BASE_URL + "/" + virtualAccountId + "/allowed_payers/" + allowedPayerId
            }, callback);
        }
    };
};


/***/ }),

/***/ 4634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _require = __webpack_require__(2855), normalizeDate = _require.normalizeDate;
module.exports = function(api) {
    var BASE_URL = "/accounts";
    return {
        create: function create(params, accountId, callback) {
            var payload = {
                url: "/webhooks",
                data: params
            };
            if (accountId) {
                payload = {
                    version: "v2",
                    url: BASE_URL + "/" + accountId + "/webhooks",
                    data: params
                };
            }
            return api.post(payload, callback);
        },
        edit: function edit(params, webhookId, accountId, callback) {
            if (accountId && webhookId) {
                return api.patch({
                    version: "v2",
                    url: BASE_URL + "/" + accountId + "/webhooks/" + webhookId,
                    data: params
                }, callback);
            }
            return api.put({
                url: "/webhooks/" + webhookId,
                data: params
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var accountId = arguments[1];
            var callback = arguments[2];
            var from = params.from, to = params.to, count = params.count, skip = params.skip;
            if (from) {
                from = normalizeDate(from);
            }
            if (to) {
                to = normalizeDate(to);
            }
            count = Number(count) || 10;
            skip = Number(skip) || 0;
            var data = _extends({}, params, {
                from: from,
                to: to,
                count: count,
                skip: skip
            });
            if (accountId) {
                return api.get({
                    version: "v2",
                    url: BASE_URL + "/" + accountId + "/webhooks/",
                    data: data
                }, callback);
            }
            return api.get({
                url: "/webhooks",
                data: data
            }, callback);
        },
        fetch: function fetch(webhookId, accountId, callback) {
            return api.get({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/webhooks/" + webhookId
            }, callback);
        },
        delete: function _delete(webhookId, accountId, callback) {
            return api.delete({
                version: "v2",
                url: BASE_URL + "/" + accountId + "/webhooks/" + webhookId
            }, callback);
        }
    };
};


/***/ }),

/***/ 2954:
/***/ ((module) => {


var nodeify = function nodeify(promise, cb) {
    if (!cb) {
        return promise.then(function(response) {
            return response.data;
        });
    }
    return promise.then(function(response) {
        cb(null, response.data);
    }).catch(function(error) {
        cb(error, null);
    });
};
module.exports = nodeify;


/***/ }),

/***/ 2855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function getDateInSecs(date) {
    return +new Date(date) / 1000;
}
function normalizeDate(date) {
    return isNumber(date) ? date : getDateInSecs(date);
}
function isNumber(num) {
    return !isNaN(Number(num));
}
function isNonNullObject(input) {
    return !!input && (typeof input === "undefined" ? "undefined" : _typeof(input)) === "object" && !Array.isArray(input);
}
function normalizeBoolean(bool) {
    if (bool === undefined) {
        return bool;
    }
    return bool ? 1 : 0;
}
function isDefined(value) {
    return typeof value !== "undefined";
}
function normalizeNotes() {
    var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var normalizedNotes = {};
    for(var key in notes){
        normalizedNotes["notes[" + key + "]"] = notes[key];
    }
    return normalizedNotes;
}
function prettify(val) {
    /*
   * given an object , returns prettified string
   *
   * @param {Object} val
   * @return {String}
   */ return JSON.stringify(val, null, 2);
}
function getTestError(summary, expectedVal, gotVal) {
    /*
   * @param {String} summary
   * @param {*} expectedVal
   * @param {*} gotVal
   *
   * @return {Error}
   */ return new Error("\n" + summary + "\n" + ("Expected(" + (typeof expectedVal === "undefined" ? "undefined" : _typeof(expectedVal)) + ")\n" + prettify(expectedVal) + "\n\n") + ("Got(" + (typeof gotVal === "undefined" ? "undefined" : _typeof(gotVal)) + ")\n" + prettify(gotVal)));
}
function validateWebhookSignature(body, signature, secret) {
    /*
   * Verifies webhook signature
   *
   * @param {String} summary
   * @param {String} signature
   * @param {String} secret
   *
   * @return {Boolean}
   */ var crypto = __webpack_require__(6113);
    if (!isDefined(body) || !isDefined(signature) || !isDefined(secret)) {
        throw Error("Invalid Parameters: Please give request body," + "signature sent in X-Razorpay-Signature header and " + "webhook secret from dashboard as parameters");
    }
    body = body.toString();
    var expectedSignature = crypto.createHmac("sha256", secret).update(body).digest("hex");
    return expectedSignature === signature;
}
function validatePaymentVerification() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var signature = arguments[1];
    var secret = arguments[2];
    /*
   * Payment verfication
   *
   * @param {Object} params
   * @param {String} signature
   * @param {String} secret
   * @return {Boolean}
   */ var paymentId = params.payment_id;
    if (!secret) {
        throw new Error("secret is mandatory");
    }
    if (isDefined(params.order_id) === true) {
        var orderId = params.order_id;
        var payload = orderId + "|" + paymentId;
    } else if (isDefined(params.subscription_id) === true) {
        var subscriptionId = params.subscription_id;
        var payload = paymentId + "|" + subscriptionId;
    } else if (isDefined(params.payment_link_id) === true) {
        var paymentLinkId = params.payment_link_id;
        var paymentLinkRefId = params.payment_link_reference_id;
        var paymentLinkStatus = params.payment_link_status;
        var payload = paymentLinkId + "|" + paymentLinkRefId + "|" + paymentLinkStatus + "|" + paymentId;
    } else {
        throw new Error("Either order_id or subscription_id is mandatory");
    }
    return validateWebhookSignature(payload, signature, secret);
}
;
module.exports = {
    normalizeNotes: normalizeNotes,
    normalizeDate: normalizeDate,
    normalizeBoolean: normalizeBoolean,
    isNumber: isNumber,
    getDateInSecs: getDateInSecs,
    prettify: prettify,
    isDefined: isDefined,
    isNonNullObject: isNonNullObject,
    getTestError: getTestError,
    validateWebhookSignature: validateWebhookSignature,
    validatePaymentVerification: validatePaymentVerification
};


/***/ }),

/***/ 658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Axios v1.7.9 Copyright (c) 2024 Matt Zabriskie and contributors

const FormData$1 = __webpack_require__(9614);
const url = __webpack_require__(7310);
const proxyFromEnv = __webpack_require__(7913);
const http = __webpack_require__(3685);
const https = __webpack_require__(5687);
const util = __webpack_require__(3837);
const followRedirects = __webpack_require__(2725);
const zlib = __webpack_require__(9796);
const stream = __webpack_require__(2781);
const events = __webpack_require__(2361);
function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        "default": e
    };
}
const FormData__default = /*#__PURE__*/ _interopDefaultLegacy(FormData$1);
const url__default = /*#__PURE__*/ _interopDefaultLegacy(url);
const proxyFromEnv__default = /*#__PURE__*/ _interopDefaultLegacy(proxyFromEnv);
const http__default = /*#__PURE__*/ _interopDefaultLegacy(http);
const https__default = /*#__PURE__*/ _interopDefaultLegacy(https);
const util__default = /*#__PURE__*/ _interopDefaultLegacy(util);
const followRedirects__default = /*#__PURE__*/ _interopDefaultLegacy(followRedirects);
const zlib__default = /*#__PURE__*/ _interopDefaultLegacy(zlib);
const stream__default = /*#__PURE__*/ _interopDefaultLegacy(stream);
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") {
        return false;
    }
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") {
        return;
    }
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) {
            return _key;
        }
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self :  false ? 0 : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
            result[targetKey] = val.slice();
        } else {
            result[targetKey] = val;
        }
    };
    for(let i = 0, l = arguments.length; i < l; i++){
        arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
        } else {
            a[key] = val;
        }
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0){
        arr[i] = thing[i];
    }
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null){
        arr.push(matches);
    }
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
        }
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) {
            return false;
        }
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) {
            descriptor.set = ()=>{
                throw Error("Can not rewrite read-only method '" + name + "'");
            };
        }
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length } = alphabet;
    while(size--){
        str += alphabet[Math.random() * length | 0];
    }
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
                return;
            }
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) {
        return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener("message", ({ source, data })=>{
            if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
            }
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === "function", isFunction(_global.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
// *********************
const utils$1 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap
};
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
    }
}
utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils$1.toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype$1);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!utils$1.isObject(obj)) {
        throw new TypeError("target must be an object");
    }
    // eslint-disable-next-line no-param-reassign
    formData = formData || new (FormData__default["default"] || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = utils$1.toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !utils$1.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
        throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
        if (value === null) return "";
        if (utils$1.isDate(value)) {
            return value.toISOString();
        }
        if (!useBlob && utils$1.isBlob(value)) {
            throw new AxiosError("Blob is not supported. Use a Buffer instead.");
        }
        if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
            return useBlob && typeof Blob === "function" ? new Blob([
                value
            ]) : Buffer.from(value);
        }
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if (utils$1.endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !(utils$1.isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) {
            return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if (utils$1.isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) {
            throw Error("Circular reference detected in " + path.join("."));
        }
        stack.push(value);
        utils$1.forEach(value, function each(el, key) {
            const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
                build(el, path ? path.concat(key) : [
                    key
                ]);
            }
        });
        stack.pop();
    }
    if (!utils$1.isObject(obj)) {
        throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
}
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode$1(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */ function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) {
        return url;
    }
    const _encode = options && options.encode || encode;
    if (utils$1.isFunction(options)) {
        options = {
            serialize: options
        };
    }
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
        serializedParams = serializeFn(params, options);
    } else {
        serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) {
            this.handlers = [];
        }
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        utils$1.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    }
}
const InterceptorManager$1 = InterceptorManager;
const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};
const URLSearchParams = url__default["default"].URLSearchParams;
const platform$1 = {
    isNode: true,
    classes: {
        URLSearchParams,
        FormData: FormData__default["default"],
        Blob: typeof Blob !== "undefined" && Blob || null
    },
    protocols: [
        "http",
        "https",
        "file",
        "data"
    ]
};
const hasBrowserEnv =  false && 0;
const _navigator = typeof navigator === "object" && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    "ReactNative",
    "NativeScript",
    "NS"
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv,
    navigator: _navigator,
    origin: origin
});
const platform = {
    ...utils,
    ...platform$1
};
function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if (platform.isNode && utils$1.isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === "__proto__") return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && utils$1.isArray(target) ? target.length : name;
        if (isLast) {
            if (utils$1.hasOwnProp(target, name)) {
                target[name] = [
                    target[name],
                    value
                ];
            } else {
                target[name] = value;
            }
            return !isNumericKey;
        }
        if (!target[name] || !utils$1.isObject(target[name])) {
            target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && utils$1.isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
        const obj = {};
        utils$1.forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return utils$1.trim(rawValue);
        } catch (e) {
            if (e.name !== "SyntaxError") {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: transitionalDefaults,
    adapter: [
        "xhr",
        "http",
        "fetch"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = utils$1.isObject(data);
            if (isObjectPayload && utils$1.isHTMLForm(data)) {
                data = new FormData(data);
            }
            const isFormData = utils$1.isFormData(data);
            if (isFormData) {
                return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
            }
            if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
                return data;
            }
            if (utils$1.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils$1.isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
                    return toURLEncodedForm(data, this.formSerializer).toString();
                }
                if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return toFormData(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
                return data;
            }
            if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") {
                            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: platform.classes.FormData,
        Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": undefined
        }
    }
};
utils$1.forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
], (method)=>{
    defaults.headers[method] = {};
});
const defaults$1 = defaults;
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ const parseHeaders = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
        }
        if (key === "set-cookie") {
            if (parsed[key]) {
                parsed[key].push(val);
            } else {
                parsed[key] = [
                    val
                ];
            }
        } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) {
        return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str)){
        tokens[match[1]] = match[2];
    }
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
        return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
        value = header;
    }
    if (!utils$1.isString(value)) return;
    if (utils$1.isString(filter)) {
        return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
        return filter.test(value);
    }
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = utils$1.toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self1 = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
                throw new Error("header name must be a non-empty string");
            }
            const key = utils$1.findKey(self1, lHeader);
            if (!key || self1[key] === undefined || _rewrite === true || _rewrite === undefined && self1[key] !== false) {
                self1[key || _header] = normalizeValue(_value);
            }
        }
        const setHeaders = (headers, _rewrite)=>utils$1.forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
        } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders(header), valueOrRewrite);
        } else if (utils$1.isHeaders(header)) {
            for (const [key, value] of header.entries()){
                setHeader(value, key, rewrite);
            }
        } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = utils$1.findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) {
                    return value;
                }
                if (parser === true) {
                    return parseTokens(value);
                }
                if (utils$1.isFunction(parser)) {
                    return parser.call(this, value, key);
                }
                if (utils$1.isRegExp(parser)) {
                    return parser.exec(value);
                }
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = utils$1.findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self1 = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = utils$1.findKey(self1, _header);
                if (key && (!matcher || matchHeaderValue(self1, self1[key], key, matcher))) {
                    delete self1[key];
                    deleted = true;
                }
            }
        }
        if (utils$1.isArray(header)) {
            header.forEach(deleteHeader);
        } else {
            deleteHeader(header);
        }
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self1 = this;
        const headers = {};
        utils$1.forEach(this, (value, header)=>{
            const key = utils$1.findKey(headers, header);
            if (key) {
                self1[key] = normalizeValue(value);
                delete self1[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
                delete self1[header];
            }
            self1[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        utils$1.forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
utils$1.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */ function transformData(fns, response) {
    const config = this || defaults$1;
    const context = response || config;
    const headers = AxiosHeaders$1.from(context.headers);
    let data = context.data;
    utils$1.forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
});
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */ function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(new AxiosError("Request failed with status code " + response.status, [
            AxiosError.ERR_BAD_REQUEST,
            AxiosError.ERR_BAD_RESPONSE
        ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
}
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */ function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */ function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
}
const VERSION = "1.7.9";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}
const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */ function fromDataURI(uri, asBlob, options) {
    const _Blob = options && options.Blob || platform.classes.Blob;
    const protocol = parseProtocol(uri);
    if (asBlob === undefined && _Blob) {
        asBlob = true;
    }
    if (protocol === "data") {
        uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
        const match = DATA_URL_PATTERN.exec(uri);
        if (!match) {
            throw new AxiosError("Invalid URL", AxiosError.ERR_INVALID_URL);
        }
        const mime = match[1];
        const isBase64 = match[2];
        const body = match[3];
        const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
        if (asBlob) {
            if (!_Blob) {
                throw new AxiosError("Blob is not supported", AxiosError.ERR_NOT_SUPPORT);
            }
            return new _Blob([
                buffer
            ], {
                type: mime
            });
        }
        return buffer;
    }
    throw new AxiosError("Unsupported protocol " + protocol, AxiosError.ERR_NOT_SUPPORT);
}
const kInternals = Symbol("internals");
class AxiosTransformStream extends stream__default["default"].Transform {
    constructor(options){
        options = utils$1.toFlatObject(options, {
            maxRate: 0,
            chunkSize: 64 * 1024,
            minChunkSize: 100,
            timeWindow: 500,
            ticksRate: 2,
            samplesCount: 15
        }, null, (prop, source)=>{
            return !utils$1.isUndefined(source[prop]);
        });
        super({
            readableHighWaterMark: options.chunkSize
        });
        const internals = this[kInternals] = {
            timeWindow: options.timeWindow,
            chunkSize: options.chunkSize,
            maxRate: options.maxRate,
            minChunkSize: options.minChunkSize,
            bytesSeen: 0,
            isCaptured: false,
            notifiedBytesLoaded: 0,
            ts: Date.now(),
            bytes: 0,
            onReadCallback: null
        };
        this.on("newListener", (event)=>{
            if (event === "progress") {
                if (!internals.isCaptured) {
                    internals.isCaptured = true;
                }
            }
        });
    }
    _read(size) {
        const internals = this[kInternals];
        if (internals.onReadCallback) {
            internals.onReadCallback();
        }
        return super._read(size);
    }
    _transform(chunk, encoding, callback) {
        const internals = this[kInternals];
        const maxRate = internals.maxRate;
        const readableHighWaterMark = this.readableHighWaterMark;
        const timeWindow = internals.timeWindow;
        const divider = 1000 / timeWindow;
        const bytesThreshold = maxRate / divider;
        const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
        const pushChunk = (_chunk, _callback)=>{
            const bytes = Buffer.byteLength(_chunk);
            internals.bytesSeen += bytes;
            internals.bytes += bytes;
            internals.isCaptured && this.emit("progress", internals.bytesSeen);
            if (this.push(_chunk)) {
                process.nextTick(_callback);
            } else {
                internals.onReadCallback = ()=>{
                    internals.onReadCallback = null;
                    process.nextTick(_callback);
                };
            }
        };
        const transformChunk = (_chunk, _callback)=>{
            const chunkSize = Buffer.byteLength(_chunk);
            let chunkRemainder = null;
            let maxChunkSize = readableHighWaterMark;
            let bytesLeft;
            let passed = 0;
            if (maxRate) {
                const now = Date.now();
                if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
                    internals.ts = now;
                    bytesLeft = bytesThreshold - internals.bytes;
                    internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
                    passed = 0;
                }
                bytesLeft = bytesThreshold - internals.bytes;
            }
            if (maxRate) {
                if (bytesLeft <= 0) {
                    // next time window
                    return setTimeout(()=>{
                        _callback(null, _chunk);
                    }, timeWindow - passed);
                }
                if (bytesLeft < maxChunkSize) {
                    maxChunkSize = bytesLeft;
                }
            }
            if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
                chunkRemainder = _chunk.subarray(maxChunkSize);
                _chunk = _chunk.subarray(0, maxChunkSize);
            }
            pushChunk(_chunk, chunkRemainder ? ()=>{
                process.nextTick(_callback, null, chunkRemainder);
            } : _callback);
        };
        transformChunk(chunk, function transformNextChunk(err, _chunk) {
            if (err) {
                return callback(err);
            }
            if (_chunk) {
                transformChunk(_chunk, transformNextChunk);
            } else {
                callback(null);
            }
        });
    }
}
const AxiosTransformStream$1 = AxiosTransformStream;
const { asyncIterator } = Symbol;
const readBlob = async function*(blob) {
    if (blob.stream) {
        yield* blob.stream();
    } else if (blob.arrayBuffer) {
        yield await blob.arrayBuffer();
    } else if (blob[asyncIterator]) {
        yield* blob[asyncIterator]();
    } else {
        yield blob;
    }
};
const readBlob$1 = readBlob;
const BOUNDARY_ALPHABET = utils$1.ALPHABET.ALPHA_DIGIT + "-_";
const textEncoder = typeof TextEncoder === "function" ? new TextEncoder() : new util__default["default"].TextEncoder();
const CRLF = "\r\n";
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;
class FormDataPart {
    constructor(name, value){
        const { escapeName } = this.constructor;
        const isStringValue = utils$1.isString(value);
        let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
        if (isStringValue) {
            value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
        } else {
            headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
        }
        this.headers = textEncoder.encode(headers + CRLF);
        this.contentLength = isStringValue ? value.byteLength : value.size;
        this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
        this.name = name;
        this.value = value;
    }
    async *encode() {
        yield this.headers;
        const { value } = this;
        if (utils$1.isTypedArray(value)) {
            yield value;
        } else {
            yield* readBlob$1(value);
        }
        yield CRLF_BYTES;
    }
    static escapeName(name) {
        return String(name).replace(/[\r\n"]/g, (match)=>({
                "\r": "%0D",
                "\n": "%0A",
                '"': "%22"
            })[match]);
    }
}
const formDataToStream = (form, headersHandler, options)=>{
    const { tag = "form-data-boundary", size = 25, boundary = tag + "-" + utils$1.generateString(size, BOUNDARY_ALPHABET) } = options || {};
    if (!utils$1.isFormData(form)) {
        throw TypeError("FormData instance required");
    }
    if (boundary.length < 1 || boundary.length > 70) {
        throw Error("boundary must be 10-70 characters long");
    }
    const boundaryBytes = textEncoder.encode("--" + boundary + CRLF);
    const footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF);
    let contentLength = footerBytes.byteLength;
    const parts = Array.from(form.entries()).map(([name, value])=>{
        const part = new FormDataPart(name, value);
        contentLength += part.size;
        return part;
    });
    contentLength += boundaryBytes.byteLength * parts.length;
    contentLength = utils$1.toFiniteNumber(contentLength);
    const computedHeaders = {
        "Content-Type": `multipart/form-data; boundary=${boundary}`
    };
    if (Number.isFinite(contentLength)) {
        computedHeaders["Content-Length"] = contentLength;
    }
    headersHandler && headersHandler(computedHeaders);
    return stream.Readable.from(async function*() {
        for (const part of parts){
            yield boundaryBytes;
            yield* part.encode();
        }
        yield footerBytes;
    }());
};
const formDataToStream$1 = formDataToStream;
class ZlibHeaderTransformStream extends stream__default["default"].Transform {
    __transform(chunk, encoding, callback) {
        this.push(chunk);
        callback();
    }
    _transform(chunk, encoding, callback) {
        if (chunk.length !== 0) {
            this._transform = this.__transform;
            // Add Default Compression headers if no zlib headers are present
            if (chunk[0] !== 120) {
                const header = Buffer.alloc(2);
                header[0] = 120; // Hex: 78
                header[1] = 156; // Hex: 9C 
                this.push(header, encoding);
            }
        }
        this.__transform(chunk, encoding, callback);
    }
}
const ZlibHeaderTransformStream$1 = ZlibHeaderTransformStream;
const callbackify = (fn, reducer)=>{
    return utils$1.isAsyncFn(fn) ? function(...args) {
        const cb = args.pop();
        fn.apply(this, args).then((value)=>{
            try {
                reducer ? cb(null, ...reducer(value)) : cb(null, value);
            } catch (err) {
                cb(err);
            }
        }, cb);
    } : fn;
};
const callbackify$1 = callbackify;
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
            firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
            tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
            return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn.apply(null, args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) {
            invoke(args, now);
        } else {
            lastArgs = args;
            if (!timer) {
                timer = setTimeout(()=>{
                    timer = null;
                    invoke(lastArgs);
                }, threshold - passed);
            }
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return throttle((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? "download" : "upload"]: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>utils$1.asap(()=>fn(...args));
const zlibOptions = {
    flush: zlib__default["default"].constants.Z_SYNC_FLUSH,
    finishFlush: zlib__default["default"].constants.Z_SYNC_FLUSH
};
const brotliOptions = {
    flush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH,
    finishFlush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH
};
const isBrotliSupported = utils$1.isFunction(zlib__default["default"].createBrotliDecompress);
const { http: httpFollow, https: httpsFollow } = followRedirects__default["default"];
const isHttps = /https:?/;
const supportedProtocols = platform.protocols.map((protocol)=>{
    return protocol + ":";
});
const flushOnFinish = (stream, [throttled, flush])=>{
    stream.on("end", flush).on("error", flush);
    return throttled;
};
/**
 * If the proxy or config beforeRedirects functions are defined, call them with the options
 * object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */ function dispatchBeforeRedirect(options, responseDetails) {
    if (options.beforeRedirects.proxy) {
        options.beforeRedirects.proxy(options);
    }
    if (options.beforeRedirects.config) {
        options.beforeRedirects.config(options, responseDetails);
    }
}
/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 *
 * @returns {http.ClientRequestArgs}
 */ function setProxy(options, configProxy, location) {
    let proxy = configProxy;
    if (!proxy && proxy !== false) {
        const proxyUrl = proxyFromEnv__default["default"].getProxyForUrl(location);
        if (proxyUrl) {
            proxy = new URL(proxyUrl);
        }
    }
    if (proxy) {
        // Basic proxy authorization
        if (proxy.username) {
            proxy.auth = (proxy.username || "") + ":" + (proxy.password || "");
        }
        if (proxy.auth) {
            // Support proxy auth object form
            if (proxy.auth.username || proxy.auth.password) {
                proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || "");
            }
            const base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
            options.headers["Proxy-Authorization"] = "Basic " + base64;
        }
        options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
        const proxyHost = proxy.hostname || proxy.host;
        options.hostname = proxyHost;
        // Replace 'host' since options is not a URL object
        options.host = proxyHost;
        options.port = proxy.port;
        options.path = location;
        if (proxy.protocol) {
            options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`;
        }
    }
    options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
        // Configure proxy for redirected request, passing the original config proxy to apply
        // the exact same logic as if the redirected request was performed by axios directly.
        setProxy(redirectOptions, configProxy, redirectOptions.href);
    };
}
const isHttpAdapterSupported = typeof process !== "undefined" && utils$1.kindOf(process) === "process";
// temporary hotfix
const wrapAsync = (asyncExecutor)=>{
    return new Promise((resolve, reject)=>{
        let onDone;
        let isDone;
        const done = (value, isRejected)=>{
            if (isDone) return;
            isDone = true;
            onDone && onDone(value, isRejected);
        };
        const _resolve = (value)=>{
            done(value);
            resolve(value);
        };
        const _reject = (reason)=>{
            done(reason, true);
            reject(reason);
        };
        asyncExecutor(_resolve, _reject, (onDoneHandler)=>onDone = onDoneHandler).catch(_reject);
    });
};
const resolveFamily = ({ address, family })=>{
    if (!utils$1.isString(address)) {
        throw TypeError("address must be a string");
    }
    return {
        address,
        family: family || (address.indexOf(".") < 0 ? 6 : 4)
    };
};
const buildAddressEntry = (address, family)=>resolveFamily(utils$1.isObject(address) ? address : {
        address,
        family
    });
/*eslint consistent-return:0*/ const httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
    return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
        let { data, lookup, family } = config;
        const { responseType, responseEncoding } = config;
        const method = config.method.toUpperCase();
        let isDone;
        let rejected = false;
        let req;
        if (lookup) {
            const _lookup = callbackify$1(lookup, (value)=>utils$1.isArray(value) ? value : [
                    value
                ]);
            // hotfix to support opt.all option which is required for node 20.x
            lookup = (hostname, opt, cb)=>{
                _lookup(hostname, opt, (err, arg0, arg1)=>{
                    if (err) {
                        return cb(err);
                    }
                    const addresses = utils$1.isArray(arg0) ? arg0.map((addr)=>buildAddressEntry(addr)) : [
                        buildAddressEntry(arg0, arg1)
                    ];
                    opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
                });
            };
        }
        // temporary internal emitter until the AxiosRequest class will be implemented
        const emitter = new events.EventEmitter();
        const onFinished = ()=>{
            if (config.cancelToken) {
                config.cancelToken.unsubscribe(abort);
            }
            if (config.signal) {
                config.signal.removeEventListener("abort", abort);
            }
            emitter.removeAllListeners();
        };
        onDone((value, isRejected)=>{
            isDone = true;
            if (isRejected) {
                rejected = true;
                onFinished();
            }
        });
        function abort(reason) {
            emitter.emit("abort", !reason || reason.type ? new CanceledError(null, config, req) : reason);
        }
        emitter.once("abort", reject);
        if (config.cancelToken || config.signal) {
            config.cancelToken && config.cancelToken.subscribe(abort);
            if (config.signal) {
                config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort);
            }
        }
        // Parse url
        const fullPath = buildFullPath(config.baseURL, config.url);
        const parsed = new URL(fullPath, platform.hasBrowserEnv ? platform.origin : undefined);
        const protocol = parsed.protocol || supportedProtocols[0];
        if (protocol === "data:") {
            let convertedData;
            if (method !== "GET") {
                return settle(resolve, reject, {
                    status: 405,
                    statusText: "method not allowed",
                    headers: {},
                    config
                });
            }
            try {
                convertedData = fromDataURI(config.url, responseType === "blob", {
                    Blob: config.env && config.env.Blob
                });
            } catch (err) {
                throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
            }
            if (responseType === "text") {
                convertedData = convertedData.toString(responseEncoding);
                if (!responseEncoding || responseEncoding === "utf8") {
                    convertedData = utils$1.stripBOM(convertedData);
                }
            } else if (responseType === "stream") {
                convertedData = stream__default["default"].Readable.from(convertedData);
            }
            return settle(resolve, reject, {
                data: convertedData,
                status: 200,
                statusText: "OK",
                headers: new AxiosHeaders$1(),
                config
            });
        }
        if (supportedProtocols.indexOf(protocol) === -1) {
            return reject(new AxiosError("Unsupported protocol " + protocol, AxiosError.ERR_BAD_REQUEST, config));
        }
        const headers = AxiosHeaders$1.from(config.headers).normalize();
        // Set User-Agent (required by some servers)
        // See https://github.com/axios/axios/issues/69
        // User-Agent is specified; handle case where no UA header is desired
        // Only set header if it hasn't been set in config
        headers.set("User-Agent", "axios/" + VERSION, false);
        const { onUploadProgress, onDownloadProgress } = config;
        const maxRate = config.maxRate;
        let maxUploadRate = undefined;
        let maxDownloadRate = undefined;
        // support for spec compliant FormData objects
        if (utils$1.isSpecCompliantForm(data)) {
            const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
            data = formDataToStream$1(data, (formHeaders)=>{
                headers.set(formHeaders);
            }, {
                tag: `axios-${VERSION}-boundary`,
                boundary: userBoundary && userBoundary[1] || undefined
            });
        // support for https://www.npmjs.com/package/form-data api
        } else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders)) {
            headers.set(data.getHeaders());
            if (!headers.hasContentLength()) {
                try {
                    const knownLength = await util__default["default"].promisify(data.getLength).call(data);
                    Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
                /*eslint no-empty:0*/ } catch (e) {}
            }
        } else if (utils$1.isBlob(data) || utils$1.isFile(data)) {
            data.size && headers.setContentType(data.type || "application/octet-stream");
            headers.setContentLength(data.size || 0);
            data = stream__default["default"].Readable.from(readBlob$1(data));
        } else if (data && !utils$1.isStream(data)) {
            if (Buffer.isBuffer(data)) ;
            else if (utils$1.isArrayBuffer(data)) {
                data = Buffer.from(new Uint8Array(data));
            } else if (utils$1.isString(data)) {
                data = Buffer.from(data, "utf-8");
            } else {
                return reject(new AxiosError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", AxiosError.ERR_BAD_REQUEST, config));
            }
            // Add Content-Length header if data exists
            headers.setContentLength(data.length, false);
            if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
                return reject(new AxiosError("Request body larger than maxBodyLength limit", AxiosError.ERR_BAD_REQUEST, config));
            }
        }
        const contentLength = utils$1.toFiniteNumber(headers.getContentLength());
        if (utils$1.isArray(maxRate)) {
            maxUploadRate = maxRate[0];
            maxDownloadRate = maxRate[1];
        } else {
            maxUploadRate = maxDownloadRate = maxRate;
        }
        if (data && (onUploadProgress || maxUploadRate)) {
            if (!utils$1.isStream(data)) {
                data = stream__default["default"].Readable.from(data, {
                    objectMode: false
                });
            }
            data = stream__default["default"].pipeline([
                data,
                new AxiosTransformStream$1({
                    maxRate: utils$1.toFiniteNumber(maxUploadRate)
                })
            ], utils$1.noop);
            onUploadProgress && data.on("progress", flushOnFinish(data, progressEventDecorator(contentLength, progressEventReducer(asyncDecorator(onUploadProgress), false, 3))));
        }
        // HTTP basic authentication
        let auth = undefined;
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password || "";
            auth = username + ":" + password;
        }
        if (!auth && parsed.username) {
            const urlUsername = parsed.username;
            const urlPassword = parsed.password;
            auth = urlUsername + ":" + urlPassword;
        }
        auth && headers.delete("authorization");
        let path;
        try {
            path = buildURL(parsed.pathname + parsed.search, config.params, config.paramsSerializer).replace(/^\?/, "");
        } catch (err) {
            const customErr = new Error(err.message);
            customErr.config = config;
            customErr.url = config.url;
            customErr.exists = true;
            return reject(customErr);
        }
        headers.set("Accept-Encoding", "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""), false);
        const options = {
            path,
            method: method,
            headers: headers.toJSON(),
            agents: {
                http: config.httpAgent,
                https: config.httpsAgent
            },
            auth,
            protocol,
            family,
            beforeRedirect: dispatchBeforeRedirect,
            beforeRedirects: {}
        };
        // cacheable-lookup integration hotfix
        !utils$1.isUndefined(lookup) && (options.lookup = lookup);
        if (config.socketPath) {
            options.socketPath = config.socketPath;
        } else {
            options.hostname = parsed.hostname.startsWith("[") ? parsed.hostname.slice(1, -1) : parsed.hostname;
            options.port = parsed.port;
            setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
        }
        let transport;
        const isHttpsRequest = isHttps.test(options.protocol);
        options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        if (config.transport) {
            transport = config.transport;
        } else if (config.maxRedirects === 0) {
            transport = isHttpsRequest ? https__default["default"] : http__default["default"];
        } else {
            if (config.maxRedirects) {
                options.maxRedirects = config.maxRedirects;
            }
            if (config.beforeRedirect) {
                options.beforeRedirects.config = config.beforeRedirect;
            }
            transport = isHttpsRequest ? httpsFollow : httpFollow;
        }
        if (config.maxBodyLength > -1) {
            options.maxBodyLength = config.maxBodyLength;
        } else {
            // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
            options.maxBodyLength = Infinity;
        }
        if (config.insecureHTTPParser) {
            options.insecureHTTPParser = config.insecureHTTPParser;
        }
        // Create the request
        req = transport.request(options, function handleResponse(res) {
            if (req.destroyed) return;
            const streams = [
                res
            ];
            const responseLength = +res.headers["content-length"];
            if (onDownloadProgress || maxDownloadRate) {
                const transformStream = new AxiosTransformStream$1({
                    maxRate: utils$1.toFiniteNumber(maxDownloadRate)
                });
                onDownloadProgress && transformStream.on("progress", flushOnFinish(transformStream, progressEventDecorator(responseLength, progressEventReducer(asyncDecorator(onDownloadProgress), true, 3))));
                streams.push(transformStream);
            }
            // decompress the response body transparently if required
            let responseStream = res;
            // return the last request in case of redirects
            const lastRequest = res.req || req;
            // if decompress disabled we should not decompress
            if (config.decompress !== false && res.headers["content-encoding"]) {
                // if no content, but headers still say that it is encoded,
                // remove the header not confuse downstream operations
                if (method === "HEAD" || res.statusCode === 204) {
                    delete res.headers["content-encoding"];
                }
                switch((res.headers["content-encoding"] || "").toLowerCase()){
                    /*eslint default-case:0*/ case "gzip":
                    case "x-gzip":
                    case "compress":
                    case "x-compress":
                        // add the unzipper to the body stream processing pipeline
                        streams.push(zlib__default["default"].createUnzip(zlibOptions));
                        // remove the content-encoding in order to not confuse downstream operations
                        delete res.headers["content-encoding"];
                        break;
                    case "deflate":
                        streams.push(new ZlibHeaderTransformStream$1());
                        // add the unzipper to the body stream processing pipeline
                        streams.push(zlib__default["default"].createUnzip(zlibOptions));
                        // remove the content-encoding in order to not confuse downstream operations
                        delete res.headers["content-encoding"];
                        break;
                    case "br":
                        if (isBrotliSupported) {
                            streams.push(zlib__default["default"].createBrotliDecompress(brotliOptions));
                            delete res.headers["content-encoding"];
                        }
                }
            }
            responseStream = streams.length > 1 ? stream__default["default"].pipeline(streams, utils$1.noop) : streams[0];
            const offListeners = stream__default["default"].finished(responseStream, ()=>{
                offListeners();
                onFinished();
            });
            const response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: new AxiosHeaders$1(res.headers),
                config,
                request: lastRequest
            };
            if (responseType === "stream") {
                response.data = responseStream;
                settle(resolve, reject, response);
            } else {
                const responseBuffer = [];
                let totalResponseBytes = 0;
                responseStream.on("data", function handleStreamData(chunk) {
                    responseBuffer.push(chunk);
                    totalResponseBytes += chunk.length;
                    // make sure the content length is not over the maxContentLength if specified
                    if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                        // stream.destroy() emit aborted event before calling reject() on Node.js v16
                        rejected = true;
                        responseStream.destroy();
                        reject(new AxiosError("maxContentLength size of " + config.maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
                    }
                });
                responseStream.on("aborted", function handlerStreamAborted() {
                    if (rejected) {
                        return;
                    }
                    const err = new AxiosError("stream has been aborted", AxiosError.ERR_BAD_RESPONSE, config, lastRequest);
                    responseStream.destroy(err);
                    reject(err);
                });
                responseStream.on("error", function handleStreamError(err) {
                    if (req.destroyed) return;
                    reject(AxiosError.from(err, null, config, lastRequest));
                });
                responseStream.on("end", function handleStreamEnd() {
                    try {
                        let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
                        if (responseType !== "arraybuffer") {
                            responseData = responseData.toString(responseEncoding);
                            if (!responseEncoding || responseEncoding === "utf8") {
                                responseData = utils$1.stripBOM(responseData);
                            }
                        }
                        response.data = responseData;
                    } catch (err) {
                        return reject(AxiosError.from(err, null, config, response.request, response));
                    }
                    settle(resolve, reject, response);
                });
            }
            emitter.once("abort", (err)=>{
                if (!responseStream.destroyed) {
                    responseStream.emit("error", err);
                    responseStream.destroy();
                }
            });
        });
        emitter.once("abort", (err)=>{
            reject(err);
            req.destroy(err);
        });
        // Handle errors
        req.on("error", function handleRequestError(err) {
            // @todo remove
            // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
            reject(AxiosError.from(err, null, config, req));
        });
        // set tcp keep alive to prevent drop connection by peer
        req.on("socket", function handleRequestSocket(socket) {
            // default interval of sending ack packet is 1 minute
            socket.setKeepAlive(true, 1000 * 60);
        });
        // Handle request timeout
        if (config.timeout) {
            // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
            const timeout = parseInt(config.timeout, 10);
            if (Number.isNaN(timeout)) {
                reject(new AxiosError("error trying to parse `config.timeout` to int", AxiosError.ERR_BAD_OPTION_VALUE, config, req));
                return;
            }
            // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
            // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
            // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
            // And then these socket which be hang up will devouring CPU little by little.
            // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
            req.setTimeout(timeout, function handleRequestTimeout() {
                if (isDone) return;
                let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
                const transitional = config.transitional || transitionalDefaults;
                if (config.timeoutErrorMessage) {
                    timeoutErrorMessage = config.timeoutErrorMessage;
                }
                reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req));
                abort();
            });
        }
        // Send the request
        if (utils$1.isStream(data)) {
            let ended = false;
            let errored = false;
            data.on("end", ()=>{
                ended = true;
            });
            data.once("error", (err)=>{
                errored = true;
                req.destroy(err);
            });
            data.on("close", ()=>{
                if (!ended && !errored) {
                    abort(new CanceledError("Request stream has been aborted", config, req));
                }
            });
            data.pipe(req);
        } else {
            req.end(data);
        }
    });
};
const isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, platform.origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL(platform.origin), platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)) : ()=>true;
const cookies = platform.hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + "=" + encodeURIComponent(value)
        ];
        utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils$1.isString(path) && cookie.push("path=" + path);
        utils$1.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
    },
    read (name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, "", Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};
const headersToObject = (thing)=>thing instanceof AxiosHeaders$1 ? {
        ...thing
    } : thing;
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */ function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
        if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
            return utils$1.merge.call({
                caseless
            }, target, source);
        } else if (utils$1.isPlainObject(source)) {
            return utils$1.merge({}, source);
        } else if (utils$1.isArray(source)) {
            return source.slice();
        }
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!utils$1.isUndefined(b)) {
            return getMergedValue(a, b, prop, caseless);
        } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(undefined, a, prop, caseless);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
            return getMergedValue(undefined, b);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
            return getMergedValue(undefined, b);
        } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(undefined, a);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
            return getMergedValue(a, b);
        } else if (prop in config1) {
            return getMergedValue(undefined, a);
        }
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}
const resolveConfig = (config)=>{
    const newConfig = mergeConfig({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders$1.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) {
        headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")));
    }
    let contentType;
    if (utils$1.isFormData(data)) {
        if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
            headers.setContentType(undefined); // Let the browser set it
        } else if ((contentType = headers.getContentType()) !== false) {
            // fix semicolon duplication issue for ReactNative FormData implementation
            const [type, ...tokens] = contentType ? contentType.split(";").map((token)=>token.trim()).filter(Boolean) : [];
            headers.setContentType([
                type || "multipart/form-data",
                ...tokens
            ].join("; "));
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.hasStandardBrowserEnv) {
        withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
            if (xsrfValue) {
                headers.set(xsrfHeaderName, xsrfValue);
            }
        }
    }
    return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = resolveConfig(config);
        let requestData = _config.data;
        const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener("abort", onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            const responseHeaders = AxiosHeaders$1.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = _config.transitional || transitionalDefaults;
            if (_config.timeoutErrorMessage) {
                timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) {
            utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
            });
        }
        // Add withCredentials to request if needed
        if (!utils$1.isUndefined(_config.withCredentials)) {
            request.withCredentials = !!_config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== "json") {
            request.responseType = _config.responseType;
        }
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
            request.addEventListener("progress", downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
            request.upload.addEventListener("progress", uploadThrottled);
            request.upload.addEventListener("loadend", flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) {
                    return;
                }
                reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
                _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
            }
        }
        const protocol = parseProtocol(_config.url);
        if (protocol && platform.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};
const composeSignals = (signals, timeout)=>{
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener("abort", onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener("abort", onabort));
        const { signal } = controller;
        signal.unsubscribe = ()=>utils$1.asap(unsubscribe);
        return signal;
    }
};
const composeSignals$1 = composeSignals;
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize) {
    for await (const chunk of readStream(iterable)){
        yield* streamChunk(chunk, chunkSize);
    }
};
const readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const trackStream = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};
const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const supportsRequestStream = isReadableStreamSupported && test(()=>{
    let duplexAccessed = false;
    const hasContentType = new Request(platform.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex () {
            duplexAccessed = true;
            return "half";
        }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported && test(()=>utils$1.isReadableStream(new Response("").body));
const resolvers = {
    stream: supportsResponseStream && ((res)=>res.body)
};
isFetchSupported && ((res)=>{
    [
        "text",
        "arrayBuffer",
        "blob",
        "formData",
        "stream"
    ].forEach((type)=>{
        !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res)=>res[type]() : (_, config)=>{
            throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
        });
    });
})(new Response);
const getBodyLength = async (body)=>{
    if (body == null) {
        return 0;
    }
    if (utils$1.isBlob(body)) {
        return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
        const _request = new Request(platform.origin, {
            method: "POST",
            body
        });
        return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
        return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
        body = body + "";
    }
    if (utils$1.isString(body)) {
        return (await encodeText(body)).byteLength;
    }
};
const resolveBodyLength = async (headers, body)=>{
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
};
const fetchAdapter = isFetchSupported && (async (config)=>{
    let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions } = resolveConfig(config);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals$1([
        signal,
        cancelToken && cancelToken.toAbortSignal()
    ], timeout);
    let request;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
        composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
        if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request(url, {
                method: "POST",
                body: data,
                duplex: "half"
            });
            let contentTypeHeader;
            if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
                headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
                const [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
                data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
        }
        if (!utils$1.isString(withCredentials)) {
            withCredentials = withCredentials ? "include" : "omit";
        }
        // Cloudflare Workers throws when credentials are defined
        // see https://github.com/cloudflare/workerd/issues/902
        const isCredentialsSupported = "credentials" in Request.prototype;
        request = new Request(url, {
            ...fetchOptions,
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : undefined
        });
        let response = await fetch(request);
        const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
        if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
            const options = {};
            [
                "status",
                "statusText",
                "headers"
            ].forEach((prop)=>{
                options[prop] = response[prop];
            });
            const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
            const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
            response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                flush && flush();
                unsubscribe && unsubscribe();
            }), options);
        }
        responseType = responseType || "text";
        let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
        !isStreamResponse && unsubscribe && unsubscribe();
        return await new Promise((resolve, reject)=>{
            settle(resolve, reject, {
                data: responseData,
                headers: AxiosHeaders$1.from(response.headers),
                status: response.status,
                statusText: response.statusText,
                config,
                request
            });
        });
    } catch (err) {
        unsubscribe && unsubscribe();
        if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
            throw Object.assign(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request), {
                cause: err.cause || err
            });
        }
        throw AxiosError.from(err, err && err.code, config, request);
    }
});
const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter,
    fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
const renderReason = (reason)=>`- ${reason}`;
const isResolvedHandle = (adapter)=>utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
    getAdapter: (adapters)=>{
        adapters = utils$1.isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
                adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) {
                    throw new AxiosError(`Unknown adapter '${id}'`);
                }
            }
            if (adapter) {
                break;
            }
            rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new AxiosError(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
        }
        return adapter;
    },
    adapters: knownAdapters
};
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new CanceledError(null, config);
    }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */ function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);
    // Transform request data
    config.data = transformData.call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) {
        config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, config.transformResponse, response);
        response.headers = AxiosHeaders$1.from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}
const validators$1 = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators$1[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) {
            throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
validators$1.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
        throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
        }
    }
}
const validator = {
    assertOptions,
    validators: validators$1
};
const validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager$1(),
            response: new InterceptorManager$1()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
                try {
                    if (!err.stack) {
                        err.stack = stack;
                    // match without the 2 top stack lines
                    } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                        err.stack += "\n" + stack;
                    }
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) {
            validator.assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
        }
        if (paramsSerializer != null) {
            if (utils$1.isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                    serialize: paramsSerializer
                };
            } else {
                validator.assertOptions(paramsSerializer, {
                    encode: validators.function,
                    serialize: validators.function
                }, true);
            }
        }
        validator.assertOptions(config, {
            baseUrl: validators.spelling("baseURL"),
            withXsrfToken: validators.spelling("withXSRFToken")
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        // Flatten headers
        let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
        headers && utils$1.forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
                return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                dispatchRequest.bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len){
                promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len){
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
    }
    getUri(config) {
        config = mergeConfig(this.defaults, config);
        const fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
utils$1.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
utils$1.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
const Axios$1 = Axios;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0){
                token._listeners[i](cancel);
            }
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) {
                // Cancellation has already been requested
                return;
            }
            token.reason = new CanceledError(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(listener);
        } else {
            this._listeners = [
                listener
            ];
        }
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) {
            return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
const CancelToken$1 = CancelToken;
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */ function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ function isAxiosError(payload) {
    return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
const HttpStatusCode$1 = HttpStatusCode;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new Axios$1(defaultConfig);
    const instance = bind(Axios$1.prototype.request, context);
    // Copy axios.prototype to instance
    utils$1.extend(instance, Axios$1.prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    utils$1.extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance(defaults$1);
// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;
// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
// Expose AxiosError class
axios.AxiosError = AxiosError;
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = spread;
// Expose isAxiosError
axios.isAxiosError = isAxiosError;
// Expose mergeConfig
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing)=>formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
module.exports = axios; //# sourceMappingURL=axios.cjs.map


/***/ }),

/***/ 4667:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"razorpay","version":"2.9.5","description":"Official Node SDK for Razorpay API","main":"dist/razorpay","typings":"dist/razorpay","scripts":{"prepublish":"npm test","clean":"rm -rf dist && mkdir dist","cp-types":"mkdir dist/types && cp lib/types/* dist/types && cp lib/utils/*d.ts dist/utils","cp-ts":"cp lib/razorpay.d.ts dist/ && npm run cp-types","build:commonjs":"babel lib -d dist","build":"npm run clean && npm run build:commonjs && npm run cp-ts","debug":"npm run build && node-debug examples/index.js","test":"npm run build && mocha --recursive --require babel-register test/ && nyc --reporter=text mocha","coverage":"nyc report --reporter=text-lcov > coverage.lcov"},"repository":{"type":"git","url":"https://github.com/razorpay/razorpay-node.git"},"keywords":["razorpay","payments","node","nodejs","razorpay-node"],"files":["dist"],"mocha":{"recursive":true,"full-trace":true},"license":"MIT","devDependencies":{"@types/node":"^20.12.12","babel-cli":"^6.26.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.0","babel-register":"^6.26.0","chai":"^4.3.4","deep-equal":"^2.0.5","mocha":"^9.0.0","nock":"^13.1.1","nyc":"^15.1.0","typescript":"^4.9.4"},"dependencies":{"axios":"^1.6.8"}}');

/***/ })

};
;