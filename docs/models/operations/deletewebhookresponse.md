# DeleteWebhookResponse

## Example Usage

```typescript
import { Events } from "livepeer/models/components";
import { DeleteWebhookResponse } from "livepeer/models/operations";

let value: DeleteWebhookResponse = {
  contentType: "<value>",
  statusCode: 201,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  webhook: {
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
  },
  error: {
    errors: [
      "[\"id not provided\",\"Account not found\"]",
    ],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `webhook`                                                             | [components.Webhook](../../models/components/webhook.md)              | :heavy_minus_sign:                                                    | Success                                                               |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |