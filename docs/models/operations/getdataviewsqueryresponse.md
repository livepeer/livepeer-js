# GetDataViewsQueryResponse


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `viewershipMetrics`                                                          | [components.ViewershipMetric](../../models/components/viewershipmetric.md)[] | :heavy_minus_sign:                                                           | A list of Metric objects                                                     |
| `error`                                                                      | *errors.ErrorT*                                                              | :heavy_minus_sign:                                                           | Error                                                                        |