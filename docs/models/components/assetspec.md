# AssetSpec

## Example Usage

```typescript
import { AssetSpec } from "livepeer/models/components";

let value: AssetSpec = {};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nftMetadataTemplate`                                                                                                                                      | [components.AssetNftMetadataTemplate](../../models/components/assetnftmetadatatemplate.md)                                                                 | :heavy_minus_sign:                                                                                                                                         | Name of the NFT metadata template to export. 'player'<br/>will embed the Livepeer Player on the NFT while 'file'<br/>will reference only the immutable MP4 files.<br/> |
| `nftMetadata`                                                                                                                                              | [components.AssetNftMetadata](../../models/components/assetnftmetadata.md)                                                                                 | :heavy_minus_sign:                                                                                                                                         | Additional data to add to the NFT metadata exported to<br/>IPFS. Will be deep merged with the default metadata<br/>exported.<br/>                          |