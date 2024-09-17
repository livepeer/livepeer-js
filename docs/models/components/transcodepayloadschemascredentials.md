# TranscodePayloadSchemasCredentials

Delegation proof for Livepeer to be able to upload to
web3.storage


## Example Usage

```typescript
import { TranscodePayloadSchemasCredentials } from "livepeer/models/components";

let value: TranscodePayloadSchemasCredentials = {
  proof:
    "EaJlcm9vdHOAZ3ZlcnNpb24BmgIBcRIg2uxHpcPYSWNtifMKFkPC7IEDvFDCxCd3ADViv0coV7SnYXNYRO2hA0AnblHEW38s3lSlcwaDjPn",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `proof`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Base64 encoded UCAN delegation proof                                                                        | EaJlcm9vdHOAZ3ZlcnNpb24BmgIBcRIg2uxHpcPYSWNtifMKFkPC7IEDvFDCxCd3ADViv0coV7SnYXNYRO2hA0AnblHEW38s3lSlcwaDjPn |