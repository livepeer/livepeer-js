# CreateMultistreamTargetResponse

## Example Usage

```typescript
import { CreateMultistreamTargetResponse } from "livepeer/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `contentType`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | HTTP response content type for this operation                                |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP response status code for this operation                                 |
| `rawResponse`                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)        | :heavy_check_mark:                                                           | Raw HTTP response; suitable for custom response parsing                      |
| `multistreamTarget`                                                          | [components.MultistreamTarget](../../models/components/multistreamtarget.md) | :heavy_minus_sign:                                                           | Success                                                                      |
| `error`                                                                      | *errors.ErrorT*                                                              | :heavy_minus_sign:                                                           | Error                                                                        |