# IpfsFileInfo

## Example Usage

```typescript
import { IpfsFileInfo } from "livepeer/models/components";

let value: IpfsFileInfo = {
  cid: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `cid`                                               | *string*                                            | :heavy_check_mark:                                  | CID of the file on IPFS                             |
| `url`                                               | *string*                                            | :heavy_minus_sign:                                  | URL with IPFS scheme for the file                   |
| `gatewayUrl`                                        | *string*                                            | :heavy_minus_sign:                                  | URL to access file via HTTP through an IPFS gateway |