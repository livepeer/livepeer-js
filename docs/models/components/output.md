# Output

Output of the task

## Example Usage

```typescript
import {
  AssetPhase,
  AssetSchemasSourceType,
  AssetSchemasVideoSpecType,
  AssetType,
  CreatorIdType,
  Output,
  Phase,
  TranscodeProfileEncoder,
  TranscodeProfileProfile,
  Type,
} from "livepeer/models/components";

let value: Output = {
  upload: {
    assetSpec: {
      id: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
      type: AssetType.Video,
      playbackId: "eaw4nk06ts2d0mzb",
      playbackUrl:
        "https://livepeercdn.com/asset/ea03f37e-f861-4cdd-b495-0e60b6d753ad/index.m3u8",
      downloadUrl:
        "https://livepeercdn.com/asset/eaw4nk06ts2d0mzb/video/download.mp4",
      playbackPolicy: {
        type: Type.Webhook,
        webhookId: "1bde4o2i6xycudoy",
        webhookContext: {
          "streamerId": "my-custom-id",
        },
        refreshInterval: 600,
      },
      source: {
        type: AssetSchemasSourceType.Recording,
        sessionId: "<id>",
      },
      creatorId: {
        type: CreatorIdType.Unverified,
        value: "user123",
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
      status: {
        phase: AssetPhase.Uploading,
        updatedAt: 1587667174725,
      },
      name: "filename.mp4",
      projectId: "aac12556-4d65-4d34-9fb6-d1f0985eb0a9",
      createdAt: 1587667174725,
      size: 84934509,
      hash: [
        {
          hash:
            "9b560b28b85378a5004117539196ab24e21bbd75b0e9eb1a8bc7c5fd80dc5b57",
          algorithm: "sha256",
        },
      ],
      videoSpec: {
        format: "mp4",
        duration: 23.8328,
        bitrate: 1000000,
        tracks: [
          {
            type: AssetSchemasVideoSpecType.Video,
            codec: "aac",
            startTime: 23.8238,
            duration: 23.8238,
            bitrate: 1000000,
            width: 1920,
            height: 1080,
            pixelFormat: "yuv420p",
            fps: 30,
            channels: 2,
            sampleRate: 44100,
            bitDepth: 16,
          },
        ],
      },
    },
  },
  export: {
    ipfs: {
      videoFileCid: "Qmabc123xyz341",
      videoFileUrl: "ipfs://Qmabc123xyz341",
      videoFileGatewayUrl: "https://gateway.ipfs.io/ipfs/Qmabc123xyz341",
      nftMetadataCid: "Qmabc123xyz341",
      nftMetadataUrl: "ipfs://Qmabc123xyz341",
      nftMetadataGatewayUrl: "https://gateway.ipfs.io/ipfs/Qmabc123xyz341",
    },
  },
  exportData: {
    ipfs: {
      cid: "Qmabc123xyz341",
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `upload`                                                       | [components.TaskUpload](../../models/components/taskupload.md) | :heavy_minus_sign:                                             | Output of the upload task                                      |
| `export`                                                       | [components.Export](../../models/components/export.md)         | :heavy_minus_sign:                                             | Output of the export task                                      |
| `exportData`                                                   | [components.ExportData](../../models/components/exportdata.md) | :heavy_minus_sign:                                             | Output of the export data task                                 |