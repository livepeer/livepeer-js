# NewStreamPayload

## Example Usage

```typescript
import {
  NewStreamPayload,
  Profile,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

let value: NewStreamPayload = {
  name: "test_stream",
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
        spec: {
          name: "My target",
          url: "rtmps://live.my-service.tv/channel/secretKey",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                 | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    | test_stream                                                                                                                                                            |
| `pull`                                                                                                                                                                 | [components.Pull](../../models/components/pull.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                     | Configuration for a stream that should be actively pulled from an<br/>external source, rather than pushed to Livepeer. If specified, the<br/>stream will not have a streamKey. |                                                                                                                                                                        |
| `creatorId`                                                                                                                                                            | *components.InputCreatorId*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `playbackPolicy`                                                                                                                                                       | [components.PlaybackPolicy](../../models/components/playbackpolicy.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                     | Whether the playback policy for an asset or stream is public or signed                                                                                                 |                                                                                                                                                                        |
| `profiles`                                                                                                                                                             | [components.FfmpegProfile](../../models/components/ffmpegprofile.md)[]                                                                                                 | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `record`                                                                                                                                                               | *boolean*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                     | Should this stream be recorded? Uses default settings. For more<br/>customization, create and configure an object store.<br/>                                          | false                                                                                                                                                                  |
| `recordingSpec`                                                                                                                                                        | [components.NewStreamPayloadRecordingSpec](../../models/components/newstreampayloadrecordingspec.md)                                                                   | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `multistream`                                                                                                                                                          | [components.Multistream](../../models/components/multistream.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `userTags`                                                                                                                                                             | Record<string, *components.UserTags*>                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                     | User input tags associated with the stream                                                                                                                             |                                                                                                                                                                        |