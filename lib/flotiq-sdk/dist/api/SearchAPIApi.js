"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40011"));

var _Model401Response = _interopRequireDefault(require("../model/Model401Response"));

var _SearchResponse = _interopRequireDefault(require("../model/SearchResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* SearchAPI service.
* @module api/SearchAPIApi
* @version 2.0.1
*/
var SearchAPIApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SearchAPIApi. 
  * @alias module:api/SearchAPIApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchAPIApi(apiClient) {
    _classCallCheck(this, SearchAPIApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * The Flotiq API provides a powerful search engine, which is a wrapper for ElasticSearch queries. We tried to balance between resembling the ES API (for those, who already know it) and keeping it simple and cohesive with Flotiq API. This endpoint provides means for querying content objects that match a set of criteria, with options for:   * limiting search to specific Content Types,  * limit search to specific fields,  * weighting fields to modify results scoring,  * aggregating results by fields.   You can find more information about the Search API in the [Search API docs](https://flotiq.com/docs/API/search/).
   * @param {Object} opts Optional parameters
   * @param {String} opts.q Query (default to '')
   * @param {Array.<String>} opts.fields Search only in selected fields.
   * @param {String} opts.page Listing page number, 1-based (default to '1')
   * @param {String} opts.limit Page limit (default to '20')
   * @param {String} opts.orderBy Order by field (default to '')
   * @param {String} opts.orderDirection Order direction (default to 'asc')
   * @param {Array.<String>} opts.contentType Restrict search to content types set
   * @param {Array.<String>} opts.aggregateBy Field to aggregate results direction (string fields only)
   * @param {Array.<String>} opts.aggregateByNumeric Field to aggregate results direction with numeric type
   * @param {Object.<String, Object>} opts.filters Filter by object properties. Expected format: filters[property1]=value1&filters[property2]=value2
   * @param {Object.<String, Object>} opts.postFilters Filter by object properties. Use it when you want aggregated counts without filters applied. Expected format: post_filters[property1]=value1&post_filters[property2]=value2
   * @param {Object.<String, Object>} opts.geoFilters Filter by object geolocation properties. Example value: geo_filters[location]=geo_distance,1.50km,40.1,-19.2 (filter name, distance, latitude, longitude). For more information see ElasticSearch docs. Only geo_distance query is supported.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchResponse} and HTTP response
   */


  _createClass(SearchAPIApi, [{
    key: "searchWithHttpInfo",
    value: function searchWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'q': opts['q'],
        'fields[]': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'content_type[]': this.apiClient.buildCollectionParam(opts['contentType'], 'multi'),
        'aggregate_by[]': this.apiClient.buildCollectionParam(opts['aggregateBy'], 'multi'),
        'aggregate_by_numeric[]': this.apiClient.buildCollectionParam(opts['aggregateByNumeric'], 'multi'),
        'filters': opts['filters'],
        'post_filters': opts['postFilters'],
        'geo_filters': opts['geoFilters']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchResponse["default"];
      return this.apiClient.callApi('/api/v1/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * The Flotiq API provides a powerful search engine, which is a wrapper for ElasticSearch queries. We tried to balance between resembling the ES API (for those, who already know it) and keeping it simple and cohesive with Flotiq API. This endpoint provides means for querying content objects that match a set of criteria, with options for:   * limiting search to specific Content Types,  * limit search to specific fields,  * weighting fields to modify results scoring,  * aggregating results by fields.   You can find more information about the Search API in the [Search API docs](https://flotiq.com/docs/API/search/).
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Query (default to '')
     * @param {Array.<String>} opts.fields Search only in selected fields.
     * @param {String} opts.page Listing page number, 1-based (default to '1')
     * @param {String} opts.limit Page limit (default to '20')
     * @param {String} opts.orderBy Order by field (default to '')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Array.<String>} opts.contentType Restrict search to content types set
     * @param {Array.<String>} opts.aggregateBy Field to aggregate results direction (string fields only)
     * @param {Array.<String>} opts.aggregateByNumeric Field to aggregate results direction with numeric type
     * @param {Object.<String, Object>} opts.filters Filter by object properties. Expected format: filters[property1]=value1&filters[property2]=value2
     * @param {Object.<String, Object>} opts.postFilters Filter by object properties. Use it when you want aggregated counts without filters applied. Expected format: post_filters[property1]=value1&post_filters[property2]=value2
     * @param {Object.<String, Object>} opts.geoFilters Filter by object geolocation properties. Example value: geo_filters[location]=geo_distance,1.50km,40.1,-19.2 (filter name, distance, latitude, longitude). For more information see ElasticSearch docs. Only geo_distance query is supported.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchResponse}
     */

  }, {
    key: "search",
    value: function search(opts) {
      return this.searchWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SearchAPIApi;
}();

exports["default"] = SearchAPIApi;