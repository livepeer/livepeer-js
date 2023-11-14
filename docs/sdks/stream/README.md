# Stream
(*stream*)

### Available Operations

* [getAll](#getall) - Retrieve streams
* [create](#create) - Create a stream
* [delete](#delete) - Delete a stream
* [get](#get) - Retrieve a stream
* [update](#update) - Update a stream
* [createClip](#createclip) - Create a clip
* [getAllClips](#getallclips) - Retrieve clips of a livestream

## getAll

Retrieve streams

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetStreamsRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const streamsonly: string = "string";

  const res = await sdk.stream.getAll(streamsonly);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `streamsonly`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Filter the API response and retrieve a specific subset of stream objects based on certain criteria |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetStreamsResponse](../../models/operations/getstreamsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## create

Create a stream

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { Encoder, Profile, TypeT } from "livepeer/dist/models/components";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.stream.create({
    name: "test_stream",
    creatorId: "string",
    playbackPolicy: {
      type: TypeT.Jwt,
      webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
      webhookContext: {
        "foo": "string",
      },
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 4000,
        fps: 30,
        fpsDen: 1,
        gop: "60",
        profile: Profile.H264High,
        encoder: Encoder.H264,
      },
    ],
    record: false,
    multistream: {
      targets: [
        {
          profile: "720p",
          spec: {
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [components.NewStreamPayload](../../models/components/newstreampayload.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateStreamResponse](../../models/operations/createstreamresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Delete a stream

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { DeleteStreamRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const id: string = "string";

  const res = await sdk.stream.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | ID of the stream                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteStreamResponse](../../models/operations/deletestreamresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Retrieve a stream

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetStreamRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const id: string = "string";

  const res = await sdk.stream.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | ID of the stream                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStreamResponse](../../models/operations/getstreamresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update a stream

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { Multistream, PlaybackPolicy, Spec, StreamPatchPayload, Targets, TypeT } from "livepeer/dist/models/components";
import { UpdateStreamRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const id: string = "string";
const streamPatchPayload: StreamPatchPayload = {
  creatorId: "string",
  record: false,
  multistream: {
    targets: [
      {
        profile: "720p",
        spec: {
          url: "rtmps://live.my-service.tv/channel/secretKey",
        },
      },
    ],
  },
  playbackPolicy: {
    type: TypeT.Webhook,
    webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
    webhookContext: {
      "foo": "string",
    },
  },
};

  const res = await sdk.stream.update(id, streamPatchPayload);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | ID of the stream                                                               |
| `streamPatchPayload`                                                           | [components.StreamPatchPayload](../../models/components/streampatchpayload.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateStreamResponse](../../models/operations/updatestreamresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createClip

Create a clip from a livestream


### Example Usage

```typescript
import { Livepeer } from "livepeer";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.stream.createClip({
    playbackId: "string",
    startTime: 9418.72,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.ClipPayload](../../models/components/clippayload.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.PostClipResponse](../../models/operations/postclipresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAllClips

Retrieve clips of a livestream

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetStreamIdClipsRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const id: string = "string";

  const res = await sdk.stream.getAllClips(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | ID of the parent stream or playbackId of parent stream       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStreamIdClipsResponse](../../models/operations/getstreamidclipsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
