# GetRoomUserResponse

## Example Usage

```typescript
import { GetRoomUserResponse } from "livepeer/models/operations";

let value: GetRoomUserResponse = {
  contentType: "<value>",
  statusCode: 412,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  getRoomUserResponse: {
    id: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
    joinedAt: 1687517025261,
    name: "name",
    isPublisher: true,
  },
  error: {
    errors: [
      "[\"id not provided\",\"Account not found\"]",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `contentType`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | HTTP response content type for this operation                                    |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP response status code for this operation                                     |
| `rawResponse`                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)            | :heavy_check_mark:                                                               | Raw HTTP response; suitable for custom response parsing                          |
| `getRoomUserResponse`                                                            | [components.GetRoomUserResponse](../../models/components/getroomuserresponse.md) | :heavy_minus_sign:                                                               | Success                                                                          |
| `error`                                                                          | [components.ErrorT](../../models/components/errort.md)                           | :heavy_minus_sign:                                                               | Error                                                                            |