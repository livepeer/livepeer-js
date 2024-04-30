# WebhookPayload


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | test_webhook                                             |
| `url`                                                    | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | https://my-service.com/webhook                           |
| `events`                                                 | [components.Events](../../models/components/events.md)[] | :heavy_minus_sign:                                       | N/A                                                      | [<br/>"stream.started",<br/>"stream.idle"<br/>]          |
| `sharedSecret`                                           | *string*                                                 | :heavy_minus_sign:                                       | shared secret used to sign the webhook payload           | my-secret                                                |
| `streamId`                                               | *string*                                                 | :heavy_minus_sign:                                       | streamId of the stream on which the webhook is applied   | de7818e7-610a-4057-8f6f-b785dc1e6f88                     |