# StreamPatchPayload

## Example Usage

```typescript
import {
  Profile,
  StreamPatchPayload,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

let value: StreamPatchPayload = {
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
  name: "test_stream",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `creatorId`                                                                                                           | *components.InputCreatorId*                                                                                           | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `record`                                                                                                              | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | Should this stream be recorded? Uses default settings. For more<br/>customization, create and configure an object store.<br/> | false                                                                                                                 |
| `suspended`                                                                                                           | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | If currently suspended                                                                                                |                                                                                                                       |
| `multistream`                                                                                                         | [components.Multistream](../../models/components/multistream.md)                                                      | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `playbackPolicy`                                                                                                      | [components.PlaybackPolicy](../../models/components/playbackpolicy.md)                                                | :heavy_minus_sign:                                                                                                    | Whether the playback policy for an asset or stream is public or signed                                                |                                                                                                                       |
| `profiles`                                                                                                            | [components.FfmpegProfile](../../models/components/ffmpegprofile.md)[]                                                | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `recordingSpec`                                                                                                       | [components.RecordingSpec](../../models/components/recordingspec.md)                                                  | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `userTags`                                                                                                            | Record<string, *components.UserTags*>                                                                                 | :heavy_minus_sign:                                                                                                    | User input tags associated with the stream                                                                            |                                                                                                                       |
| `name`                                                                                                                | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | test_stream                                                                                                           |