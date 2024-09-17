# VideoSpec

Video metadata

## Example Usage

```typescript
import { AssetSchemasVideoSpecType, VideoSpec } from "livepeer/models/components";

let value: VideoSpec = {
  format: "mp4",
  duration: 23.8328,
  bitrate: 1000000,
  tracks: [
    {
      type: AssetSchemasVideoSpecType.Video,
      codec: "aac",
      startTime: 23.8238,
      duration: 23.8238,
      bitrate: 1000000,
      width: 1920,
      height: 1080,
      pixelFormat: "yuv420p",
      fps: 30,
      channels: 2,
      sampleRate: 44100,
      bitDepth: 16,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `format`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Format of the asset                                                                    | mp4                                                                                    |
| `duration`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | Duration of the asset in seconds (float)                                               | 23.8328                                                                                |
| `bitrate`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | Bitrate of the video in bits per second                                                | 1000000                                                                                |
| `tracks`                                                                               | [components.Tracks](../../models/components/tracks.md)[]                               | :heavy_minus_sign:                                                                     | List of tracks associated with the asset when the format<br/>contemplates them (e.g. mp4)<br/> |                                                                                        |