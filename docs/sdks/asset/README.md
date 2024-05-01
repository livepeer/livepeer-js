# Asset
(*asset*)

## Overview

Operations related to asset/vod api

### Available Operations

* [getAll](#getall) - Retrieve assets
* [create](#create) - Upload an asset
* [createViaUrl](#createviaurl) - Upload asset via URL
* [get](#get) - Retrieves an asset
* [update](#update) - Patch an asset
* [delete](#delete) - Delete an asset

## getAll

Retrieve assets

### Example Usage

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.asset.getAll();

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

**Promise<[operations.GetAssetsResponse](../../models/operations/getassetsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

To upload an asset, your first need to request for a direct upload URL
and only then actually upload the contents of the asset.
\
\
Once you created a upload link, you have 2 options, resumable or direct
upload. For a more reliable experience, you should use resumable uploads
which will work better for users with unreliable or slow network
connections. If you want a simpler implementation though, you should
just use a direct upload.


## Direct Upload
For a direct upload, make a PUT request to the URL received in the url
field of the response above, with the raw video file as the request
body. response above:


## Resumable Upload
Livepeer supports resumable uploads via Tus. This section provides a
simple example of how to use tus-js-client to upload a video file.
\
\
From the previous section, we generated a URL to upload a video file to
Livepeer on POST /api/asset/request-upload. You should use the
tusEndpoint field of the response to upload the video file and track the
progress:

```
# This assumes there is an `input` element of `type="file"` with id
`fileInput` in the HTML


const input = document.getElementById('fileInput');

const file = input.files[0];

const upload = new tus.Upload(file, {
  endpoint: tusEndpoint, // URL from `tusEndpoint` field in the
`/request-upload` response
  metadata: {
    filename,
    filetype: 'video/mp4',
  },
  uploadSize: file.size,
  onError(err) {
    console.error('Error uploading file:', err);
  },
  onProgress(bytesUploaded, bytesTotal) {
    const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
    console.log('Uploaded ' + percentage + '%');
  },
  onSuccess() {
    console.log('Upload finished:', upload.url);
  },
});

const previousUploads = await upload.findPreviousUploads();

if (previousUploads.length > 0) {
  upload.resumeFromPreviousUpload(previousUploads[0]);
}

upload.start();

```

> Note: If you are using tus from node.js, you need to add a custom URL
storage to enable resuming from previous uploads. On the browser, this
is enabled by default using local storage. In node.js, add urlStorage:
new tus.FileUrlStorage("path/to/tmp/file"), to the UploadFile object
definition above.


### Example Usage

```typescript
import { Livepeer } from "livepeer";
import {
  AssetSchemasSourceType,
  AssetType,
  CreatorIdType,
  InputCreatorIdType,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.asset.create({
    name: "filename.mp4",
    projectId: {
      type: AssetType.Video,
      playbackId: "eaw4nk06ts2d0mzb",
      userId: "66E2161C-7670-4D05-B71D-DA2D6979556F",
      playbackPolicy: {
        type: Type.Webhook,
        webhookId: "1bde4o2i6xycudoy",
        webhookContext: {
          "streamerId": "my-custom-id",
        },
        refreshInterval: 600,
      },
    source:     {
          type: AssetSchemasSourceType.Recording,
          sessionId: "<value>",
        },
    creatorId:     {
          type: CreatorIdType.Unverified,
          value: "user123",
        },
      storage: {
        ipfs: {
          spec: {
            nftMetadata: {},
          },
          nftMetadata: {
            cid: "<value>",
          },
        },
      },
      name: "filename.mp4",
      projectId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
      hash: [
        {
          hash: "9b560b28b85378a5004117539196ab24e21bbd75b0e9eb1a8bc7c5fd80dc5b57",
          algorithm: "sha256",
        },
      ],
    },
    staticMp4: true,
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
  creatorId:     {
        type: InputCreatorIdType.Unverified,
        value: "<value>",
      },
    storage: {
    ipfs: false,
    },
    encryption: {
      encryptedKey: "<value>",
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        bitrate: 3000000,
        quality: 23,
        fps: 30,
        fpsDen: 1,
        gop: "2",
        profile: TranscodeProfileProfile.H264Baseline,
        encoder: TranscodeProfileEncoder.H264,
      },
    ],
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

**Promise<[operations.RequestUploadResponse](../../models/operations/requestuploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createViaUrl

Upload asset via URL

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { TranscodeProfileEncoder, TranscodeProfileProfile, Type } from "livepeer/models/components";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.asset.createViaUrl({
    name: "filename.mp4",
    staticMp4: true,
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
  creatorId: "<value>",
    storage: {
    ipfs:     {
          spec: {
            nftMetadata: {},
          },
        },
    },
    url: "https://s3.amazonaws.com/my-bucket/path/filename.mp4",
    encryption: {
      encryptedKey: "<value>",
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        bitrate: 3000000,
        quality: 23,
        fps: 30,
        fpsDen: 1,
        gop: "2",
        profile: TranscodeProfileProfile.H264Baseline,
        encoder: TranscodeProfileEncoder.H264,
      },
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.NewAssetFromUrlPayload](../../models/components/newassetfromurlpayload.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UploadAssetResponse](../../models/operations/uploadassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Retrieves an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const assetId = "<value>";
  
  const result = await livepeer.asset.get(assetId);

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

**Promise<[operations.GetAssetResponse](../../models/operations/getassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Patch an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { Type } from "livepeer/models/components";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const assetId = "<value>";
  const assetPatchPayload = {
    name: "filename.mp4",
  creatorId: "<value>",
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    storage: {
    ipfs:     {
          spec: {
            nftMetadata: {},
          },
        },
    },
  };
  
  const result = await livepeer.asset.update(assetId, assetPatchPayload);

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

**Promise<[operations.UpdateAssetResponse](../../models/operations/updateassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete an asset

### Example Usage

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const assetId = "<value>";
  
  const result = await livepeer.asset.delete(assetId);

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

**Promise<[operations.DeleteAssetResponse](../../models/operations/deleteassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
