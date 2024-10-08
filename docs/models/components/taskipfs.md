# TaskIpfs

## Example Usage

```typescript
import { TaskIpfs } from "livepeer/models/components";

let value: TaskIpfs = {
  videoFileCid: "Qmabc123xyz341",
  videoFileUrl: "ipfs://Qmabc123xyz341",
  videoFileGatewayUrl: "https://gateway.ipfs.io/ipfs/Qmabc123xyz341",
  nftMetadataCid: "Qmabc123xyz341",
  nftMetadataUrl: "ipfs://Qmabc123xyz341",
  nftMetadataGatewayUrl: "https://gateway.ipfs.io/ipfs/Qmabc123xyz341",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `videoFileCid`                                                | *string*                                                      | :heavy_check_mark:                                            | IPFS CID of the exported video file                           | Qmabc123xyz341                                                |
| `videoFileUrl`                                                | *string*                                                      | :heavy_minus_sign:                                            | URL for the file with the IPFS protocol                       | ipfs://Qmabc123xyz341                                         |
| `videoFileGatewayUrl`                                         | *string*                                                      | :heavy_minus_sign:                                            | URL to access file via HTTP through an IPFS gateway           | https://gateway.ipfs.io/ipfs/Qmabc123xyz341                   |
| `nftMetadataCid`                                              | *string*                                                      | :heavy_minus_sign:                                            | IPFS CID of the default metadata exported for the video       | Qmabc123xyz341                                                |
| `nftMetadataUrl`                                              | *string*                                                      | :heavy_minus_sign:                                            | URL for the metadata file with the IPFS protocol              | ipfs://Qmabc123xyz341                                         |
| `nftMetadataGatewayUrl`                                       | *string*                                                      | :heavy_minus_sign:                                            | URL to access metadata file via HTTP through an IPFS<br/>gateway<br/> | https://gateway.ipfs.io/ipfs/Qmabc123xyz341                   |