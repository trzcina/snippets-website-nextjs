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
 * The InlineResponse4007 model module.
 * @module model/InlineResponse4007
 * @version 2.0.1
 */
var InlineResponse4007 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4007</code>.
   * @alias module:model/InlineResponse4007
   */
  function InlineResponse4007() {
    _classCallCheck(this, InlineResponse4007);

    InlineResponse4007.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse4007, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse4007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4007} obj Optional instance to populate.
     * @return {module:model/InlineResponse4007} The populated <code>InlineResponse4007</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4007();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], ['String']);
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], ['String']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], ['String']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse4007;
}();
/**
 * @member {Array.<String>} name
 */


InlineResponse4007.prototype['name'] = undefined;
/**
 * @member {Array.<String>} slug
 */

InlineResponse4007.prototype['slug'] = undefined;
/**
 * @member {Array.<String>} id
 */

InlineResponse4007.prototype['id'] = undefined;
/**
 * @member {Array.<String>} status
 */

InlineResponse4007.prototype['status'] = undefined;
var _default = InlineResponse4007;
exports["default"] = _default;