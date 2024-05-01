# Request


## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `url`                               | *string*                            | :heavy_minus_sign:                  | URL used for the request            | https://my-service.com/webhook      |
| `method`                            | *string*                            | :heavy_minus_sign:                  | HTTP request method                 | POST                                |
| `headers`                           | Record<string, *string*>            | :heavy_minus_sign:                  | HTTP request headers                | {<br/>"User-Agent": "livepeer.studio"<br/>} |
| `body`                              | *string*                            | :heavy_minus_sign:                  | request body                        | {"event": "stream.started"}         |