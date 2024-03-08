# livepeer

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
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
import { CreatorIdType, Encoder, Profile, Type } from "livepeer/models/components";

async function run() {
    const sdk = new Livepeer({
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.stream.create({
        name: "test_stream",
        creatorId: {
            type: CreatorIdType.Unverified,
            value: "<value>",
        },
        playbackPolicy: {
            type: Type.Jwt,
            webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
            webhookContext: {
                foo: "bar",
            },
        },
        profiles: [
            {
                width: 1280,
                name: "720p",
                height: 720,
                bitrate: 3000,
                fps: 30,
                fpsDen: 1,
                gop: "60",
                profile: Profile.H264High,
                encoder: Encoder.H264,
            },
        ],
        record: false,
        multistream: {
            targets: [
                {
                    profile: "720p",
                    id: "PUSH123",
                    spec: {
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
* [createClip](docs/sdks/stream/README.md#createclip) - Create a clip
* [getAllClips](docs/sdks/stream/README.md#getallclips) - Retrieve clips of a livestream

### [multistreamTarget](docs/sdks/multistreamtarget/README.md)

* [getAll](docs/sdks/multistreamtarget/README.md#getall) - Retrieve Multistream Targets
* [create](docs/sdks/multistreamtarget/README.md#create) - Create a multistream target
* [get](docs/sdks/multistreamtarget/README.md#get) - Retrieve a multistream target
* [update](docs/sdks/multistreamtarget/README.md#update) - Update Multistream Target
* [delete](docs/sdks/multistreamtarget/README.md#delete) - Delete a multistream target

### [webhook](docs/sdks/webhook/README.md)

* [getAll](docs/sdks/webhook/README.md#getall) - Retrieve a Webhook
* [create](docs/sdks/webhook/README.md#create) - Create a webhook
* [get](docs/sdks/webhook/README.md#get) - Retrieve a webhook
* [update](docs/sdks/webhook/README.md#update) - Update a webhook
* [delete](docs/sdks/webhook/README.md#delete) - Delete a webhook

### [asset](docs/sdks/asset/README.md)

* [getAll](docs/sdks/asset/README.md#getall) - Retrieve assets
* [requestUpload](docs/sdks/asset/README.md#requestupload) - Upload an asset
* [uploadAssetViaURL](docs/sdks/asset/README.md#uploadassetviaurl) - Upload asset via URL
* [get](docs/sdks/asset/README.md#get) - Retrieves an asset
* [delete](docs/sdks/asset/README.md#delete) - Delete an asset
* [update](docs/sdks/asset/README.md#update) - Update an asset

### [metrics](docs/sdks/metrics/README.md)

* [getViewershipsMetrics](docs/sdks/metrics/README.md#getviewershipsmetrics) - Query viewership metrics
* [getCreatorMetrics](docs/sdks/metrics/README.md#getcreatormetrics) - Query creator viewership metrics
* [getPublicTotalViewsMetrics](docs/sdks/metrics/README.md#getpublictotalviewsmetrics) - Query public total views metrics
* [getUsageMetrics](docs/sdks/metrics/README.md#getusagemetrics) - Query usage metrics

### [session](docs/sdks/session/README.md)

* [getAll](docs/sdks/session/README.md#getall) - Retrieve sessions
* [get](docs/sdks/session/README.md#get) - Retrieve a session
* [getRecordedSessions](docs/sdks/session/README.md#getrecordedsessions) - Retrieve Recorded Sessions

### [accessControl](docs/sdks/accesscontrol/README.md)

* [createSigningKey](docs/sdks/accesscontrol/README.md#createsigningkey) - Create a signing key
* [getSigningKeys](docs/sdks/accesscontrol/README.md#getsigningkeys) - Retrieves signing keys
* [deleteSigningKey](docs/sdks/accesscontrol/README.md#deletesigningkey) - Delete Signing Key
* [getSigningKey](docs/sdks/accesscontrol/README.md#getsigningkey) - Retrieves a signing key
* [updateSigningKey](docs/sdks/accesscontrol/README.md#updatesigningkey) - Update a signing key

### [task](docs/sdks/task/README.md)

* [getAll](docs/sdks/task/README.md#getall) - Retrieve Tasks
* [get](docs/sdks/task/README.md#get) - Retrieve a Task

### [transcode](docs/sdks/transcode/README.md)

* [create](docs/sdks/transcode/README.md#create) - Transcode a video

### [playback](docs/sdks/playback/README.md)

* [get](docs/sdks/playback/README.md#get) - Retrieve Playback Info
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
import * as errors from "livepeer/models/errors";

async function run() {
    const sdk = new Livepeer({
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const id = "<value>";

    let result;
    try {
        result = await sdk.playback.get(id);
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
import { CreatorIdType, Encoder, Profile, Type } from "livepeer/models/components";

async function run() {
    const sdk = new Livepeer({
        serverIdx: 0,
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.stream.create({
        name: "test_stream",
        creatorId: {
            type: CreatorIdType.Unverified,
            value: "<value>",
        },
        playbackPolicy: {
            type: Type.Jwt,
            webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
            webhookContext: {
                foo: "bar",
            },
        },
        profiles: [
            {
                width: 1280,
                name: "720p",
                height: 720,
                bitrate: 3000,
                fps: 30,
                fpsDen: 1,
                gop: "60",
                profile: Profile.H264High,
                encoder: Encoder.H264,
            },
        ],
        record: false,
        multistream: {
            targets: [
                {
                    profile: "720p",
                    id: "PUSH123",
                    spec: {
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
import { CreatorIdType, Encoder, Profile, Type } from "livepeer/models/components";

async function run() {
    const sdk = new Livepeer({
        serverURL: "https://livepeer.studio/api",
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.stream.create({
        name: "test_stream",
        creatorId: {
            type: CreatorIdType.Unverified,
            value: "<value>",
        },
        playbackPolicy: {
            type: Type.Jwt,
            webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
            webhookContext: {
                foo: "bar",
            },
        },
        profiles: [
            {
                width: 1280,
                name: "720p",
                height: 720,
                bitrate: 3000,
                fps: 30,
                fpsDen: 1,
                gop: "60",
                profile: Profile.H264High,
                encoder: Encoder.H264,
            },
        ],
        record: false,
        multistream: {
            targets: [
                {
                    profile: "720p",
                    id: "PUSH123",
                    spec: {
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
import { CreatorIdType, Encoder, Profile, Type } from "livepeer/models/components";

async function run() {
    const sdk = new Livepeer({
        apiKey: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.stream.create({
        name: "test_stream",
        creatorId: {
            type: CreatorIdType.Unverified,
            value: "<value>",
        },
        playbackPolicy: {
            type: Type.Jwt,
            webhookId: "3e02c844-d364-4d48-b401-24b2773b5d6c",
            webhookContext: {
                foo: "bar",
            },
        },
        profiles: [
            {
                width: 1280,
                name: "720p",
                height: 720,
                bitrate: 3000,
                fps: 30,
                fpsDen: 1,
                gop: "60",
                profile: Profile.H264High,
                encoder: Encoder.H264,
            },
        ],
        record: false,
        multistream: {
            targets: [
                {
                    profile: "720p",
                    id: "PUSH123",
                    spec: {
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

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
