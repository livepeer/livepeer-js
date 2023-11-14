# Task
(*task*)

### Available Operations

* [getAll](#getall) - Retrieve Tasks
* [get](#get) - Retrieve a Task

## getAll

Retrieve Tasks

### Example Usage

```typescript
import { Livepeer } from "livepeer";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });

  const res = await sdk.task.getAll();

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

**Promise<[operations.GetTasksResponse](../../models/operations/gettasksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Retrieve a Task

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { GetTaskRequest } from "livepeer/dist/models/operations";

(async() => {
  const sdk = new Livepeer({
    apiKey: "",
  });
const taskId: string = "string";

  const res = await sdk.task.get(taskId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `taskId`                                                     | *string*                                                     | :heavy_check_mark:                                           | ID of the task                                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTaskResponse](../../models/operations/gettaskresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
