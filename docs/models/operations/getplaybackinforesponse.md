# GetPlaybackInfoResponse

## Example Usage

```typescript
import {
  Hrn,
  Live,
  Name,
  Phase,
  PlaybackInfoHrn,
  PlaybackInfoSchemasMetaType,
  PlaybackInfoSchemasType,
  PlaybackInfoType,
  PrimaryType,
  SignatureType,
  Type,
  Version,
} from "livepeer/models/components";
import { GetPlaybackInfoResponse } from "livepeer/models/operations";

let value: GetPlaybackInfoResponse = {
  contentType: "<value>",
  statusCode: 201,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  playbackInfo: {
    type: PlaybackInfoType.Vod,
    meta: {
      live: Live.One,
      playbackPolicy: {
        type: Type.Webhook,
        webhookId: "1bde4o2i6xycudoy",
        webhookContext: {
          "streamerId": "my-custom-id",
        },
        refreshInterval: 600,
      },
      source: [
        {
          hrn: Hrn.Mp4,
          type: PlaybackInfoSchemasType.Html5VideoMp4,
          url:
            "https://asset-cdn.lp-playback.monster/hls/1bde4o2i6xycudoy/static360p0.mp4",
          size: 494778,
          width: 204,
          height: 360,
          bitrate: 449890,
        },
      ],
      dvrPlayback: [
        {
          hrn: PlaybackInfoHrn.HlsTs,
          type: PlaybackInfoSchemasMetaType.Html5ApplicationVndAppleMpegurl,
          url:
            "https://asset-cdn.lp-playback.monster/hls/1bde4o2i6xycudoy/static360p0.mp4",
        },
      ],
      attestation: {
        id: "5b9e63bb-6fd0-4bea-aff2-cc5d4eb9cad0",
        primaryType: PrimaryType.VideoAttestation,
        domain: {
          name: Name.VerifiableVideo,
          version: Version.One,
        },
        message: {
          video: "5b9e63bb-6fd0-4bea-aff2-cc5d4eb9cad0",
          attestations: [
            {
              role: "creator",
              address: "1311768467294899700",
            },
          ],
          signer: "1311768467294899700",
          timestamp: 1587667174725,
        },
        signature: "1311768467294899700",
        createdAt: 1587667174725,
        signatureType: SignatureType.Eip712,
        storage: {
          ipfs: {
            updatedAt: 1587667174725,
          },
          status: {
            phase: Phase.Ready,
            progress: 0.5,
            errorMessage: "Failed to update storage",
            tasks: {
              pending: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
              last: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
              failed: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
            },
          },
        },
      },
    },
  },
  error: {
    errors: [
      "[\"id not provided\",\"Account not found\"]",
    ],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `playbackInfo`                                                        | [components.PlaybackInfo](../../models/components/playbackinfo.md)    | :heavy_minus_sign:                                                    | Successful response                                                   |
| `error`                                                               | [components.ErrorT](../../models/components/errort.md)                | :heavy_minus_sign:                                                    | Playback not found                                                    |