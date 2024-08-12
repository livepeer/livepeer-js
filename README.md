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
import { SDKValidationError } from "livepeer/models/errors";

const livepeer = new Livepeer({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await livepeer.playback.get("<value>");
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
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
                Authorization: "Bearer 123",
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
                streamerId: "my-custom-id",
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
                Authorization: "Bearer 123",
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
                streamerId: "my-custom-id",
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
                Authorization: "Bearer 123",
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
                streamerId: "my-custom-id",
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

<!-- Start SDK Installation [installation] -->
## SDK Installation

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
                Authorization: "Bearer 123",
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
                streamerId: "my-custom-id",
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

### [multistream](docs/sdks/multistream/README.md)

* [getAll](docs/sdks/multistream/README.md#getall) - Retrieve Multistream Targets
* [create](docs/sdks/multistream/README.md#create) - Create a multistream target
* [get](docs/sdks/multistream/README.md#get) - Retrieve a multistream target
* [update](docs/sdks/multistream/README.md#update) - Update Multistream Target
* [delete](docs/sdks/multistream/README.md#delete) - Delete a multistream target

### [webhook](docs/sdks/webhook/README.md)

* [getAll](docs/sdks/webhook/README.md#getall) - Retrieve a Webhook
* [create](docs/sdks/webhook/README.md#create) - Create a webhook
* [get](docs/sdks/webhook/README.md#get) - Retrieve a webhook
* [update](docs/sdks/webhook/README.md#update) - Update a webhook
* [delete](docs/sdks/webhook/README.md#delete) - Delete a webhook
* [getLogs](docs/sdks/webhook/README.md#getlogs) - Retrieve webhook logs
* [getLog](docs/sdks/webhook/README.md#getlog) - Retrieve a webhook log
* [resendLog](docs/sdks/webhook/README.md#resendlog) - Resend a webhook

### [asset](docs/sdks/asset/README.md)

* [getAll](docs/sdks/asset/README.md#getall) - Retrieve assets
* [create](docs/sdks/asset/README.md#create) - Upload an asset
* [createViaUrl](docs/sdks/asset/README.md#createviaurl) - Upload asset via URL
* [get](docs/sdks/asset/README.md#get) - Retrieves an asset
* [update](docs/sdks/asset/README.md#update) - Patch an asset
* [delete](docs/sdks/asset/README.md#delete) - Delete an asset

### [session](docs/sdks/session/README.md)

* [getClips](docs/sdks/session/README.md#getclips) - Retrieve clips of a session
* [getAll](docs/sdks/session/README.md#getall) - Retrieve sessions
* [get](docs/sdks/session/README.md#get) - Retrieve a session
* [getRecorded](docs/sdks/session/README.md#getrecorded) - Retrieve Recorded Sessions

### [room](docs/sdks/room/README.md)

* [~~create~~](docs/sdks/room/README.md#create) - Create a room :warning: **Deprecated**
* [~~get~~](docs/sdks/room/README.md#get) - Retrieve a room :warning: **Deprecated**
* [~~delete~~](docs/sdks/room/README.md#delete) - Delete a room :warning: **Deprecated**
* [~~startEgress~~](docs/sdks/room/README.md#startegress) - Start room RTMP egress :warning: **Deprecated**
* [~~stopEgress~~](docs/sdks/room/README.md#stopegress) - Stop room RTMP egress :warning: **Deprecated**
* [~~createUser~~](docs/sdks/room/README.md#createuser) - Create a room user :warning: **Deprecated**
* [~~getUser~~](docs/sdks/room/README.md#getuser) - Get user details :warning: **Deprecated**
* [~~updateUser~~](docs/sdks/room/README.md#updateuser) - Update a room user :warning: **Deprecated**
* [~~deleteUser~~](docs/sdks/room/README.md#deleteuser) - Remove a user from the room :warning: **Deprecated**

### [metrics](docs/sdks/metrics/README.md)

* [getRealtimeViewership](docs/sdks/metrics/README.md#getrealtimeviewership) - Query realtime viewership
* [getViewership](docs/sdks/metrics/README.md#getviewership) - Query viewership metrics
* [getCreatorViewership](docs/sdks/metrics/README.md#getcreatorviewership) - Query creator viewership metrics
* [getPublicViewership](docs/sdks/metrics/README.md#getpublicviewership) - Query public total views metrics
* [getUsage](docs/sdks/metrics/README.md#getusage) - Query usage metrics

### [accessControl](docs/sdks/accesscontrol/README.md)

* [create](docs/sdks/accesscontrol/README.md#create) - Create a signing key
* [getAll](docs/sdks/accesscontrol/README.md#getall) - Retrieves signing keys
* [delete](docs/sdks/accesscontrol/README.md#delete) - Delete Signing Key
* [get](docs/sdks/accesscontrol/README.md#get) - Retrieves a signing key
* [update](docs/sdks/accesscontrol/README.md#update) - Update a signing key

### [task](docs/sdks/task/README.md)

* [getAll](docs/sdks/task/README.md#getall) - Retrieve Tasks
* [get](docs/sdks/task/README.md#get) - Retrieve a Task

### [transcode](docs/sdks/transcode/README.md)

* [create](docs/sdks/transcode/README.md#create) - Transcode a video

### [playback](docs/sdks/playback/README.md)

* [get](docs/sdks/playback/README.md#get) - Retrieve Playback Info
<!-- End Available Resources and Operations [operations] -->

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
    const result = await livepeer.stream.create(
        {
            name: "test_stream",
            pull: {
                source: "https://myservice.com/live/stream.flv",
                headers: {
                    Authorization: "Bearer 123",
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
                    streamerId: "my-custom-id",
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
        },
        {
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
        }
    );

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
                Authorization: "Bearer 123",
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
                streamerId: "my-custom-id",
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

To log HTTP requests and responses, you can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Livepeer } from "livepeer";

const sdk = new Livepeer({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


