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
 * The SearchResponseAllOfSummary model module.
 * @module model/SearchResponseAllOfSummary
 * @version 2.0.1
 */
var SearchResponseAllOfSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchResponseAllOfSummary</code>.
   * @alias module:model/SearchResponseAllOfSummary
   */
  function SearchResponseAllOfSummary() {
    _classCallCheck(this, SearchResponseAllOfSummary);

    SearchResponseAllOfSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchResponseAllOfSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchResponseAllOfSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResponseAllOfSummary} obj Optional instance to populate.
     * @return {module:model/SearchResponseAllOfSummary} The populated <code>SearchResponseAllOfSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchResponseAllOfSummary();

        if (data.hasOwnProperty('aggregations')) {
          obj['aggregations'] = _ApiClient["default"].convertToType(data['aggregations'], Object);
        }
      }

      return obj;
    }
  }]);

  return SearchResponseAllOfSummary;
}();
/**
 * @member {Object} aggregations
 */


SearchResponseAllOfSummary.prototype['aggregations'] = undefined;
var _default = SearchResponseAllOfSummary;
exports["default"] = _default;