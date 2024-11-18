# Asset1

## Example Usage

```typescript
import { Asset1, AssetSchemasType } from "livepeer/models/components";

let value: Asset1 = {
  type: AssetSchemasType.Url,
  url: "https://unlucky-word.biz",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.AssetSchemasType](../../models/components/assetschemastype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `url`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | URL from which the asset was uploaded.                                     |
| `gatewayUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Gateway URL from asset if parsed from provided URL on upload.              |
| `encryption`                                                               | [components.EncryptionOutput](../../models/components/encryptionoutput.md) | :heavy_minus_sign:                                                         | N/A                                                                        |