# GetRealtimeViewershipNowResponse

## Example Usage

```typescript
import { GetRealtimeViewershipNowResponse } from "livepeer/models/operations";

let value: GetRealtimeViewershipNowResponse = {
  contentType: "<value>",
  statusCode: 418,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  data: [
    {
      playbackId: "1bde4o2i6xycudoy",
      device: "iPhone",
      browser: "Safari",
      country: "United States",
      viewCount: 100,
      errorRate: 0.1,
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `contentType`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | HTTP response content type for this operation                                                |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | HTTP response status code for this operation                                                 |
| `rawResponse`                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                        | :heavy_check_mark:                                                                           | Raw HTTP response; suitable for custom response parsing                                      |
| `data`                                                                                       | [components.RealtimeViewershipMetric](../../models/components/realtimeviewershipmetric.md)[] | :heavy_minus_sign:                                                                           | A list of Metric objects                                                                     |
| `error`                                                                                      | [components.ErrorT](../../models/components/errort.md)                                       | :heavy_minus_sign:                                                                           | Error                                                                                        |