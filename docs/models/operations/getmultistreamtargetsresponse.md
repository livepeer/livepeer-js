# GetMultistreamTargetsResponse

## Example Usage

```typescript
import { GetMultistreamTargetsResponse } from "livepeer/models/operations";

let value: GetMultistreamTargetsResponse = {
  contentType: "<value>",
  statusCode: 417,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  data: [
    {
      id: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
      createdAt: 1587667174725,
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contentType`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | HTTP response content type for this operation                                  |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP response status code for this operation                                   |
| `rawResponse`                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)          | :heavy_check_mark:                                                             | Raw HTTP response; suitable for custom response parsing                        |
| `data`                                                                         | [components.MultistreamTarget](../../models/components/multistreamtarget.md)[] | :heavy_minus_sign:                                                             | Success                                                                        |
| `error`                                                                        | [components.ErrorT](../../models/components/errort.md)                         | :heavy_minus_sign:                                                             | Error                                                                          |