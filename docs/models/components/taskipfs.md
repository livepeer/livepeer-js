# TaskIpfs


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `videoFileCid`                                                | *string*                                                      | :heavy_check_mark:                                            | IPFS CID of the exported video file                           |
| `videoFileUrl`                                                | *string*                                                      | :heavy_minus_sign:                                            | URL for the file with the IPFS protocol                       |
| `videoFileGatewayUrl`                                         | *string*                                                      | :heavy_minus_sign:                                            | URL to access file via HTTP through an IPFS gateway           |
| `nftMetadataCid`                                              | *string*                                                      | :heavy_minus_sign:                                            | IPFS CID of the default metadata exported for the video       |
| `nftMetadataUrl`                                              | *string*                                                      | :heavy_minus_sign:                                            | URL for the metadata file with the IPFS protocol              |
| `nftMetadataGatewayUrl`                                       | *string*                                                      | :heavy_minus_sign:                                            | URL to access metadata file via HTTP through an IPFS<br/>gateway<br/> |