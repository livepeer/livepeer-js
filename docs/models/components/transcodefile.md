# TranscodeFile

Parameters for the transcode-file task


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `input`                                                                      | [components.Input](../../models/components/input.md)                         | :heavy_minus_sign:                                                           | Input video file to transcode                                                |
| `storage`                                                                    | [components.TaskStorage](../../models/components/taskstorage.md)             | :heavy_minus_sign:                                                           | Storage for the output files                                                 |
| `outputs`                                                                    | [components.TaskOutputs](../../models/components/taskoutputs.md)             | :heavy_minus_sign:                                                           | Output formats                                                               |
| `profiles`                                                                   | [components.TranscodeProfile](../../models/components/transcodeprofile.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `targetSegmentSizeSecs`                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | How many seconds the duration of each output segment should<br/>be<br/>      |
| `creatorId`                                                                  | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `c2pa`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | Decides if the output video should include C2PA signature                    |