# TranscodeFile

Parameters for the transcode-file task

## Example Usage

```typescript
import { TranscodeFile, TranscodeProfileEncoder, TranscodeProfileProfile } from "livepeer/models/components";

let value: TranscodeFile = {
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
      bitrate: 3000000,
      quality: 23,
      fps: 30,
      fpsDen: 1,
      gop: "2",
      profile: TranscodeProfileProfile.H264Baseline,
      encoder: TranscodeProfileEncoder.H264,
    },
  ],
  targetSegmentSizeSecs: 10,
  c2pa: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `input`                                                                      | [components.TaskInput](../../models/components/taskinput.md)                 | :heavy_minus_sign:                                                           | Input video file to transcode                                                |                                                                              |
| `storage`                                                                    | [components.TaskStorage](../../models/components/taskstorage.md)             | :heavy_minus_sign:                                                           | Storage for the output files                                                 |                                                                              |
| `outputs`                                                                    | [components.TaskOutputs](../../models/components/taskoutputs.md)             | :heavy_minus_sign:                                                           | Output formats                                                               |                                                                              |
| `profiles`                                                                   | [components.TranscodeProfile](../../models/components/transcodeprofile.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `targetSegmentSizeSecs`                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | How many seconds the duration of each output segment should<br/>be<br/>      | 10                                                                           |
| `creatorId`                                                                  | *components.InputCreatorId*                                                  | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `c2pa`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | Decides if the output video should include C2PA signature                    | false                                                                        |