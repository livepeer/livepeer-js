# AssetStorage

## Example Usage

```typescript
import { AssetStorage, Phase } from "livepeer/models/components";

let value: AssetStorage = {
  ipfs: {
    updatedAt: 1587667174725,
  },
  status: {
    phase: Phase.Ready,
    progress: 0.5,
    errorMessage: "Failed to update storage",
    tasks: {
      pending: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
      last: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
      failed: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `ipfs`                                                               | [components.AssetIpfs](../../models/components/assetipfs.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `status`                                                             | [components.StorageStatus](../../models/components/storagestatus.md) | :heavy_minus_sign:                                                   | N/A                                                                  |