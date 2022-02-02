"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeSchemaDefinition = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinition"));

var _AbstractContentTypeSchemaDefinitionInternal = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinitionInternal"));

var _VersionItemAllOf = _interopRequireDefault(require("./VersionItemAllOf"));

var _VersionItemAllOfOwner = _interopRequireDefault(require("./VersionItemAllOfOwner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VersionItem model module.
 * @module model/VersionItem
 * @version 2.0.1
 */
var VersionItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionItem</code>.
   * @alias module:model/VersionItem
   * @implements module:model/AbstractContentTypeSchemaDefinition
   * @implements module:model/VersionItemAllOf
   * @param id {String} 
   */
  function VersionItem(id) {
    _classCallCheck(this, VersionItem);

    _AbstractContentTypeSchemaDefinition["default"].initialize(this, id);

    _VersionItemAllOf["default"].initialize(this);

    VersionItem.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionItem, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>VersionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionItem} obj Optional instance to populate.
     * @return {module:model/VersionItem} The populated <code>VersionItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionItem();

        _AbstractContentTypeSchemaDefinition["default"].constructFromObject(data, obj);

        _VersionItemAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _AbstractContentTypeSchemaDefinitionInternal["default"].constructFromObject(data['internal']);
        }

        if (data.hasOwnProperty('deletedAt')) {
          obj['deletedAt'] = _ApiClient["default"].convertToType(data['deletedAt'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('current')) {
          obj['current'] = _ApiClient["default"].convertToType(data['current'], 'Boolean');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _VersionItemAllOfOwner["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('editor')) {
          obj['editor'] = _VersionItemAllOfOwner["default"].constructFromObject(data['editor']);
        }
      }

      return obj;
    }
  }]);

  return VersionItem;
}();
/**
 * @member {String} id
 */


VersionItem.prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

VersionItem.prototype['internal'] = undefined;
/**
 * @member {String} deletedAt
 */

VersionItem.prototype['deletedAt'] = undefined;
/**
 * @member {String} createdAt
 */

VersionItem.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

VersionItem.prototype['updatedAt'] = undefined;
/**
 * @member {Boolean} current
 */

VersionItem.prototype['current'] = undefined;
/**
 * @member {Number} version
 */

VersionItem.prototype['version'] = undefined;
/**
 * @member {module:model/VersionItemAllOfOwner} owner
 */

VersionItem.prototype['owner'] = undefined;
/**
 * @member {module:model/VersionItemAllOfOwner} editor
 */

VersionItem.prototype['editor'] = undefined; // Implement AbstractContentTypeSchemaDefinition interface:

/**
 * Unique ID of the object
 * @member {String} id
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['internal'] = undefined; // Implement VersionItemAllOf interface:

/**
 * @member {String} id
 */

_VersionItemAllOf["default"].prototype['id'] = undefined;
/**
 * @member {String} deletedAt
 */

_VersionItemAllOf["default"].prototype['deletedAt'] = undefined;
/**
 * @member {String} createdAt
 */

_VersionItemAllOf["default"].prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

_VersionItemAllOf["default"].prototype['updatedAt'] = undefined;
/**
 * @member {Boolean} current
 */

_VersionItemAllOf["default"].prototype['current'] = undefined;
/**
 * @member {Number} version
 */

_VersionItemAllOf["default"].prototype['version'] = undefined;
/**
 * @member {module:model/VersionItemAllOfOwner} owner
 */

_VersionItemAllOf["default"].prototype['owner'] = undefined;
/**
 * @member {module:model/VersionItemAllOfOwner} editor
 */

_VersionItemAllOf["default"].prototype['editor'] = undefined;
var _default = VersionItem;
exports["default"] = _default;