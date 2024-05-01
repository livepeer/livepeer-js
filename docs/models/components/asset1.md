# Asset1


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.AssetSchemasType](../../models/components/assetschemastype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `url`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | URL from which the asset was uploaded.                                     |
| `gatewayUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Gateway URL from asset if parsed from provided URL on upload.              |
| `encryption`                                                               | [components.Encryption](../../models/components/encryption.md)             | :heavy_minus_sign:                                                         | N/A                                                                        |