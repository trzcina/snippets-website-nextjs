"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchResponseError = _interopRequireDefault(require("../model/BatchResponseError"));

var _BatchResponseSuccess = _interopRequireDefault(require("../model/BatchResponseSuccess"));

var _Example = _interopRequireDefault(require("../model/Example"));

var _ExampleList = _interopRequireDefault(require("../model/ExampleList"));

var _ExampleVersionsList = _interopRequireDefault(require("../model/ExampleVersionsList"));

var _ExampleWithoutInternal = _interopRequireDefault(require("../model/ExampleWithoutInternal"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse4001"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse4002"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse4003"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse4004"));

var _Model401Response = _interopRequireDefault(require("../model/Model401Response"));

var _Model403Response = _interopRequireDefault(require("../model/Model403Response"));

var _Model404Response = _interopRequireDefault(require("../model/Model404Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ContentExample service.
* @module api/ContentExampleApi
* @version 2.0.1
*/
var ContentExampleApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContentExampleApi. 
  * @alias module:api/ContentExampleApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContentExampleApi(apiClient) {
    _classCallCheck(this, ContentExampleApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Allows you to create or create and update up to 100 objects of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FbatchCreateExample'><button class=\"flotiq-button\">Try it out</button><a>
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
   * @param {Array.<module:model/ExampleWithoutInternal>} opts.exampleWithoutInternal 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchResponseSuccess} and HTTP response
   */


  _createClass(ContentExampleApi, [{
    key: "batchCreateExampleWithHttpInfo",
    value: function batchCreateExampleWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['exampleWithoutInternal'];
      var pathParams = {};
      var queryParams = {
        'updateExisting': opts['updateExisting']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BatchResponseSuccess["default"];
      return this.apiClient.callApi('/api/v1/content/example/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to create or create and update up to 100 objects of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FbatchCreateExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
     * @param {Array.<module:model/ExampleWithoutInternal>} opts.exampleWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchResponseSuccess}
     */

  }, {
    key: "batchCreateExample",
    value: function batchCreateExample(opts) {
      return this.batchCreateExampleWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows you to dlete up to 100 objects of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FbatchDeleteExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "batchDeleteExampleWithHttpInfo",
    value: function batchDeleteExampleWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['requestBody'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/api/v1/content/example/batch-delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to dlete up to 100 objects of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FbatchDeleteExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "batchDeleteExample",
    value: function batchDeleteExample(opts) {
      return this.batchDeleteExampleWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows you to create object of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FcreateExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/ExampleWithoutInternal} opts.exampleWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Example} and HTTP response
     */

  }, {
    key: "createExampleWithHttpInfo",
    value: function createExampleWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['exampleWithoutInternal'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Example["default"];
      return this.apiClient.callApi('/api/v1/content/example', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to create object of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FcreateExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/ExampleWithoutInternal} opts.exampleWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Example}
     */

  }, {
    key: "createExample",
    value: function createExample(opts) {
      return this.createExampleWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Removes Example object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FdeleteExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteExampleWithHttpInfo",
    value: function deleteExampleWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteExample");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/content/example/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Removes Example object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FdeleteExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteExample",
    value: function deleteExample(id) {
      return this.deleteExampleWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns all information about Example object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Example} and HTTP response
     */

  }, {
    key: "getExampleWithHttpInfo",
    value: function getExampleWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getExample");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'hydrate': opts['hydrate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Example["default"];
      return this.apiClient.callApi('/api/v1/content/example/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns all information about Example object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Example}
     */

  }, {
    key: "getExample",
    value: function getExample(id, opts) {
      return this.getExampleWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Return version of Example object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {String} versionId ContentObject version identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Example} and HTTP response
     */

  }, {
    key: "getExampleVersionsWithHttpInfo",
    value: function getExampleVersionsWithHttpInfo(id, versionId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getExampleVersions");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getExampleVersions");
      }

      var pathParams = {
        'id': id,
        'versionId': versionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Example["default"];
      return this.apiClient.callApi('/api/v1/content/example/{id}/version/{versionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Return version of Example object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {String} versionId ContentObject version identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Example}
     */

  }, {
    key: "getExampleVersions",
    value: function getExampleVersions(id, versionId) {
      return this.getExampleVersionsWithHttpInfo(id, versionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get ids of removed Example objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetRemovedExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */

  }, {
    key: "getRemovedExampleWithHttpInfo",
    value: function getRemovedExampleWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'deletedAfter': opts['deletedAfter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/api/v1/content/example/removed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get ids of removed Example objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetRemovedExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */

  }, {
    key: "getRemovedExample",
    value: function getRemovedExample(opts) {
      return this.getRemovedExampleWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List objects of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FlistExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {Array.<String>} opts.ids Ids of objects to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExampleList} and HTTP response
     */

  }, {
    key: "listExampleWithHttpInfo",
    value: function listExampleWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'hydrate': opts['hydrate'],
        'filters': opts['filters'],
        'ids[]': this.apiClient.buildCollectionParam(opts['ids'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExampleList["default"];
      return this.apiClient.callApi('/api/v1/content/example', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List objects of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FlistExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {Array.<String>} opts.ids Ids of objects to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExampleList}
     */

  }, {
    key: "listExample",
    value: function listExample(opts) {
      return this.listExampleWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List objects versions of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FlistExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExampleVersionsList} and HTTP response
     */

  }, {
    key: "listExampleVersionWithHttpInfo",
    value: function listExampleVersionWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listExampleVersion");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExampleVersionsList["default"];
      return this.apiClient.callApi('/api/v1/content/example/{id}/version', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List objects versions of Example type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FlistExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExampleVersionsList}
     */

  }, {
    key: "listExampleVersion",
    value: function listExampleVersion(id, opts) {
      return this.listExampleVersionWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows update of the Example object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FupdateExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/ExampleWithoutInternal} opts.exampleWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Example} and HTTP response
     */

  }, {
    key: "updateExampleWithHttpInfo",
    value: function updateExampleWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['exampleWithoutInternal']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateExample");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Example["default"];
      return this.apiClient.callApi('/api/v1/content/example/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows update of the Example object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FupdateExample'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/ExampleWithoutInternal} opts.exampleWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Example}
     */

  }, {
    key: "updateExample",
    value: function updateExample(id, opts) {
      return this.updateExampleWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ContentExampleApi;
}();

exports["default"] = ContentExampleApi;
