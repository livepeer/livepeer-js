# RoomUserUpdatePayload

## Example Usage

```typescript
import { RoomUserUpdatePayload } from "livepeer/models/components";

let value: RoomUserUpdatePayload = {
  canPublish: true,
  canPublishData: true,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `canPublish`                                                                               | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether a user is allowed to publish audio/video tracks (i.e. their microphone and webcam) | true                                                                                       |
| `canPublishData`                                                                           | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether a user is allowed to publish data messages to the room                             | true                                                                                       |
| `metadata`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | User defined payload to store for the participant                                          |                                                                                            |