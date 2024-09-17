# Upload

Parameters for the upload task

## Example Usage

```typescript
import { TranscodeProfileEncoder, TranscodeProfileProfile, Upload } from "livepeer/models/components";

let value: Upload = {
  url: "https://cdn.livepeer.com/ABC123/filename.mp4",
  c2pa: true,
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
  targetSegmentSizeSecs: 6,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `url`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | URL of the asset to "upload"                                                 | https://cdn.livepeer.com/ABC123/filename.mp4                                 |
| `encryption`                                                                 | [components.EncryptionOutput](../../models/components/encryptionoutput.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `c2pa`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | Decides if the output video should include C2PA signature                    | true                                                                         |
| `profiles`                                                                   | [components.TranscodeProfile](../../models/components/transcodeprofile.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `targetSegmentSizeSecs`                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | How many seconds the duration of each output segment should be               | 6                                                                            |