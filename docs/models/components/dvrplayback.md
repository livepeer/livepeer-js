# DvrPlayback

## Example Usage

```typescript
import { DvrPlayback, PlaybackInfoHrn, PlaybackInfoSchemasMetaType } from "livepeer/models/components";

let value: DvrPlayback = {
  hrn: PlaybackInfoHrn.HlsTs,
  type: PlaybackInfoSchemasMetaType.Html5ApplicationVndAppleMpegurl,
  url:
    "https://asset-cdn.lp-playback.monster/hls/1bde4o2i6xycudoy/static360p0.mp4",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `hrn`                                                                                            | [components.PlaybackInfoHrn](../../models/components/playbackinfohrn.md)                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | MP4                                                                                              |
| `type`                                                                                           | [components.PlaybackInfoSchemasMetaType](../../models/components/playbackinfoschemasmetatype.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              | html5/video/mp4                                                                                  |
| `url`                                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | https://asset-cdn.lp-playback.monster/hls/1bde4o2i6xycudoy/static360p0.mp4                       |
| `error`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |