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
 * The Model404Response model module.
 * @module model/Model404Response
 * @version 2.0.1
 */
var Model404Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Model404Response</code>.
   * @alias module:model/Model404Response
   */
  function Model404Response() {
    _classCallCheck(this, Model404Response);

    Model404Response.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Model404Response, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Model404Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Model404Response} obj Optional instance to populate.
     * @return {module:model/Model404Response} The populated <code>Model404Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Model404Response();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Model404Response;
}();
/**
 * @member {Number} code
 */


Model404Response.prototype['code'] = undefined;
/**
 * @member {String} message
 */

Model404Response.prototype['message'] = undefined;
var _default = Model404Response;
exports["default"] = _default;