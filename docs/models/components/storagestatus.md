# StorageStatus


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `phase`                                              | [components.Phase](../../models/components/phase.md) | :heavy_check_mark:                                   | Phase of the asset storage                           |
| `progress`                                           | *number*                                             | :heavy_minus_sign:                                   | Current progress of the task updating the storage.   |
| `errorMessage`                                       | *string*                                             | :heavy_minus_sign:                                   | Error message if the last storage changed failed.    |
| `tasks`                                              | [components.Tasks](../../models/components/tasks.md) | :heavy_check_mark:                                   | N/A                                                  |