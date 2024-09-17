# CreatorId1

## Example Usage

```typescript
import { CreatorId1, CreatorIdType } from "livepeer/models/components";

let value: CreatorId1 = {
  type: CreatorIdType.Unverified,
  value: "user123",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [components.CreatorIdType](../../models/components/creatoridtype.md) | :heavy_check_mark:                                                   | N/A                                                                  | unverified                                                           |
| `value`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Developer-managed ID of the user who created the resource.           | user123                                                              |