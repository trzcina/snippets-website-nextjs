"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeSchemaDefinitionWithoutInternal = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinitionWithoutInternal"));

var _ExampleWithoutInternalAllOf = _interopRequireDefault(require("./ExampleWithoutInternalAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ExampleWithoutInternal model module.
 * @module model/ExampleWithoutInternal
 * @version 2.0.1
 */
var ExampleWithoutInternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExampleWithoutInternal</code>.
   * @alias module:model/ExampleWithoutInternal
   * @implements module:model/AbstractContentTypeSchemaDefinitionWithoutInternal
   * @implements module:model/ExampleWithoutInternalAllOf
   * @param id {String} Unique ID of the object
   * @param title {String} 
   * @param header {String} 
   */
  function ExampleWithoutInternal(id, title, header) {
    _classCallCheck(this, ExampleWithoutInternal);

    _AbstractContentTypeSchemaDefinitionWithoutInternal["default"].initialize(this, id);

    _ExampleWithoutInternalAllOf["default"].initialize(this);

    ExampleWithoutInternal.initialize(this, id, title, header);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExampleWithoutInternal, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, header) {
      obj['id'] = id;
      obj['title'] = title;
      obj['header'] = header;
    }
    /**
     * Constructs a <code>ExampleWithoutInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExampleWithoutInternal} obj Optional instance to populate.
     * @return {module:model/ExampleWithoutInternal} The populated <code>ExampleWithoutInternal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExampleWithoutInternal();

        _AbstractContentTypeSchemaDefinitionWithoutInternal["default"].constructFromObject(data, obj);

        _ExampleWithoutInternalAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

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

  return ExampleWithoutInternal;
}();
/**
 * Unique ID of the object
 * @member {String} id
 */


ExampleWithoutInternal.prototype['id'] = undefined;
/**
 * @member {String} title
 */

ExampleWithoutInternal.prototype['title'] = undefined;
/**
 * @member {String} header
 */

ExampleWithoutInternal.prototype['header'] = undefined; // Implement AbstractContentTypeSchemaDefinitionWithoutInternal interface:

/**
 * Unique ID of the object
 * @member {String} id
 */

_AbstractContentTypeSchemaDefinitionWithoutInternal["default"].prototype['id'] = undefined; // Implement ExampleWithoutInternalAllOf interface:

/**
 * @member {String} title
 */

_ExampleWithoutInternalAllOf["default"].prototype['title'] = undefined;
/**
 * @member {String} header
 */

_ExampleWithoutInternalAllOf["default"].prototype['header'] = undefined;
var _default = ExampleWithoutInternal;
exports["default"] = _default;