# Livepeer JavaScript Library

[![Version](https://img.shields.io/npm/v/livepeer.svg)](https://www.npmjs.org/package/livepeer)
[![Downloads](https://img.shields.io/npm/dm/livepeer.svg)](https://www.npmjs.com/package/livepeer)
[![Try on RunKit](https://badge.runkitcdn.com/livepeer.svg)](https://runkit.com/npm/livepeer)

The Livepeer JavaScript library provides convenient access to the Livepeer Studio API from
applications written in both browser and server-side JavaScript

## Documentation

For full documentation and examples, please visit [docs.livepeer.org](https://docs.livepeer.org/sdks/javascript/).

## Installation

Install the package with:

```sh
npm install livepeer
# or
yarn add livepeer
```

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

## SDK Example Usage

```ts
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.stream.create({
    name: "test_stream",
  });

  console.log(result);
}

run();
```

## Available Resources and Operations

### [stream](docs/sdks/stream/README.md)

- [create](docs/sdks/stream/README.md#create) - Create a stream
- [getAll](docs/sdks/stream/README.md#getall) - Retrieve streams
- [get](docs/sdks/stream/README.md#get) - Retrieve a stream
- [update](docs/sdks/stream/README.md#update) - Update a stream
- [delete](docs/sdks/stream/README.md#delete) - Delete a stream
- [terminate](docs/sdks/stream/README.md#terminate) - Terminates a live stream
- [startPull](docs/sdks/stream/README.md#startpull) - Start ingest for a pull stream
- [createClip](docs/sdks/stream/README.md#createclip) - Create a clip
- [getClips](docs/sdks/stream/README.md#getclips) - Retrieve clips of a livestream
- [addMultistreamTarget](docs/sdks/stream/README.md#addmultistreamtarget) - Add a multistream target
- [removeMultistreamTarget](docs/sdks/stream/README.md#removemultistreamtarget) - Remove a multistream target

### [multistream](docs/sdks/multistream/README.md)

- [getAll](docs/sdks/multistream/README.md#getall) - Retrieve Multistream Targets
- [create](docs/sdks/multistream/README.md#create) - Create a multistream target
- [get](docs/sdks/multistream/README.md#get) - Retrieve a multistream target
- [update](docs/sdks/multistream/README.md#update) - Update Multistream Target
- [delete](docs/sdks/multistream/README.md#delete) - Delete a multistream target

### [webhook](docs/sdks/webhook/README.md)

- [getAll](docs/sdks/webhook/README.md#getall) - Retrieve a Webhook
- [create](docs/sdks/webhook/README.md#create) - Create a webhook
- [get](docs/sdks/webhook/README.md#get) - Retrieve a webhook
- [update](docs/sdks/webhook/README.md#update) - Update a webhook
- [delete](docs/sdks/webhook/README.md#delete) - Delete a webhook
- [getLogs](docs/sdks/webhook/README.md#getlogs) - Retrieve webhook logs
- [getLog](docs/sdks/webhook/README.md#getlog) - Retrieve a webhook log
- [resendLog](docs/sdks/webhook/README.md#resendlog) - Resend a webhook

### [asset](docs/sdks/asset/README.md)

- [getAll](docs/sdks/asset/README.md#getall) - Retrieve assets
- [create](docs/sdks/asset/README.md#create) - Upload an asset
- [createViaUrl](docs/sdks/asset/README.md#createviaurl) - Upload asset via URL
- [get](docs/sdks/asset/README.md#get) - Retrieves an asset
- [update](docs/sdks/asset/README.md#update) - Patch an asset
- [delete](docs/sdks/asset/README.md#delete) - Delete an asset

### [session](docs/sdks/session/README.md)

- [getClips](docs/sdks/session/README.md#getclips) - Retrieve clips of a session
- [getAll](docs/sdks/session/README.md#getall) - Retrieve sessions
- [get](docs/sdks/session/README.md#get) - Retrieve a session
- [getRecorded](docs/sdks/session/README.md#getrecorded) - Retrieve Recorded Sessions

### [metrics](docs/sdks/metrics/README.md)

- [getViewership](docs/sdks/metrics/README.md#getviewership) - Query viewership metrics
- [getCreatorViewership](docs/sdks/metrics/README.md#getcreatorviewership) - Query creator viewership metrics
- [getPublicViewership](docs/sdks/metrics/README.md#getpublicviewership) - Query public total views metrics
- [getUsage](docs/sdks/metrics/README.md#getusage) - Query usage metrics

### [accessControl](docs/sdks/accesscontrol/README.md)

- [create](docs/sdks/accesscontrol/README.md#create) - Create a signing key
- [getAll](docs/sdks/accesscontrol/README.md#getall) - Retrieves signing keys
- [delete](docs/sdks/accesscontrol/README.md#delete) - Delete Signing Key
- [get](docs/sdks/accesscontrol/README.md#get) - Retrieves a signing key
- [update](docs/sdks/accesscontrol/README.md#update) - Update a signing key

### [task](docs/sdks/task/README.md)

- [getAll](docs/sdks/task/README.md#getall) - Retrieve Tasks
- [get](docs/sdks/task/README.md#get) - Retrieve a Task

### [transcode](docs/sdks/transcode/README.md)

- [create](docs/sdks/transcode/README.md#create) - Transcode a video

### [playback](docs/sdks/playback/README.md)

- [get](docs/sdks/playback/README.md#get) - Retrieve Playback Info
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->

## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code | Content Type     |
| --------------- | ----------- | ---------------- |
| errors.ErrorT   | 404         | application/json |
| errors.SDKError | 4xx-5xx     | _/_              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.

```typescript
import { Livepeer } from "livepeer";
import * as errors from "livepeer/models/errors";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const id = "<value>";

  let result;
  try {
    result = await livepeer.playback.get(id);
  } catch (err) {
    switch (true) {
      case err instanceof errors.SDKValidationError: {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case err instanceof errors.ErrorT: {
        console.error(err); // handle exception
        return;
      }
      default: {
        throw err;
      }
    }
  }

  // Handle the result
  console.log(result);
}

run();
```

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Livepeer } from "livepeer";
import { HTTPClient } from "livepeer/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Livepeer({ httpClient });
```

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      |
| -------- | ---- | ----------- |
| `apiKey` | http | HTTP Bearer |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance.

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
