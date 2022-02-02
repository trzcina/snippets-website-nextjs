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
 * The InlineResponse4009 model module.
 * @module model/InlineResponse4009
 * @version 2.0.1
 */
var InlineResponse4009 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4009</code>.
   * @alias module:model/InlineResponse4009
   */
  function InlineResponse4009() {
    _classCallCheck(this, InlineResponse4009);

    InlineResponse4009.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse4009, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse4009</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4009} obj Optional instance to populate.
     * @return {module:model/InlineResponse4009} The populated <code>InlineResponse4009</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4009();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], ['String']);
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], ['String']);
        }

        if (data.hasOwnProperty('schemaDefinition.allOf[1].properties.title.type')) {
          obj['schemaDefinition.allOf[1].properties.title.type'] = _ApiClient["default"].convertToType(data['schemaDefinition.allOf[1].properties.title.type'], ['String']);
        }

        if (data.hasOwnProperty('metaDefinition.propertiesConfig.price.label')) {
          obj['metaDefinition.propertiesConfig.price.label'] = _ApiClient["default"].convertToType(data['metaDefinition.propertiesConfig.price.label'], ['String']);
        }

        if (data.hasOwnProperty('metaDefinition.propertiesConfig.price.inputType')) {
          obj['metaDefinition.propertiesConfig.price.inputType'] = _ApiClient["default"].convertToType(data['metaDefinition.propertiesConfig.price.inputType'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse4009;
}();
/**
 * @member {Array.<String>} name
 */


InlineResponse4009.prototype['name'] = undefined;
/**
 * @member {Array.<String>} label
 */

InlineResponse4009.prototype['label'] = undefined;
/**
 * @member {Array.<String>} schemaDefinition.allOf[1].properties.title.type
 */

InlineResponse4009.prototype['schemaDefinition.allOf[1].properties.title.type'] = undefined;
/**
 * @member {Array.<String>} metaDefinition.propertiesConfig.price.label
 */

InlineResponse4009.prototype['metaDefinition.propertiesConfig.price.label'] = undefined;
/**
 * @member {Array.<String>} metaDefinition.propertiesConfig.price.inputType
 */

InlineResponse4009.prototype['metaDefinition.propertiesConfig.price.inputType'] = undefined;
var _default = InlineResponse4009;
exports["default"] = _default;