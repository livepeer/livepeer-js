# TaskStatus

Status of the task

## Example Usage

```typescript
import { TaskPhase, TaskStatus } from "livepeer/models/components";

let value: TaskStatus = {
  phase: TaskPhase.Pending,
  updatedAt: 1587667174725,
  progress: 0.5,
  errorMessage: "Failed to upload file",
  retries: 3,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `phase`                                                      | [components.TaskPhase](../../models/components/taskphase.md) | :heavy_check_mark:                                           | Phase of the task                                            | pending                                                      |
| `updatedAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | Timestamp (in milliseconds) at which task was updated        | 1587667174725                                                |
| `progress`                                                   | *number*                                                     | :heavy_minus_sign:                                           | Current progress of the task in a 0-1 ratio                  | 0.5                                                          |
| `errorMessage`                                               | *string*                                                     | :heavy_minus_sign:                                           | Error message if the task failed                             | Failed to upload file                                        |
| `retries`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of retries done on the task                           | 3                                                            |