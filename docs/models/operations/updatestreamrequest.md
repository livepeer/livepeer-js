# UpdateStreamRequest

## Example Usage

```typescript
import { Profile, TranscodeProfileEncoder, TranscodeProfileProfile, Type } from "livepeer/models/components";
import { UpdateStreamRequest } from "livepeer/models/operations";

let value: UpdateStreamRequest = {
  id: "<id>",
  streamPatchPayload: {
    record: false,
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
          spec: {
            name: "My target",
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | ID of the stream                                                               |
| `streamPatchPayload`                                                           | [components.StreamPatchPayload](../../models/components/streampatchpayload.md) | :heavy_check_mark:                                                             | N/A                                                                            |