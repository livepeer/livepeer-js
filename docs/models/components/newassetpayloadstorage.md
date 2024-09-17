# NewAssetPayloadStorage

## Example Usage

```typescript
import { NewAssetPayloadStorage } from "livepeer/models/components";

let value: NewAssetPayloadStorage = {};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ipfs`                                                                                                                                                                                   | *components.NewAssetPayloadIpfs*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                       | Set to true to make default export to IPFS. To customize the<br/>pinned files, specify an object with a spec field. False or null<br/>means to unpin from IPFS, but it's unsupported right now.<br/> |