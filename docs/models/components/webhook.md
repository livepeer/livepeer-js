# Webhook

## Example Usage

```typescript
import { Events, Webhook } from "livepeer/models/components";

let value: Webhook = {
  id: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
  name: "test_webhook",
  projectId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
  createdAt: 1587667174725,
  events: [
    Events.StreamStarted,
    Events.StreamIdle,
  ],
  url: "https://my-service.com/webhook",
  streamId: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
  status: {
    lastFailure: {
      timestamp: 1587667174725,
      error: "Error message",
      response: "Response body",
      statusCode: 500,
    },
    lastTriggeredAt: 1587667174725,
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | de7818e7-610a-4057-8f6f-b785dc1e6f88                                                                                    |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | test_webhook                                                                                                            |
| ~~`kind`~~                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. | webhook                                                                                                                 |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |                                                                                                                         |
| `projectId`                                                                                                             | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The ID of the project                                                                                                   | aac12556-4d65-4d34-9fb6-d1f0985eb0a9                                                                                    |
| `createdAt`                                                                                                             | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Timestamp (in milliseconds) at which stream object was created                                                          | 1587667174725                                                                                                           |
| `events`                                                                                                                | [components.Events](../../models/components/events.md)[]                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | [<br/>"stream.started",<br/>"stream.idle"<br/>]                                                                         |
| `url`                                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | https://my-service.com/webhook                                                                                          |
| `streamId`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | streamId of the stream on which the webhook is applied                                                                  | de7818e7-610a-4057-8f6f-b785dc1e6f88                                                                                    |
| `status`                                                                                                                | [components.Status](../../models/components/status.md)                                                                  | :heavy_minus_sign:                                                                                                      | status of webhook                                                                                                       |                                                                                                                         |