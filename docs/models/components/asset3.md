# Asset3

## Example Usage

```typescript
import { Asset3, AssetSchemasSource3Type } from "livepeer/models/components";

let value: Asset3 = {
  type: AssetSchemasSource3Type.DirectUpload,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [components.AssetSchemasSource3Type](../../models/components/assetschemassource3type.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `encryption`                                                                             | [components.EncryptionOutput](../../models/components/encryptionoutput.md)               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `sourceId`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | ID of the asset or stream from which this asset was created.                             |
| `sessionId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | ID of the session from which this asset was created.                                     |
| `playbackId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | Playback ID of the asset or stream from which this asset was created.                    |
| `requesterId`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | ID of the requester from which this asset was created.                                   |
| `assetId`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | ID of the asset from which this asset was created.                                       |