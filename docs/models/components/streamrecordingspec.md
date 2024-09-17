# StreamRecordingSpec

Configuration for recording the stream. This can only be set if
`record` is true.


## Example Usage

```typescript
import { StreamRecordingSpec, TranscodeProfileEncoder, TranscodeProfileProfile } from "livepeer/models/components";

let value: StreamRecordingSpec = {
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

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `profiles`                                                                                                                                                                                   | [components.TranscodeProfile](../../models/components/transcodeprofile.md)[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                           | Profiles to process the recording of this stream into. If not<br/>specified, default profiles will be derived based on the stream<br/>input. Keep in mind that the source rendition is always kept.<br/> |