# RoomUserPayload

## Example Usage

```typescript
import { RoomUserPayload } from "livepeer/models/components";

let value: RoomUserPayload = {
  name: "name",
  canPublish: true,
  canPublishData: true,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | Display name                                                   | name                                                           |
| `canPublish`                                                   | *boolean*                                                      | :heavy_minus_sign:                                             | Whether a user is allowed to publish audio/video tracks        | true                                                           |
| `canPublishData`                                               | *boolean*                                                      | :heavy_minus_sign:                                             | Whether a user is allowed to publish data messages to the room | true                                                           |
| `metadata`                                                     | *string*                                                       | :heavy_minus_sign:                                             | User defined payload to store for the participant              |                                                                |