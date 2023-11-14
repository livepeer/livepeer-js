# Session
(*session*)

### Available Operations

* [getAll](#getall) - Retrieve sessions
* [get](#get) - Retrieve a session
* [getRecorded](#getrecorded) - Retrieve Recorded Sessions
* [getAllClips](#getallclips) - Retrieve clips of a session

## getAll

Retrieve sessions

### Example Usage

```typescript
import { Livepeer } from "livepeer";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.session.getAll();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetSessionsResponse](../../models/operations/getsessionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Retrieve a session

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetSessionRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const id: string = "string";

  const res = await sdk.session.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | ID of the session                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetSessionResponse](../../models/operations/getsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getRecorded

Retrieve Recorded Sessions

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetRecordedSessionsRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const parentId: string = "string";
const record: number = 1;

  const res = await sdk.session.getRecorded(parentId, record);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `parentId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | ID of the parent stream                                                |                                                                        |
| `record`                                                               | *number*                                                               | :heavy_minus_sign:                                                     | Flag indicating if the response should only include recorded<br/>sessions<br/> | 1                                                                      |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.GetRecordedSessionsResponse](../../models/operations/getrecordedsessionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAllClips

Retrieve clips of a session

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetSessionIdClipsRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const id: string = "string";

  const res = await sdk.session.getAllClips(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | ID of the parent session                                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetSessionIdClipsResponse](../../models/operations/getsessionidclipsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
