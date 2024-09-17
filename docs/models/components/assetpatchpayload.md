# AssetPatchPayload

## Example Usage

```typescript
import { AssetPatchPayload, Type } from "livepeer/models/components";

let value: AssetPatchPayload = {
  name: "filename.mp4",
  playbackPolicy: {
    type: Type.Webhook,
    webhookId: "1bde4o2i6xycudoy",
    webhookContext: {
      "streamerId": "my-custom-id",
    },
    refreshInterval: 600,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The name of the asset. This is not necessarily the filename - it can be a custom name or title.<br/> | filename.mp4                                                                                     |
| `creatorId`                                                                                      | *components.InputCreatorId*                                                                      | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `playbackPolicy`                                                                                 | [components.PlaybackPolicy](../../models/components/playbackpolicy.md)                           | :heavy_minus_sign:                                                                               | Whether the playback policy for an asset or stream is public or signed                           |                                                                                                  |
| `storage`                                                                                        | [components.Storage](../../models/components/storage.md)                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |