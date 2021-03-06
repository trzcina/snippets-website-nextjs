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

/**
 * The VersionItemAllOfOwner model module.
 * @module model/VersionItemAllOfOwner
 * @version 2.0.1
 */
class VersionItemAllOfOwner {
    /**
     * Constructs a new <code>VersionItemAllOfOwner</code>.
     * @alias module:model/VersionItemAllOfOwner
     */
    constructor() { 
        
        VersionItemAllOfOwner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionItemAllOfOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionItemAllOfOwner} obj Optional instance to populate.
     * @return {module:model/VersionItemAllOfOwner} The populated <code>VersionItemAllOfOwner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionItemAllOfOwner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('resetPasswordAt')) {
                obj['resetPasswordAt'] = ApiClient.convertToType(data['resetPasswordAt'], 'String');
            }
            if (data.hasOwnProperty('subscribed')) {
                obj['subscribed'] = ApiClient.convertToType(data['subscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('deletedAt')) {
                obj['deletedAt'] = ApiClient.convertToType(data['deletedAt'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
VersionItemAllOfOwner.prototype['id'] = undefined;

/**
 * @member {String} username
 */
VersionItemAllOfOwner.prototype['username'] = undefined;

/**
 * @member {String} email
 */
VersionItemAllOfOwner.prototype['email'] = undefined;

/**
 * @member {String} firstName
 */
VersionItemAllOfOwner.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
VersionItemAllOfOwner.prototype['lastName'] = undefined;

/**
 * @member {Array.<String>} roles
 */
VersionItemAllOfOwner.prototype['roles'] = undefined;

/**
 * @member {String} language
 */
VersionItemAllOfOwner.prototype['language'] = undefined;

/**
 * @member {Boolean} enabled
 */
VersionItemAllOfOwner.prototype['enabled'] = undefined;

/**
 * @member {String} resetPasswordAt
 */
VersionItemAllOfOwner.prototype['resetPasswordAt'] = undefined;

/**
 * @member {Boolean} subscribed
 */
VersionItemAllOfOwner.prototype['subscribed'] = undefined;

/**
 * @member {String} deletedAt
 */
VersionItemAllOfOwner.prototype['deletedAt'] = undefined;

/**
 * @member {String} createdAt
 */
VersionItemAllOfOwner.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
VersionItemAllOfOwner.prototype['updatedAt'] = undefined;






export default VersionItemAllOfOwner;

