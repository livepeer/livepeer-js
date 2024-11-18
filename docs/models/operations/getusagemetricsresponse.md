# GetUsageMetricsResponse

## Example Usage

```typescript
import { GetUsageMetricsResponse } from "livepeer/models/operations";

let value: GetUsageMetricsResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  usageMetric: {
    userID: "1bde4o2i6xycudoy",
    creatorID: "john@doe.com",
    deliveryUsageMins: 100,
    totalUsageMins: 100,
    storageUsageMins: 100,
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
| `usageMetric`                                                         | [components.UsageMetric](../../models/components/usagemetric.md)      | :heavy_minus_sign:                                                    | A Usage Metric object                                                 |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Error                                                                 |