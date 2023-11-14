# IpfsFileInfo


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cid`                                                              | *string*                                                           | :heavy_check_mark:                                                 | CID of the file on IPFS                                            | bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u        |
| `url`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | URL with IPFS scheme for the file                                  | ipfs://bafybeihoqtemwitqajy6d654tmghqqvxmzgblddj2egst6yilplr5num6u |
| `gatewayUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | URL to access file via HTTP through an IPFS gateway                | https://ipfs.io                                                    |