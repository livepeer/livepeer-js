# UpdateRoomUserRequest

## Example Usage

```typescript
import { UpdateRoomUserRequest } from "livepeer/models/operations";

let value: UpdateRoomUserRequest = {
  id: "<id>",
  userId: "<id>",
  roomUserUpdatePayload: {
    canPublish: true,
    canPublishData: true,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `userId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `roomUserUpdatePayload`                                                              | [components.RoomUserUpdatePayload](../../models/components/roomuserupdatepayload.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |