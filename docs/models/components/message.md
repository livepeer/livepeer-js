# Message

Video Metadata EIP-712 message content

## Example Usage

```typescript
import { Message } from "livepeer/models/components";

let value: Message = {
  video: "5b9e63bb-6fd0-4bea-aff2-cc5d4eb9cad0",
  attestations: [
    {
      role: "creator",
      address: "1311768467294899700",
    },
  ],
  signer: "1311768467294899700",
  timestamp: 1587667174725,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `video`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | 5b9e63bb-6fd0-4bea-aff2-cc5d4eb9cad0                                 |
| `attestations`                                                       | [components.Attestations](../../models/components/attestations.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `signer`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | 1311768467294899700                                                  |
| `timestamp`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | 1587667174725                                                        |