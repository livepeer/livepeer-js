# Asset
(*asset*)

### Available Operations

* [getAll](#getall) - Retrieve assets
* [create](#create) - Upload an asset
* [createViaURL](#createviaurl) - Upload asset via URL
* [delete](#delete) - Delete an asset
* [get](#get) - Retrieves an asset
* [update](#update) - Update an asset

## getAll

Retrieve assets

### Example Usage

```typescript
import { Livepeer } from "livepeer";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.asset.getAll();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAssetsResponse](../../models/operations/getassetsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## create

Upload an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { TypeT } from "livepeer/dist/models/components";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.asset.create({
    name: "filename.mp4",
    staticMp4: true,
    playbackPolicy: {
      type: TypeT.Jwt,
      webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
      webhookContext: {
        "foo": "string",
      },
    },
    creatorId: "string",
    storage: {
      ipfs: "string",
    },
    url: "https://s3.amazonaws.com/my-bucket/path/filename.mp4",
    encryption: {
      encryptedKey: "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [components.NewAssetPayload](../../models/components/newassetpayload.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.RequestUploadResponse](../../models/operations/requestuploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createViaURL

Upload asset via URL

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { TypeT } from "livepeer/dist/models/components";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.asset.createViaURL({
    name: "filename.mp4",
    staticMp4: true,
    playbackPolicy: {
      type: TypeT.Webhook,
      webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
      webhookContext: {
        "foo": "string",
      },
    },
    creatorId: "string",
    storage: {
      ipfs: "string",
    },
    url: "https://s3.amazonaws.com/my-bucket/path/filename.mp4",
    encryption: {
      encryptedKey: "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [components.NewAssetPayload](../../models/components/newassetpayload.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.UploadAssetViaURLResponse](../../models/operations/uploadassetviaurlresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Delete an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { DeleteAssetRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const assetId: string = "string";

  const res = await sdk.asset.delete(assetId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assetId`                                                    | *string*                                                     | :heavy_check_mark:                                           | ID of the asset                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteAssetResponse](../../models/operations/deleteassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Retrieves an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetAssetRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const assetId: string = "string";

  const res = await sdk.asset.get(assetId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assetId`                                                    | *string*                                                     | :heavy_check_mark:                                           | ID of the asset                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAssetResponse](../../models/operations/getassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { AssetPatchPayload, PlaybackPolicy, Storage, TypeT } from "livepeer/dist/models/components";
import { PatchAssetAssetIdRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const assetId: string = "string";
const assetPatchPayload: AssetPatchPayload = {
  name: "filename.mp4",
  creatorId: "string",
  playbackPolicy: {
    type: TypeT.Webhook,
    webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
    webhookContext: {
      "foo": "string",
    },
  },
  storage: {
    ipfs: "string",
  },
};

  const res = await sdk.asset.update(assetId, assetPatchPayload);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `assetId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | ID of the asset                                                              |
| `assetPatchPayload`                                                          | [components.AssetPatchPayload](../../models/components/assetpatchpayload.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.PatchAssetAssetIdResponse](../../models/operations/patchassetassetidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
