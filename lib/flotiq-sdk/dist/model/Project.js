"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AbstractContentTypeSchemaDefinition = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinition"));

var _AbstractContentTypeSchemaDefinitionInternal = _interopRequireDefault(require("./AbstractContentTypeSchemaDefinitionInternal"));

var _DataSource = _interopRequireDefault(require("./DataSource"));

var _ProjectWithoutInternalAllOf = _interopRequireDefault(require("./ProjectWithoutInternalAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Project model module.
 * @module model/Project
 * @version 2.0.1
 */
var Project = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @implements module:model/AbstractContentTypeSchemaDefinition
   * @implements module:model/ProjectWithoutInternalAllOf
   * @param id {String} Unique ID of the object
   * @param name {String} 
   * @param slug {String} Slug can only have alphanumerical characters, - and _
   */
  function Project(id, name, slug) {
    _classCallCheck(this, Project);

    _AbstractContentTypeSchemaDefinition["default"].initialize(this, id);

    _ProjectWithoutInternalAllOf["default"].initialize(this);

    Project.initialize(this, id, name, slug);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Project, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, slug) {
      obj['id'] = id;
      obj['name'] = name;
      obj['slug'] = slug;
    }
    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Project();

        _AbstractContentTypeSchemaDefinition["default"].constructFromObject(data, obj);

        _ProjectWithoutInternalAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _AbstractContentTypeSchemaDefinitionInternal["default"].constructFromObject(data['internal']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('gallery')) {
          obj['gallery'] = _ApiClient["default"].convertToType(data['gallery'], [_DataSource["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Project;
}();
/**
 * Unique ID of the object
 * @member {String} id
 */


Project.prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

Project.prototype['internal'] = undefined;
/**
 * @member {String} name
 */

Project.prototype['name'] = undefined;
/**
 * Slug can only have alphanumerical characters, - and _
 * @member {String} slug
 */

Project.prototype['slug'] = undefined;
/**
 * @member {String} status
 * @default 'draft'
 */

Project.prototype['status'] = 'draft';
/**
 * @member {Array.<module:model/DataSource>} gallery
 */

Project.prototype['gallery'] = undefined;
/**
 * @member {String} description
 */

Project.prototype['description'] = undefined; // Implement AbstractContentTypeSchemaDefinition interface:

/**
 * Unique ID of the object
 * @member {String} id
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */

_AbstractContentTypeSchemaDefinition["default"].prototype['internal'] = undefined; // Implement ProjectWithoutInternalAllOf interface:

/**
 * @member {String} name
 */

_ProjectWithoutInternalAllOf["default"].prototype['name'] = undefined;
/**
 * Slug can only have alphanumerical characters, - and _
 * @member {String} slug
 */

_ProjectWithoutInternalAllOf["default"].prototype['slug'] = undefined;
/**
 * @member {String} status
 * @default 'draft'
 */

_ProjectWithoutInternalAllOf["default"].prototype['status'] = 'draft';
/**
 * @member {Array.<module:model/DataSource>} gallery
 */

_ProjectWithoutInternalAllOf["default"].prototype['gallery'] = undefined;
/**
 * @member {String} description
 */

_ProjectWithoutInternalAllOf["default"].prototype['description'] = undefined;
var _default = Project;
exports["default"] = _default;