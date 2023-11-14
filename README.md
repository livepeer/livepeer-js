# Livepeer Node.js Library

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
