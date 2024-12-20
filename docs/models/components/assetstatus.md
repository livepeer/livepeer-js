# AssetStatus

Status of the asset

## Example Usage

```typescript
import { AssetPhase, AssetStatus } from "livepeer/models/components";

let value: AssetStatus = {
  phase: AssetPhase.Deleting,
  updatedAt: 1587667174725,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `phase`                                                         | [components.AssetPhase](../../models/components/assetphase.md)  | :heavy_check_mark:                                              | Phase of the asset                                              |                                                                 |
| `updatedAt`                                                     | *number*                                                        | :heavy_check_mark:                                              | Timestamp (in milliseconds) at which the asset was last updated | 1587667174725                                                   |
| `progress`                                                      | *number*                                                        | :heavy_minus_sign:                                              | Current progress of the task creating this asset.               |                                                                 |
| `errorMessage`                                                  | *string*                                                        | :heavy_minus_sign:                                              | Error message if the asset creation failed.                     |                                                                 |