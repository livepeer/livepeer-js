# NewAssetPayload

## Example Usage

```typescript
import { NewAssetPayload, TranscodeProfileEncoder, TranscodeProfileProfile, Type } from "livepeer/models/components";

let value: NewAssetPayload = {
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the asset. This is not necessarily the filename - it can be a custom name or title.<br/> | filename.mp4                                                                                     |
| `staticMp4`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to generate MP4s for the asset.                                                          | true                                                                                             |
| `playbackPolicy`                                                                                 | [components.PlaybackPolicy](../../models/components/playbackpolicy.md)                           | :heavy_minus_sign:                                                                               | Whether the playback policy for an asset or stream is public or signed                           |                                                                                                  |
| `creatorId`                                                                                      | *components.InputCreatorId*                                                                      | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `storage`                                                                                        | [components.NewAssetPayloadStorage](../../models/components/newassetpayloadstorage.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `encryption`                                                                                     | [components.NewAssetPayloadEncryption](../../models/components/newassetpayloadencryption.md)     | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `c2pa`                                                                                           | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Decides if the output video should include C2PA signature                                        |                                                                                                  |
| `profiles`                                                                                       | [components.TranscodeProfile](../../models/components/transcodeprofile.md)[]                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `targetSegmentSizeSecs`                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | How many seconds the duration of each output segment should be                                   |                                                                                                  |