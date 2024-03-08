<!-- Start SDK Example Usage [usage] -->
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