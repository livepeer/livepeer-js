# AssetIpfs

## Example Usage

```typescript
import { AssetIpfs } from "livepeer/models/components";

let value: AssetIpfs = {
  updatedAt: 1587667174725,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `spec`                                                             | [components.AssetSpec](../../models/components/assetspec.md)       | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `dollarRef`                                                        | *any*                                                              | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `nftMetadata`                                                      | [components.IpfsFileInfo](../../models/components/ipfsfileinfo.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `updatedAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Timestamp (in milliseconds) at which IPFS export task was<br/>updated<br/> | 1587667174725                                                      |