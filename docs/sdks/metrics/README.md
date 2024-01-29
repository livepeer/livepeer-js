# Metrics
(*metrics*)

### Available Operations

* [getViewership](#getviewership) - Query viewership metrics
* [getCreatorViewership](#getcreatorviewership) - Query creator viewership metrics
* [getPublicTotalViews](#getpublictotalviews) - Query public total views metrics
* [getUsage](#getusage) - Query usage metrics

## getViewership

Requires a private (non-CORS) API key to be used.


### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { BreakdownBy, TimeStep } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.metrics.getViewership({
    from: "string",
    to: "string",
    breakdownBy: [
      BreakdownBy.ViewerId,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetViewershipsMetricsRequest](../../models/operations/getviewershipsmetricsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetViewershipsMetricsResponse](../../models/operations/getviewershipsmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getCreatorViewership

Requires a proof of ownership to be sent in the request, which for now is just the assetId or streamId parameters (1 of those must be in the query-string).


### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { QueryParamBreakdownBy, QueryParamTimeStep } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.metrics.getCreatorViewership({
    from: "string",
    to: "string",
    breakdownBy: [
      QueryParamBreakdownBy.Os,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetCreatorMetricsRequest](../../models/operations/getcreatormetricsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetCreatorMetricsResponse](../../models/operations/getcreatormetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPublicTotalViews

Allows querying for the public metrics for viewership about a video.
This can be called from the frontend with a CORS key, or even
unauthenticated.


### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetPublicTotalViewsMetricsRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const playbackId: string = "string";

  const res = await sdk.metrics.getPublicTotalViews(playbackId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                             | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `playbackId`                                                                                                                                          | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The playback ID to filter the query results. This can be a canonical<br/>playback ID from Livepeer assets or streams, or dStorage identifiers<br/>for assets<br/> |
| `config`                                                                                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                          | :heavy_minus_sign:                                                                                                                                    | Available config options for making requests.                                                                                                         |


### Response

**Promise<[operations.GetPublicTotalViewsMetricsResponse](../../models/operations/getpublictotalviewsmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUsage

Query usage metrics

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetUsageMetricsQueryParamTimeStep, GetUsageMetricsRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const from: number = 224089;
const to: number = 231125;
const timeStep: GetUsageMetricsQueryParamTimeStep = GetUsageMetricsQueryParamTimeStep.Day;
const creatorId: string = "string";

  const res = await sdk.metrics.getUsage(from, to, timeStep, creatorId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `from`                                                                                                       | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Start millis timestamp for the query range (inclusive)<br/>                                                  |
| `to`                                                                                                         | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | End millis timestamp for the query range (exclusive)<br/>                                                    |
| `timeStep`                                                                                                   | [operations.GetUsageMetricsQueryParamTimeStep](../../models/operations/getusagemetricsqueryparamtimestep.md) | :heavy_minus_sign:                                                                                           | The time step to aggregate viewership metrics by<br/>                                                        |
| `creatorId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The creator ID to filter the query results<br/>                                                              |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetUsageMetricsResponse](../../models/operations/getusagemetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
