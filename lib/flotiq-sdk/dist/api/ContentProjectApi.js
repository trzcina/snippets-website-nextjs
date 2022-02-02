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

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse4007"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse4008"));

var _Model401Response = _interopRequireDefault(require("../model/Model401Response"));

var _Model403Response = _interopRequireDefault(require("../model/Model403Response"));

var _Model404Response = _interopRequireDefault(require("../model/Model404Response"));

var _Project = _interopRequireDefault(require("../model/Project"));

var _ProjectList = _interopRequireDefault(require("../model/ProjectList"));

var _ProjectVersionsList = _interopRequireDefault(require("../model/ProjectVersionsList"));

var _ProjectWithoutInternal = _interopRequireDefault(require("../model/ProjectWithoutInternal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ContentProject service.
* @module api/ContentProjectApi
* @version 2.0.1
*/
var ContentProjectApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContentProjectApi. 
  * @alias module:api/ContentProjectApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContentProjectApi(apiClient) {
    _classCallCheck(this, ContentProjectApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Allows you to create or create and update up to 100 objects of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FbatchCreateProject'><button class=\"flotiq-button\">Try it out</button><a>
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
   * @param {Array.<module:model/ProjectWithoutInternal>} opts.projectWithoutInternal 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchResponseSuccess} and HTTP response
   */


  _createClass(ContentProjectApi, [{
    key: "batchCreateProjectWithHttpInfo",
    value: function batchCreateProjectWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['projectWithoutInternal'];
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
      return this.apiClient.callApi('/api/v1/content/project/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to create or create and update up to 100 objects of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FbatchCreateProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
     * @param {Array.<module:model/ProjectWithoutInternal>} opts.projectWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchResponseSuccess}
     */

  }, {
    key: "batchCreateProject",
    value: function batchCreateProject(opts) {
      return this.batchCreateProjectWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows you to dlete up to 100 objects of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FbatchDeleteProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "batchDeleteProjectWithHttpInfo",
    value: function batchDeleteProjectWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/api/v1/content/project/batch-delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to dlete up to 100 objects of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FbatchDeleteProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "batchDeleteProject",
    value: function batchDeleteProject(opts) {
      return this.batchDeleteProjectWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows you to create object of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FcreateProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectWithoutInternal} opts.projectWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */

  }, {
    key: "createProjectWithHttpInfo",
    value: function createProjectWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['projectWithoutInternal'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/api/v1/content/project', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows you to create object of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FcreateProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectWithoutInternal} opts.projectWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "createProject",
    value: function createProject(opts) {
      return this.createProjectWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Removes Project object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FdeleteProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteProjectWithHttpInfo",
    value: function deleteProjectWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProject");
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
      return this.apiClient.callApi('/api/v1/content/project/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Removes Project object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FdeleteProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteProject",
    value: function deleteProject(id) {
      return this.deleteProjectWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns all information about Project object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */

  }, {
    key: "getProjectWithHttpInfo",
    value: function getProjectWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProject");
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
      var returnType = _Project["default"];
      return this.apiClient.callApi('/api/v1/content/project/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns all information about Project object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "getProject",
    value: function getProject(id, opts) {
      return this.getProjectWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Return version of Project object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {String} versionId ContentObject version identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */

  }, {
    key: "getProjectVersionsWithHttpInfo",
    value: function getProjectVersionsWithHttpInfo(id, versionId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProjectVersions");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getProjectVersions");
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
      var returnType = _Project["default"];
      return this.apiClient.callApi('/api/v1/content/project/{id}/version/{versionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Return version of Project object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {String} versionId ContentObject version identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "getProjectVersions",
    value: function getProjectVersions(id, versionId) {
      return this.getProjectVersionsWithHttpInfo(id, versionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get ids of removed Project objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetRemovedProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */

  }, {
    key: "getRemovedProjectWithHttpInfo",
    value: function getRemovedProjectWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/api/v1/content/project/removed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get ids of removed Project objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetRemovedProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */

  }, {
    key: "getRemovedProject",
    value: function getRemovedProject(opts) {
      return this.getRemovedProjectWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List objects of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FlistProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {Array.<String>} opts.ids Ids of objects to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectList} and HTTP response
     */

  }, {
    key: "listProjectWithHttpInfo",
    value: function listProjectWithHttpInfo(opts) {
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
      var returnType = _ProjectList["default"];
      return this.apiClient.callApi('/api/v1/content/project', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List objects of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FlistProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {Array.<String>} opts.ids Ids of objects to return.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectList}
     */

  }, {
    key: "listProject",
    value: function listProject(opts) {
      return this.listProjectWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List objects versions of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FlistProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectVersionsList} and HTTP response
     */

  }, {
    key: "listProjectVersionWithHttpInfo",
    value: function listProjectVersionWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listProjectVersion");
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
      var returnType = _ProjectVersionsList["default"];
      return this.apiClient.callApi('/api/v1/content/project/{id}/version', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List objects versions of Project type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FlistProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectVersionsList}
     */

  }, {
    key: "listProjectVersion",
    value: function listProjectVersion(id, opts) {
      return this.listProjectVersionWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Allows update of the Project object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FupdateProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectWithoutInternal} opts.projectWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */

  }, {
    key: "updateProjectWithHttpInfo",
    value: function updateProjectWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['projectWithoutInternal']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProject");
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
      var returnType = _Project["default"];
      return this.apiClient.callApi('/api/v1/content/project/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Allows update of the Project object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FupdateProject'><button class=\"flotiq-button\">Try it out</button><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectWithoutInternal} opts.projectWithoutInternal 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "updateProject",
    value: function updateProject(id, opts) {
      return this.updateProjectWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ContentProjectApi;
}();

exports["default"] = ContentProjectApi;
