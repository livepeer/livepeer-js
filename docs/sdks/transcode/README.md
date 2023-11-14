# Transcode
(*transcode*)

### Available Operations

* [create](#create) - Transcode a video

## create

Transcode a video

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { CatalystPipelineStrategy, Encoder, NftMetadataTemplate, Profile, TaskType } from "livepeer/dist/models/components";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.transcode.create({
    inputAssetId: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
    outputAssetId: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
    params: {
      upload: {
        url: "https://cdn.livepeer.com/ABC123/filename.mp4",
        encryption: {
          encryptedKey: "string",
        },
        recordedSessionId: "78df0075-b5f3-4683-a618-1086faca35dc",
      },
      import: {
        url: "https://cdn.livepeer.com/ABC123/filename.mp4",
        encryption: {
          encryptedKey: "string",
        },
        recordedSessionId: "78df0075-b5f3-4683-a618-1086faca35dc",
      },
      export: "string",
      exportData: {
        content: {},
        ipfs: {
          nftMetadata: {},
          pinata: "string",
        },
      },
      transcode: {
        profile: {
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
      },
      transcodeFile: {
        input: {
          url: "https://cdn.livepeer.com/ABC123/filename.mp4",
        },
        storage: {
          url: "s3+https://accessKeyId:secretAccessKey@s3Endpoint/bucket",
        },
        outputs: {
          hls: {
            path: "/samplevideo/hls",
          },
          mp4: {
            path: "/samplevideo/mp4",
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
        creatorId: "string",
      },
    },
    clip: {
      clipStrategy: {},
    },
    output: {
      upload: {
        "key": "string",
      },
      import: {
        "key": "string",
      },
      export: {
        ipfs: {
          videoFileCid: "string",
        },
      },
      exportData: {
        ipfs: {
          cid: "string",
        },
      },
      transcode: {
        asset: {
          "key": "string",
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.TranscodeResponse](../../models/operations/transcoderesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
