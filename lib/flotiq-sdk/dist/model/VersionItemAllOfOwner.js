"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VersionItemAllOfOwner model module.
 * @module model/VersionItemAllOfOwner
 * @version 2.0.1
 */
var VersionItemAllOfOwner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionItemAllOfOwner</code>.
   * @alias module:model/VersionItemAllOfOwner
   */
  function VersionItemAllOfOwner() {
    _classCallCheck(this, VersionItemAllOfOwner);

    VersionItemAllOfOwner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionItemAllOfOwner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionItemAllOfOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionItemAllOfOwner} obj Optional instance to populate.
     * @return {module:model/VersionItemAllOfOwner} The populated <code>VersionItemAllOfOwner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionItemAllOfOwner();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['String']);
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('resetPasswordAt')) {
          obj['resetPasswordAt'] = _ApiClient["default"].convertToType(data['resetPasswordAt'], 'String');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
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
      }

      return obj;
    }
  }]);

  return VersionItemAllOfOwner;
}();
/**
 * @member {String} id
 */


VersionItemAllOfOwner.prototype['id'] = undefined;
/**
 * @member {String} username
 */

VersionItemAllOfOwner.prototype['username'] = undefined;
/**
 * @member {String} email
 */

VersionItemAllOfOwner.prototype['email'] = undefined;
/**
 * @member {String} firstName
 */

VersionItemAllOfOwner.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

VersionItemAllOfOwner.prototype['lastName'] = undefined;
/**
 * @member {Array.<String>} roles
 */

VersionItemAllOfOwner.prototype['roles'] = undefined;
/**
 * @member {String} language
 */

VersionItemAllOfOwner.prototype['language'] = undefined;
/**
 * @member {Boolean} enabled
 */

VersionItemAllOfOwner.prototype['enabled'] = undefined;
/**
 * @member {String} resetPasswordAt
 */

VersionItemAllOfOwner.prototype['resetPasswordAt'] = undefined;
/**
 * @member {Boolean} subscribed
 */

VersionItemAllOfOwner.prototype['subscribed'] = undefined;
/**
 * @member {String} deletedAt
 */

VersionItemAllOfOwner.prototype['deletedAt'] = undefined;
/**
 * @member {String} createdAt
 */

VersionItemAllOfOwner.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

VersionItemAllOfOwner.prototype['updatedAt'] = undefined;
var _default = VersionItemAllOfOwner;
exports["default"] = _default;