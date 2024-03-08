# PutWebhookIdResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `webhook`                                                          | [components.Webhook](../../models/components/webhook.md)           | :heavy_minus_sign:                                                 | Success                                                            |
| `error`                                                            | *errors.ErrorT*                                                    | :heavy_minus_sign:                                                 | Error                                                              |