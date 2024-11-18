# CreateRoomResponse

## Example Usage

```typescript
import { CreateRoomResponse } from "livepeer/models/operations";

let value: CreateRoomResponse = {
  contentType: "<value>",
  statusCode: 507,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  createRoomResponse: {
    id: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
  },
  error: {
    errors: [
      "[\"id not provided\",\"Account not found\"]",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contentType`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | HTTP response content type for this operation                                  |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP response status code for this operation                                   |
| `rawResponse`                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)          | :heavy_check_mark:                                                             | Raw HTTP response; suitable for custom response parsing                        |
| `createRoomResponse`                                                           | [components.CreateRoomResponse](../../models/components/createroomresponse.md) | :heavy_minus_sign:                                                             | Success                                                                        |
| `error`                                                                        | [components.ErrorT](../../models/components/errort.md)                         | :heavy_minus_sign:                                                             | Error                                                                          |