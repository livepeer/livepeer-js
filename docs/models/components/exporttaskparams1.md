# ExportTaskParams1

## Example Usage

```typescript
import { ExportTaskParams1 } from "livepeer/models/components";

let value: ExportTaskParams1 = {
  custom: {
    url:
      "https://s3.amazonaws.com/my-bucket/path/filename.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=LLMMB",
    method: "POST",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `custom`                                               | [components.Custom](../../models/components/custom.md) | :heavy_check_mark:                                     | custom URL parameters for the export task              |