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

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Livepeer } from "livepeer";
import { ErrorT, SDKValidationError } from "livepeer/models/errors";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  let result;
  try {
    result = await livepeer.playback.get("<id>");

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorT): {
        // Handle err.data$: ErrorTData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://livepeer.studio/api` | None |

```typescript
import { Livepeer } from "livepeer";
import {
  Profile,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

const livepeer = new Livepeer({
  serverIdx: 0,
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.stream.create({
    name: "test_stream",
    pull: {
      source: "https://myservice.com/live/stream.flv",
      headers: {
        "Authorization": "Bearer 123",
      },
      location: {
        lat: 39.739,
        lon: -104.988,
      },
    },
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 3000000,
        fps: 30,
        fpsDen: 1,
        quality: 23,
        gop: "2",
        profile: Profile.H264Baseline,
      },
    ],
    record: false,
    recordingSpec: {
      profiles: [
        {
          width: 1280,
          name: "720p",
          height: 720,
          bitrate: 3000000,
          quality: 23,
          fps: 30,
          fpsDen: 1,
          gop: "2",
          profile: TranscodeProfileProfile.H264Baseline,
          encoder: TranscodeProfileEncoder.H264,
        },
      ],
    },
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
          spec: {
            name: "My target",
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Livepeer } from "livepeer";
import {
  Profile,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

const livepeer = new Livepeer({
  serverURL: "https://livepeer.studio/api",
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.stream.create({
    name: "test_stream",
    pull: {
      source: "https://myservice.com/live/stream.flv",
      headers: {
        "Authorization": "Bearer 123",
      },
      location: {
        lat: 39.739,
        lon: -104.988,
      },
    },
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 3000000,
        fps: 30,
        fpsDen: 1,
        quality: 23,
        gop: "2",
        profile: Profile.H264Baseline,
      },
    ],
    record: false,
    recordingSpec: {
      profiles: [
        {
          width: 1280,
          name: "720p",
          height: 720,
          bitrate: 3000000,
          quality: 23,
          fps: 30,
          fpsDen: 1,
          gop: "2",
          profile: TranscodeProfileProfile.H264Baseline,
          encoder: TranscodeProfileEncoder.H264,
        },
      ],
    },
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
          spec: {
            name: "My target",
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
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
    signal: request.signal || AbortSignal.timeout(5000)
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
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `apiKey`    | http        | HTTP Bearer |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Livepeer } from "livepeer";
import {
  Profile,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.stream.create({
    name: "test_stream",
    pull: {
      source: "https://myservice.com/live/stream.flv",
      headers: {
        "Authorization": "Bearer 123",
      },
      location: {
        lat: 39.739,
        lon: -104.988,
      },
    },
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 3000000,
        fps: 30,
        fpsDen: 1,
        quality: 23,
        gop: "2",
        profile: Profile.H264Baseline,
      },
    ],
    record: false,
    recordingSpec: {
      profiles: [
        {
          width: 1280,
          name: "720p",
          height: 720,
          bitrate: 3000000,
          quality: 23,
          fps: 30,
          fpsDen: 1,
          gop: "2",
          profile: TranscodeProfileProfile.H264Baseline,
          encoder: TranscodeProfileEncoder.H264,
        },
      ],
    },
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
          spec: {
            name: "My target",
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Summary [summary] -->
## Summary

Livepeer API Reference: Welcome to the Livepeer API reference docs. Here you will find all the
endpoints exposed on the standard Livepeer API, learn how to use them and
what they return.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add livepeer
```

### PNPM

```bash
pnpm add livepeer
```

### Bun

```bash
bun add livepeer
```

### Yarn

```bash
yarn add livepeer zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Livepeer } from "livepeer";
import {
  Profile,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.stream.create({
    name: "test_stream",
    pull: {
      source: "https://myservice.com/live/stream.flv",
      headers: {
        "Authorization": "Bearer 123",
      },
      location: {
        lat: 39.739,
        lon: -104.988,
      },
    },
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 3000000,
        fps: 30,
        fpsDen: 1,
        quality: 23,
        gop: "2",
        profile: Profile.H264Baseline,
      },
    ],
    record: false,
    recordingSpec: {
      profiles: [
        {
          width: 1280,
          name: "720p",
          height: 720,
          bitrate: 3000000,
          quality: 23,
          fps: 30,
          fpsDen: 1,
          gop: "2",
          profile: TranscodeProfileProfile.H264Baseline,
          encoder: TranscodeProfileEncoder.H264,
        },
      ],
    },
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
          spec: {
            name: "My target",
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accessControl](docs/sdks/accesscontrol/README.md)

* [create](docs/sdks/accesscontrol/README.md#create) - Create a signing key
* [getAll](docs/sdks/accesscontrol/README.md#getall) - Retrieves signing keys
* [delete](docs/sdks/accesscontrol/README.md#delete) - Delete Signing Key
* [get](docs/sdks/accesscontrol/README.md#get) - Retrieves a signing key
* [update](docs/sdks/accesscontrol/README.md#update) - Update a signing key

### [asset](docs/sdks/asset/README.md)

* [getAll](docs/sdks/asset/README.md#getall) - Retrieve assets
* [create](docs/sdks/asset/README.md#create) - Upload an asset
* [createViaUrl](docs/sdks/asset/README.md#createviaurl) - Upload asset via URL
* [get](docs/sdks/asset/README.md#get) - Retrieves an asset
* [update](docs/sdks/asset/README.md#update) - Patch an asset
* [delete](docs/sdks/asset/README.md#delete) - Delete an asset


### [metrics](docs/sdks/metrics/README.md)

* [getRealtimeViewership](docs/sdks/metrics/README.md#getrealtimeviewership) - Query realtime viewership
* [getViewership](docs/sdks/metrics/README.md#getviewership) - Query viewership metrics
* [getCreatorViewership](docs/sdks/metrics/README.md#getcreatorviewership) - Query creator viewership metrics
* [getPublicViewership](docs/sdks/metrics/README.md#getpublicviewership) - Query public total views metrics
* [getUsage](docs/sdks/metrics/README.md#getusage) - Query usage metrics

### [multistream](docs/sdks/multistream/README.md)

* [getAll](docs/sdks/multistream/README.md#getall) - Retrieve Multistream Targets
* [create](docs/sdks/multistream/README.md#create) - Create a multistream target
* [get](docs/sdks/multistream/README.md#get) - Retrieve a multistream target
* [update](docs/sdks/multistream/README.md#update) - Update Multistream Target
* [delete](docs/sdks/multistream/README.md#delete) - Delete a multistream target

### [playback](docs/sdks/playback/README.md)

* [get](docs/sdks/playback/README.md#get) - Retrieve Playback Info

### [~~room~~](docs/sdks/room/README.md)

* [~~create~~](docs/sdks/room/README.md#create) - Create a room :warning: **Deprecated**
* [~~get~~](docs/sdks/room/README.md#get) - Retrieve a room :warning: **Deprecated**
* [~~delete~~](docs/sdks/room/README.md#delete) - Delete a room :warning: **Deprecated**
* [~~startEgress~~](docs/sdks/room/README.md#startegress) - Start room RTMP egress :warning: **Deprecated**
* [~~stopEgress~~](docs/sdks/room/README.md#stopegress) - Stop room RTMP egress :warning: **Deprecated**
* [~~createUser~~](docs/sdks/room/README.md#createuser) - Create a room user :warning: **Deprecated**
* [~~getUser~~](docs/sdks/room/README.md#getuser) - Get user details :warning: **Deprecated**
* [~~updateUser~~](docs/sdks/room/README.md#updateuser) - Update a room user :warning: **Deprecated**
* [~~deleteUser~~](docs/sdks/room/README.md#deleteuser) - Remove a user from the room :warning: **Deprecated**

### [session](docs/sdks/session/README.md)

* [getClips](docs/sdks/session/README.md#getclips) - Retrieve clips of a session
* [getAll](docs/sdks/session/README.md#getall) - Retrieve sessions
* [get](docs/sdks/session/README.md#get) - Retrieve a session
* [getRecorded](docs/sdks/session/README.md#getrecorded) - Retrieve Recorded Sessions

### [stream](docs/sdks/stream/README.md)

* [create](docs/sdks/stream/README.md#create) - Create a stream
* [getAll](docs/sdks/stream/README.md#getall) - Retrieve streams
* [get](docs/sdks/stream/README.md#get) - Retrieve a stream
* [update](docs/sdks/stream/README.md#update) - Update a stream
* [delete](docs/sdks/stream/README.md#delete) - Delete a stream
* [terminate](docs/sdks/stream/README.md#terminate) - Terminates a live stream
* [startPull](docs/sdks/stream/README.md#startpull) - Start ingest for a pull stream
* [createClip](docs/sdks/stream/README.md#createclip) - Create a clip
* [getClips](docs/sdks/stream/README.md#getclips) - Retrieve clips of a livestream
* [addMultistreamTarget](docs/sdks/stream/README.md#addmultistreamtarget) - Add a multistream target
* [removeMultistreamTarget](docs/sdks/stream/README.md#removemultistreamtarget) - Remove a multistream target

### [task](docs/sdks/task/README.md)

* [getAll](docs/sdks/task/README.md#getall) - Retrieve Tasks
* [get](docs/sdks/task/README.md#get) - Retrieve a Task

### [transcode](docs/sdks/transcode/README.md)

* [create](docs/sdks/transcode/README.md#create) - Transcode a video

### [webhook](docs/sdks/webhook/README.md)

* [getAll](docs/sdks/webhook/README.md#getall) - Retrieve a Webhook
* [create](docs/sdks/webhook/README.md#create) - Create a webhook
* [get](docs/sdks/webhook/README.md#get) - Retrieve a webhook
* [update](docs/sdks/webhook/README.md#update) - Update a webhook
* [delete](docs/sdks/webhook/README.md#delete) - Delete a webhook
* [getLogs](docs/sdks/webhook/README.md#getlogs) - Retrieve webhook logs
* [getLog](docs/sdks/webhook/README.md#getlog) - Retrieve a webhook log
* [resendLog](docs/sdks/webhook/README.md#resendlog) - Resend a webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [accessControlCreate](docs/sdks/accesscontrol/README.md#create)
- [accessControlDelete](docs/sdks/accesscontrol/README.md#delete)
- [accessControlGetAll](docs/sdks/accesscontrol/README.md#getall)
- [accessControlGet](docs/sdks/accesscontrol/README.md#get)
- [accessControlUpdate](docs/sdks/accesscontrol/README.md#update)
- [assetCreateViaUrl](docs/sdks/asset/README.md#createviaurl)
- [assetCreate](docs/sdks/asset/README.md#create)
- [assetDelete](docs/sdks/asset/README.md#delete)
- [assetGetAll](docs/sdks/asset/README.md#getall)
- [assetGet](docs/sdks/asset/README.md#get)
- [assetUpdate](docs/sdks/asset/README.md#update)
- [metricsGetCreatorViewership](docs/sdks/metrics/README.md#getcreatorviewership)
- [metricsGetPublicViewership](docs/sdks/metrics/README.md#getpublicviewership)
- [metricsGetRealtimeViewership](docs/sdks/metrics/README.md#getrealtimeviewership)
- [metricsGetUsage](docs/sdks/metrics/README.md#getusage)
- [metricsGetViewership](docs/sdks/metrics/README.md#getviewership)
- [multistreamCreate](docs/sdks/multistream/README.md#create)
- [multistreamDelete](docs/sdks/multistream/README.md#delete)
- [multistreamGetAll](docs/sdks/multistream/README.md#getall)
- [multistreamGet](docs/sdks/multistream/README.md#get)
- [multistreamUpdate](docs/sdks/multistream/README.md#update)
- [playbackGet](docs/sdks/playback/README.md#get)
- [roomCreateUser](docs/sdks/room/README.md#createuser)
- [roomCreate](docs/sdks/room/README.md#create)
- [roomDeleteUser](docs/sdks/room/README.md#deleteuser)
- [roomDelete](docs/sdks/room/README.md#delete)
- [roomGetUser](docs/sdks/room/README.md#getuser)
- [roomGet](docs/sdks/room/README.md#get)
- [roomStartEgress](docs/sdks/room/README.md#startegress)
- [roomStopEgress](docs/sdks/room/README.md#stopegress)
- [roomUpdateUser](docs/sdks/room/README.md#updateuser)
- [sessionGetAll](docs/sdks/session/README.md#getall)
- [sessionGetClips](docs/sdks/session/README.md#getclips)
- [sessionGetRecorded](docs/sdks/session/README.md#getrecorded)
- [sessionGet](docs/sdks/session/README.md#get)
- [streamAddMultistreamTarget](docs/sdks/stream/README.md#addmultistreamtarget)
- [streamCreateClip](docs/sdks/stream/README.md#createclip)
- [streamCreate](docs/sdks/stream/README.md#create)
- [streamDelete](docs/sdks/stream/README.md#delete)
- [streamGetAll](docs/sdks/stream/README.md#getall)
- [streamGetClips](docs/sdks/stream/README.md#getclips)
- [streamGet](docs/sdks/stream/README.md#get)
- [streamRemoveMultistreamTarget](docs/sdks/stream/README.md#removemultistreamtarget)
- [streamStartPull](docs/sdks/stream/README.md#startpull)
- [streamTerminate](docs/sdks/stream/README.md#terminate)
- [streamUpdate](docs/sdks/stream/README.md#update)
- [taskGetAll](docs/sdks/task/README.md#getall)
- [taskGet](docs/sdks/task/README.md#get)
- [transcodeCreate](docs/sdks/transcode/README.md#create)
- [webhookCreate](docs/sdks/webhook/README.md#create)
- [webhookDelete](docs/sdks/webhook/README.md#delete)
- [webhookGetAll](docs/sdks/webhook/README.md#getall)
- [webhookGetLog](docs/sdks/webhook/README.md#getlog)
- [webhookGetLogs](docs/sdks/webhook/README.md#getlogs)
- [webhookGet](docs/sdks/webhook/README.md#get)
- [webhookResendLog](docs/sdks/webhook/README.md#resendlog)
- [webhookUpdate](docs/sdks/webhook/README.md#update)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Livepeer } from "livepeer";
import {
  Profile,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

const livepeer = new Livepeer({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.stream.create({
    name: "test_stream",
    pull: {
      source: "https://myservice.com/live/stream.flv",
      headers: {
        "Authorization": "Bearer 123",
      },
      location: {
        lat: 39.739,
        lon: -104.988,
      },
    },
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 3000000,
        fps: 30,
        fpsDen: 1,
        quality: 23,
        gop: "2",
        profile: Profile.H264Baseline,
      },
    ],
    record: false,
    recordingSpec: {
      profiles: [
        {
          width: 1280,
          name: "720p",
          height: 720,
          bitrate: 3000000,
          quality: 23,
          fps: 30,
          fpsDen: 1,
          gop: "2",
          profile: TranscodeProfileProfile.H264Baseline,
          encoder: TranscodeProfileEncoder.H264,
        },
      ],
    },
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
          spec: {
            name: "My target",
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Livepeer } from "livepeer";
import {
  Profile,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

const livepeer = new Livepeer({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await livepeer.stream.create({
    name: "test_stream",
    pull: {
      source: "https://myservice.com/live/stream.flv",
      headers: {
        "Authorization": "Bearer 123",
      },
      location: {
        lat: 39.739,
        lon: -104.988,
      },
    },
    playbackPolicy: {
      type: Type.Webhook,
      webhookId: "1bde4o2i6xycudoy",
      webhookContext: {
        "streamerId": "my-custom-id",
      },
      refreshInterval: 600,
    },
    profiles: [
      {
        width: 1280,
        name: "720p",
        height: 720,
        bitrate: 3000000,
        fps: 30,
        fpsDen: 1,
        quality: 23,
        gop: "2",
        profile: Profile.H264Baseline,
      },
    ],
    record: false,
    recordingSpec: {
      profiles: [
        {
          width: 1280,
          name: "720p",
          height: 720,
          bitrate: 3000000,
          quality: 23,
          fps: 30,
          fpsDen: 1,
          gop: "2",
          profile: TranscodeProfileProfile.H264Baseline,
          encoder: TranscodeProfileEncoder.H264,
        },
      ],
    },
    multistream: {
      targets: [
        {
          profile: "720p",
          videoOnly: false,
          id: "PUSH123",
          spec: {
            name: "My target",
            url: "rtmps://live.my-service.tv/channel/secretKey",
          },
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Livepeer } from "livepeer";

const sdk = new Livepeer({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


