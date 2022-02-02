"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DataSource = _interopRequireDefault(require("./DataSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProjectWithoutInternalAllOf model module.
 * @module model/ProjectWithoutInternalAllOf
 * @version 2.0.1
 */
var ProjectWithoutInternalAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectWithoutInternalAllOf</code>.
   * @alias module:model/ProjectWithoutInternalAllOf
   */
  function ProjectWithoutInternalAllOf() {
    _classCallCheck(this, ProjectWithoutInternalAllOf);

    ProjectWithoutInternalAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectWithoutInternalAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectWithoutInternalAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectWithoutInternalAllOf} obj Optional instance to populate.
     * @return {module:model/ProjectWithoutInternalAllOf} The populated <code>ProjectWithoutInternalAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectWithoutInternalAllOf();

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

  return ProjectWithoutInternalAllOf;
}();
/**
 * @member {String} name
 */


ProjectWithoutInternalAllOf.prototype['name'] = undefined;
/**
 * Slug can only have alphanumerical characters, - and _
 * @member {String} slug
 */

ProjectWithoutInternalAllOf.prototype['slug'] = undefined;
/**
 * @member {String} status
 * @default 'draft'
 */

ProjectWithoutInternalAllOf.prototype['status'] = 'draft';
/**
 * @member {Array.<module:model/DataSource>} gallery
 */

ProjectWithoutInternalAllOf.prototype['gallery'] = undefined;
/**
 * @member {String} description
 */

ProjectWithoutInternalAllOf.prototype['description'] = undefined;
var _default = ProjectWithoutInternalAllOf;
exports["default"] = _default;