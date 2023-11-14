# TranscodeFile

Parameters for the transcode-file task


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `input`                                                                | [components.Input](../../models/components/input.md)                   | :heavy_minus_sign:                                                     | Input video file to transcode                                          |
| `storage`                                                              | [components.TaskStorage](../../models/components/taskstorage.md)       | :heavy_minus_sign:                                                     | Storage for the output files                                           |
| `outputs`                                                              | [components.Outputs](../../models/components/outputs.md)               | :heavy_minus_sign:                                                     | Output formats                                                         |
| `profiles`                                                             | [components.FfmpegProfile](../../models/components/ffmpegprofile.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |
| `targetSegmentSizeSecs`                                                | *number*                                                               | :heavy_minus_sign:                                                     | How many seconds the duration of each output segment should<br/>be<br/> |
| `creatorId`                                                            | *any*                                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |