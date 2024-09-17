# UpdateWebhookRequest

## Example Usage

```typescript
import { Events } from "livepeer/models/components";
import { UpdateWebhookRequest } from "livepeer/models/operations";

let value: UpdateWebhookRequest = {
  id: "<id>",
  webhook: {
    name: "test_webhook",
    projectId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
    events: [
      Events.StreamStarted,
      Events.StreamIdle,
    ],
    url: "https://my-service.com/webhook",
    sharedSecret: "my-secret",
    streamId: "de7818e7-610a-4057-8f6f-b785dc1e6f88",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `webhook`                                                          | [components.WebhookInput](../../models/components/webhookinput.md) | :heavy_check_mark:                                                 | N/A                                                                |