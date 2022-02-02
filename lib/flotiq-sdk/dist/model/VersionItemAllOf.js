"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VersionItemAllOfOwner = _interopRequireDefault(require("./VersionItemAllOfOwner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VersionItemAllOf model module.
 * @module model/VersionItemAllOf
 * @version 2.0.1
 */
var VersionItemAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionItemAllOf</code>.
   * @alias module:model/VersionItemAllOf
   */
  function VersionItemAllOf() {
    _classCallCheck(this, VersionItemAllOf);

    VersionItemAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionItemAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionItemAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionItemAllOf} obj Optional instance to populate.
     * @return {module:model/VersionItemAllOf} The populated <code>VersionItemAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionItemAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
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

  return VersionItemAllOf;
}();
/**
 * @member {String} id
 */


VersionItemAllOf.prototype['id'] = undefined;
/**
 * @member {String} deletedAt
 */

VersionItemAllOf.prototype['deletedAt'] = undefined;
/**
 * @member {String} createdAt
 */

VersionItemAllOf.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

VersionItemAllOf.prototype['updatedAt'] = undefined;
/**
 * @member {Boolean} current
 */

VersionItemAllOf.prototype['current'] = undefined;
/**
 * @member {Number} version
 */

VersionItemAllOf.prototype['version'] = undefined;
/**
 * @member {module:model/VersionItemAllOfOwner} owner
 */

VersionItemAllOf.prototype['owner'] = undefined;
/**
 * @member {module:model/VersionItemAllOfOwner} editor
 */

VersionItemAllOf.prototype['editor'] = undefined;
var _default = VersionItemAllOf;
exports["default"] = _default;