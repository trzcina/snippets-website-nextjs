# FlotiqUserApi.ContentMediaApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreateMedia**](ContentMediaApi.md#batchCreateMedia) | **POST** /api/v1/content/_media/batch | 
[**batchDeleteMedia**](ContentMediaApi.md#batchDeleteMedia) | **POST** /api/v1/content/_media/batch-delete | 
[**createMedia**](ContentMediaApi.md#createMedia) | **POST** /api/v1/content/_media | 
[**deleteMedia**](ContentMediaApi.md#deleteMedia) | **DELETE** /api/v1/content/_media/{id} | 
[**getMedia**](ContentMediaApi.md#getMedia) | **GET** /api/v1/content/_media/{id} | 
[**getMediaVersions**](ContentMediaApi.md#getMediaVersions) | **GET** /api/v1/content/_media/{id}/version/{versionId} | 
[**getRemovedMedia**](ContentMediaApi.md#getRemovedMedia) | **GET** /api/v1/content/_media/removed | 
[**listMedia**](ContentMediaApi.md#listMedia) | **GET** /api/v1/content/_media | 
[**listMediaVersion**](ContentMediaApi.md#listMediaVersion) | **GET** /api/v1/content/_media/{id}/version | 
[**updateMedia**](ContentMediaApi.md#updateMedia) | **PUT** /api/v1/content/_media/{id} | 



## batchCreateMedia

> BatchResponseSuccess batchCreateMedia(opts)



Allows you to create or create and update up to 100 objects of Media type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FbatchCreate_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let opts = {
  'updateExisting': false, // Boolean | Overwrite existing objects
  'mediaWithoutInternal': [{"id":"_media-698d20aa-193a-47b3-be4d-550c1aab47e7","extension":"png","fileName":"example_image.png","mimeType":"image/png","size":87258,"type":"image","source":"disk","externalId":"","url":"/image/0x0/_media-698d20aa-193a-47b3-be4d-550c1aab47e7.png","height":517,"width":925},{"id":"_media-698d20aa-193a-47b3-be4d-550c1aab47e7","extension":"png","fileName":"example_image.png","mimeType":"image/png","size":87258,"type":"image","source":"disk","externalId":"","url":"/image/0x0/_media-698d20aa-193a-47b3-be4d-550c1aab47e7.png","height":517,"width":925}] // [MediaWithoutInternal] | 
};
apiInstance.batchCreateMedia(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExisting** | **Boolean**| Overwrite existing objects | [optional] [default to false]
 **mediaWithoutInternal** | [**[MediaWithoutInternal]**](MediaWithoutInternal.md)|  | [optional] 

### Return type

[**BatchResponseSuccess**](BatchResponseSuccess.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchDeleteMedia

> InlineResponse200 batchDeleteMedia(opts)



Allows you to dlete up to 100 objects of Media type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FbatchDelete_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let opts = {
  'requestBody': ["_media-1","_media-2"] // [String] | 
};
apiInstance.batchDeleteMedia(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMedia

> Media createMedia(opts)



Allows you to create object of Media type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fcreate_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let opts = {
  'mediaWithoutInternal': {"id":"_media-698d20aa-193a-47b3-be4d-550c1aab47e7","extension":"png","fileName":"example_image.png","mimeType":"image/png","size":87258,"type":"image","source":"disk","externalId":"","url":"/image/0x0/_media-698d20aa-193a-47b3-be4d-550c1aab47e7.png","height":517,"width":925} // MediaWithoutInternal | 
};
apiInstance.createMedia(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mediaWithoutInternal** | [**MediaWithoutInternal**](MediaWithoutInternal.md)|  | [optional] 

### Return type

[**Media**](Media.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMedia

> deleteMedia(id)



Removes Media object.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fdelete_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let id = _media-1; // String | ContentObject identifier
apiInstance.deleteMedia(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMedia

> Media getMedia(id, opts)



Returns all information about Media object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fget_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let id = _media-1; // String | ContentObject identifier
let opts = {
  'hydrate': 0 // Number | Should hydrate relations of object, for now only one level of hydration is possible
};
apiInstance.getMedia(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **hydrate** | **Number**| Should hydrate relations of object, for now only one level of hydration is possible | [optional] [default to 0]

### Return type

[**Media**](Media.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMediaVersions

> Media getMediaVersions(id, versionId)



Return version of Media object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fget_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let id = _media-1; // String | ContentObject identifier
let versionId = version-1; // String | ContentObject version identifier
apiInstance.getMediaVersions(id, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **versionId** | **String**| ContentObject version identifier | 

### Return type

[**Media**](Media.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRemovedMedia

> [String] getRemovedMedia(opts)



Get ids of removed Media objects. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2FgetRemoved_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let opts = {
  'deletedAfter': 2020-01-01 12:00:00 // String | Date from which ids of removed objects should be returned
};
apiInstance.getRemovedMedia(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletedAfter** | **String**| Date from which ids of removed objects should be returned | [optional] 

### Return type

**[String]**

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMedia

> MediaList listMedia(opts)



List objects of Media type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Flist_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc, // String | Order direction
  'hydrate': 0, // Number | Should hydrate relations of object, for now only one level of hydration is possible
  'filters': {"slug":{"type":"contains","filter":"test"},"title":{"type":"contains","filter":"test"}}, // String | List filters
  'ids': ["null"] // [String] | Ids of objects to return.
};
apiInstance.listMedia(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Listing page number, 1-based | [optional] [default to 1]
 **limit** | **Number**| Page limit | [optional] [default to 20]
 **orderBy** | **String**| Order by field | [optional] [default to &#39;internal.createdAt&#39;]
 **orderDirection** | **String**| Order direction | [optional] [default to &#39;asc&#39;]
 **hydrate** | **Number**| Should hydrate relations of object, for now only one level of hydration is possible | [optional] [default to 0]
 **filters** | **String**| List filters | [optional] [default to &#39;{}&#39;]
 **ids** | [**[String]**](String.md)| Ids of objects to return. | [optional] 

### Return type

[**MediaList**](MediaList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMediaVersion

> MediaVersionsList listMediaVersion(id, opts)



List objects versions of Media type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Flist_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let id = _media-1; // String | ContentObject identifier
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc // String | Order direction
};
apiInstance.listMediaVersion(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **page** | **Number**| Listing page number, 1-based | [optional] [default to 1]
 **limit** | **Number**| Page limit | [optional] [default to 20]
 **orderBy** | **String**| Order by field | [optional] [default to &#39;internal.createdAt&#39;]
 **orderDirection** | **String**| Order direction | [optional] [default to &#39;asc&#39;]

### Return type

[**MediaVersionsList**](MediaVersionsList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMedia

> Media updateMedia(id, opts)



Allows update of the Media object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Media%2Fupdate_media&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMediaApi();
let id = _media-1; // String | ContentObject identifier
let opts = {
  'mediaWithoutInternal': {"id":"_media-698d20aa-193a-47b3-be4d-550c1aab47e7","extension":"png","fileName":"example_image.png","mimeType":"image/png","size":87258,"type":"image","source":"disk","externalId":"","url":"/image/0x0/_media-698d20aa-193a-47b3-be4d-550c1aab47e7.png","height":517,"width":925} // MediaWithoutInternal | 
};
apiInstance.updateMedia(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **mediaWithoutInternal** | [**MediaWithoutInternal**](MediaWithoutInternal.md)|  | [optional] 

### Return type

[**Media**](Media.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

