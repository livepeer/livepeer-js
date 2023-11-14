# Status

status of webhook


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `lastFailure`                                                        | [components.LastFailure](../../models/components/lastfailure.md)     | :heavy_minus_sign:                                                   | failure timestamp and error message with status code                 |                                                                      |
| `lastTriggeredAt`                                                    | *number*                                                             | :heavy_minus_sign:                                                   | Timestamp (in milliseconds) at which the webhook last was<br/>triggered<br/> | 1587667174725                                                        |