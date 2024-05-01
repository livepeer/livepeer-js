# TranscodePayloadSchemas2

Storage for the output files


## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.TranscodePayloadSchemasStorageType](../../models/components/transcodepayloadschemasstoragetype.md) | :heavy_check_mark:                                                                                             | Type of service used for output files                                                                          |
| `credentials`                                                                                                  | [components.TranscodePayloadSchemasCredentials](../../models/components/transcodepayloadschemascredentials.md) | :heavy_check_mark:                                                                                             | Delegation proof for Livepeer to be able to upload to<br/>web3.storage<br/>                                    |