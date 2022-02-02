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
 * The InlineResponse4005 model module.
 * @module model/InlineResponse4005
 * @version 2.0.1
 */
var InlineResponse4005 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4005</code>.
   * @alias module:model/InlineResponse4005
   */
  function InlineResponse4005() {
    _classCallCheck(this, InlineResponse4005);

    InlineResponse4005.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse4005, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse4005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4005} obj Optional instance to populate.
     * @return {module:model/InlineResponse4005} The populated <code>InlineResponse4005</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4005();

        if (data.hasOwnProperty('fileName')) {
          obj['fileName'] = _ApiClient["default"].convertToType(data['fileName'], ['String']);
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], ['String']);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], ['String']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], ['String']);
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], ['String']);
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], ['String']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], ['String']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], ['String']);
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], ['String']);
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse4005;
}();
/**
 * @member {Array.<String>} fileName
 */


InlineResponse4005.prototype['fileName'] = undefined;
/**
 * @member {Array.<String>} mimeType
 */

InlineResponse4005.prototype['mimeType'] = undefined;
/**
 * @member {Array.<String>} size
 */

InlineResponse4005.prototype['size'] = undefined;
/**
 * @member {Array.<String>} url
 */

InlineResponse4005.prototype['url'] = undefined;
/**
 * @member {Array.<String>} source
 */

InlineResponse4005.prototype['source'] = undefined;
/**
 * @member {Array.<String>} extension
 */

InlineResponse4005.prototype['extension'] = undefined;
/**
 * @member {Array.<String>} type
 */

InlineResponse4005.prototype['type'] = undefined;
/**
 * @member {Array.<String>} id
 */

InlineResponse4005.prototype['id'] = undefined;
/**
 * @member {Array.<String>} width
 */

InlineResponse4005.prototype['width'] = undefined;
/**
 * @member {Array.<String>} height
 */

InlineResponse4005.prototype['height'] = undefined;
var _default = InlineResponse4005;
exports["default"] = _default;