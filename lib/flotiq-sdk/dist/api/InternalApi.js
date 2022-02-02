"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContentTypeDefinitionSchema = _interopRequireDefault(require("../model/ContentTypeDefinitionSchema"));

var _ContentTypeListResponse = _interopRequireDefault(require("../model/ContentTypeListResponse"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40010"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse4009"));

var _Model401Response = _interopRequireDefault(require("../model/Model401Response"));

var _Model404Response = _interopRequireDefault(require("../model/Model404Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Internal service.
* @module api/InternalApi
* @version 2.0.1
*/
var InternalApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InternalApi. 
  * @alias module:api/InternalApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InternalApi(apiClient) {
    _classCallCheck(this, InternalApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete ContentTypeDefinition
   * @param {String} id Id of content type definition
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(InternalApi, [{
    key: "deleteContentDefinitionWithHttpInfo",
    value: function deleteContentDefinitionWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteContentDefinition");
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
      return this.apiClient.callApi('/api/v1/internal/contenttype/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete ContentTypeDefinition
     * @param {String} id Id of content type definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteContentDefinition",
    value: function deleteContentDefinition(id) {
      return this.deleteContentDefinitionWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns an user-defined Content Definitions
     * @param {String} id Id of content type definition
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.resolveRef Should the system resolve references done using $ref (default to false)
     * @param {Boolean} opts.strictSchema Use 'schema' instead of 'schemaDefinition' (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContentTypeDefinitionSchema} and HTTP response
     */

  }, {
    key: "getContentDefinitionWithHttpInfo",
    value: function getContentDefinitionWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContentDefinition");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'resolveRef': opts['resolveRef'],
        'strictSchema': opts['strictSchema']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContentTypeDefinitionSchema["default"];
      return this.apiClient.callApi('/api/v1/internal/contenttype/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns an user-defined Content Definitions
     * @param {String} id Id of content type definition
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.resolveRef Should the system resolve references done using $ref (default to false)
     * @param {Boolean} opts.strictSchema Use 'schema' instead of 'schemaDefinition' (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContentTypeDefinitionSchema}
     */

  }, {
    key: "getContentDefinition",
    value: function getContentDefinition(id, opts) {
      return this.getContentDefinitionWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns an array of user-defined Content Definitions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'name')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {String} opts.name Filters CTDs by name (default to '')
     * @param {String} opts.label Filters CTDs by label (default to '')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContentTypeListResponse} and HTTP response
     */

  }, {
    key: "getContentDefinitionsWithHttpInfo",
    value: function getContentDefinitionsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'name': opts['name'],
        'label': opts['label']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContentTypeListResponse["default"];
      return this.apiClient.callApi('/api/v1/internal/contenttype', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns an array of user-defined Content Definitions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'name')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {String} opts.name Filters CTDs by name (default to '')
     * @param {String} opts.label Filters CTDs by label (default to '')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContentTypeListResponse}
     */

  }, {
    key: "getContentDefinitions",
    value: function getContentDefinitions(opts) {
      return this.getContentDefinitionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create new ContentTypeDefinition to store new type of ContentObjects
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentTypeDefinitionSchema} opts.contentTypeDefinitionSchema 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContentTypeDefinitionSchema} and HTTP response
     */

  }, {
    key: "postContentDefinitionWithHttpInfo",
    value: function postContentDefinitionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['contentTypeDefinitionSchema'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ContentTypeDefinitionSchema["default"];
      return this.apiClient.callApi('/api/v1/internal/contenttype', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create new ContentTypeDefinition to store new type of ContentObjects
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentTypeDefinitionSchema} opts.contentTypeDefinitionSchema 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContentTypeDefinitionSchema}
     */

  }, {
    key: "postContentDefinition",
    value: function postContentDefinition(opts) {
      return this.postContentDefinitionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update ConentTypeDefinition
     * @param {String} id Id of content type definition
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentTypeDefinitionSchema} opts.contentTypeDefinitionSchema 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContentTypeDefinitionSchema} and HTTP response
     */

  }, {
    key: "putContentDefinitionWithHttpInfo",
    value: function putContentDefinitionWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['contentTypeDefinitionSchema']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putContentDefinition");
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
      var returnType = _ContentTypeDefinitionSchema["default"];
      return this.apiClient.callApi('/api/v1/internal/contenttype/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update ConentTypeDefinition
     * @param {String} id Id of content type definition
     * @param {Object} opts Optional parameters
     * @param {module:model/ContentTypeDefinitionSchema} opts.contentTypeDefinitionSchema 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContentTypeDefinitionSchema}
     */

  }, {
    key: "putContentDefinition",
    value: function putContentDefinition(id, opts) {
      return this.putContentDefinitionWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InternalApi;
}();

exports["default"] = InternalApi;