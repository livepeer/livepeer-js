# GetRoomUserResponse

## Example Usage

```typescript
import { GetRoomUserResponse } from "livepeer/models/components";

let value: GetRoomUserResponse = {
  id: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
  joinedAt: 1687517025261,
  name: "name",
  isPublisher: true,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_minus_sign:                                      | The ID of the user                                      | d32ae9e6-c459-4931-9898-e86e2f5e7e16                    |
| `joinedAt`                                              | *number*                                                | :heavy_minus_sign:                                      | Timestamp (in milliseconds) at which the user joined    | 1687517025261                                           |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | The display name of the user                            | name                                                    |
| `isPublisher`                                           | *boolean*                                               | :heavy_minus_sign:                                      | Whether a user is allowed to publish audio/video tracks | true                                                    |
| `metadata`                                              | *string*                                                | :heavy_minus_sign:                                      | User defined payload to store for the participant       |                                                         |