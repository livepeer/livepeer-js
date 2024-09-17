# PlaybackPolicy

Whether the playback policy for an asset or stream is public or signed

## Example Usage

```typescript
import { PlaybackPolicy, Type } from "livepeer/models/components";

let value: PlaybackPolicy = {
  type: Type.Webhook,
  webhookId: "1bde4o2i6xycudoy",
  webhookContext: {
    "streamerId": "my-custom-id",
  },
  refreshInterval: 600,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `type`                                                                                          | [components.Type](../../models/components/type.md)                                              | :heavy_check_mark:                                                                              | N/A                                                                                             | webhook                                                                                         |
| `webhookId`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | ID of the webhook to use for playback policy                                                    | 1bde4o2i6xycudoy                                                                                |
| `webhookContext`                                                                                | Record<string, *any*>                                                                           | :heavy_minus_sign:                                                                              | User-defined webhook context                                                                    | {<br/>"streamerId": "my-custom-id"<br/>}                                                        |
| `refreshInterval`                                                                               | *number*                                                                                        | :heavy_minus_sign:                                                                              | Interval (in seconds) at which the playback policy should be<br/>refreshed (default 600 seconds)<br/> | 600                                                                                             |
| `allowedOrigins`                                                                                | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | List of allowed origins for CORS playback (<scheme>://<hostname>:<port>, <scheme>://<hostname>) |                                                                                                 |