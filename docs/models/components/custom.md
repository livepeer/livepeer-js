# Custom

custom URL parameters for the export task

## Example Usage

```typescript
import { Custom } from "livepeer/models/components";

let value: Custom = {
  url:
    "https://s3.amazonaws.com/my-bucket/path/filename.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=LLMMB",
  method: "POST",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `url`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | URL where to export the asset                                                                                | https://s3.amazonaws.com/my-bucket/path/filename.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=LLMMB |
| `method`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Method to use on the export request                                                                          | POST                                                                                                         |
| `headers`                                                                                                    | Record<string, *string*>                                                                                     | :heavy_minus_sign:                                                                                           | Headers to add to the export request                                                                         |                                                                                                              |