# StopRoomEgressResponse

## Example Usage

```typescript
import { StopRoomEgressResponse } from "livepeer/models/operations";

let value: StopRoomEgressResponse = {
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
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
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |