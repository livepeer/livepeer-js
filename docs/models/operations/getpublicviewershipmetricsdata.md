# GetPublicViewershipMetricsData

A simplified metric object about aggregate viewership of an
asset. Either playbackId or dStorageUrl will be set.



## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `playbackId`                                          | *string*                                              | :heavy_minus_sign:                                    | The playback ID associated with the metric.           | 1bde4o2i6xycudoy                                      |
| `dStorageUrl`                                         | *string*                                              | :heavy_minus_sign:                                    | The URL of the distributed storage used for the asset | ipfs://QmZ4                                           |
| `viewCount`                                           | *number*                                              | :heavy_check_mark:                                    | The number of views for the asset.                    | 100                                                   |
| `playtimeMins`                                        | *number*                                              | :heavy_check_mark:                                    | The total playtime in minutes for the asset.          | 10                                                    |