# GetRecordedSessionsResponse

## Example Usage

```typescript
import { Profile, TranscodeProfileEncoder, TranscodeProfileProfile } from "livepeer/models/components";
import { GetRecordedSessionsResponse } from "livepeer/models/operations";

let value: GetRecordedSessionsResponse = {
  contentType: "<value>",
  statusCode: 506,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  data: [
    {
      id: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
      name: "test_session",
      lastSeen: 1587667174725,
      sourceSegments: 1,
      transcodedSegments: 2,
      sourceSegmentsDuration: 1,
      transcodedSegmentsDuration: 2,
      sourceBytes: 1,
      transcodedBytes: 2,
      ingestRate: 1,
      outgoingRate: 2,
      createdAt: 1587667174725,
      parentId: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
      projectId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
      record: false,
      playbackId: "eaw4nk06ts2d0mzb",
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
    },
  ],
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
| `data`                                                                | [components.Session](../../models/components/session.md)[]            | :heavy_minus_sign:                                                    | Success                                                               |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |