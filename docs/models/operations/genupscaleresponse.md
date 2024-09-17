# GenUpscaleResponse

## Example Usage

```typescript
import { GenUpscaleResponse } from "livepeer/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `imageResponse`                                                       | [components.ImageResponse](../../models/components/imageresponse.md)  | :heavy_minus_sign:                                                    | Successful Response                                                   |
| `studioApiError`                                                      | *errors.StudioApiError*                                               | :heavy_minus_sign:                                                    | Error                                                                 |