# UpdateSigningKeyRequest

## Example Usage

```typescript
import { UpdateSigningKeyRequest } from "livepeer/models/operations";

let value: UpdateSigningKeyRequest = {
  keyId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `keyId`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | ID of the signing key                                                                            |
| `requestBody`                                                                                    | [operations.UpdateSigningKeyRequestBody](../../models/operations/updatesigningkeyrequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |