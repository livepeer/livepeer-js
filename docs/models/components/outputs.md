# Outputs

Output formats

## Example Usage

```typescript
import { Outputs } from "livepeer/models/components";

let value: Outputs = {
  hls: {
    path: "/samplevideo/hls",
  },
  mp4: {
    path: "/samplevideo/mp4",
  },
  fmp4: {
    path: "/samplevideo/fmp4",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `hls`                                              | [components.Hls](../../models/components/hls.md)   | :heavy_minus_sign:                                 | HLS output format                                  |
| `mp4`                                              | [components.Mp4](../../models/components/mp4.md)   | :heavy_minus_sign:                                 | MP4 output format                                  |
| `fmp4`                                             | [components.Fmp4](../../models/components/fmp4.md) | :heavy_minus_sign:                                 | FMP4 output format                                 |