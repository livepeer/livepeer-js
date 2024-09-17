# Export

Output of the export task

## Example Usage

```typescript
import { Export } from "livepeer/models/components";

let value: Export = {
  ipfs: {
    videoFileCid: "Qmabc123xyz341",
    videoFileUrl: "ipfs://Qmabc123xyz341",
    videoFileGatewayUrl: "https://gateway.ipfs.io/ipfs/Qmabc123xyz341",
    nftMetadataCid: "Qmabc123xyz341",
    nftMetadataUrl: "ipfs://Qmabc123xyz341",
    nftMetadataGatewayUrl: "https://gateway.ipfs.io/ipfs/Qmabc123xyz341",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `ipfs`                                                     | [components.TaskIpfs](../../models/components/taskipfs.md) | :heavy_minus_sign:                                         | N/A                                                        |