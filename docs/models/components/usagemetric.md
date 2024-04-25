# UsageMetric

An individual metric about usage of a user.



## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `userID`                                  | *string*                                  | :heavy_check_mark:                        | The user ID associated with the metric    | 1bde4o2i6xycudoy                          |
| `creatorID`                               | *string*                                  | :heavy_check_mark:                        | The creator ID associated with the metric | john@doe.com                              |
| `deliveryUsageMins`                       | *number*                                  | :heavy_check_mark:                        | Total minutes of delivery usage.          | 100                                       |
| `totalUsageMins`                          | *number*                                  | :heavy_check_mark:                        | Total transcoded minutes.                 | 100                                       |
| `storageUsageMins`                        | *number*                                  | :heavy_check_mark:                        | Total minutes of storage usage.           | 100                                       |