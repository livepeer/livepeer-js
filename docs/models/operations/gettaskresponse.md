# GetTaskResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `tasks`                                                            | [components.Task](../../models/components/task.md)[]               | :heavy_minus_sign:                                                 | Success                                                            |
| `error`                                                            | *errors.ErrorT*                                                    | :heavy_minus_sign:                                                 | Error                                                              |