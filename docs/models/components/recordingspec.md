# RecordingSpec

## Example Usage

```typescript
import { RecordingSpec, TranscodeProfileEncoder, TranscodeProfileProfile } from "livepeer/models/components";

let value: RecordingSpec = {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `profiles`                                                                   | [components.TranscodeProfile](../../models/components/transcodeprofile.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |