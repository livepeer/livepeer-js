# TargetOutput

## Example Usage

```typescript
import { TargetOutput } from "livepeer/models/components";

let value: TargetOutput = {
  profile: "720p0",
  videoOnly: false,
  id: "PUSH123",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `profile`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of transcoding profile that should be sent. Use<br/>"source" for pushing source stream data<br/> | 720p0                                                                                         |
| `videoOnly`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | If true, the stream audio will be muted and only silent<br/>video will be pushed to the target.<br/> | false                                                                                         |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of multistream target object where to push this stream                                     | PUSH123                                                                                       |