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
 * The ExampleWithoutInternalAllOf model module.
 * @module model/ExampleWithoutInternalAllOf
 * @version 2.0.1
 */
var ExampleWithoutInternalAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExampleWithoutInternalAllOf</code>.
   * @alias module:model/ExampleWithoutInternalAllOf
   */
  function ExampleWithoutInternalAllOf() {
    _classCallCheck(this, ExampleWithoutInternalAllOf);

    ExampleWithoutInternalAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExampleWithoutInternalAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExampleWithoutInternalAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExampleWithoutInternalAllOf} obj Optional instance to populate.
     * @return {module:model/ExampleWithoutInternalAllOf} The populated <code>ExampleWithoutInternalAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExampleWithoutInternalAllOf();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExampleWithoutInternalAllOf;
}();
/**
 * @member {String} title
 */


ExampleWithoutInternalAllOf.prototype['title'] = undefined;
/**
 * @member {String} header
 */

ExampleWithoutInternalAllOf.prototype['header'] = undefined;
var _default = ExampleWithoutInternalAllOf;
exports["default"] = _default;