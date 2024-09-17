# TaskInput

Input video file to transcode

## Example Usage

```typescript
import { TaskInput } from "livepeer/models/components";

let value: TaskInput = {
  url: "https://cdn.livepeer.com/ABC123/filename.mp4",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `url`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | URL of a video to transcode, accepts object-store format<br/>"s3+https"<br/> | https://cdn.livepeer.com/ABC123/filename.mp4                         |