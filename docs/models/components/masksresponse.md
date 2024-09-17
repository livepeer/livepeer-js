# MasksResponse

Response model for object segmentation.

## Example Usage

```typescript
import { MasksResponse } from "livepeer/models/components";

let value: MasksResponse = {
  masks: "<value>",
  scores: "<value>",
  logits: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `masks`                                                   | *string*                                                  | :heavy_check_mark:                                        | The generated masks.                                      |
| `scores`                                                  | *string*                                                  | :heavy_check_mark:                                        | The model's confidence scores for each generated mask.    |
| `logits`                                                  | *string*                                                  | :heavy_check_mark:                                        | The raw, unnormalized predictions (logits) for the masks. |