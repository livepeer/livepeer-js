# GetPublicTotalViewsMetricsResponseBody

A simplified metric object about aggregate viewership of an
asset. Either playbackId or dStorageUrl will be set.



## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `playbackId`                                          | *string*                                              | :heavy_minus_sign:                                    | The playback ID associated with the metric            |
| `dStorageUrl`                                         | *string*                                              | :heavy_minus_sign:                                    | The URL of the distributed storage used for the asset |
| `viewCount`                                           | *number*                                              | :heavy_check_mark:                                    | The number of views for the asset                     |
| `playtimeMins`                                        | *number*                                              | :heavy_check_mark:                                    | The total playtime in minutes for the asset           |