# GetRoomResponse

## Example Usage

```typescript
import { GetRoomResponse } from "livepeer/models/operations";

let value: GetRoomResponse = {
  contentType: "<value>",
  statusCode: 414,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  room: {
    id: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
    createdAt: 1587667174725,
    updatedAt: 1587667174725,
    participants: {
      "key": {},
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
| `room`                                                                | [components.Room](../../models/components/room.md)                    | :heavy_minus_sign:                                                    | Success                                                               |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |