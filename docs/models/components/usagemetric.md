# UsageMetric

An individual metric about usage of a user.



## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `userID`                                  | *string*                                  | :heavy_check_mark:                        | The user ID associated with the metric    |
| `creatorID`                               | *string*                                  | :heavy_check_mark:                        | The creator ID associated with the metric |
| `deliveryUsageMins`                       | *number*                                  | :heavy_check_mark:                        | The number of minutes of delivery usage   |
| `totalUsageMins`                          | *number*                                  | :heavy_check_mark:                        | The number of minutes of total usage      |
| `storageUsageMins`                        | *number*                                  | :heavy_check_mark:                        | The number of minutes of storage usage    |