# ExportData

Parameters for the export-data task


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `content`                                                                  | [components.Content](../../models/components/content.md)                   | :heavy_check_mark:                                                         | File content to store into IPFS                                            |
| `ipfs`                                                                     | [components.IpfsExportParams](../../models/components/ipfsexportparams.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Optional type of content                                                   |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Optional ID of the content                                                 |