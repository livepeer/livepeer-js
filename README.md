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

## Usage

The package needs to be configured with your Livepeer Studio account's API key, which is
available in the [Studio Dashboard](httpss://livepeer.studio)

```js
import Livepeer from "livepeer";

const livepeer = new Livepeer({
  apiKey: "",
});

const streams = await livepeer.stream.getAll;

console.log(stream.length);
```

## Configuration

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Livepeer } from "livepeer";

const livepeer = new Livepeer({
  serverURL: "https://livepeer.studio/api",
  apiKey: "",
});

const res = await sdk.stream.getAll();

if (res.statusCode == 200) {
  // handle response
}
```

### Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library. In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { Livepeer } from "livepeer";
import axios from "axios";

const httpClient = axios.create({
  headers: { "x-custom-header": "someValue" },
});

const livepeer = new Livepeer({ defaultClient: httpClient });
```

## Available Resources and Operations

### [stream](docs/sdks/stream/README.md)

- [getAll](docs/sdks/stream/README.md#getall) - Retrieve streams
- [create](docs/sdks/stream/README.md#create) - Create a stream
- [delete](docs/sdks/stream/README.md#delete) - Delete a stream
- [get](docs/sdks/stream/README.md#get) - Retrieve a stream
- [update](docs/sdks/stream/README.md#update) - Update a stream
- [createClip](docs/sdks/stream/README.md#createclip) - Create a clip
- [getAllClips](docs/sdks/stream/README.md#getallclips) - Retrieve clips of a livestream

### [multistreamTarget](docs/sdks/multistreamtarget/README.md)

- [getAll](docs/sdks/multistreamtarget/README.md#getall) - Retrieve Multistream Targets
- [create](docs/sdks/multistreamtarget/README.md#create) - Create a multistream target
- [delete](docs/sdks/multistreamtarget/README.md#delete) - Delete a multistream target
- [get](docs/sdks/multistreamtarget/README.md#get) - Retrieve a multistream target
- [update](docs/sdks/multistreamtarget/README.md#update) - Update Multistream Target

### [webhook](docs/sdks/webhook/README.md)

- [getAll](docs/sdks/webhook/README.md#getall) - Retrieve a Webhook
- [create](docs/sdks/webhook/README.md#create) - Create a webhook
- [delete](docs/sdks/webhook/README.md#delete) - Delete a webhook
- [get](docs/sdks/webhook/README.md#get) - Retrieve a webhook
- [update](docs/sdks/webhook/README.md#update) - Update a webhook

### [asset](docs/sdks/asset/README.md)

- [getAll](docs/sdks/asset/README.md#getall) - Retrieve assets
- [create](docs/sdks/asset/README.md#create) - Upload an asset
- [createViaURL](docs/sdks/asset/README.md#createviaurl) - Upload asset via URL
- [delete](docs/sdks/asset/README.md#delete) - Delete an asset
- [get](docs/sdks/asset/README.md#get) - Retrieves an asset
- [update](docs/sdks/asset/README.md#update) - Update an asset

### [metrics](docs/sdks/metrics/README.md)

- [getViewership](docs/sdks/metrics/README.md#getviewership) - Query viewership metrics
- [getCreatorViewership](docs/sdks/metrics/README.md#getcreatorviewership) - Query creator viewership metrics
- [getPublicTotalViews](docs/sdks/metrics/README.md#getpublictotalviews) - Query public total views metrics
- [getUsage](docs/sdks/metrics/README.md#getusage) - Query usage metrics

### [session](docs/sdks/session/README.md)

- [getAll](docs/sdks/session/README.md#getall) - Retrieve sessions
- [get](docs/sdks/session/README.md#get) - Retrieve a session
- [getRecorded](docs/sdks/session/README.md#getrecorded) - Retrieve Recorded Sessions
- [getAllClips](docs/sdks/session/README.md#getallclips) - Retrieve clips of a session

### [accessControl](docs/sdks/accesscontrol/README.md)

- [getSigningKeys](docs/sdks/accesscontrol/README.md#getsigningkeys) - Retrieves signing keys
- [createSigningKey](docs/sdks/accesscontrol/README.md#createsigningkey) - Create a signing key
- [deleteSigningKey](docs/sdks/accesscontrol/README.md#deletesigningkey) - Delete Signing Key
- [getSigningKey](docs/sdks/accesscontrol/README.md#getsigningkey) - Retrieves a signing key
- [updateSigningKey](docs/sdks/accesscontrol/README.md#updatesigningkey) - Update a signing key

### [task](docs/sdks/task/README.md)

- [getAll](docs/sdks/task/README.md#getall) - Retrieve Tasks
- [get](docs/sdks/task/README.md#get) - Retrieve a Task

### [transcode](docs/sdks/transcode/README.md)

- [create](docs/sdks/transcode/README.md#create) - Transcode a video

### [playback](docs/sdks/playback/README.md)

- [get](docs/sdks/playback/README.md#get) - Retrieve Playback Info

<!-- No SDK Installation -->
<!-- No SDK Example Usage -->
<!-- No SDK Available Operations -->


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
import { InputCreatorIdType, Profile, Type } from "livepeer/models/components";

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
        creatorId: {
            type: InputCreatorIdType.Unverified,
            value: "<value>",
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
                height: 489382,
                bitrate: 3000000,
                fps: 30,
                fpsDen: 1,
                quality: 23,
                gop: "2",
                profile: Profile.H264Baseline,
            },
        ],
        record: false,
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
        userTags: {
            key: 8592.13,
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
import { InputCreatorIdType, Profile, Type } from "livepeer/models/components";

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
        creatorId: {
            type: InputCreatorIdType.Unverified,
            value: "<value>",
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
                height: 489382,
                bitrate: 3000000,
                fps: 30,
                fpsDen: 1,
                quality: 23,
                gop: "2",
                profile: Profile.H264Baseline,
            },
        ],
        record: false,
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
        userTags: {
            key: 8592.13,
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
import { InputCreatorIdType, Profile, Type } from "livepeer/models/components";

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
        creatorId: {
            type: InputCreatorIdType.Unverified,
            value: "<value>",
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
                height: 489382,
                bitrate: 3000000,
                fps: 30,
                fpsDen: 1,
                quality: 23,
                gop: "2",
                profile: Profile.H264Baseline,
            },
        ],
        record: false,
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
        userTags: {
            key: 8592.13,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


