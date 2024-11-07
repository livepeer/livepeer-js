# ImageResponse

Response model for image generation.

## Example Usage

```typescript
import { ImageResponse } from "livepeer/models/components";

let value: ImageResponse = {
  images: [
    {
      url: "https://dental-chasuble.info",
      seed: 355613,
      nsfw: false,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |