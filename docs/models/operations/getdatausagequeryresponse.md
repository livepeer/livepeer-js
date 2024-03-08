# GetDataUsageQueryResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `usageMetric`                                                      | [components.UsageMetric](../../models/components/usagemetric.md)   | :heavy_minus_sign:                                                 | A Usage Metric object                                              |
| `error`                                                            | *errors.ErrorT*                                                    | :heavy_minus_sign:                                                 | Error                                                              |