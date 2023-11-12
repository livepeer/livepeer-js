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
