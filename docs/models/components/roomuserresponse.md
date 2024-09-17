# RoomUserResponse

## Example Usage

```typescript
import { RoomUserResponse } from "livepeer/models/components";

let value: RoomUserResponse = {
  id: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
  joinUrl: "https://meet.livepeer.chat",
  token: "token",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                      | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The ID of the user                                                                                                        | d32ae9e6-c459-4931-9898-e86e2f5e7e16                                                                                      |
| `joinUrl`                                                                                                                 | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Joining URL - use this for Livepeer's default meeting app (see the multiparticipant streaming guide for more info).       | https://meet.livepeer.chat                                                                                                |
| `token`                                                                                                                   | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Joining JWT - this can be used if you have a custom meeting app (see the multiparticipant streaming guide for more info). | token                                                                                                                     |