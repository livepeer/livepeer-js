# GetMultistreamTargetsResponse


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contentType`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | HTTP response content type for this operation                                  |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP response status code for this operation                                   |
| `rawResponse`                                                                  | [AxiosResponse](https://axios-http.com/docs/res_schema)                        | :heavy_minus_sign:                                                             | Raw HTTP response; suitable for custom response parsing                        |
| `data`                                                                         | [components.MultistreamTarget](../../models/components/multistreamtarget.md)[] | :heavy_minus_sign:                                                             | Success                                                                        |