# TaskOutputs

Output formats

## Example Usage

```typescript
import { TaskOutputs } from "livepeer/models/components";

let value: TaskOutputs = {
  hls: {
    path: "/samplevideo/hls",
  },
  mp4: {
    path: "/samplevideo/mp4",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `hls`                                                    | [components.TaskHls](../../models/components/taskhls.md) | :heavy_minus_sign:                                       | HLS output format                                        |
| `mp4`                                                    | [components.TaskMp4](../../models/components/taskmp4.md) | :heavy_minus_sign:                                       | MP4 output format                                        |