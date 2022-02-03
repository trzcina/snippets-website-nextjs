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
 * The InlineResponse40010 model module.
 * @module model/InlineResponse40010
 * @version 2.0.1
 */
var InlineResponse40010 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse40010</code>.
   * @alias module:model/InlineResponse40010
   */
  function InlineResponse40010() {
    _classCallCheck(this, InlineResponse40010);

    InlineResponse40010.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse40010, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse40010</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse40010} obj Optional instance to populate.
     * @return {module:model/InlineResponse40010} The populated <code>InlineResponse40010</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse40010();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse40010;
}();
/**
 * @member {Array.<String>} errors
 */


InlineResponse40010.prototype['errors'] = undefined;
var _default = InlineResponse40010;
exports["default"] = _default;