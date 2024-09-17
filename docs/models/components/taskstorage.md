# TaskStorage

Storage for the output files

## Example Usage

```typescript
import { TaskStorage } from "livepeer/models/components";

let value: TaskStorage = {
  url: "s3+https://accessKeyId:secretAccessKey@s3Endpoint/bucket",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `url`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | URL of the output storage, accepts object-store format<br/>"s3+https"<br/> | s3+https://accessKeyId:secretAccessKey@s3Endpoint/bucket           |