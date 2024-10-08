# Hash

## Example Usage

```typescript
import { Hash } from "livepeer/models/components";

let value: Hash = {
  hash: "9b560b28b85378a5004117539196ab24e21bbd75b0e9eb1a8bc7c5fd80dc5b57",
  algorithm: "sha256",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `hash`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Hash of the asset                                                | 9b560b28b85378a5004117539196ab24e21bbd75b0e9eb1a8bc7c5fd80dc5b57 |
| `algorithm`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Hash algorithm used to compute the hash                          | sha256                                                           |