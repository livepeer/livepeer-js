# ClipStrategy

Strategy to use for clipping the asset. If not specified, the default strategy that Catalyst is configured for will be used. This field only available for admin users, and is only used for E2E testing.


## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `startTime`                                | *number*                                   | :heavy_minus_sign:                         | Start time of the clip in milliseconds     |
| `endTime`                                  | *number*                                   | :heavy_minus_sign:                         | End time of the clip in milliseconds       |
| `playbackId`                               | *string*                                   | :heavy_minus_sign:                         | Playback ID of the stream or asset to clip |