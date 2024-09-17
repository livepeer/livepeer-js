# NewAssetPayloadEncryption

## Example Usage

```typescript
import { NewAssetPayloadEncryption } from "livepeer/models/components";

let value: NewAssetPayloadEncryption = {
  encryptedKey: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `encryptedKey`                                                                                                      | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Encryption key used to encrypt the asset. Only writable in the upload asset endpoints and cannot be retrieved back. |