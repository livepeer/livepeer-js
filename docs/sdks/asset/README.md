# Asset
(*asset*)

### Available Operations

* [getAll](#getall) - Retrieve assets
* [requestUpload](#requestupload) - Upload an asset
* [uploadAssetViaURL](#uploadassetviaurl) - Upload asset via URL
* [get](#get) - Retrieves an asset
* [delete](#delete) - Delete an asset
* [update](#update) - Update an asset

## getAll

Retrieve assets

### Example Usage

```typescript
import { Livepeer } from "livepeer";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.asset.getAll();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAssetResponse](../../models/operations/getassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## requestUpload

Upload an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { CreatorIdType, Type } from "livepeer/models/components";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.asset.requestUpload({
    name: "filename.mp4",
    staticMp4: true,
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
      webhookContext: {
        "foo": "bar",
      },
    },
  creatorId:       {
          type: CreatorIdType.Unverified,
          value: "<value>",
        },
    storage: {
    ipfs: true,
    },
    url: "https://s3.amazonaws.com/my-bucket/path/filename.mp4",
    encryption: {
      encryptedKey: "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ1RDRzhRWDZKdkR0eC95ZDMKdlpkUHJKR25LcjhiWHRsdXNIL2FOYW5XdHEraFJBTkNBQVE0QnZ6ODI2L2lDaXV1U0NiZVkwc3FmOXljYWh0OApDRFYyUFF2bDFVM1FLSVRBcWRpaktLa0FSUFVkcWRrYWZzR21PMzBDeElPaDBLNWJSQW5XQzd4KwotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.NewAssetPayload](../../models/components/newassetpayload.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostAssetRequestUploadResponse](../../models/operations/postassetrequestuploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## uploadAssetViaURL

Upload asset via URL

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { Type } from "livepeer/models/components";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.asset.uploadAssetViaURL({
    name: "filename.mp4",
    staticMp4: true,
    playbackPolicy: {
      type: Type.Jwt,
      webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
      webhookContext: {
        "foo": "bar",
      },
    },
  creatorId: "<value>",
    storage: {
    ipfs: true,
    },
    url: "https://s3.amazonaws.com/my-bucket/path/filename.mp4",
    encryption: {
      encryptedKey: "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ1RDRzhRWDZKdkR0eC95ZDMKdlpkUHJKR25LcjhiWHRsdXNIL2FOYW5XdHEraFJBTkNBQVE0QnZ6ODI2L2lDaXV1U0NiZVkwc3FmOXljYWh0OApDRFYyUFF2bDFVM1FLSVRBcWRpaktLa0FSUFVkcWRrYWZzR21PMzBDeElPaDBLNWJSQW5XQzd4KwotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.NewAssetPayload](../../models/components/newassetpayload.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostAssetUploadUrlResponse](../../models/operations/postassetuploadurlresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Retrieves an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const assetId = "<value>";
  
  const result = await sdk.asset.get(assetId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the asset                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAssetAssetIdResponse](../../models/operations/getassetassetidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const assetId = "<value>";
  
  const result = await sdk.asset.delete(assetId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the asset                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteAssetAssetIdResponse](../../models/operations/deleteassetassetidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { Type } from "livepeer/models/components";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const assetId = "<value>";
  const assetPatchPayload = {
    name: "filename.mp4",
  creatorId: "<value>",
    playbackPolicy: {
      type: Type.Public,
      webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
      webhookContext: {
        "foo": "bar",
      },
    },
    storage: {
    ipfs: true,
    },
  };
  
  const result = await sdk.asset.update(assetId, assetPatchPayload);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the asset                                                                                                                                                                |
| `assetPatchPayload`                                                                                                                                                            | [components.AssetPatchPayload](../../models/components/assetpatchpayload.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PatchAssetAssetIdResponse](../../models/operations/patchassetassetidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
