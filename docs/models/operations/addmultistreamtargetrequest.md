# AddMultistreamTargetRequest

## Example Usage

```typescript
import { AddMultistreamTargetRequest } from "livepeer/models/operations";

let value: AddMultistreamTargetRequest = {
  id: "<id>",
  targetAddPayload: {
    profile: "720p0",
    videoOnly: false,
    id: "PUSH123",
    spec: {
      name: "My target",
      url: "rtmps://live.my-service.tv/channel/secretKey",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | ID of the parent stream                                                    |
| `targetAddPayload`                                                         | [components.TargetAddPayload](../../models/components/targetaddpayload.md) | :heavy_check_mark:                                                         | N/A                                                                        |