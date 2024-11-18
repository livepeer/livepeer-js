# GetCreatorViewershipMetricsResponse

## Example Usage

```typescript
import { GetCreatorViewershipMetricsResponse } from "livepeer/models/operations";

let value: GetCreatorViewershipMetricsResponse = {
  contentType: "<value>",
  statusCode: 403,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  data: [
    {
      playbackId: "1bde4o2i6xycudoy",
      creatorId: "john@doe.com",
      viewerId: "1bde4o2i6xycudoy",
      dStorageUrl: "ipfs://QmZ4",
      timestamp: 1587667174725,
      device: "iPhone",
      deviceType: "mobile",
      cpu: "ARM",
      os: "iOS",
      browser: "Safari",
      browserEngine: "WebKit",
      continent: "North America",
      country: "United States",
      subdivision: "California",
      timezone: "America/Los_Angeles",
      geohash: "123",
      viewCount: 100,
      playtimeMins: 10,
      ttffMs: 100,
      rebufferRatio: 0.1,
      errorRate: 0.1,
      exitsBeforeStart: 0.5,
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `contentType`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | HTTP response content type for this operation                                |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP response status code for this operation                                 |
| `rawResponse`                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)        | :heavy_check_mark:                                                           | Raw HTTP response; suitable for custom response parsing                      |
| `data`                                                                       | [components.ViewershipMetric](../../models/components/viewershipmetric.md)[] | :heavy_minus_sign:                                                           | A list of Metric objects                                                     |
| `error`                                                                      | [components.ErrorT](../../models/components/errort.md)                       | :heavy_minus_sign:                                                           | Error                                                                        |