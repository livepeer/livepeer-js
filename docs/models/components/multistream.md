# Multistream

## Example Usage

```typescript
import { Multistream } from "livepeer/models/components";

let value: Multistream = {
  targets: [
    {
      profile: "720p",
      videoOnly: false,
      id: "PUSH123",
      spec: {
        name: "My target",
        url: "rtmps://live.my-service.tv/channel/secretKey",
      },
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `targets`                                                                   | [components.Target](../../models/components/target.md)[]                    | :heavy_minus_sign:                                                          | References to targets where this stream will be simultaneously<br/>streamed to<br/> | [<br/>{<br/>"id": "PUSH123",<br/>"profile": "720p"<br/>}<br/>]              |