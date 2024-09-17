# Two

## Example Usage

```typescript
import { AssetSchemasSourceType, Two } from "livepeer/models/components";

let value: Two = {
  type: AssetSchemasSourceType.Recording,
  sessionId: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [components.AssetSchemasSourceType](../../models/components/assetschemassourcetype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sessionId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the session from which this asset was created                                    |