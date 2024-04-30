# Metrics
(*metrics*)

## Overview

Operations related to metrics api

### Available Operations

* [getViewership](#getviewership) - Query viewership metrics
* [getCreatorViewership](#getcreatorviewership) - Query creator viewership metrics
* [getPublicViewership](#getpublicviewership) - Query public total views metrics
* [getUsage](#getusage) - Query usage metrics

## getViewership

Requires a private (non-CORS) API key to be used.


### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { BreakdownBy } from "livepeer/models/operations";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.metrics.getViewership({
  from: 980301,
  to: 366854,
    breakdownBy: [
      BreakdownBy.PlaybackId,
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
| `request`                                                                                                                                                                      | [operations.GetViewershipMetricsRequest](../../models/operations/getviewershipmetricsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetViewershipMetricsResponse](../../models/operations/getviewershipmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCreatorViewership

Requires a proof of ownership to be sent in the request, which for now is just the assetId or streamId parameters (1 of those must be in the query-string).


### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { QueryParamBreakdownBy } from "livepeer/models/operations";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.metrics.getCreatorViewership({
  from: new Date("2022-06-17T03:28:06.363Z"),
  to: 702371,
    breakdownBy: [
      QueryParamBreakdownBy.DeviceType,
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
| `request`                                                                                                                                                                      | [operations.GetCreatorViewershipMetricsRequest](../../models/operations/getcreatorviewershipmetricsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCreatorViewershipMetricsResponse](../../models/operations/getcreatorviewershipmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPublicViewership

Allows querying for the public metrics for viewership about a video.
This can be called from the frontend with a CORS key, or even
unauthenticated.


### Example Usage

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const playbackId = "<value>";
  
  const result = await livepeer.metrics.getPublicViewership(playbackId);

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

**Promise<[operations.GetPublicViewershipMetricsResponse](../../models/operations/getpublicviewershipmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUsage

Query usage metrics

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetUsageMetricsQueryParamTimeStep } from "livepeer/models/operations";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const from = 224089;
  const to = 231125;
  const timeStep = GetUsageMetricsQueryParamTimeStep.Day;
  const creatorId = "<value>";
  
  const result = await livepeer.metrics.getUsage(from, to, timeStep, creatorId);

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
| `timeStep`                                                                                                                                                                     | [operations.GetUsageMetricsQueryParamTimeStep](../../models/operations/getusagemetricsqueryparamtimestep.md)                                                                   | :heavy_minus_sign:                                                                                                                                                             | The time step to aggregate viewership metrics by<br/>                                                                                                                          |
| `creatorId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The creator ID to filter the query results<br/>                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetUsageMetricsResponse](../../models/operations/getusagemetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
