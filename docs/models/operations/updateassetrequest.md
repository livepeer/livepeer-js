# UpdateAssetRequest

## Example Usage

```typescript
import { Type } from "livepeer/models/components";
import { UpdateAssetRequest } from "livepeer/models/operations";

let value: UpdateAssetRequest = {
  assetId: "<value>",
  assetPatchPayload: {
    name: "filename.mp4",
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `assetId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | ID of the asset                                                              |
| `assetPatchPayload`                                                          | [components.AssetPatchPayload](../../models/components/assetpatchpayload.md) | :heavy_check_mark:                                                           | N/A                                                                          |