# TranscodePayloadSchemas2

Storage for the output files

## Example Usage

```typescript
import { TranscodePayloadSchemas2, TranscodePayloadSchemasStorageType } from "livepeer/models/components";

let value: TranscodePayloadSchemas2 = {
  type: TranscodePayloadSchemasStorageType.Web3Storage,
  credentials: {
    proof:
      "EaJlcm9vdHOAZ3ZlcnNpb24BmgIBcRIg2uxHpcPYSWNtifMKFkPC7IEDvFDCxCd3ADViv0coV7SnYXNYRO2hA0AnblHEW38s3lSlcwaDjPn",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.TranscodePayloadSchemasStorageType](../../models/components/transcodepayloadschemasstoragetype.md) | :heavy_check_mark:                                                                                             | Type of service used for output files                                                                          |
| `credentials`                                                                                                  | [components.TranscodePayloadSchemasCredentials](../../models/components/transcodepayloadschemascredentials.md) | :heavy_check_mark:                                                                                             | Delegation proof for Livepeer to be able to upload to<br/>web3.storage<br/>                                    |