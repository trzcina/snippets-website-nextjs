/**
 * Flotiq User API
 * ## Getting started   This is your Flotiq User API that allows you to access your data through the Content API that you defined.   ### Access to data   There are several methods that you can use to access your data:  * Live API docs - available via <code>Try it out</code> button available next to each endpoint   * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.   It's also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).   ## Object access   Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:   * create  * list  * update  * delete  * batch create  * retrieve single object.  ### Hydration   When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it's not enabled by default, but it's a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Project from './Project';
import ProjectListAllOf from './ProjectListAllOf';
import SystemListProperties from './SystemListProperties';

/**
 * The ProjectList model module.
 * @module model/ProjectList
 * @version 2.0.1
 */
class ProjectList {
    /**
     * Constructs a new <code>ProjectList</code>.
     * @alias module:model/ProjectList
     * @implements module:model/SystemListProperties
     * @implements module:model/ProjectListAllOf
     * @param totalCount {Number} 
     * @param count {Number} 
     * @param totalPages {Number} 
     * @param currentPage {Number} 
     */
    constructor(totalCount, count, totalPages, currentPage) { 
        SystemListProperties.initialize(this, totalCount, count, totalPages, currentPage);ProjectListAllOf.initialize(this);
        ProjectList.initialize(this, totalCount, count, totalPages, currentPage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalCount, count, totalPages, currentPage) { 
        obj['total_count'] = totalCount;
        obj['count'] = count;
        obj['total_pages'] = totalPages;
        obj['current_page'] = currentPage;
    }

    /**
     * Constructs a <code>ProjectList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectList} obj Optional instance to populate.
     * @return {module:model/ProjectList} The populated <code>ProjectList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectList();
            SystemListProperties.constructFromObject(data, obj);
            ProjectListAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('total_pages')) {
                obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
            }
            if (data.hasOwnProperty('current_page')) {
                obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Project]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total_count
 */
ProjectList.prototype['total_count'] = undefined;

/**
 * @member {Number} count
 */
ProjectList.prototype['count'] = undefined;

/**
 * @member {Number} total_pages
 */
ProjectList.prototype['total_pages'] = undefined;

/**
 * @member {Number} current_page
 */
ProjectList.prototype['current_page'] = undefined;

/**
 * @member {Array.<module:model/Project>} data
 */
ProjectList.prototype['data'] = undefined;


// Implement SystemListProperties interface:
/**
 * @member {Number} total_count
 */
SystemListProperties.prototype['total_count'] = undefined;
/**
 * @member {Number} count
 */
SystemListProperties.prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */
SystemListProperties.prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */
SystemListProperties.prototype['current_page'] = undefined;
// Implement ProjectListAllOf interface:
/**
 * @member {Array.<module:model/Project>} data
 */
ProjectListAllOf.prototype['data'] = undefined;




export default ProjectList;
