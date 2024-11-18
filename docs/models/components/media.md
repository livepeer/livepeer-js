# Media

A media object containing information about the generated media.

## Example Usage

```typescript
import { Media } from "livepeer/models/components";

let value: Media = {
  url: "https://sniveling-republican.org",
  seed: 83422,
  nsfw: false,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `url`                                    | *string*                                 | :heavy_check_mark:                       | The URL where the media can be accessed. |
| `seed`                                   | *number*                                 | :heavy_check_mark:                       | The seed used to generate the media.     |
| `nsfw`                                   | *boolean*                                | :heavy_check_mark:                       | Whether the media was flagged as NSFW.   |