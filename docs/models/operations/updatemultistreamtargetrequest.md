# UpdateMultistreamTargetRequest

## Example Usage

```typescript
import { UpdateMultistreamTargetRequest } from "livepeer/models/operations";

let value: UpdateMultistreamTargetRequest = {
  id: "<id>",
  multistreamTargetPatchPayload: {
    url: "rtmps://live.my-service.tv/channel/secretKey",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the multistream target                                                                         |
| `multistreamTargetPatchPayload`                                                                      | [components.MultistreamTargetPatchPayload](../../models/components/multistreamtargetpatchpayload.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |