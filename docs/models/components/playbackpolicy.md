# PlaybackPolicy

Whether the playback policy for a asset or stream is public or signed


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | [components.TypeT](../../models/components/typet.md) | :heavy_check_mark:                                   | N/A                                                  |
| `webhookId`                                          | *string*                                             | :heavy_minus_sign:                                   | ID of the webhook to use for playback policy         |
| `webhookContext`                                     | Record<string, *any*>                                | :heavy_minus_sign:                                   | User-defined webhook context                         |