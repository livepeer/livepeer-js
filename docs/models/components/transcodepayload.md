# TranscodePayload

## Example Usage

```typescript
import {
  TranscodePayload,
  TranscodePayloadSchemasType,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
} from "livepeer/models/components";

let value: TranscodePayload = {
  input: {
    url: "https://s3.amazonaws.com/bucket/file.mp4",
  },
  storage: {
    type: TranscodePayloadSchemasType.S3,
    endpoint: "https://gateway.storjshare.io",
    bucket: "outputbucket",
    credentials: {
      accessKeyId: "AKIAIOSFODNN7EXAMPLE",
      secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    },
  },
  outputs: {
    hls: {
      path: "/samplevideo/hls",
    },
    mp4: {
      path: "/samplevideo/mp4",
    },
    fmp4: {
      path: "/samplevideo/fmp4",
    },
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `input`                                                                      | *components.Input*                                                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `storage`                                                                    | *components.TranscodePayloadStorage*                                         | :heavy_check_mark:                                                           | N/A                                                                          |
| `outputs`                                                                    | [components.Outputs](../../models/components/outputs.md)                     | :heavy_check_mark:                                                           | Output formats                                                               |
| `profiles`                                                                   | [components.TranscodeProfile](../../models/components/transcodeprofile.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `targetSegmentSizeSecs`                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | How many seconds the duration of each output segment should be               |
| `creatorId`                                                                  | *components.InputCreatorId*                                                  | :heavy_minus_sign:                                                           | N/A                                                                          |
| `c2pa`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | Decides if the output video should include C2PA signature                    |