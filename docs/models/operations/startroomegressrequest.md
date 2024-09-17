# StartRoomEgressRequest

## Example Usage

```typescript
import { StartRoomEgressRequest } from "livepeer/models/operations";

let value: StartRoomEgressRequest = {
  id: "<id>",
  roomEgressPayload: {
    streamId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `roomEgressPayload`                                                          | [components.RoomEgressPayload](../../models/components/roomegresspayload.md) | :heavy_check_mark:                                                           | N/A                                                                          |