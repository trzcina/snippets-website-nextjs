"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeSchemaDefinitionWithoutInternal = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinitionWithoutInternal"));

var _MediaWithoutInternalAllOf = _interopRequireDefault(require("./MediaWithoutInternalAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MediaWithoutInternal model module.
 * @module model/MediaWithoutInternal
 * @version 2.0.1
 */
var MediaWithoutInternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MediaWithoutInternal</code>.
   * @alias module:model/MediaWithoutInternal
   * @implements module:model/AbstractContentTypeSchemaDefinitionWithoutInternal
   * @implements module:model/MediaWithoutInternalAllOf
   * @param id {String} Unique ID of the object
   * @param url {String} 
   * @param size {Number} 
   * @param type {String} 
   * @param source {String} 
   * @param fileName {String} 
   * @param mimeType {String} 
   * @param extension {String} 
   */
  function MediaWithoutInternal(id, url, size, type, source, fileName, mimeType, extension) {
    _classCallCheck(this, MediaWithoutInternal);

    _AbstractContentTypeSchemaDefinitionWithoutInternal["default"].initialize(this, id);

    _MediaWithoutInternalAllOf["default"].initialize(this);

    MediaWithoutInternal.initialize(this, id, url, size, type, source, fileName, mimeType, extension);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MediaWithoutInternal, null, [{
    key: "initialize",
    value: function initialize(obj, id, url, size, type, source, fileName, mimeType, extension) {
      obj['id'] = id;
      obj['url'] = url;
      obj['size'] = size;
      obj['type'] = type;
      obj['source'] = source;
      obj['fileName'] = fileName;
      obj['mimeType'] = mimeType;
      obj['extension'] = extension;
    }
    /**
     * Constructs a <code>MediaWithoutInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MediaWithoutInternal} obj Optional instance to populate.
     * @return {module:model/MediaWithoutInternal} The populated <code>MediaWithoutInternal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MediaWithoutInternal();

        _AbstractContentTypeSchemaDefinitionWithoutInternal["default"].constructFromObject(data, obj);

        _MediaWithoutInternalAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('fileName')) {
          obj['fileName'] = _ApiClient["default"].convertToType(data['fileName'], 'String');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], 'String');
        }

        if (data.hasOwnProperty('externalId')) {
          obj['externalId'] = _ApiClient["default"].convertToType(data['externalId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MediaWithoutInternal;
}();
/**
 * Unique ID of the object
 * @member {String} id
 */


MediaWithoutInternal.prototype['id'] = undefined;
/**
 * @member {String} url
 */

MediaWithoutInternal.prototype['url'] = undefined;
/**
 * @member {Number} size
 */

MediaWithoutInternal.prototype['size'] = undefined;
/**
 * @member {String} type
 */

MediaWithoutInternal.prototype['type'] = undefined;
/**
 * @member {Number} width
 */

MediaWithoutInternal.prototype['width'] = undefined;
/**
 * @member {Number} height
 */

MediaWithoutInternal.prototype['height'] = undefined;
/**
 * @member {String} source
 */

MediaWithoutInternal.prototype['source'] = undefined;
/**
 * @member {String} fileName
 */

MediaWithoutInternal.prototype['fileName'] = undefined;
/**
 * @member {String} mimeType
 */

MediaWithoutInternal.prototype['mimeType'] = undefined;
/**
 * @member {String} extension
 */

MediaWithoutInternal.prototype['extension'] = undefined;
/**
 * @member {String} externalId
 */

MediaWithoutInternal.prototype['externalId'] = undefined; // Implement AbstractContentTypeSchemaDefinitionWithoutInternal interface:

/**
 * Unique ID of the object
 * @member {String} id
 */

_AbstractContentTypeSchemaDefinitionWithoutInternal["default"].prototype['id'] = undefined; // Implement MediaWithoutInternalAllOf interface:

/**
 * @member {String} url
 */

_MediaWithoutInternalAllOf["default"].prototype['url'] = undefined;
/**
 * @member {Number} size
 */

_MediaWithoutInternalAllOf["default"].prototype['size'] = undefined;
/**
 * @member {String} type
 */

_MediaWithoutInternalAllOf["default"].prototype['type'] = undefined;
/**
 * @member {Number} width
 */

_MediaWithoutInternalAllOf["default"].prototype['width'] = undefined;
/**
 * @member {Number} height
 */

_MediaWithoutInternalAllOf["default"].prototype['height'] = undefined;
/**
 * @member {String} source
 */

_MediaWithoutInternalAllOf["default"].prototype['source'] = undefined;
/**
 * @member {String} fileName
 */

_MediaWithoutInternalAllOf["default"].prototype['fileName'] = undefined;
/**
 * @member {String} mimeType
 */

_MediaWithoutInternalAllOf["default"].prototype['mimeType'] = undefined;
/**
 * @member {String} extension
 */

_MediaWithoutInternalAllOf["default"].prototype['extension'] = undefined;
/**
 * @member {String} externalId
 */

_MediaWithoutInternalAllOf["default"].prototype['externalId'] = undefined;
var _default = MediaWithoutInternal;
exports["default"] = _default;