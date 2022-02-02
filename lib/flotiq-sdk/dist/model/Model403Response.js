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
 * The Model403Response model module.
 * @module model/Model403Response
 * @version 2.0.1
 */
var Model403Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Model403Response</code>.
   * @alias module:model/Model403Response
   */
  function Model403Response() {
    _classCallCheck(this, Model403Response);

    Model403Response.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Model403Response, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Model403Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Model403Response} obj Optional instance to populate.
     * @return {module:model/Model403Response} The populated <code>Model403Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Model403Response();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Model403Response;
}();
/**
 * @member {Number} code
 */


Model403Response.prototype['code'] = undefined;
/**
 * @member {Array.<String>} data
 */

Model403Response.prototype['data'] = undefined;
var _default = Model403Response;
exports["default"] = _default;