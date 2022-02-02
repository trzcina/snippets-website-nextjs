"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40012"));

var _MediaWithoutInternal = _interopRequireDefault(require("../model/MediaWithoutInternal"));

var _Model401Response = _interopRequireDefault(require("../model/Model401Response"));

var _Model404Response = _interopRequireDefault(require("../model/Model404Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Media service.
* @module api/MediaApi
* @version 2.0.1
*/
var MediaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MediaApi. 
  * @alias module:api/MediaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MediaApi(apiClient) {
    _classCallCheck(this, MediaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get single media file
   * @param {String} widthHeight Expected format: WIDTHxHEIGHT, for example 750x200. Width of the image, or 0 when the file is not an image or it should have original uploaded width, or it should be scaled proportionally with height specified. Height of the image, or 0 when the file is not an image or it should have original uploaded height, or it should be scaled proportionally with width specified
   * @param {String} key Key of the file, it is made from id and extension, e.g. _media-4564.jpg for image with id _media-4564 and jpg extension
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
   */


  _createClass(MediaApi, [{
    key: "getMediaWithHttpInfo",
    value: function getMediaWithHttpInfo(widthHeight, key) {
      var postBody = null; // verify the required parameter 'widthHeight' is set

      if (widthHeight === undefined || widthHeight === null) {
        throw new Error("Missing the required parameter 'widthHeight' when calling getMedia");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getMedia");
      }

      var pathParams = {
        'width_height': widthHeight,
        'key': key
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['image/jpeg', 'application/json'];
      var returnType = File;
      return this.apiClient.callApi('/image/{width_height}/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get single media file
     * @param {String} widthHeight Expected format: WIDTHxHEIGHT, for example 750x200. Width of the image, or 0 when the file is not an image or it should have original uploaded width, or it should be scaled proportionally with height specified. Height of the image, or 0 when the file is not an image or it should have original uploaded height, or it should be scaled proportionally with width specified
     * @param {String} key Key of the file, it is made from id and extension, e.g. _media-4564.jpg for image with id _media-4564 and jpg extension
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "getMedia",
    value: function getMedia(widthHeight, key) {
      return this.getMediaWithHttpInfo(widthHeight, key).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Endpoint for media files upload
     * @param {File} file File to upload
     * @param {module:model/String} type Type of file image|file
     * @param {Object} opts Optional parameters
     * @param {Number} opts.save Should file be saved to database on upload: 0|1 (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MediaWithoutInternal} and HTTP response
     */

  }, {
    key: "postMediaWithHttpInfo",
    value: function postMediaWithHttpInfo(file, type, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'file' is set

      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling postMedia");
      } // verify the required parameter 'type' is set


      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling postMedia");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': file,
        'type': type,
        'save': opts['save']
      };
      var authNames = ['HeaderApiKeyAuth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _MediaWithoutInternal["default"];
      return this.apiClient.callApi('/api/media', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Endpoint for media files upload
     * @param {File} file File to upload
     * @param {module:model/String} type Type of file image|file
     * @param {Object} opts Optional parameters
     * @param {Number} opts.save Should file be saved to database on upload: 0|1 (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MediaWithoutInternal}
     */

  }, {
    key: "postMedia",
    value: function postMedia(file, type, opts) {
      return this.postMediaWithHttpInfo(file, type, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MediaApi;
}();

exports["default"] = MediaApi;