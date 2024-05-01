# Playback
(*playback*)

## Overview

Operations related to playback api

### Available Operations

* [get](#get) - Retrieve Playback Info

## get

Retrieve Playback Info

### Example Usage

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const id = "<value>";
  
  const result = await livepeer.playback.get(id);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The playback ID from the asset or livestream, e.g. `eaw4nk06ts2d0mzb`.                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetPlaybackInfoResponse](../../models/operations/getplaybackinforesponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
