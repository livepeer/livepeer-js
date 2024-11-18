# GetRecordedSessionsRequest

## Example Usage

```typescript
import { GetRecordedSessionsRequest } from "livepeer/models/operations";

let value: GetRecordedSessionsRequest = {
  parentId: "<id>",
  record: true,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `parentId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | ID of the parent stream                                                |                                                                        |
| `record`                                                               | *operations.RecordT*                                                   | :heavy_minus_sign:                                                     | Flag indicating if the response should only include recorded<br/>sessions<br/> | true                                                                   |