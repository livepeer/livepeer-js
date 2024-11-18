# Input


## Supported Types

### `components.TranscodePayload1`

```typescript
const value: components.TranscodePayload1 = {
  url: "https://s3.amazonaws.com/bucket/file.mp4",
};
```

### `components.TranscodePayload2`

```typescript
const value: components.TranscodePayload2 = {
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

