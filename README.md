This is a starter template for [Learn Next.js](https://nextjs.org/learn).

This repo demonstrates snippet for website-nextjs and website-js usage

To run:
1. npm install
2. create file .env.local with FLOTIQ_API_KEY=_key_
3. import example data using flotiq-cli (data defined in .flotiq  dir)
4. npm run dev

### TMP
Command to build sdk
```
openapi-generator-cli generate -g javascript -i https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=_GLOBAL_RW_KEY_ --skip-validate-spec -o ./lib/flotiq-sdk --additional-properties=usePromises=true
```
