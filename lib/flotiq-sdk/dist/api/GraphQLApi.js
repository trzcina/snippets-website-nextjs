"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _Model401Response = _interopRequireDefault(require("../model/Model401Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* GraphQL service.
* @module api/GraphQLApi
* @version 2.0.1
*/
var GraphQLApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GraphQLApi. 
  * @alias module:api/GraphQLApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GraphQLApi(apiClient) {
    _classCallCheck(this, GraphQLApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Endpoint for GraphQL Queries for Headless Types
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject} opts.inlineObject 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(GraphQLApi, [{
    key: "graphQLWithHttpInfo",
    value: function graphQLWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/graphql', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Endpoint for GraphQL Queries for Headless Types
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "graphQL",
    value: function graphQL(opts) {
      return this.graphQLWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get current descripion of GraphQL Schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "graphQLSchemaWithHttpInfo",
    value: function graphQLSchemaWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['text/html', 'application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/graphql/schema', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get current descripion of GraphQL Schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "graphQLSchema",
    value: function graphQLSchema() {
      return this.graphQLSchemaWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GraphQLApi;
}();

exports["default"] = GraphQLApi;