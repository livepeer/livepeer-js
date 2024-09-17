# Params

Parameters of the task

## Example Usage

```typescript
import {
  CatalystPipelineStrategy,
  Params,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
} from "livepeer/models/components";

let value: Params = {
  upload: {
    url: "https://cdn.livepeer.com/ABC123/filename.mp4",
    c2pa: true,
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
    targetSegmentSizeSecs: 6,
  },
  export: {
    ipfs: {
      pinata: {},
    },
  },
  exportData: {
    content: {},
    ipfs: {
      pinata: {
        apiKey: "1234567890",
      },
    },
    type: "text/plain",
    id: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
  },
  transcodeFile: {
    input: {
      url: "https://cdn.livepeer.com/ABC123/filename.mp4",
    },
    storage: {
      url: "s3+https://accessKeyId:secretAccessKey@s3Endpoint/bucket",
    },
    outputs: {
      hls: {
        path: "/samplevideo/hls",
      },
      mp4: {
        path: "/samplevideo/mp4",
      },
    },
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
    targetSegmentSizeSecs: 10,
    c2pa: false,
  },
  clip: {
    url:
      "https://asset-cdn.lp-playback.monster/hls/1bde4o2i6xycudoy/static360p0.mp4",
    clipStrategy: {
      startTime: 1587667174725,
      endTime: 1587667174725,
      playbackId: "eaw4nk06ts2d0mzb",
    },
    catalystPipelineStrategy: CatalystPipelineStrategy.CatalystFfmpeg,
    sessionId: "d32ae9e6-c459-4931-9898-e86e2f5e7e16",
    inputId: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `upload`                                                               | [components.Upload](../../models/components/upload.md)                 | :heavy_minus_sign:                                                     | Parameters for the upload task                                         |
| `export`                                                               | *components.ExportTaskParams*                                          | :heavy_minus_sign:                                                     | Parameters for the export task                                         |
| `exportData`                                                           | [components.TaskExportData](../../models/components/taskexportdata.md) | :heavy_minus_sign:                                                     | Parameters for the export-data task                                    |
| `transcodeFile`                                                        | [components.TranscodeFile](../../models/components/transcodefile.md)   | :heavy_minus_sign:                                                     | Parameters for the transcode-file task                                 |
| `clip`                                                                 | [components.Clip](../../models/components/clip.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |