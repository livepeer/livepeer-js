# Transcode
(*transcode*)

### Available Operations

* [create](#create) - Transcode a video

## create

Transcode a video

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import {
  AssetNftMetadataTemplate,
  AssetType,
  CreatorIdType,
  Encoder,
  Profile,
  SourceType,
  Type,
} from "livepeer/models/components";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.transcode.create({
    inputAssetId: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
    outputAssetId: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
    params: {
      upload: {
        url: "https://cdn.livepeer.com/ABC123/filename.mp4",
        encryption: {
          encryptedKey: "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ1RDRzhRWDZKdkR0eC95ZDMKdlpkUHJKR25LcjhiWHRsdXNIL2FOYW5XdHEraFJBTkNBQVE0QnZ6ODI2L2lDaXV1U0NiZVkwc3FmOXljYWh0OApDRFYyUFF2bDFVM1FLSVRBcWRpaktLa0FSUFVkcWRrYWZzR21PMzBDeElPaDBLNWJSQW5XQzd4KwotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==",
        },
        recordedSessionId: "78df0075-b5f3-4683-a618-1086faca35dc",
      },
      import: {
        url: "https://cdn.livepeer.com/ABC123/filename.mp4",
        encryption: {
          encryptedKey: "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ1RDRzhRWDZKdkR0eC95ZDMKdlpkUHJKR25LcjhiWHRsdXNIL2FOYW5XdHEraFJBTkNBQVE0QnZ6ODI2L2lDaXV1U0NiZVkwc3FmOXljYWh0OApDRFYyUFF2bDFVM1FLSVRBcWRpaktLa0FSUFVkcWRrYWZzR21PMzBDeElPaDBLNWJSQW5XQzd4KwotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==",
        },
        recordedSessionId: "78df0075-b5f3-4683-a618-1086faca35dc",
      },
    export:     {
          custom: {
            url: "https://s3.amazonaws.com/my-bucket/path/filename.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=LLMMB",
            headers: {
              "key": "<value>",
            },
          },
        },
      exportData: {
        content: {},
        ipfs: {
          nftMetadata: {},
        pinata:     {
              jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDI4NjQwNzcsImlhdCI6MTYwMjI3NjA3NywiaXNzIjoiYXBpLmlzc3VlciIsInN1YiI6I",
            },
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
      creatorId:       {
              type: CreatorIdType.Unverified,
              value: "<value>",
            },
      },
    },
    clip: {
      clipStrategy: {},
    },
    output: {
      upload: {
        assetSpec: {
          type: AssetType.Video,
          playbackId: "eaw4nk06ts2d0mzb",
          playbackPolicy: {
            type: Type.Jwt,
            webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
            webhookContext: {
              "foo": "bar",
            },
          },
        source:     {
              type: SourceType.Url,
              url: "https://example.com/video.mp4",
              gatewayUrl: "https://example.com/video.mp4",
              encryption: {
                encryptedKey: "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ1RDRzhRWDZKdkR0eC95ZDMKdlpkUHJKR25LcjhiWHRsdXNIL2FOYW5XdHEraFJBTkNBQVE0QnZ6ODI2L2lDaXV1U0NiZVkwc3FmOXljYWh0OApDRFYyUFF2bDFVM1FLSVRBcWRpaktLa0FSUFVkcWRrYWZzR21PMzBDeElPaDBLNWJSQW5XQzd4KwotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==",
              },
            },
        creatorId:     {
              type: CreatorIdType.Unverified,
              value: "<value>",
            },
          storage: {
            ipfs: {
              spec: {
                nftMetadataTemplate: AssetNftMetadataTemplate.File,
                nftMetadata: {},
              },
              cid: "bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u",
              nftMetadata: {
                cid: "bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u",
              },
            },
          },
          name: "filename.mp4",
          hash: [
            {
              hash: "9b560b28b85378a5004117539196ab24e21bbd75b0e9eb1a8bc7c5fd80dc5b57",
              algorithm: "sha256",
            },
          ],
        },
        additionalProperties: {
          "key": "<value>",
        },
      },
      import: {
        assetSpec: {
          type: AssetType.Video,
          playbackId: "eaw4nk06ts2d0mzb",
          playbackPolicy: {
            type: Type.Webhook,
            webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
            webhookContext: {
              "foo": "bar",
            },
          },
        source:     {
              type: SourceType.Url,
              url: "https://example.com/video.mp4",
              gatewayUrl: "https://example.com/video.mp4",
              encryption: {
                encryptedKey: "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ1RDRzhRWDZKdkR0eC95ZDMKdlpkUHJKR25LcjhiWHRsdXNIL2FOYW5XdHEraFJBTkNBQVE0QnZ6ODI2L2lDaXV1U0NiZVkwc3FmOXljYWh0OApDRFYyUFF2bDFVM1FLSVRBcWRpaktLa0FSUFVkcWRrYWZzR21PMzBDeElPaDBLNWJSQW5XQzd4KwotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==",
              },
            },
        creatorId:     {
              type: CreatorIdType.Unverified,
              value: "<value>",
            },
          storage: {
            ipfs: {
              spec: {
                nftMetadataTemplate: AssetNftMetadataTemplate.File,
                nftMetadata: {},
              },
              cid: "bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u",
              nftMetadata: {
                cid: "bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u",
              },
            },
          },
          name: "filename.mp4",
          hash: [
            {
              hash: "9b560b28b85378a5004117539196ab24e21bbd75b0e9eb1a8bc7c5fd80dc5b57",
              algorithm: "sha256",
            },
          ],
        },
        additionalProperties: {
          "key": "<value>",
        },
      },
      export: {
        ipfs: {
          videoFileCid: "<value>",
        },
      },
      exportData: {
        ipfs: {
          cid: "<value>",
        },
      },
      transcode: {
        asset: {
          assetSpec: {
            type: AssetType.Video,
            playbackId: "eaw4nk06ts2d0mzb",
            playbackPolicy: {
              type: Type.Jwt,
              webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
              webhookContext: {
                "foo": "bar",
              },
            },
          source:     {
                type: SourceType.Url,
                url: "https://example.com/video.mp4",
                gatewayUrl: "https://example.com/video.mp4",
                encryption: {
                  encryptedKey: "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JR0hBZ0VBTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEJHMHdhd0lCQVFRZ1RDRzhRWDZKdkR0eC95ZDMKdlpkUHJKR25LcjhiWHRsdXNIL2FOYW5XdHEraFJBTkNBQVE0QnZ6ODI2L2lDaXV1U0NiZVkwc3FmOXljYWh0OApDRFYyUFF2bDFVM1FLSVRBcWRpaktLa0FSUFVkcWRrYWZzR21PMzBDeElPaDBLNWJSQW5XQzd4KwotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==",
                },
              },
          creatorId:     {
                type: CreatorIdType.Unverified,
                value: "<value>",
              },
            storage: {
              ipfs: {
                spec: {
                  nftMetadataTemplate: AssetNftMetadataTemplate.File,
                  nftMetadata: {},
                },
                cid: "bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u",
                nftMetadata: {
                  cid: "bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u",
                },
              },
            },
            name: "filename.mp4",
            hash: [
              {
                hash: "9b560b28b85378a5004117539196ab24e21bbd75b0e9eb1a8bc7c5fd80dc5b57",
                algorithm: "sha256",
              },
            ],
          },
          additionalProperties: {
            "key": "<value>",
          },
        },
      },
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
| `request`                                                                                                                                                                      | [components.TaskInput](../../models/components/taskinput.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostTranscodeResponse](../../models/operations/posttranscoderesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
