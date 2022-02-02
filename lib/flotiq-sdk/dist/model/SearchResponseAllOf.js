"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SearchResponseAllOfData = _interopRequireDefault(require("./SearchResponseAllOfData"));

var _SearchResponseAllOfSummary = _interopRequireDefault(require("./SearchResponseAllOfSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SearchResponseAllOf model module.
 * @module model/SearchResponseAllOf
 * @version 2.0.1
 */
var SearchResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchResponseAllOf</code>.
   * @alias module:model/SearchResponseAllOf
   */
  function SearchResponseAllOf() {
    _classCallCheck(this, SearchResponseAllOf);

    SearchResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResponseAllOf} obj Optional instance to populate.
     * @return {module:model/SearchResponseAllOf} The populated <code>SearchResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_SearchResponseAllOfData["default"]]);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _SearchResponseAllOfSummary["default"].constructFromObject(data['summary']);
        }
      }

      return obj;
    }
  }]);

  return SearchResponseAllOf;
}();
/**
 * @member {Array.<module:model/SearchResponseAllOfData>} data
 */


SearchResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/SearchResponseAllOfSummary} summary
 */

SearchResponseAllOf.prototype['summary'] = undefined;
var _default = SearchResponseAllOf;
exports["default"] = _default;