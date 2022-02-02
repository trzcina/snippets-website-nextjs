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
 * The BatchResponseSuccess model module.
 * @module model/BatchResponseSuccess
 * @version 2.0.1
 */
var BatchResponseSuccess = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchResponseSuccess</code>.
   * @alias module:model/BatchResponseSuccess
   */
  function BatchResponseSuccess() {
    _classCallCheck(this, BatchResponseSuccess);

    BatchResponseSuccess.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BatchResponseSuccess, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BatchResponseSuccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchResponseSuccess} obj Optional instance to populate.
     * @return {module:model/BatchResponseSuccess} The populated <code>BatchResponseSuccess</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchResponseSuccess();

        if (data.hasOwnProperty('batch_total_count')) {
          obj['batch_total_count'] = _ApiClient["default"].convertToType(data['batch_total_count'], 'Number');
        }

        if (data.hasOwnProperty('batch_success_count')) {
          obj['batch_success_count'] = _ApiClient["default"].convertToType(data['batch_success_count'], 'Number');
        }

        if (data.hasOwnProperty('batch_error_count')) {
          obj['batch_error_count'] = _ApiClient["default"].convertToType(data['batch_error_count'], 'Number');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return BatchResponseSuccess;
}();
/**
 * @member {Number} batch_total_count
 */


BatchResponseSuccess.prototype['batch_total_count'] = undefined;
/**
 * @member {Number} batch_success_count
 */

BatchResponseSuccess.prototype['batch_success_count'] = undefined;
/**
 * @member {Number} batch_error_count
 */

BatchResponseSuccess.prototype['batch_error_count'] = undefined;
/**
 * @member {Array.<Object>} errors
 */

BatchResponseSuccess.prototype['errors'] = undefined;
var _default = BatchResponseSuccess;
exports["default"] = _default;