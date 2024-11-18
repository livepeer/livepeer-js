# WebhookInput

## Example Usage

```typescript
import { Events, WebhookInput } from "livepeer/models/components";

let value: WebhookInput = {
  name: "test_webhook",
  projectId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
  events: [
    Events.StreamStarted,
    Events.StreamIdle,
  ],
  url: "https://my-service.com/webhook",
  sharedSecret: "my-secret",
  streamId: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | test_webhook                                             |
| `projectId`                                              | *string*                                                 | :heavy_minus_sign:                                       | The ID of the project                                    | aac12556-4d65-4d34-9fb6-d1f0985eb0a9                     |
| `events`                                                 | [components.Events](../../models/components/events.md)[] | :heavy_minus_sign:                                       | N/A                                                      | [<br/>"stream.started",<br/>"stream.idle"<br/>]          |
| `url`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | https://my-service.com/webhook                           |
| `sharedSecret`                                           | *string*                                                 | :heavy_minus_sign:                                       | shared secret used to sign the webhook payload           | my-secret                                                |
| `streamId`                                               | *string*                                                 | :heavy_minus_sign:                                       | streamId of the stream on which the webhook is applied   | de7818e7-610a-4057-8f6f-b785dc1e6f88                     |