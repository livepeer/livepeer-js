# HTTPError

HTTP error response model.

## Example Usage

```typescript
import { HTTPError } from "livepeer/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `detail`                                                              | [components.APIError](../../models/components/apierror.md)            | :heavy_check_mark:                                                    | Detailed error information.                                           |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_minus_sign:                                                    | Raw HTTP response; suitable for custom response parsing               |