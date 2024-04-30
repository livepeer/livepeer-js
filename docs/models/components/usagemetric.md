# UsageMetric

An individual metric about usage of a user.



## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `userID`                                  | *string*                                  | :heavy_minus_sign:                        | The user ID associated with the metric    | 1bde4o2i6xycudoy                          |
| `creatorID`                               | *string*                                  | :heavy_minus_sign:                        | The creator ID associated with the metric | john@doe.com                              |
| `deliveryUsageMins`                       | *number*                                  | :heavy_minus_sign:                        | Total minutes of delivery usage.          | 100                                       |
| `totalUsageMins`                          | *number*                                  | :heavy_minus_sign:                        | Total transcoded minutes.                 | 100                                       |
| `storageUsageMins`                        | *number*                                  | :heavy_minus_sign:                        | Total minutes of storage usage.           | 100                                       |