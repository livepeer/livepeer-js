# Tasks

## Example Usage

```typescript
import { Tasks } from "livepeer/models/components";

let value: Tasks = {
  pending: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
  last: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
  failed: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pending`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | ID of any currently running task that is exporting this<br/>asset to IPFS.<br/>  | 09F8B46C-61A0-4254-9875-F71F4C605BC7                                             |
| `last`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | ID of the last task to run successfully, that created<br/>the currently saved data.<br/> | 09F8B46C-61A0-4254-9875-F71F4C605BC7                                             |
| `failed`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | ID of the last task to fail execution.                                           | 09F8B46C-61A0-4254-9875-F71F4C605BC7                                             |