# Upload

Parameters for the upload task


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `url`                                                          | *string*                                                       | :heavy_minus_sign:                                             | URL of the asset to "upload"                                   | https://cdn.livepeer.com/ABC123/filename.mp4                   |
| `encryption`                                                   | [components.Encryption](../../models/components/encryption.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `c2pa`                                                         | *boolean*                                                      | :heavy_minus_sign:                                             | Decides if the output video should include C2PA signature      |                                                                |