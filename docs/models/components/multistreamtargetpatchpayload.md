# MultistreamTargetPatchPayload

## Example Usage

```typescript
import { MultistreamTargetPatchPayload } from "livepeer/models/components";

let value: MultistreamTargetPatchPayload = {
  url: "rtmps://live.my-service.tv/channel/secretKey",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `url`                                                                                                           | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Livepeer-compatible multistream target URL (RTMP(S) or SRT)                                                     | rtmps://live.my-service.tv/channel/secretKey                                                                    |
| `disabled`                                                                                                      | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | If true then this multistream target will not be used for pushing<br/>even if it is configured in a stream object.<br/> |                                                                                                                 |