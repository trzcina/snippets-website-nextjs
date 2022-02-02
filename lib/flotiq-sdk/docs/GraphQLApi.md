# FlotiqUserApi.GraphQLApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**graphQL**](GraphQLApi.md#graphQL) | **POST** /api/graphql | 
[**graphQLSchema**](GraphQLApi.md#graphQLSchema) | **GET** /api/graphql/schema | 



## graphQL

> Object graphQL(opts)



Endpoint for GraphQL Queries for Headless Types

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.GraphQLApi();
let opts = {
  'inlineObject': new FlotiqUserApi.InlineObject() // InlineObject | 
};
apiInstance.graphQL(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

**Object**

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## graphQLSchema

> graphQLSchema()



Get current descripion of GraphQL Schema

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.GraphQLApi();
apiInstance.graphQLSchema().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/json

