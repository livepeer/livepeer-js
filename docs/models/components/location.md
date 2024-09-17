# Location

Approximate location of the pull source. The location is used to
determine the closest Livepeer region to pull the stream from.

## Example Usage

```typescript
import { Location } from "livepeer/models/components";

let value: Location = {
  lat: 39.739,
  lon: -104.988,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `lat`                                                                         | *number*                                                                      | :heavy_check_mark:                                                            | Latitude of the pull source in degrees. North is positive,<br/>south is negative. | 39.739                                                                        |
| `lon`                                                                         | *number*                                                                      | :heavy_check_mark:                                                            | Longitude of the pull source in degrees. East is positive,<br/>west is negative. | -104.988                                                                      |