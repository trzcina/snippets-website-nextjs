# FlotiqUserApi.InternalApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContentDefinition**](InternalApi.md#deleteContentDefinition) | **DELETE** /api/v1/internal/contenttype/{id} | 
[**getContentDefinition**](InternalApi.md#getContentDefinition) | **GET** /api/v1/internal/contenttype/{id} | 
[**getContentDefinitions**](InternalApi.md#getContentDefinitions) | **GET** /api/v1/internal/contenttype | 
[**postContentDefinition**](InternalApi.md#postContentDefinition) | **POST** /api/v1/internal/contenttype | 
[**putContentDefinition**](InternalApi.md#putContentDefinition) | **PUT** /api/v1/internal/contenttype/{id} | 



## deleteContentDefinition

> deleteContentDefinition(id)



Delete ContentTypeDefinition

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let id = product; // String | Id of content type definition
apiInstance.deleteContentDefinition(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of content type definition | 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentDefinition

> ContentTypeDefinitionSchema getContentDefinition(id, opts)



Returns an user-defined Content Definitions

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let id = _media; // String | Id of content type definition
let opts = {
  'resolveRef': false, // Boolean | Should the system resolve references done using $ref
  'strictSchema': false // Boolean | Use 'schema' instead of 'schemaDefinition'
};
apiInstance.getContentDefinition(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of content type definition | 
 **resolveRef** | **Boolean**| Should the system resolve references done using $ref | [optional] [default to false]
 **strictSchema** | **Boolean**| Use &#39;schema&#39; instead of &#39;schemaDefinition&#39; | [optional] [default to false]

### Return type

[**ContentTypeDefinitionSchema**](ContentTypeDefinitionSchema.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentDefinitions

> ContentTypeListResponse getContentDefinitions(opts)



Returns an array of user-defined Content Definitions

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': name, // String | Order by field
  'orderDirection': asc, // String | Order direction
  'name': _media, // String | Filters CTDs by name
  'label': Media // String | Filters CTDs by label
};
apiInstance.getContentDefinitions(opts).then((data) => {
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
 **orderBy** | **String**| Order by field | [optional] [default to &#39;name&#39;]
 **orderDirection** | **String**| Order direction | [optional] [default to &#39;asc&#39;]
 **name** | **String**| Filters CTDs by name | [optional] [default to &#39;&#39;]
 **label** | **String**| Filters CTDs by label | [optional] [default to &#39;&#39;]

### Return type

[**ContentTypeListResponse**](ContentTypeListResponse.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postContentDefinition

> ContentTypeDefinitionSchema postContentDefinition(opts)



Create new ContentTypeDefinition to store new type of ContentObjects

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let opts = {
  'contentTypeDefinitionSchema': new FlotiqUserApi.ContentTypeDefinitionSchema() // ContentTypeDefinitionSchema | 
};
apiInstance.postContentDefinition(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentTypeDefinitionSchema** | [**ContentTypeDefinitionSchema**](ContentTypeDefinitionSchema.md)|  | [optional] 

### Return type

[**ContentTypeDefinitionSchema**](ContentTypeDefinitionSchema.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putContentDefinition

> ContentTypeDefinitionSchema putContentDefinition(id, opts)



Update ConentTypeDefinition

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.InternalApi();
let id = products; // String | Id of content type definition
let opts = {
  'contentTypeDefinitionSchema': new FlotiqUserApi.ContentTypeDefinitionSchema() // ContentTypeDefinitionSchema | 
};
apiInstance.putContentDefinition(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of content type definition | 
 **contentTypeDefinitionSchema** | [**ContentTypeDefinitionSchema**](ContentTypeDefinitionSchema.md)|  | [optional] 

### Return type

[**ContentTypeDefinitionSchema**](ContentTypeDefinitionSchema.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

