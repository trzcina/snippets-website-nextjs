"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Example = _interopRequireDefault(require("./Example"));

var _ExampleListAllOf = _interopRequireDefault(require("./ExampleListAllOf"));

var _SystemListProperties = _interopRequireDefault(require("./SystemListProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ExampleList model module.
 * @module model/ExampleList
 * @version 2.0.1
 */
var ExampleList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExampleList</code>.
   * @alias module:model/ExampleList
   * @implements module:model/SystemListProperties
   * @implements module:model/ExampleListAllOf
   * @param totalCount {Number} 
   * @param count {Number} 
   * @param totalPages {Number} 
   * @param currentPage {Number} 
   */
  function ExampleList(totalCount, count, totalPages, currentPage) {
    _classCallCheck(this, ExampleList);

    _SystemListProperties["default"].initialize(this, totalCount, count, totalPages, currentPage);

    _ExampleListAllOf["default"].initialize(this);

    ExampleList.initialize(this, totalCount, count, totalPages, currentPage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExampleList, null, [{
    key: "initialize",
    value: function initialize(obj, totalCount, count, totalPages, currentPage) {
      obj['total_count'] = totalCount;
      obj['count'] = count;
      obj['total_pages'] = totalPages;
      obj['current_page'] = currentPage;
    }
    /**
     * Constructs a <code>ExampleList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExampleList} obj Optional instance to populate.
     * @return {module:model/ExampleList} The populated <code>ExampleList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExampleList();

        _SystemListProperties["default"].constructFromObject(data, obj);

        _ExampleListAllOf["default"].constructFromObject(data, obj);

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
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Example["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ExampleList;
}();
/**
 * @member {Number} total_count
 */


ExampleList.prototype['total_count'] = undefined;
/**
 * @member {Number} count
 */

ExampleList.prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

ExampleList.prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

ExampleList.prototype['current_page'] = undefined;
/**
 * @member {Array.<module:model/Example>} data
 */

ExampleList.prototype['data'] = undefined; // Implement SystemListProperties interface:

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

_SystemListProperties["default"].prototype['current_page'] = undefined; // Implement ExampleListAllOf interface:

/**
 * @member {Array.<module:model/Example>} data
 */

_ExampleListAllOf["default"].prototype['data'] = undefined;
var _default = ExampleList;
exports["default"] = _default;