# VideoResponse

Response model for image generation.

## Example Usage

```typescript
import { VideoResponse } from "livepeer/models/components";

let value: VideoResponse = {
  images: [
    {
      url: "https://exalted-breastplate.com/",
      seed: 929530,
      nsfw: false,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `images`                                               | [components.Media](../../models/components/media.md)[] | :heavy_check_mark:                                     | The generated images.                                  |