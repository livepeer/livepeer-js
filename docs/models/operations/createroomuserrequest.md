# CreateRoomUserRequest

## Example Usage

```typescript
import { CreateRoomUserRequest } from "livepeer/models/operations";

let value: CreateRoomUserRequest = {
  id: "<id>",
  roomUserPayload: {
    name: "name",
    canPublish: true,
    canPublishData: true,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `roomUserPayload`                                                        | [components.RoomUserPayload](../../models/components/roomuserpayload.md) | :heavy_check_mark:                                                       | N/A                                                                      |