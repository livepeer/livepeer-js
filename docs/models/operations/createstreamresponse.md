# CreateStreamResponse

## Example Usage

```typescript
import { CreatorIdType, Profile, TranscodeProfileEncoder, TranscodeProfileProfile, Type } from "livepeer/models/components";
import { CreateStreamResponse } from "livepeer/models/operations";

let value: CreateStreamResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  stream: {
    id: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
    name: "test_stream",
    creatorId: {
      type: CreatorIdType.Unverified,
      value: "user123",
    },
    lastSeen: 1587667174725,
    sourceSegments: 1,
    transcodedSegments: 2,
    sourceSegmentsDuration: 1,
    transcodedSegmentsDuration: 2,
    sourceBytes: 1,
    transcodedBytes: 2,
    ingestRate: 1,
    outgoingRate: 2,
    isActive: true,
    createdByTokenName: "abc-123-xyz-456",
    createdAt: 1587667174725,
    parentId: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
    streamKey: "hgebdhhigq",
    pull: {
      source: "https://myservice.com/live/stream.flv",
      headers: {
        "Authorization": "Bearer 123",
      },
      location: {
        lat: 39.739,
        lon: -104.988,
      },
    },
    playbackId: "eaw4nk06ts2d0mzb",
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 3000000,
        fps: 30,
        fpsDen: 1,
        quality: 23,
        gop: "2",
        profile: Profile.H264Baseline,
      },
    ],
    projectId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
    record: false,
    recordingSpec: {
      profiles: [
        {
          width: 1280,
          name: "720p",
          height: 720,
          bitrate: 3000000,
          quality: 23,
          fps: 30,
          fpsDen: 1,
          gop: "2",
          profile: TranscodeProfileProfile.H264Baseline,
          encoder: TranscodeProfileEncoder.H264,
        },
      ],
    },
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
        },
      ],
    },
    lastTerminatedAt: 1713281212993,
  },
  error: {
    errors: [
      "[\"id not provided\",\"Account not found\"]",
    ],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `stream`                                                              | [components.Stream](../../models/components/stream.md)                | :heavy_minus_sign:                                                    | Success                                                               |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |