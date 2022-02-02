"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SystemListProperties = _interopRequireDefault(require("./SystemListProperties"));

var _VersionItem = _interopRequireDefault(require("./VersionItem"));

var _VersionsListAllOf = _interopRequireDefault(require("./VersionsListAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VersionsList model module.
 * @module model/VersionsList
 * @version 2.0.1
 */
var VersionsList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionsList</code>.
   * @alias module:model/VersionsList
   * @implements module:model/SystemListProperties
   * @implements module:model/VersionsListAllOf
   * @param totalCount {Number} 
   * @param count {Number} 
   * @param totalPages {Number} 
   * @param currentPage {Number} 
   */
  function VersionsList(totalCount, count, totalPages, currentPage) {
    _classCallCheck(this, VersionsList);

    _SystemListProperties["default"].initialize(this, totalCount, count, totalPages, currentPage);

    _VersionsListAllOf["default"].initialize(this);

    VersionsList.initialize(this, totalCount, count, totalPages, currentPage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionsList, null, [{
    key: "initialize",
    value: function initialize(obj, totalCount, count, totalPages, currentPage) {
      obj['total_count'] = totalCount;
      obj['count'] = count;
      obj['total_pages'] = totalPages;
      obj['current_page'] = currentPage;
    }
    /**
     * Constructs a <code>VersionsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionsList} obj Optional instance to populate.
     * @return {module:model/VersionsList} The populated <code>VersionsList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionsList();

        _SystemListProperties["default"].constructFromObject(data, obj);

        _VersionsListAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('total_count')) {
          obj['total_count'] = _ApiClient["default"].convertToType(data['total_count'], 'Number');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('total_pages')) {
          obj['total_pages'] = _ApiClient["default"].convertToType(data['total_pages'], 'Number');
        }

        if (data.hasOwnProperty('current_page')) {
          obj['current_page'] = _ApiClient["default"].convertToType(data['current_page'], 'Number');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_VersionItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return VersionsList;
}();
/**
 * @member {Number} total_count
 */


VersionsList.prototype['total_count'] = undefined;
/**
 * @member {Number} count
 */

VersionsList.prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

VersionsList.prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

VersionsList.prototype['current_page'] = undefined;
/**
 * @member {Array.<module:model/VersionItem>} data
 */

VersionsList.prototype['data'] = undefined; // Implement SystemListProperties interface:

/**
 * @member {Number} total_count
 */

_SystemListProperties["default"].prototype['total_count'] = undefined;
/**
 * @member {Number} count
 */

_SystemListProperties["default"].prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

_SystemListProperties["default"].prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

_SystemListProperties["default"].prototype['current_page'] = undefined; // Implement VersionsListAllOf interface:

/**
 * @member {Array.<module:model/VersionItem>} data
 */

_VersionsListAllOf["default"].prototype['data'] = undefined;
var _default = VersionsList;
exports["default"] = _default;