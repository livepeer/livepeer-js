# Metrics
(*metrics*)

### Available Operations

* [getViewershipsMetrics](#getviewershipsmetrics) - Query viewership metrics
* [getCreatorMetrics](#getcreatormetrics) - Query creator viewership metrics
* [getPublicTotalViewsMetrics](#getpublictotalviewsmetrics) - Query public total views metrics
* [getUsageMetrics](#getusagemetrics) - Query usage metrics

## getViewershipsMetrics

Query viewership metrics

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { BreakdownBy } from "livepeer/models/operations";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.metrics.getViewershipsMetrics({
  from: 599370,
  to: 750430,
    breakdownBy: [
      BreakdownBy.Country,
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDataViewsQueryRequest](../../models/operations/getdataviewsqueryrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetDataViewsQueryResponse](../../models/operations/getdataviewsqueryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCreatorMetrics

Query creator viewership metrics

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { QueryParamBreakdownBy } from "livepeer/models/operations";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.metrics.getCreatorMetrics({
  from: new Date("2024-01-10T00:19:08.773Z"),
  to: new Date("2022-02-11T11:42:19.967Z"),
    breakdownBy: [
      QueryParamBreakdownBy.Continent,
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDataViewsQueryCreatorRequest](../../models/operations/getdataviewsquerycreatorrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetDataViewsQueryCreatorResponse](../../models/operations/getdataviewsquerycreatorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPublicTotalViewsMetrics

Query public total views metrics

### Example Usage

```typescript
import { Livepeer } from "livepeer";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const playbackId = "<value>";
  
  const result = await sdk.metrics.getPublicTotalViewsMetrics(playbackId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `playbackId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The playback ID to filter the query results. This can be a canonical<br/>playback ID from Livepeer assets or streams, or dStorage identifiers<br/>for assets<br/>              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetDataViewsQueryTotalPlaybackIdResponse](../../models/operations/getdataviewsquerytotalplaybackidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUsageMetrics

Query usage metrics

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetDataUsageQueryQueryParamTimeStep } from "livepeer/models/operations";

async function run() {
  const sdk = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const from = 169019;
  const to = 623790;
  const timeStep = GetDataUsageQueryQueryParamTimeStep.Hour;
  const creatorId = "<value>";
  
  const result = await sdk.metrics.getUsageMetrics(from, to, timeStep, creatorId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `from`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Start millis timestamp for the query range (inclusive)<br/>                                                                                                                    |
| `to`                                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | End millis timestamp for the query range (exclusive)<br/>                                                                                                                      |
| `timeStep`                                                                                                                                                                     | [operations.GetDataUsageQueryQueryParamTimeStep](../../models/operations/getdatausagequeryqueryparamtimestep.md)                                                               | :heavy_minus_sign:                                                                                                                                                             | The time step to aggregate viewership metrics by<br/>                                                                                                                          |
| `creatorId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The creator ID to filter the query results<br/>                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetDataUsageQueryResponse](../../models/operations/getdatausagequeryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
