# StorageStatus

## Example Usage

```typescript
import { Phase, StorageStatus } from "livepeer/models/components";

let value: StorageStatus = {
  phase: Phase.Ready,
  progress: 0.5,
  errorMessage: "Failed to update storage",
  tasks: {
    pending: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
    last: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
    failed: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `phase`                                              | [components.Phase](../../models/components/phase.md) | :heavy_check_mark:                                   | Phase of the asset storage                           | ready                                                |
| `progress`                                           | *number*                                             | :heavy_minus_sign:                                   | Current progress of the task updating the storage.   | 0.5                                                  |
| `errorMessage`                                       | *string*                                             | :heavy_minus_sign:                                   | Error message if the last storage changed failed.    | Failed to update storage                             |
| `tasks`                                              | [components.Tasks](../../models/components/tasks.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |