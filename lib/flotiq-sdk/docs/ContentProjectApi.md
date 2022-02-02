# FlotiqUserApi.ContentProjectApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreateProject**](ContentProjectApi.md#batchCreateProject) | **POST** /api/v1/content/project/batch | 
[**batchDeleteProject**](ContentProjectApi.md#batchDeleteProject) | **POST** /api/v1/content/project/batch-delete | 
[**createProject**](ContentProjectApi.md#createProject) | **POST** /api/v1/content/project | 
[**deleteProject**](ContentProjectApi.md#deleteProject) | **DELETE** /api/v1/content/project/{id} | 
[**getProject**](ContentProjectApi.md#getProject) | **GET** /api/v1/content/project/{id} | 
[**getProjectVersions**](ContentProjectApi.md#getProjectVersions) | **GET** /api/v1/content/project/{id}/version/{versionId} | 
[**getRemovedProject**](ContentProjectApi.md#getRemovedProject) | **GET** /api/v1/content/project/removed | 
[**listProject**](ContentProjectApi.md#listProject) | **GET** /api/v1/content/project | 
[**listProjectVersion**](ContentProjectApi.md#listProjectVersion) | **GET** /api/v1/content/project/{id}/version | 
[**updateProject**](ContentProjectApi.md#updateProject) | **PUT** /api/v1/content/project/{id} | 



## batchCreateProject

> BatchResponseSuccess batchCreateProject(opts)



Allows you to create or create and update up to 100 objects of Project type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FbatchCreateProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let opts = {
  'updateExisting': false, // Boolean | Overwrite existing objects
  'projectWithoutInternal': [{"id":"project-1","name":"name","slug":"slug","status":"public","gallery":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"description":"description"},{"id":"project-2","name":"name","slug":"slug","status":"public","gallery":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"description":"description"}] // [ProjectWithoutInternal] | 
};
apiInstance.batchCreateProject(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExisting** | **Boolean**| Overwrite existing objects | [optional] [default to false]
 **projectWithoutInternal** | [**[ProjectWithoutInternal]**](ProjectWithoutInternal.md)|  | [optional] 

### Return type

[**BatchResponseSuccess**](BatchResponseSuccess.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchDeleteProject

> InlineResponse200 batchDeleteProject(opts)



Allows you to dlete up to 100 objects of Project type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FbatchDeleteProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let opts = {
  'requestBody': ["project-1","project-2"] // [String] | 
};
apiInstance.batchDeleteProject(opts).then((data) => {
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


## createProject

> Project createProject(opts)



Allows you to create object of Project type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FcreateProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let opts = {
  'projectWithoutInternal': {"id":"project-1","name":"name","slug":"slug","status":"public","gallery":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"description":"description"} // ProjectWithoutInternal | 
};
apiInstance.createProject(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectWithoutInternal** | [**ProjectWithoutInternal**](ProjectWithoutInternal.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProject

> deleteProject(id)



Removes Project object.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FdeleteProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let id = project-1; // String | ContentObject identifier
apiInstance.deleteProject(id).then(() => {
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


## getProject

> Project getProject(id, opts)



Returns all information about Project object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let id = project-1; // String | ContentObject identifier
let opts = {
  'hydrate': 0 // Number | Should hydrate relations of object, for now only one level of hydration is possible
};
apiInstance.getProject(id, opts).then((data) => {
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

[**Project**](Project.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectVersions

> Project getProjectVersions(id, versionId)



Return version of Project object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let id = project-1; // String | ContentObject identifier
let versionId = version-1; // String | ContentObject version identifier
apiInstance.getProjectVersions(id, versionId).then((data) => {
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

[**Project**](Project.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRemovedProject

> [String] getRemovedProject(opts)



Get ids of removed Project objects. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FgetRemovedProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let opts = {
  'deletedAfter': 2020-01-01 12:00:00 // String | Date from which ids of removed objects should be returned
};
apiInstance.getRemovedProject(opts).then((data) => {
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


## listProject

> ProjectList listProject(opts)



List objects of Project type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FlistProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc, // String | Order direction
  'hydrate': 0, // Number | Should hydrate relations of object, for now only one level of hydration is possible
  'filters': {"slug":{"type":"contains","filter":"test"},"title":{"type":"contains","filter":"test"}}, // String | List filters
  'ids': ["null"] // [String] | Ids of objects to return.
};
apiInstance.listProject(opts).then((data) => {
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

[**ProjectList**](ProjectList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProjectVersion

> ProjectVersionsList listProjectVersion(id, opts)



List objects versions of Project type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FlistProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let id = project-1; // String | ContentObject identifier
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc // String | Order direction
};
apiInstance.listProjectVersion(id, opts).then((data) => {
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

[**ProjectVersionsList**](ProjectVersionsList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProject

> Project updateProject(id, opts)



Allows update of the Project object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Fopen-api-schema.json%3Fauth_token%3D338-please-not-show-my-api-key-ab#%2FContent: Project%2FupdateProject&#39;&gt;&lt;button class&#x3D;\&quot;flotiq-button\&quot;&gt;Try it out&lt;/button&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentProjectApi();
let id = project-1; // String | ContentObject identifier
let opts = {
  'projectWithoutInternal': {"id":"project-1","name":"name","slug":"slug","status":"public","gallery":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"description":"description"} // ProjectWithoutInternal | 
};
apiInstance.updateProject(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **projectWithoutInternal** | [**ProjectWithoutInternal**](ProjectWithoutInternal.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

