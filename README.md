This is a starter template for [Learn Next.js](https://nextjs.org/learn).


### TMP
Command to build sdk
```
openapi-generator-cli generate -g javascript -i https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=_GLOBAL_RW_KEY_ --skip-validate-spec -o ./lib/flotiq-sdk --additional-properties=usePromises=true
```
