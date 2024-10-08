# WebhookLog

## Example Usage

```typescript
import { WebhookLog } from "livepeer/models/components";

let value: WebhookLog = {
  id: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
  webhookId: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
  event: "stream.started",
  createdAt: 1587667174725,
  duration: 0.5,
  success: true,
  request: {
    url: "https://my-service.com/webhook",
    method: "POST",
    headers: {
      "User-Agent": "livepeer.studio",
    },
    body: "{\"event\": \"stream.started\"}",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      | de7818e7-610a-4057-8f6f-b785dc1e6f88                                     |
| `webhookId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | ID of the webhook this request was made for                              | de7818e7-610a-4057-8f6f-b785dc1e6f88                                     |
| `event`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The event type that triggered the webhook request                        | stream.started                                                           |
| `createdAt`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | Timestamp (in milliseconds) at which webhook request object was<br/>created<br/> | 1587667174725                                                            |
| `duration`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | The time taken (in seconds) to make the webhook request                  | 0.5                                                                      |
| `success`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether the webhook request was successful                               | true                                                                     |
| `request`                                                                | [components.Request](../../models/components/request.md)                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `response`                                                               | [components.Response](../../models/components/response.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |