# TranscodePayloadStorage


## Supported Types

### `components.TranscodePayloadSchemas1`

```typescript
const value: components.TranscodePayloadSchemas1 = {
  type: TranscodePayloadSchemasType.S3,
  endpoint: "https://gateway.storjshare.io",
  bucket: "outputbucket",
  credentials: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  },
};
```

### `components.TranscodePayloadSchemas2`

```typescript
const value: components.TranscodePayloadSchemas2 = {
  type: TranscodePayloadSchemasStorageType.Web3Storage,
  credentials: {
    proof:
      "EaJlcm9vdHOAZ3ZlcnNpb24BmgIBcRIg2uxHpcPYSWNtifMKFkPC7IEDvFDCxCd3ADViv0coV7SnYXNYRO2hA0AnblHEW38s3lSlcwaDjPn",
  },
};
```

