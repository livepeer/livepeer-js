# GetPublicViewershipMetricsResponse

## Example Usage

```typescript
import { GetPublicViewershipMetricsResponse } from "livepeer/models/operations";

let value: GetPublicViewershipMetricsResponse = {
  contentType: "<value>",
  statusCode: 508,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  data: {
    playbackId: "1bde4o2i6xycudoy",
    dStorageUrl: "ipfs://QmZ4",
    viewCount: 100,
    playtimeMins: 10,
  },
  error: {
    errors: [
      "[\"id not provided\",\"Account not found\"]",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response content type for this operation                                                          |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response status code for this operation                                                           |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_check_mark:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |
| `data`                                                                                                 | [operations.GetPublicViewershipMetricsData](../../models/operations/getpublicviewershipmetricsdata.md) | :heavy_minus_sign:                                                                                     | A single Metric object with the viewCount and playtimeMins metrics.                                    |
| `error`                                                                                                | [components.ErrorT](../../models/components/errort.md)                                                 | :heavy_minus_sign:                                                                                     | Error                                                                                                  |