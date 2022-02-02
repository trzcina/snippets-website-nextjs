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
 * The InlineResponse4002 model module.
 * @module model/InlineResponse4002
 * @version 2.0.1
 */
var InlineResponse4002 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4002</code>.
   * @alias module:model/InlineResponse4002
   */
  function InlineResponse4002() {
    _classCallCheck(this, InlineResponse4002);

    InlineResponse4002.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse4002, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse4002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4002} obj Optional instance to populate.
     * @return {module:model/InlineResponse4002} The populated <code>InlineResponse4002</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4002();

        if (data.hasOwnProperty('deletedAfter')) {
          obj['deletedAfter'] = _ApiClient["default"].convertToType(data['deletedAfter'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse4002;
}();
/**
 * @member {Array.<String>} deletedAfter
 */


InlineResponse4002.prototype['deletedAfter'] = undefined;
var _default = InlineResponse4002;
exports["default"] = _default;