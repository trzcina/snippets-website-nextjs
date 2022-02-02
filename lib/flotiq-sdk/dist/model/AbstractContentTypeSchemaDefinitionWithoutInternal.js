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
 * The AbstractContentTypeSchemaDefinitionWithoutInternal model module.
 * @module model/AbstractContentTypeSchemaDefinitionWithoutInternal
 * @version 2.0.1
 */
var AbstractContentTypeSchemaDefinitionWithoutInternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AbstractContentTypeSchemaDefinitionWithoutInternal</code>.
   * @alias module:model/AbstractContentTypeSchemaDefinitionWithoutInternal
   * @param id {String} Unique ID of the object
   */
  function AbstractContentTypeSchemaDefinitionWithoutInternal(id) {
    _classCallCheck(this, AbstractContentTypeSchemaDefinitionWithoutInternal);

    AbstractContentTypeSchemaDefinitionWithoutInternal.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AbstractContentTypeSchemaDefinitionWithoutInternal, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>AbstractContentTypeSchemaDefinitionWithoutInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractContentTypeSchemaDefinitionWithoutInternal} obj Optional instance to populate.
     * @return {module:model/AbstractContentTypeSchemaDefinitionWithoutInternal} The populated <code>AbstractContentTypeSchemaDefinitionWithoutInternal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AbstractContentTypeSchemaDefinitionWithoutInternal();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AbstractContentTypeSchemaDefinitionWithoutInternal;
}();
/**
 * Unique ID of the object
 * @member {String} id
 */


AbstractContentTypeSchemaDefinitionWithoutInternal.prototype['id'] = undefined;
var _default = AbstractContentTypeSchemaDefinitionWithoutInternal;
exports["default"] = _default;