# ResendWebhookResponse

## Example Usage

```typescript
import { ResendWebhookResponse } from "livepeer/models/operations";

let value: ResendWebhookResponse = {
  contentType: "<value>",
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  webhookLog: {
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
| `webhookLog`                                                          | [components.WebhookLog](../../models/components/webhooklog.md)        | :heavy_minus_sign:                                                    | Success                                                               |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |