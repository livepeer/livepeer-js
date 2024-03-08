# FfmpegProfile

LMPS ffmpeg profile


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `width`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      | 1280                                                     |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | 720p                                                     |
| `height`                                                 | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      | 720                                                      |
| `bitrate`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      | 4000                                                     |
| `fps`                                                    | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      | 30                                                       |
| `fpsDen`                                                 | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 1                                                        |
| `gop`                                                    | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 60                                                       |
| `profile`                                                | [components.Profile](../../models/components/profile.md) | :heavy_minus_sign:                                       | N/A                                                      | H264High                                                 |
| `encoder`                                                | [components.Encoder](../../models/components/encoder.md) | :heavy_minus_sign:                                       | N/A                                                      | h264                                                     |