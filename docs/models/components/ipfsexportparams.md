# IpfsExportParams

## Example Usage

```typescript
import { IpfsExportParams } from "livepeer/models/components";

let value: IpfsExportParams = {
  pinata: {},
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `dollarRef`                                                                                         | *any*                                                                                               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `pinata`                                                                                            | *components.Pinata*                                                                                 | :heavy_minus_sign:                                                                                  | Custom credentials for the Piñata service. Must have either<br/>a JWT or an API key and an API secret.<br/> |