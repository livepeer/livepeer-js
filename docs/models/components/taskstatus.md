# TaskStatus

Status of the task


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `phase`                                                      | [components.TaskPhase](../../models/components/taskphase.md) | :heavy_check_mark:                                           | Phase of the task                                            |                                                              |
| `updatedAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | Timestamp (in milliseconds) at which task was updated        | 1587667174725                                                |
| `progress`                                                   | *number*                                                     | :heavy_minus_sign:                                           | Current progress of the task in a 0-1 ratio                  |                                                              |
| `errorMessage`                                               | *string*                                                     | :heavy_minus_sign:                                           | Error message if the task failed                             |                                                              |
| `retries`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of retries done on the task                           |                                                              |