# GetPublicViewershipMetricsData

A simplified metric object about aggregate viewership of an
asset. Either playbackId or dStorageUrl will be set.


## Example Usage

```typescript
import { GetPublicViewershipMetricsData } from "livepeer/models/operations";

let value: GetPublicViewershipMetricsData = {
  playbackId: "1bde4o2i6xycudoy",
  dStorageUrl: "ipfs://QmZ4",
  viewCount: 100,
  playtimeMins: 10,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `playbackId`                                          | *string*                                              | :heavy_minus_sign:                                    | The playback ID associated with the metric.           | 1bde4o2i6xycudoy                                      |
| `dStorageUrl`                                         | *string*                                              | :heavy_minus_sign:                                    | The URL of the distributed storage used for the asset | ipfs://QmZ4                                           |
| `viewCount`                                           | *number*                                              | :heavy_minus_sign:                                    | The number of views for the stream/asset.             | 100                                                   |
| `playtimeMins`                                        | *number*                                              | :heavy_minus_sign:                                    | The total playtime in minutes for the stream/asset.   | 10                                                    |