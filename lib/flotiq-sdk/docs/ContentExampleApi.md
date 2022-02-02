# FlotiqUserApi.ContentExampleApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreateExample**](ContentExampleApi.md#batchCreateExample) | **POST** /api/v1/content/example/batch | 
[**batchDeleteExample**](ContentExampleApi.md#batchDeleteExample) | **POST** /api/v1/content/example/batch-delete | 
[**createExample**](ContentExampleApi.md#createExample) | **POST** /api/v1/content/example | 
[**deleteExample**](ContentExampleApi.md#deleteExample) | **DELETE** /api/v1/content/example/{id} | 
[**getExample**](ContentExampleApi.md#getExample) | **GET** /api/v1/content/example/{id} | 
[**getExampleVersions**](ContentExampleApi.md#getExampleVersions) | **GET** /api/v1/content/example/{id}/version/{versionId} | 
[**getRemovedExample**](ContentExampleApi.md#getRemovedExample) | **GET** /api/v1/content/example/removed | 
[**listExample**](ContentExampleApi.md#listExample) | **GET** /api/v1/content/example | 
[**listExampleVersion**](ContentExampleApi.md#listExampleVersion) | **GET** /api/v1/content/example/{id}/version | 
[**updateExample**](ContentExampleApi.md#updateExample) | **PUT** /api/v1/content/example/{id} | 



## batchCreateExample

> BatchResponseSuccess batchCreateExample(opts)



Allows you to create or create and update up to 100 objects of Example type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FbatchCreateExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let opts = {
  'updateExisting': false, // Boolean | Overwrite existing objects
  'exampleWithoutInternal': [{"id":"example-1","title":"title","header":"header"},{"id":"example-2","title":"title","header":"header"}] // [ExampleWithoutInternal] | 
};
apiInstance.batchCreateExample(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExisting** | **Boolean**| Overwrite existing objects | [optional] [default to false]
 **exampleWithoutInternal** | [**[ExampleWithoutInternal]**](ExampleWithoutInternal.md)|  | [optional] 

### Return type

[**BatchResponseSuccess**](BatchResponseSuccess.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchDeleteExample

> InlineResponse200 batchDeleteExample(opts)



Allows you to dlete up to 100 objects of Example type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FbatchDeleteExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let opts = {
  'requestBody': ["example-1","example-2"] // [String] | 
};
apiInstance.batchDeleteExample(opts).then((data) => {
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


## createExample

> Example createExample(opts)



Allows you to create object of Example type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FcreateExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let opts = {
  'exampleWithoutInternal': {"id":"example-1","title":"title","header":"header"} // ExampleWithoutInternal | 
};
apiInstance.createExample(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exampleWithoutInternal** | [**ExampleWithoutInternal**](ExampleWithoutInternal.md)|  | [optional] 

### Return type

[**Example**](Example.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteExample

> deleteExample(id)



Removes Example object.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FdeleteExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let id = example-1; // String | ContentObject identifier
apiInstance.deleteExample(id).then(() => {
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


## getExample

> Example getExample(id, opts)



Returns all information about Example object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let id = example-1; // String | ContentObject identifier
let opts = {
  'hydrate': 0 // Number | Should hydrate relations of object, for now only one level of hydration is possible
};
apiInstance.getExample(id, opts).then((data) => {
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

[**Example**](Example.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExampleVersions

> Example getExampleVersions(id, versionId)



Return version of Example object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let id = example-1; // String | ContentObject identifier
let versionId = version-1; // String | ContentObject version identifier
apiInstance.getExampleVersions(id, versionId).then((data) => {
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

[**Example**](Example.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRemovedExample

> [String] getRemovedExample(opts)



Get ids of removed Example objects. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FgetRemovedExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let opts = {
  'deletedAfter': 2020-01-01 12:00:00 // String | Date from which ids of removed objects should be returned
};
apiInstance.getRemovedExample(opts).then((data) => {
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


## listExample

> ExampleList listExample(opts)



List objects of Example type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FlistExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc, // String | Order direction
  'hydrate': 0, // Number | Should hydrate relations of object, for now only one level of hydration is possible
  'filters': {"slug":{"type":"contains","filter":"test"},"title":{"type":"contains","filter":"test"}}, // String | List filters
  'ids': ["null"] // [String] | Ids of objects to return.
};
apiInstance.listExample(opts).then((data) => {
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

[**ExampleList**](ExampleList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listExampleVersion

> ExampleVersionsList listExampleVersion(id, opts)



List objects versions of Example type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FlistExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let id = example-1; // String | ContentObject identifier
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc // String | Order direction
};
apiInstance.listExampleVersion(id, opts).then((data) => {
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

[**ExampleVersionsList**](ExampleVersionsList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateExample

> Example updateExample(id, opts)



Allows update of the Example object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Example%2FupdateExample&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentExampleApi();
let id = example-1; // String | ContentObject identifier
let opts = {
  'exampleWithoutInternal': {"id":"example-1","title":"title","header":"header"} // ExampleWithoutInternal | 
};
apiInstance.updateExample(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **exampleWithoutInternal** | [**ExampleWithoutInternal**](ExampleWithoutInternal.md)|  | [optional] 

### Return type

[**Example**](Example.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

