# Target

## Example Usage

```typescript
import { Target } from "livepeer/models/components";

let value: Target = {
  profile: "720p0",
  videoOnly: false,
  id: "PUSH123",
  spec: {
    name: "My target",
    url: "rtmps://live.my-service.tv/channel/secretKey",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `profile`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of transcoding profile that should be sent. Use<br/>"source" for pushing source stream data<br/>              | 720p0                                                                                                              |
| `videoOnly`                                                                                                        | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | If true, the stream audio will be muted and only silent<br/>video will be pushed to the target.<br/>               | false                                                                                                              |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | ID of multistream target object where to push this stream                                                          | PUSH123                                                                                                            |
| `spec`                                                                                                             | [components.TargetSpec](../../models/components/targetspec.md)                                                     | :heavy_minus_sign:                                                                                                 | Inline multistream target object. Will automatically<br/>create the target resource to be used by the created<br/>stream.<br/> |                                                                                                                    |