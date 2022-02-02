"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchResponseErrorErrors = _interopRequireDefault(require("./BatchResponseErrorErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BatchResponseErrorErrors1 model module.
 * @module model/BatchResponseErrorErrors1
 * @version 2.0.1
 */
var BatchResponseErrorErrors1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchResponseErrorErrors1</code>.
   * @alias module:model/BatchResponseErrorErrors1
   */
  function BatchResponseErrorErrors1() {
    _classCallCheck(this, BatchResponseErrorErrors1);

    BatchResponseErrorErrors1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BatchResponseErrorErrors1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BatchResponseErrorErrors1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchResponseErrorErrors1} obj Optional instance to populate.
     * @return {module:model/BatchResponseErrorErrors1} The populated <code>BatchResponseErrorErrors1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchResponseErrorErrors1();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _BatchResponseErrorErrors["default"].constructFromObject(data['errors']);
        }
      }

      return obj;
    }
  }]);

  return BatchResponseErrorErrors1;
}();
/**
 * @member {String} id
 */


BatchResponseErrorErrors1.prototype['id'] = undefined;
/**
 * @member {module:model/BatchResponseErrorErrors} errors
 */

BatchResponseErrorErrors1.prototype['errors'] = undefined;
var _default = BatchResponseErrorErrors1;
exports["default"] = _default;