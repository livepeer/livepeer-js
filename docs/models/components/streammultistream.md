# StreamMultistream

## Example Usage

```typescript
import { StreamMultistream } from "livepeer/models/components";

let value: StreamMultistream = {
  targets: [
    {
      profile: "720p",
      videoOnly: false,
      id: "PUSH123",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `targets`                                                                   | [components.TargetOutput](../../models/components/targetoutput.md)[]        | :heavy_minus_sign:                                                          | References to targets where this stream will be simultaneously<br/>streamed to<br/> | [<br/>{<br/>"id": "PUSH123",<br/>"profile": "720p"<br/>}<br/>]              |