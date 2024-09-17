# Tracks

## Example Usage

```typescript
import { AssetSchemasVideoSpecType, Tracks } from "livepeer/models/components";

let value: Tracks = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [components.AssetSchemasVideoSpecType](../../models/components/assetschemasvideospectype.md) | :heavy_check_mark:                                                                           | type of track                                                                                | video                                                                                        |
| `codec`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | Codec of the track                                                                           | aac                                                                                          |
| `startTime`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | Start time of the track in seconds                                                           | 23.8238                                                                                      |
| `duration`                                                                                   | *number*                                                                                     | :heavy_minus_sign:                                                                           | Duration of the track in seconds                                                             | 23.8238                                                                                      |
| `bitrate`                                                                                    | *number*                                                                                     | :heavy_minus_sign:                                                                           | Bitrate of the track in bits per second                                                      | 1000000                                                                                      |
| `width`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | Width of the track - only for video tracks                                                   | 1920                                                                                         |
| `height`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | Height of the track - only for video tracks                                                  | 1080                                                                                         |
| `pixelFormat`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Pixel format of the track - only for video tracks                                            | yuv420p                                                                                      |
| `fps`                                                                                        | *number*                                                                                     | :heavy_minus_sign:                                                                           | Frame rate of the track - only for video tracks                                              | 30                                                                                           |
| `channels`                                                                                   | *number*                                                                                     | :heavy_minus_sign:                                                                           | Amount of audio channels in the track                                                        | 2                                                                                            |
| `sampleRate`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | Sample rate of the track in samples per second - only for<br/>audio tracks<br/>              | 44100                                                                                        |
| `bitDepth`                                                                                   | *number*                                                                                     | :heavy_minus_sign:                                                                           | Bit depth of the track - only for audio tracks                                               | 16                                                                                           |