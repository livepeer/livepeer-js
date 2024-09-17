# Status

status of webhook

## Example Usage

```typescript
import { Status } from "livepeer/models/components";

let value: Status = {
  lastFailure: {
    timestamp: 1587667174725,
    error: "Error message",
    response: "Response body",
    statusCode: 500,
  },
  lastTriggeredAt: 1587667174725,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `lastFailure`                                                        | [components.LastFailure](../../models/components/lastfailure.md)     | :heavy_minus_sign:                                                   | failure timestamp and error message with status code                 |                                                                      |
| `lastTriggeredAt`                                                    | *number*                                                             | :heavy_minus_sign:                                                   | Timestamp (in milliseconds) at which the webhook last was<br/>triggered<br/> | 1587667174725                                                        |