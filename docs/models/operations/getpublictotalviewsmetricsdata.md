# GetPublicTotalViewsMetricsData

A simplified metric object about aggregate viewership of an
asset. Either playbackId or dStorageUrl will be set.



## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `playbackId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | The playback ID associated with the metric                                       | 29eb9byolvwdqkup                                                                 |
| `dStorageUrl`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The URL of the distributed storage used for the asset                            | https://ipfs.io/ipfs/bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u |
| `viewCount`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | The number of views for the asset                                                | 10                                                                               |
| `playtimeMins`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | The total playtime in minutes for the asset                                      | 10                                                                               |