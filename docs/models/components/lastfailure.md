# LastFailure

failure timestamp and error message with status code

## Example Usage

```typescript
import { LastFailure } from "livepeer/models/components";

let value: LastFailure = {
  timestamp: 1587667174725,
  error: "Error message",
  response: "Response body",
  statusCode: 500,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `timestamp`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Timestamp (in milliseconds) at which the webhook last failed | 1587667174725                                                |
| `error`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Webhook failure error message                                | Error message                                                |
| `response`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Webhook failure response                                     | Response body                                                |
| `statusCode`                                                 | *number*                                                     | :heavy_minus_sign:                                           | Webhook failure status code                                  | 500                                                          |