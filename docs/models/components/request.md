# Request

## Example Usage

```typescript
import { Request } from "livepeer/models/components";

let value: Request = {
  url: "https://my-service.com/webhook",
  method: "POST",
  headers: {
    "User-Agent": "livepeer.studio",
  },
  body: "{\"event\": \"stream.started\"}",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `url`                               | *string*                            | :heavy_minus_sign:                  | URL used for the request            | https://my-service.com/webhook      |
| `method`                            | *string*                            | :heavy_minus_sign:                  | HTTP request method                 | POST                                |
| `headers`                           | Record<string, *string*>            | :heavy_minus_sign:                  | HTTP request headers                | {<br/>"User-Agent": "livepeer.studio"<br/>} |
| `body`                              | *string*                            | :heavy_minus_sign:                  | request body                        | {"event": "stream.started"}         |