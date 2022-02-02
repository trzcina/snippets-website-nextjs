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
 * The InlineResponse40011 model module.
 * @module model/InlineResponse40011
 * @version 2.0.1
 */
var InlineResponse40011 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse40011</code>.
   * @alias module:model/InlineResponse40011
   */
  function InlineResponse40011() {
    _classCallCheck(this, InlineResponse40011);

    InlineResponse40011.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse40011, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse40011</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse40011} obj Optional instance to populate.
     * @return {module:model/InlineResponse40011} The populated <code>InlineResponse40011</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse40011();

        if (data.hasOwnProperty('geo_filters')) {
          obj['geo_filters'] = _ApiClient["default"].convertToType(data['geo_filters'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse40011;
}();
/**
 * @member {Array.<String>} geo_filters
 */


InlineResponse40011.prototype['geo_filters'] = undefined;
var _default = InlineResponse40011;
exports["default"] = _default;