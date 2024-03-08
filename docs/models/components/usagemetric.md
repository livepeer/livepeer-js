# UsageMetric

An individual metric about usage of a user.



## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `userID`                                  | *string*                                  | :heavy_check_mark:                        | The user ID associated with the metric    | 3e02c844-d364-4d48-b401-24b2773b5d6c      |
| `creatorID`                               | *string*                                  | :heavy_check_mark:                        | The creator ID associated with the metric | 3e02c844-d364-4d48-b401-24b2773b5d6c      |
| `deliveryUsageMins`                       | *number*                                  | :heavy_check_mark:                        | The number of minutes of delivery usage   | 10                                        |
| `totalUsageMins`                          | *number*                                  | :heavy_check_mark:                        | The number of minutes of total usage      | 10                                        |
| `storageUsageMins`                        | *number*                                  | :heavy_check_mark:                        | The number of minutes of storage usage    | 10                                        |