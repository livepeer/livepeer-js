# TranscodePayload1

URL input video

## Example Usage

```typescript
import { TranscodePayload1 } from "livepeer/models/components";

let value: TranscodePayload1 = {
  url: "https://s3.amazonaws.com/bucket/file.mp4",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `url`                                    | *string*                                 | :heavy_check_mark:                       | URL of the video to transcode            | https://s3.amazonaws.com/bucket/file.mp4 |