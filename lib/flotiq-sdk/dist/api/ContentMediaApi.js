"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchResponseError = _interopRequireDefault(require("../model/BatchResponseError"));

var _BatchResponseSuccess = _interopRequireDefault(require("../model/BatchResponseSuccess"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse4002"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse4004"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse4005"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse4006"));

var _Media = _interopRequireDefault(require("../model/Media"));

var _MediaList = _interopRequireDefault(require("../model/MediaList"));

var _MediaVersionsList = _interopRequireDefault(require("../model/MediaVersionsList"));

var _MediaWithoutInternal = _interopRequireDefault(require("../model/MediaWithoutInternal"));

var _Model401Response = _interopRequireDefault(require("../model/Model401Response"));

var _Model403Response = _interopRequireDefault(require("../model/Model403Response"));

var _Model404Response = _interopRequireDefault(require("../model/Model404Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ContentMedia service.
* @module api/ContentMediaApi
* @version 2.0.1
*/
var ContentMediaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContentMediaApi. 
  * @alias module:api/ContentMediaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContentMediaApi(apiClient) {
    _classCallCheck(this, ContentMediaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Allows you to create or create and update up to 100 objects of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FbatchCreate_media'><button class=\"flotiq-button\">Try it out</button><a>
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
   * @param {Array.<module:model/MediaWithoutInternal>} opts.mediaWithoutInternal 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchResponseSuccess} and HTTP response
   */


  _createClass(ContentMediaApi, [{
    key: "batchCreateMediaWithHttpInfo",
    value: function batchCreateMediaWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['mediaWithoutInternal'];
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
      return this.apiClient.callApi('/api/v1/content/_media/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to create or create and update up to 100 objects of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FbatchCreate_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
     * @param {Array.<module:model/MediaWithoutInternal>} opts.mediaWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchResponseSuccess}
     */

  }, {
    key: "batchCreateMedia",
    value: function batchCreateMedia(opts) {
      return this.batchCreateMediaWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows you to dlete up to 100 objects of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FbatchDelete_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "batchDeleteMediaWithHttpInfo",
    value: function batchDeleteMediaWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/api/v1/content/_media/batch-delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to dlete up to 100 objects of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FbatchDelete_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "batchDeleteMedia",
    value: function batchDeleteMedia(opts) {
      return this.batchDeleteMediaWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows you to create object of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fcreate_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/MediaWithoutInternal} opts.mediaWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Media} and HTTP response
     */

  }, {
    key: "createMediaWithHttpInfo",
    value: function createMediaWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['mediaWithoutInternal'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Media["default"];
      return this.apiClient.callApi('/api/v1/content/_media', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to create object of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fcreate_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/MediaWithoutInternal} opts.mediaWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Media}
     */

  }, {
    key: "createMedia",
    value: function createMedia(opts) {
      return this.createMediaWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Removes Media object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fdelete_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteMediaWithHttpInfo",
    value: function deleteMediaWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMedia");
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
      return this.apiClient.callApi('/api/v1/content/_media/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Removes Media object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fdelete_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteMedia",
    value: function deleteMedia(id) {
      return this.deleteMediaWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns all information about Media object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fget_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Media} and HTTP response
     */

  }, {
    key: "getMediaWithHttpInfo",
    value: function getMediaWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMedia");
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
      var returnType = _Media["default"];
      return this.apiClient.callApi('/api/v1/content/_media/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns all information about Media object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fget_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Media}
     */

  }, {
    key: "getMedia",
    value: function getMedia(id, opts) {
      return this.getMediaWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Return version of Media object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fget_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {String} versionId ContentObject version identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Media} and HTTP response
     */

  }, {
    key: "getMediaVersionsWithHttpInfo",
    value: function getMediaVersionsWithHttpInfo(id, versionId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMediaVersions");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getMediaVersions");
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
      var returnType = _Media["default"];
      return this.apiClient.callApi('/api/v1/content/_media/{id}/version/{versionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Return version of Media object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fget_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {String} versionId ContentObject version identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Media}
     */

  }, {
    key: "getMediaVersions",
    value: function getMediaVersions(id, versionId) {
      return this.getMediaVersionsWithHttpInfo(id, versionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get ids of removed Media objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FgetRemoved_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */

  }, {
    key: "getRemovedMediaWithHttpInfo",
    value: function getRemovedMediaWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/api/v1/content/_media/removed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get ids of removed Media objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FgetRemoved_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */

  }, {
    key: "getRemovedMedia",
    value: function getRemovedMedia(opts) {
      return this.getRemovedMediaWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List objects of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Flist_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {Array.<String>} opts.ids Ids of objects to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaList} and HTTP response
     */

  }, {
    key: "listMediaWithHttpInfo",
    value: function listMediaWithHttpInfo(opts) {
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
      var returnType = _MediaList["default"];
      return this.apiClient.callApi('/api/v1/content/_media', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List objects of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Flist_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {Array.<String>} opts.ids Ids of objects to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaList}
     */

  }, {
    key: "listMedia",
    value: function listMedia(opts) {
      return this.listMediaWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List objects versions of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Flist_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaVersionsList} and HTTP response
     */

  }, {
    key: "listMediaVersionWithHttpInfo",
    value: function listMediaVersionWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listMediaVersion");
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
      var returnType = _MediaVersionsList["default"];
      return this.apiClient.callApi('/api/v1/content/_media/{id}/version', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List objects versions of Media type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Flist_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaVersionsList}
     */

  }, {
    key: "listMediaVersion",
    value: function listMediaVersion(id, opts) {
      return this.listMediaVersionWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows update of the Media object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fupdate_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/MediaWithoutInternal} opts.mediaWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Media} and HTTP response
     */

  }, {
    key: "updateMediaWithHttpInfo",
    value: function updateMediaWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['mediaWithoutInternal']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateMedia");
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
      var returnType = _Media["default"];
      return this.apiClient.callApi('/api/v1/content/_media/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows update of the Media object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fupdate_media'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/MediaWithoutInternal} opts.mediaWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Media}
     */

  }, {
    key: "updateMedia",
    value: function updateMedia(id, opts) {
      return this.updateMediaWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ContentMediaApi;
}();

exports["default"] = ContentMediaApi;
