# CreateRoomUserResponse

## Example Usage

```typescript
import { CreateRoomUserResponse } from "livepeer/models/operations";

let value: CreateRoomUserResponse = {
  contentType: "<value>",
  statusCode: 408,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  roomUserResponse: {
    id: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
    joinUrl: "https://meet.livepeer.chat",
    token: "token",
  },
  error: {
    errors: [
      "[\"id not provided\",\"Account not found\"]",
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `contentType`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | HTTP response content type for this operation                              |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP response status code for this operation                               |
| `rawResponse`                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)      | :heavy_check_mark:                                                         | Raw HTTP response; suitable for custom response parsing                    |
| `roomUserResponse`                                                         | [components.RoomUserResponse](../../models/components/roomuserresponse.md) | :heavy_minus_sign:                                                         | Success                                                                    |
| `error`                                                                    | [components.ErrorT](../../models/components/errort.md)                     | :heavy_minus_sign:                                                         | Error                                                                      |