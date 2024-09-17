# Chunk

A chunk of text with a timestamp.

## Example Usage

```typescript
import { Chunk } from "livepeer/models/components";

let value: Chunk = {
  timestamp: [
    "<value>",
  ],
  text: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `timestamp`                 | *any*[]                     | :heavy_check_mark:          | The timestamp of the chunk. |
| `text`                      | *string*                    | :heavy_check_mark:          | The text of the chunk.      |