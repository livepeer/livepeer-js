# TextResponse

Response model for text generation.

## Example Usage

```typescript
import { TextResponse } from "livepeer/models/components";

let value: TextResponse = {
  text: "<value>",
  chunks: [
    {
      timestamp: [
        "<value>",
      ],
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `text`                                                 | *string*                                               | :heavy_check_mark:                                     | The generated text.                                    |
| `chunks`                                               | [components.Chunk](../../models/components/chunk.md)[] | :heavy_check_mark:                                     | The generated text chunks.                             |