"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeSchemaDefinition = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinition"));

var _AbstractContentTypeSchemaDefinitionInternal = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinitionInternal"));

var _ExampleWithoutInternalAllOf = _interopRequireDefault(require("./ExampleWithoutInternalAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Example model module.
 * @module model/Example
 * @version 2.0.1
 */
var Example = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Example</code>.
   * @alias module:model/Example
   * @implements module:model/AbstractContentTypeSchemaDefinition
   * @implements module:model/ExampleWithoutInternalAllOf
   * @param id {String} Unique ID of the object
   * @param title {String} 
   * @param header {String} 
   */
  function Example(id, title, header) {
    _classCallCheck(this, Example);

    _AbstractContentTypeSchemaDefinition["default"].initialize(this, id);

    _ExampleWithoutInternalAllOf["default"].initialize(this);

    Example.initialize(this, id, title, header);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Example, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, header) {
      obj['id'] = id;
      obj['title'] = title;
      obj['header'] = header;
    }
    /**
     * Constructs a <code>Example</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Example} obj Optional instance to populate.
     * @return {module:model/Example} The populated <code>Example</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Example();

        _AbstractContentTypeSchemaDefinition["default"].constructFromObject(data, obj);

        _ExampleWithoutInternalAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _AbstractContentTypeSchemaDefinitionInternal["default"].constructFromObject(data['internal']);
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

  return Example;
}();
/**
 * Unique ID of the object
 * @member {String} id
 */


Example.prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

Example.prototype['internal'] = undefined;
/**
 * @member {String} title
 */

Example.prototype['title'] = undefined;
/**
 * @member {String} header
 */

Example.prototype['header'] = undefined; // Implement AbstractContentTypeSchemaDefinition interface:

/**
 * Unique ID of the object
 * @member {String} id
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['internal'] = undefined; // Implement ExampleWithoutInternalAllOf interface:

/**
 * @member {String} title
 */

_ExampleWithoutInternalAllOf["default"].prototype['title'] = undefined;
/**
 * @member {String} header
 */

_ExampleWithoutInternalAllOf["default"].prototype['header'] = undefined;
var _default = Example;
exports["default"] = _default;