# GetSigningKeysResponse

## Example Usage

```typescript
import { GetSigningKeysResponse } from "livepeer/models/operations";

let value: GetSigningKeysResponse = {
  contentType: "<value>",
  statusCode: 428,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  data: [
    {
      id: "78df0075-b5f3-4683-a618-1086faca35dc",
      name: "key1",
      createdAt: 1587667174725,
      lastSeen: 1587667174725,
      publicKey: "<value>",
      disabled: false,
      projectId: "aac12556-4d65-4d34-9fb",
    },
  ],
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
| `data`                                                                | [components.SigningKey](../../models/components/signingkey.md)[]      | :heavy_minus_sign:                                                    | Success                                                               |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |