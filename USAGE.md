<!-- Start SDK Example Usage [usage] -->
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