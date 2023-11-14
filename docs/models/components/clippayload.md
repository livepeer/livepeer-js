# ClipPayload


## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `playbackId`                               | *string*                                   | :heavy_check_mark:                         | Playback ID of the stream or asset to clip |
| `startTime`                                | *number*                                   | :heavy_check_mark:                         | Start time of the clip in milliseconds     |
| `endTime`                                  | *number*                                   | :heavy_minus_sign:                         | End time of the clip in milliseconds       |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | Name of the clip                           |
| `sessionId`                                | *string*                                   | :heavy_minus_sign:                         | Session ID of the stream to clip           |