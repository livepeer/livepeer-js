# Generate
(*generate*)

## Overview

Operations related to AI generate api

### Available Operations

* [textToImage](#texttoimage) - Text To Image
* [imageToImage](#imagetoimage) - Image To Image
* [imageToVideo](#imagetovideo) - Image To Video
* [upscale](#upscale) - Upscale
* [audioToText](#audiototext) - Audio To Text
* [segmentAnything2](#segmentanything2) - Segment Anything 2
* [llm](#llm) - LLM

## textToImage

Generate images from text prompts.

### Example Usage

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.textToImage({
    prompt: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "livepeer/core.js";
import { generateTextToImage } from "livepeer/funcs/generateTextToImage.js";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateTextToImage(livepeer, {
    prompt: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.TextToImageParams](../../models/components/texttoimageparams.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenTextToImageResponse](../../models/operations/gentexttoimageresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400                        | application/json           |
| errors.StudioApiError      | 400                        | application/json           |
| errors.HTTPError           | 401                        | application/json           |
| errors.StudioApiError      | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.StudioApiError      | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.StudioApiError      | 500                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## imageToImage

Apply image transformations to a provided image.

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.imageToImage({
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "livepeer/core.js";
import { generateImageToImage } from "livepeer/funcs/generateImageToImage.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToImage(livepeer, {
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenImageToImage](../../models/components/bodygenimagetoimage.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenImageToImageResponse](../../models/operations/genimagetoimageresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400                        | application/json           |
| errors.StudioApiError      | 400                        | application/json           |
| errors.HTTPError           | 401                        | application/json           |
| errors.StudioApiError      | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.StudioApiError      | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.StudioApiError      | 500                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## imageToVideo

Generate a video from a provided image.

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.imageToVideo({
    image: await openAsBlob("example.file"),
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "livepeer/core.js";
import { generateImageToVideo } from "livepeer/funcs/generateImageToVideo.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateImageToVideo(livepeer, {
    image: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenImageToVideo](../../models/components/bodygenimagetovideo.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenImageToVideoResponse](../../models/operations/genimagetovideoresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400                        | application/json           |
| errors.StudioApiError      | 400                        | application/json           |
| errors.HTTPError           | 401                        | application/json           |
| errors.StudioApiError      | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.StudioApiError      | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.StudioApiError      | 500                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## upscale

Upscale an image by increasing its resolution.

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.upscale({
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "livepeer/core.js";
import { generateUpscale } from "livepeer/funcs/generateUpscale.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateUpscale(livepeer, {
    image: await openAsBlob("example.file"),
    prompt: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenUpscale](../../models/components/bodygenupscale.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenUpscaleResponse](../../models/operations/genupscaleresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400                        | application/json           |
| errors.StudioApiError      | 400                        | application/json           |
| errors.HTTPError           | 401                        | application/json           |
| errors.StudioApiError      | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.StudioApiError      | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.StudioApiError      | 500                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## audioToText

Transcribe audio files to text.

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.audioToText({
    audio: await openAsBlob("example.file"),
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "livepeer/core.js";
import { generateAudioToText } from "livepeer/funcs/generateAudioToText.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateAudioToText(livepeer, {
    audio: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenAudioToText](../../models/components/bodygenaudiototext.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenAudioToTextResponse](../../models/operations/genaudiototextresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400                        | application/json           |
| errors.StudioApiError      | 400                        | application/json           |
| errors.HTTPError           | 401                        | application/json           |
| errors.StudioApiError      | 401                        | application/json           |
| errors.HTTPError           | 413                        | application/json           |
| errors.StudioApiError      | 413                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.StudioApiError      | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.StudioApiError      | 500                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## segmentAnything2

Segment objects in an image.

### Example Usage

```typescript
import { Livepeer } from "livepeer";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.segmentAnything2({
    image: await openAsBlob("example.file"),
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "livepeer/core.js";
import { generateSegmentAnything2 } from "livepeer/funcs/generateSegmentAnything2.js";
import { openAsBlob } from "node:fs";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateSegmentAnything2(livepeer, {
    image: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenSegmentAnything2](../../models/components/bodygensegmentanything2.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenSegmentAnything2Response](../../models/operations/gensegmentanything2response.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400                        | application/json           |
| errors.StudioApiError      | 400                        | application/json           |
| errors.HTTPError           | 401                        | application/json           |
| errors.StudioApiError      | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.StudioApiError      | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.StudioApiError      | 500                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## llm

Generate text using a language model.

### Example Usage

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.generate.llm({
    prompt: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LivepeerCore } from "livepeer/core.js";
import { generateLlm } from "livepeer/funcs/generateLlm.js";

// Use `LivepeerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const livepeer = new LivepeerCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await generateLlm(livepeer, {
    prompt: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyGenLLM](../../models/components/bodygenllm.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenLLMResponse](../../models/operations/genllmresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPError           | 400                        | application/json           |
| errors.StudioApiError      | 400                        | application/json           |
| errors.HTTPError           | 401                        | application/json           |
| errors.StudioApiError      | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.StudioApiError      | 422                        | application/json           |
| errors.HTTPError           | 500                        | application/json           |
| errors.StudioApiError      | 500                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
