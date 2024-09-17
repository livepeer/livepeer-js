# TranscodePayloadCredentials

Credentials for the output video storage

## Example Usage

```typescript
import { TranscodePayloadCredentials } from "livepeer/models/components";

let value: TranscodePayloadCredentials = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `accessKeyId`                            | *string*                                 | :heavy_check_mark:                       | Access Key ID                            | AKIAIOSFODNN7EXAMPLE                     |
| `secretAccessKey`                        | *string*                                 | :heavy_check_mark:                       | Secret Access Key                        | wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY |