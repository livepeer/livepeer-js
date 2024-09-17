# Room

## Example Usage

```typescript
import { Room } from "livepeer/models/components";

let value: Room = {
  id: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
  createdAt: 1587667174725,
  updatedAt: 1587667174725,
  participants: {
    "key": {},
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | room ID                                                                            | d32ae9e6-c459-4931-9898-e86e2f5e7e16                                               |
| `createdAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | Timestamp (in milliseconds) at which the room was created                          | 1587667174725                                                                      |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | Timestamp (in milliseconds) at which room was updated                              | 1587667174725                                                                      |
| `egressId`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | internal ID for egress output                                                      |                                                                                    |
| `participants`                                                                     | Record<string, [components.Participants](../../models/components/participants.md)> | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |