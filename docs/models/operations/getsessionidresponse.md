# GetSessionIdResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `session`                                                          | [components.Session](../../models/components/session.md)           | :heavy_minus_sign:                                                 | Success                                                            |
| `error`                                                            | *errors.ErrorT*                                                    | :heavy_minus_sign:                                                 | Error                                                              |