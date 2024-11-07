# RemoveMultistreamTargetRequest

## Example Usage

```typescript
import { RemoveMultistreamTargetRequest } from "livepeer/models/operations";

let value: RemoveMultistreamTargetRequest = {
  id: "<id>",
  targetId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `id`                         | *string*                     | :heavy_check_mark:           | ID of the parent stream      |
| `targetId`                   | *string*                     | :heavy_check_mark:           | ID of the multistream target |