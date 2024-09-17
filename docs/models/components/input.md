# Input

## Example Usage

```typescript
import { Input, TranscodePayloadType } from "livepeer/models/components";

let value: Input = {
  type: TranscodePayloadType.S3,
  endpoint: "https://gateway.storjshare.io",
  bucket: "inputbucket",
  path: "/path/file.mp4",
  credentials: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  },
};
```

## Supported Types

### `components.TranscodePayload1`

```typescript
const value: components.TranscodePayload1 = /* values here */
```

### `components.TranscodePayload2`

```typescript
const value: components.TranscodePayload2 = /* values here */
```

