# Domain

Video Metadata EIP-712 domain

## Example Usage

```typescript
import { Domain, Name, Version } from "livepeer/models/components";

let value: Domain = {
  name: Name.VerifiableVideo,
  version: Version.One,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | [components.Name](../../models/components/name.md)       | :heavy_check_mark:                                       | N/A                                                      | Verifiable Video                                         |
| `version`                                                | [components.Version](../../models/components/version.md) | :heavy_check_mark:                                       | N/A                                                      | 1                                                        |