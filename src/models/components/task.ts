/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { collectExtraKeys as collectExtraKeys$ } from "../../lib/schemas.js";
import { Asset, Asset$inboundSchema, Asset$Outbound, Asset$outboundSchema } from "./asset.js";
import {
    EncryptionOutput,
    EncryptionOutput$inboundSchema,
    EncryptionOutput$Outbound,
    EncryptionOutput$outboundSchema,
} from "./encryptionoutput.js";
import {
    ExportTaskParams,
    ExportTaskParams$inboundSchema,
    ExportTaskParams$Outbound,
    ExportTaskParams$outboundSchema,
} from "./exporttaskparams.js";
import {
    InputCreatorId,
    InputCreatorId$inboundSchema,
    InputCreatorId$Outbound,
    InputCreatorId$outboundSchema,
} from "./inputcreatorid.js";
import {
    IpfsExportParams,
    IpfsExportParams$inboundSchema,
    IpfsExportParams$Outbound,
    IpfsExportParams$outboundSchema,
} from "./ipfsexportparams.js";
import {
    TranscodeProfile,
    TranscodeProfile$inboundSchema,
    TranscodeProfile$Outbound,
    TranscodeProfile$outboundSchema,
} from "./transcodeprofile.js";
import * as z from "zod";

/**
 * Type of the task
 */
export enum TaskType {
    Upload = "upload",
    Export = "export",
    ExportData = "export-data",
    TranscodeFile = "transcode-file",
    Clip = "clip",
}

/**
 * Parameters for the upload task
 */
export type Upload = {
    /**
     * URL of the asset to "upload"
     */
    url?: string | undefined;
    encryption?: EncryptionOutput | undefined;
    /**
     * Decides if the output video should include C2PA signature
     */
    c2pa?: boolean | undefined;
    profiles?: Array<TranscodeProfile> | undefined;
    /**
     * How many seconds the duration of each output segment should be
     */
    targetSegmentSizeSecs?: number | undefined;
};

/**
 * File content to store into IPFS
 */
export type Content = {};

/**
 * Parameters for the export-data task
 */
export type TaskExportData = {
    /**
     * File content to store into IPFS
     */
    content: Content;
    ipfs?: IpfsExportParams | undefined;
    /**
     * Optional type of content
     */
    type?: string | undefined;
    /**
     * Optional ID of the content
     */
    id?: string | undefined;
};

/**
 * Input video file to transcode
 */
export type TaskInput = {
    /**
     * URL of a video to transcode, accepts object-store format
     *
     * @remarks
     * "s3+https"
     *
     */
    url?: string | undefined;
};

/**
 * Storage for the output files
 */
export type TaskStorage = {
    /**
     * URL of the output storage, accepts object-store format
     *
     * @remarks
     * "s3+https"
     *
     */
    url?: string | undefined;
};

/**
 * HLS output format
 */
export type TaskHls = {
    /**
     * Path for the HLS output
     */
    path?: string | undefined;
};

/**
 * MP4 output format
 */
export type TaskMp4 = {
    /**
     * Path for the MP4 output
     */
    path?: string | undefined;
};

/**
 * Output formats
 */
export type TaskOutputs = {
    /**
     * HLS output format
     */
    hls?: TaskHls | undefined;
    /**
     * MP4 output format
     */
    mp4?: TaskMp4 | undefined;
};

/**
 * Parameters for the transcode-file task
 */
export type TranscodeFile = {
    /**
     * Input video file to transcode
     */
    input?: TaskInput | undefined;
    /**
     * Storage for the output files
     */
    storage?: TaskStorage | undefined;
    /**
     * Output formats
     */
    outputs?: TaskOutputs | undefined;
    profiles?: Array<TranscodeProfile> | undefined;
    /**
     * How many seconds the duration of each output segment should
     *
     * @remarks
     * be
     *
     */
    targetSegmentSizeSecs?: number | undefined;
    creatorId?: InputCreatorId | undefined;
    /**
     * Decides if the output video should include C2PA signature
     */
    c2pa?: boolean | undefined;
};

/**
 * Strategy to use for clipping the asset. If not specified, the default strategy that Catalyst is configured for will be used. This field only available for admin users, and is only used for E2E testing.
 */
export type ClipStrategy = {
    /**
     * The start timestamp of the clip in Unix milliseconds. _See the ClipTrigger in the UI Kit for an example of how this is calculated (for HLS, it uses `Program Date-Time` tags, and for WebRTC, it uses the latency from server to client at stream startup)._
     */
    startTime?: number | undefined;
    /**
     * The end timestamp of the clip in Unix milliseconds. _See the ClipTrigger in the UI Kit for an example of how this is calculated (for HLS, it uses `Program Date-Time` tags, and for WebRTC, it uses the latency from server to client at stream startup)._
     */
    endTime?: number | undefined;
    /**
     * The playback ID of the stream or stream recording to clip. Asset playback IDs are not supported yet.
     */
    playbackId?: string | undefined;
};

/**
 * Force to use a specific strategy in the Catalyst pipeline. If not specified, the default strategy that Catalyst is configured for will be used. This field only available for admin users, and is only used for E2E testing.
 */
export enum CatalystPipelineStrategy {
    Catalyst = "catalyst",
    CatalystFfmpeg = "catalyst_ffmpeg",
    BackgroundExternal = "background_external",
    BackgroundMist = "background_mist",
    FallbackExternal = "fallback_external",
    External = "external",
}

export type Clip = {
    /**
     * URL of the asset to "clip"
     */
    url?: string | undefined;
    /**
     * Strategy to use for clipping the asset. If not specified, the default strategy that Catalyst is configured for will be used. This field only available for admin users, and is only used for E2E testing.
     */
    clipStrategy?: ClipStrategy | undefined;
    /**
     * Force to use a specific strategy in the Catalyst pipeline. If not specified, the default strategy that Catalyst is configured for will be used. This field only available for admin users, and is only used for E2E testing.
     */
    catalystPipelineStrategy?: CatalystPipelineStrategy | undefined;
    /**
     * ID of the session
     */
    sessionId?: string | undefined;
    /**
     * ID of the input asset or stream
     */
    inputId?: string | undefined;
};

/**
 * Parameters of the task
 */
export type Params = {
    /**
     * Parameters for the upload task
     */
    upload?: Upload | undefined;
    /**
     * Parameters for the export task
     */
    export?: ExportTaskParams | undefined;
    /**
     * Parameters for the export-data task
     */
    exportData?: TaskExportData | undefined;
    /**
     * Parameters for the transcode-file task
     */
    transcodeFile?: TranscodeFile | undefined;
    clip?: Clip | undefined;
};

/**
 * Phase of the task
 */
export enum TaskPhase {
    Pending = "pending",
    Waiting = "waiting",
    Running = "running",
    Failed = "failed",
    Completed = "completed",
    Cancelled = "cancelled",
}

/**
 * Status of the task
 */
export type TaskStatus = {
    /**
     * Phase of the task
     */
    phase: TaskPhase;
    /**
     * Timestamp (in milliseconds) at which task was updated
     */
    updatedAt: number;
    /**
     * Current progress of the task in a 0-1 ratio
     */
    progress?: number | undefined;
    /**
     * Error message if the task failed
     */
    errorMessage?: string | undefined;
    /**
     * Number of retries done on the task
     */
    retries?: number | undefined;
};

/**
 * Output of the upload task
 */
export type TaskUpload = {
    assetSpec?: Asset | undefined;
    additionalProperties: { [k: string]: any };
};

export type TaskIpfs = {
    /**
     * IPFS CID of the exported video file
     */
    videoFileCid: string;
    /**
     * URL for the file with the IPFS protocol
     */
    videoFileUrl?: string | undefined;
    /**
     * URL to access file via HTTP through an IPFS gateway
     */
    videoFileGatewayUrl?: string | undefined;
    /**
     * IPFS CID of the default metadata exported for the video
     */
    nftMetadataCid?: string | undefined;
    /**
     * URL for the metadata file with the IPFS protocol
     */
    nftMetadataUrl?: string | undefined;
    /**
     * URL to access metadata file via HTTP through an IPFS
     *
     * @remarks
     * gateway
     *
     */
    nftMetadataGatewayUrl?: string | undefined;
};

/**
 * Output of the export task
 */
export type Export = {
    ipfs?: TaskIpfs | undefined;
};

export type TaskSchemasIpfs = {
    /**
     * IPFS CID of the exported data
     */
    cid: string;
};

/**
 * Output of the export data task
 */
export type ExportData = {
    ipfs?: TaskSchemasIpfs | undefined;
};

/**
 * Output of the task
 */
export type Output = {
    /**
     * Output of the upload task
     */
    upload?: TaskUpload | undefined;
    /**
     * Output of the export task
     */
    export?: Export | undefined;
    /**
     * Output of the export data task
     */
    exportData?: ExportData | undefined;
};

export type Task = {
    /**
     * Task ID
     */
    id?: string | undefined;
    /**
     * Type of the task
     */
    type?: TaskType | undefined;
    /**
     * Timestamp (in milliseconds) at which task was created
     */
    createdAt?: number | undefined;
    /**
     * Timestamp (in milliseconds) at which the task was scheduled for
     *
     * @remarks
     * execution (e.g. after file upload finished).
     *
     */
    scheduledAt?: number | undefined;
    /**
     * ID of the input asset
     */
    inputAssetId?: string | undefined;
    /**
     * ID of the output asset
     */
    outputAssetId?: string | undefined;
    /**
     * ID of the requester hash(IP + SALT + PlaybackId)
     */
    requesterId?: string | undefined;
    /**
     * Parameters of the task
     */
    params?: Params | undefined;
    /**
     * Status of the task
     */
    status?: TaskStatus | undefined;
    /**
     * Output of the task
     */
    output?: Output | undefined;
};

/** @internal */
export const TaskType$inboundSchema: z.ZodNativeEnum<typeof TaskType> = z.nativeEnum(TaskType);

/** @internal */
export const TaskType$outboundSchema: z.ZodNativeEnum<typeof TaskType> = TaskType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskType$ {
    /** @deprecated use `TaskType$inboundSchema` instead. */
    export const inboundSchema = TaskType$inboundSchema;
    /** @deprecated use `TaskType$outboundSchema` instead. */
    export const outboundSchema = TaskType$outboundSchema;
}

/** @internal */
export const Upload$inboundSchema: z.ZodType<Upload, z.ZodTypeDef, unknown> = z.object({
    url: z.string().optional(),
    encryption: EncryptionOutput$inboundSchema.optional(),
    c2pa: z.boolean().optional(),
    profiles: z.array(TranscodeProfile$inboundSchema).optional(),
    targetSegmentSizeSecs: z.number().optional(),
});

/** @internal */
export type Upload$Outbound = {
    url?: string | undefined;
    encryption?: EncryptionOutput$Outbound | undefined;
    c2pa?: boolean | undefined;
    profiles?: Array<TranscodeProfile$Outbound> | undefined;
    targetSegmentSizeSecs?: number | undefined;
};

/** @internal */
export const Upload$outboundSchema: z.ZodType<Upload$Outbound, z.ZodTypeDef, Upload> = z.object({
    url: z.string().optional(),
    encryption: EncryptionOutput$outboundSchema.optional(),
    c2pa: z.boolean().optional(),
    profiles: z.array(TranscodeProfile$outboundSchema).optional(),
    targetSegmentSizeSecs: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Upload$ {
    /** @deprecated use `Upload$inboundSchema` instead. */
    export const inboundSchema = Upload$inboundSchema;
    /** @deprecated use `Upload$outboundSchema` instead. */
    export const outboundSchema = Upload$outboundSchema;
    /** @deprecated use `Upload$Outbound` instead. */
    export type Outbound = Upload$Outbound;
}

/** @internal */
export const Content$inboundSchema: z.ZodType<Content, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Content$Outbound = {};

/** @internal */
export const Content$outboundSchema: z.ZodType<Content$Outbound, z.ZodTypeDef, Content> = z.object(
    {}
);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Content$ {
    /** @deprecated use `Content$inboundSchema` instead. */
    export const inboundSchema = Content$inboundSchema;
    /** @deprecated use `Content$outboundSchema` instead. */
    export const outboundSchema = Content$outboundSchema;
    /** @deprecated use `Content$Outbound` instead. */
    export type Outbound = Content$Outbound;
}

/** @internal */
export const TaskExportData$inboundSchema: z.ZodType<TaskExportData, z.ZodTypeDef, unknown> =
    z.object({
        content: z.lazy(() => Content$inboundSchema),
        ipfs: IpfsExportParams$inboundSchema.optional(),
        type: z.string().optional(),
        id: z.string().optional(),
    });

/** @internal */
export type TaskExportData$Outbound = {
    content: Content$Outbound;
    ipfs?: IpfsExportParams$Outbound | undefined;
    type?: string | undefined;
    id?: string | undefined;
};

/** @internal */
export const TaskExportData$outboundSchema: z.ZodType<
    TaskExportData$Outbound,
    z.ZodTypeDef,
    TaskExportData
> = z.object({
    content: z.lazy(() => Content$outboundSchema),
    ipfs: IpfsExportParams$outboundSchema.optional(),
    type: z.string().optional(),
    id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskExportData$ {
    /** @deprecated use `TaskExportData$inboundSchema` instead. */
    export const inboundSchema = TaskExportData$inboundSchema;
    /** @deprecated use `TaskExportData$outboundSchema` instead. */
    export const outboundSchema = TaskExportData$outboundSchema;
    /** @deprecated use `TaskExportData$Outbound` instead. */
    export type Outbound = TaskExportData$Outbound;
}

/** @internal */
export const TaskInput$inboundSchema: z.ZodType<TaskInput, z.ZodTypeDef, unknown> = z.object({
    url: z.string().optional(),
});

/** @internal */
export type TaskInput$Outbound = {
    url?: string | undefined;
};

/** @internal */
export const TaskInput$outboundSchema: z.ZodType<TaskInput$Outbound, z.ZodTypeDef, TaskInput> =
    z.object({
        url: z.string().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskInput$ {
    /** @deprecated use `TaskInput$inboundSchema` instead. */
    export const inboundSchema = TaskInput$inboundSchema;
    /** @deprecated use `TaskInput$outboundSchema` instead. */
    export const outboundSchema = TaskInput$outboundSchema;
    /** @deprecated use `TaskInput$Outbound` instead. */
    export type Outbound = TaskInput$Outbound;
}

/** @internal */
export const TaskStorage$inboundSchema: z.ZodType<TaskStorage, z.ZodTypeDef, unknown> = z.object({
    url: z.string().optional(),
});

/** @internal */
export type TaskStorage$Outbound = {
    url?: string | undefined;
};

/** @internal */
export const TaskStorage$outboundSchema: z.ZodType<
    TaskStorage$Outbound,
    z.ZodTypeDef,
    TaskStorage
> = z.object({
    url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskStorage$ {
    /** @deprecated use `TaskStorage$inboundSchema` instead. */
    export const inboundSchema = TaskStorage$inboundSchema;
    /** @deprecated use `TaskStorage$outboundSchema` instead. */
    export const outboundSchema = TaskStorage$outboundSchema;
    /** @deprecated use `TaskStorage$Outbound` instead. */
    export type Outbound = TaskStorage$Outbound;
}

/** @internal */
export const TaskHls$inboundSchema: z.ZodType<TaskHls, z.ZodTypeDef, unknown> = z.object({
    path: z.string().optional(),
});

/** @internal */
export type TaskHls$Outbound = {
    path?: string | undefined;
};

/** @internal */
export const TaskHls$outboundSchema: z.ZodType<TaskHls$Outbound, z.ZodTypeDef, TaskHls> = z.object({
    path: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskHls$ {
    /** @deprecated use `TaskHls$inboundSchema` instead. */
    export const inboundSchema = TaskHls$inboundSchema;
    /** @deprecated use `TaskHls$outboundSchema` instead. */
    export const outboundSchema = TaskHls$outboundSchema;
    /** @deprecated use `TaskHls$Outbound` instead. */
    export type Outbound = TaskHls$Outbound;
}

/** @internal */
export const TaskMp4$inboundSchema: z.ZodType<TaskMp4, z.ZodTypeDef, unknown> = z.object({
    path: z.string().optional(),
});

/** @internal */
export type TaskMp4$Outbound = {
    path?: string | undefined;
};

/** @internal */
export const TaskMp4$outboundSchema: z.ZodType<TaskMp4$Outbound, z.ZodTypeDef, TaskMp4> = z.object({
    path: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskMp4$ {
    /** @deprecated use `TaskMp4$inboundSchema` instead. */
    export const inboundSchema = TaskMp4$inboundSchema;
    /** @deprecated use `TaskMp4$outboundSchema` instead. */
    export const outboundSchema = TaskMp4$outboundSchema;
    /** @deprecated use `TaskMp4$Outbound` instead. */
    export type Outbound = TaskMp4$Outbound;
}

/** @internal */
export const TaskOutputs$inboundSchema: z.ZodType<TaskOutputs, z.ZodTypeDef, unknown> = z.object({
    hls: z.lazy(() => TaskHls$inboundSchema).optional(),
    mp4: z.lazy(() => TaskMp4$inboundSchema).optional(),
});

/** @internal */
export type TaskOutputs$Outbound = {
    hls?: TaskHls$Outbound | undefined;
    mp4?: TaskMp4$Outbound | undefined;
};

/** @internal */
export const TaskOutputs$outboundSchema: z.ZodType<
    TaskOutputs$Outbound,
    z.ZodTypeDef,
    TaskOutputs
> = z.object({
    hls: z.lazy(() => TaskHls$outboundSchema).optional(),
    mp4: z.lazy(() => TaskMp4$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskOutputs$ {
    /** @deprecated use `TaskOutputs$inboundSchema` instead. */
    export const inboundSchema = TaskOutputs$inboundSchema;
    /** @deprecated use `TaskOutputs$outboundSchema` instead. */
    export const outboundSchema = TaskOutputs$outboundSchema;
    /** @deprecated use `TaskOutputs$Outbound` instead. */
    export type Outbound = TaskOutputs$Outbound;
}

/** @internal */
export const TranscodeFile$inboundSchema: z.ZodType<TranscodeFile, z.ZodTypeDef, unknown> =
    z.object({
        input: z.lazy(() => TaskInput$inboundSchema).optional(),
        storage: z.lazy(() => TaskStorage$inboundSchema).optional(),
        outputs: z.lazy(() => TaskOutputs$inboundSchema).optional(),
        profiles: z.array(TranscodeProfile$inboundSchema).optional(),
        targetSegmentSizeSecs: z.number().optional(),
        creatorId: InputCreatorId$inboundSchema.optional(),
        c2pa: z.boolean().optional(),
    });

/** @internal */
export type TranscodeFile$Outbound = {
    input?: TaskInput$Outbound | undefined;
    storage?: TaskStorage$Outbound | undefined;
    outputs?: TaskOutputs$Outbound | undefined;
    profiles?: Array<TranscodeProfile$Outbound> | undefined;
    targetSegmentSizeSecs?: number | undefined;
    creatorId?: InputCreatorId$Outbound | undefined;
    c2pa?: boolean | undefined;
};

/** @internal */
export const TranscodeFile$outboundSchema: z.ZodType<
    TranscodeFile$Outbound,
    z.ZodTypeDef,
    TranscodeFile
> = z.object({
    input: z.lazy(() => TaskInput$outboundSchema).optional(),
    storage: z.lazy(() => TaskStorage$outboundSchema).optional(),
    outputs: z.lazy(() => TaskOutputs$outboundSchema).optional(),
    profiles: z.array(TranscodeProfile$outboundSchema).optional(),
    targetSegmentSizeSecs: z.number().optional(),
    creatorId: InputCreatorId$outboundSchema.optional(),
    c2pa: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodeFile$ {
    /** @deprecated use `TranscodeFile$inboundSchema` instead. */
    export const inboundSchema = TranscodeFile$inboundSchema;
    /** @deprecated use `TranscodeFile$outboundSchema` instead. */
    export const outboundSchema = TranscodeFile$outboundSchema;
    /** @deprecated use `TranscodeFile$Outbound` instead. */
    export type Outbound = TranscodeFile$Outbound;
}

/** @internal */
export const ClipStrategy$inboundSchema: z.ZodType<ClipStrategy, z.ZodTypeDef, unknown> = z.object({
    startTime: z.number().optional(),
    endTime: z.number().optional(),
    playbackId: z.string().optional(),
});

/** @internal */
export type ClipStrategy$Outbound = {
    startTime?: number | undefined;
    endTime?: number | undefined;
    playbackId?: string | undefined;
};

/** @internal */
export const ClipStrategy$outboundSchema: z.ZodType<
    ClipStrategy$Outbound,
    z.ZodTypeDef,
    ClipStrategy
> = z.object({
    startTime: z.number().optional(),
    endTime: z.number().optional(),
    playbackId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClipStrategy$ {
    /** @deprecated use `ClipStrategy$inboundSchema` instead. */
    export const inboundSchema = ClipStrategy$inboundSchema;
    /** @deprecated use `ClipStrategy$outboundSchema` instead. */
    export const outboundSchema = ClipStrategy$outboundSchema;
    /** @deprecated use `ClipStrategy$Outbound` instead. */
    export type Outbound = ClipStrategy$Outbound;
}

/** @internal */
export const CatalystPipelineStrategy$inboundSchema: z.ZodNativeEnum<
    typeof CatalystPipelineStrategy
> = z.nativeEnum(CatalystPipelineStrategy);

/** @internal */
export const CatalystPipelineStrategy$outboundSchema: z.ZodNativeEnum<
    typeof CatalystPipelineStrategy
> = CatalystPipelineStrategy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CatalystPipelineStrategy$ {
    /** @deprecated use `CatalystPipelineStrategy$inboundSchema` instead. */
    export const inboundSchema = CatalystPipelineStrategy$inboundSchema;
    /** @deprecated use `CatalystPipelineStrategy$outboundSchema` instead. */
    export const outboundSchema = CatalystPipelineStrategy$outboundSchema;
}

/** @internal */
export const Clip$inboundSchema: z.ZodType<Clip, z.ZodTypeDef, unknown> = z.object({
    url: z.string().optional(),
    clipStrategy: z.lazy(() => ClipStrategy$inboundSchema).optional(),
    catalystPipelineStrategy: CatalystPipelineStrategy$inboundSchema.optional(),
    sessionId: z.string().optional(),
    inputId: z.string().optional(),
});

/** @internal */
export type Clip$Outbound = {
    url?: string | undefined;
    clipStrategy?: ClipStrategy$Outbound | undefined;
    catalystPipelineStrategy?: string | undefined;
    sessionId?: string | undefined;
    inputId?: string | undefined;
};

/** @internal */
export const Clip$outboundSchema: z.ZodType<Clip$Outbound, z.ZodTypeDef, Clip> = z.object({
    url: z.string().optional(),
    clipStrategy: z.lazy(() => ClipStrategy$outboundSchema).optional(),
    catalystPipelineStrategy: CatalystPipelineStrategy$outboundSchema.optional(),
    sessionId: z.string().optional(),
    inputId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Clip$ {
    /** @deprecated use `Clip$inboundSchema` instead. */
    export const inboundSchema = Clip$inboundSchema;
    /** @deprecated use `Clip$outboundSchema` instead. */
    export const outboundSchema = Clip$outboundSchema;
    /** @deprecated use `Clip$Outbound` instead. */
    export type Outbound = Clip$Outbound;
}

/** @internal */
export const Params$inboundSchema: z.ZodType<Params, z.ZodTypeDef, unknown> = z
    .object({
        upload: z.lazy(() => Upload$inboundSchema).optional(),
        export: ExportTaskParams$inboundSchema.optional(),
        exportData: z.lazy(() => TaskExportData$inboundSchema).optional(),
        "transcode-file": z.lazy(() => TranscodeFile$inboundSchema).optional(),
        clip: z.lazy(() => Clip$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "transcode-file": "transcodeFile",
        });
    });

/** @internal */
export type Params$Outbound = {
    upload?: Upload$Outbound | undefined;
    export?: ExportTaskParams$Outbound | undefined;
    exportData?: TaskExportData$Outbound | undefined;
    "transcode-file"?: TranscodeFile$Outbound | undefined;
    clip?: Clip$Outbound | undefined;
};

/** @internal */
export const Params$outboundSchema: z.ZodType<Params$Outbound, z.ZodTypeDef, Params> = z
    .object({
        upload: z.lazy(() => Upload$outboundSchema).optional(),
        export: ExportTaskParams$outboundSchema.optional(),
        exportData: z.lazy(() => TaskExportData$outboundSchema).optional(),
        transcodeFile: z.lazy(() => TranscodeFile$outboundSchema).optional(),
        clip: z.lazy(() => Clip$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            transcodeFile: "transcode-file",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Params$ {
    /** @deprecated use `Params$inboundSchema` instead. */
    export const inboundSchema = Params$inboundSchema;
    /** @deprecated use `Params$outboundSchema` instead. */
    export const outboundSchema = Params$outboundSchema;
    /** @deprecated use `Params$Outbound` instead. */
    export type Outbound = Params$Outbound;
}

/** @internal */
export const TaskPhase$inboundSchema: z.ZodNativeEnum<typeof TaskPhase> = z.nativeEnum(TaskPhase);

/** @internal */
export const TaskPhase$outboundSchema: z.ZodNativeEnum<typeof TaskPhase> = TaskPhase$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskPhase$ {
    /** @deprecated use `TaskPhase$inboundSchema` instead. */
    export const inboundSchema = TaskPhase$inboundSchema;
    /** @deprecated use `TaskPhase$outboundSchema` instead. */
    export const outboundSchema = TaskPhase$outboundSchema;
}

/** @internal */
export const TaskStatus$inboundSchema: z.ZodType<TaskStatus, z.ZodTypeDef, unknown> = z.object({
    phase: TaskPhase$inboundSchema,
    updatedAt: z.number(),
    progress: z.number().optional(),
    errorMessage: z.string().optional(),
    retries: z.number().optional(),
});

/** @internal */
export type TaskStatus$Outbound = {
    phase: string;
    updatedAt: number;
    progress?: number | undefined;
    errorMessage?: string | undefined;
    retries?: number | undefined;
};

/** @internal */
export const TaskStatus$outboundSchema: z.ZodType<TaskStatus$Outbound, z.ZodTypeDef, TaskStatus> =
    z.object({
        phase: TaskPhase$outboundSchema,
        updatedAt: z.number(),
        progress: z.number().optional(),
        errorMessage: z.string().optional(),
        retries: z.number().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskStatus$ {
    /** @deprecated use `TaskStatus$inboundSchema` instead. */
    export const inboundSchema = TaskStatus$inboundSchema;
    /** @deprecated use `TaskStatus$outboundSchema` instead. */
    export const outboundSchema = TaskStatus$outboundSchema;
    /** @deprecated use `TaskStatus$Outbound` instead. */
    export type Outbound = TaskStatus$Outbound;
}

/** @internal */
export const TaskUpload$inboundSchema: z.ZodType<TaskUpload, z.ZodTypeDef, unknown> =
    collectExtraKeys$(
        z
            .object({
                assetSpec: Asset$inboundSchema.optional(),
            })
            .catchall(z.any()),
        "additionalProperties"
    );

/** @internal */
export type TaskUpload$Outbound = {
    assetSpec?: Asset$Outbound | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const TaskUpload$outboundSchema: z.ZodType<TaskUpload$Outbound, z.ZodTypeDef, TaskUpload> = z
    .object({
        assetSpec: Asset$outboundSchema.optional(),
        additionalProperties: z.record(z.any()),
    })
    .transform((v) => {
        return {
            ...v.additionalProperties,
            ...remap$(v, {
                additionalProperties: null,
            }),
        };
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskUpload$ {
    /** @deprecated use `TaskUpload$inboundSchema` instead. */
    export const inboundSchema = TaskUpload$inboundSchema;
    /** @deprecated use `TaskUpload$outboundSchema` instead. */
    export const outboundSchema = TaskUpload$outboundSchema;
    /** @deprecated use `TaskUpload$Outbound` instead. */
    export type Outbound = TaskUpload$Outbound;
}

/** @internal */
export const TaskIpfs$inboundSchema: z.ZodType<TaskIpfs, z.ZodTypeDef, unknown> = z.object({
    videoFileCid: z.string(),
    videoFileUrl: z.string().optional(),
    videoFileGatewayUrl: z.string().optional(),
    nftMetadataCid: z.string().optional(),
    nftMetadataUrl: z.string().optional(),
    nftMetadataGatewayUrl: z.string().optional(),
});

/** @internal */
export type TaskIpfs$Outbound = {
    videoFileCid: string;
    videoFileUrl?: string | undefined;
    videoFileGatewayUrl?: string | undefined;
    nftMetadataCid?: string | undefined;
    nftMetadataUrl?: string | undefined;
    nftMetadataGatewayUrl?: string | undefined;
};

/** @internal */
export const TaskIpfs$outboundSchema: z.ZodType<TaskIpfs$Outbound, z.ZodTypeDef, TaskIpfs> =
    z.object({
        videoFileCid: z.string(),
        videoFileUrl: z.string().optional(),
        videoFileGatewayUrl: z.string().optional(),
        nftMetadataCid: z.string().optional(),
        nftMetadataUrl: z.string().optional(),
        nftMetadataGatewayUrl: z.string().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskIpfs$ {
    /** @deprecated use `TaskIpfs$inboundSchema` instead. */
    export const inboundSchema = TaskIpfs$inboundSchema;
    /** @deprecated use `TaskIpfs$outboundSchema` instead. */
    export const outboundSchema = TaskIpfs$outboundSchema;
    /** @deprecated use `TaskIpfs$Outbound` instead. */
    export type Outbound = TaskIpfs$Outbound;
}

/** @internal */
export const Export$inboundSchema: z.ZodType<Export, z.ZodTypeDef, unknown> = z.object({
    ipfs: z.lazy(() => TaskIpfs$inboundSchema).optional(),
});

/** @internal */
export type Export$Outbound = {
    ipfs?: TaskIpfs$Outbound | undefined;
};

/** @internal */
export const Export$outboundSchema: z.ZodType<Export$Outbound, z.ZodTypeDef, Export> = z.object({
    ipfs: z.lazy(() => TaskIpfs$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Export$ {
    /** @deprecated use `Export$inboundSchema` instead. */
    export const inboundSchema = Export$inboundSchema;
    /** @deprecated use `Export$outboundSchema` instead. */
    export const outboundSchema = Export$outboundSchema;
    /** @deprecated use `Export$Outbound` instead. */
    export type Outbound = Export$Outbound;
}

/** @internal */
export const TaskSchemasIpfs$inboundSchema: z.ZodType<TaskSchemasIpfs, z.ZodTypeDef, unknown> =
    z.object({
        cid: z.string(),
    });

/** @internal */
export type TaskSchemasIpfs$Outbound = {
    cid: string;
};

/** @internal */
export const TaskSchemasIpfs$outboundSchema: z.ZodType<
    TaskSchemasIpfs$Outbound,
    z.ZodTypeDef,
    TaskSchemasIpfs
> = z.object({
    cid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskSchemasIpfs$ {
    /** @deprecated use `TaskSchemasIpfs$inboundSchema` instead. */
    export const inboundSchema = TaskSchemasIpfs$inboundSchema;
    /** @deprecated use `TaskSchemasIpfs$outboundSchema` instead. */
    export const outboundSchema = TaskSchemasIpfs$outboundSchema;
    /** @deprecated use `TaskSchemasIpfs$Outbound` instead. */
    export type Outbound = TaskSchemasIpfs$Outbound;
}

/** @internal */
export const ExportData$inboundSchema: z.ZodType<ExportData, z.ZodTypeDef, unknown> = z.object({
    ipfs: z.lazy(() => TaskSchemasIpfs$inboundSchema).optional(),
});

/** @internal */
export type ExportData$Outbound = {
    ipfs?: TaskSchemasIpfs$Outbound | undefined;
};

/** @internal */
export const ExportData$outboundSchema: z.ZodType<ExportData$Outbound, z.ZodTypeDef, ExportData> =
    z.object({
        ipfs: z.lazy(() => TaskSchemasIpfs$outboundSchema).optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExportData$ {
    /** @deprecated use `ExportData$inboundSchema` instead. */
    export const inboundSchema = ExportData$inboundSchema;
    /** @deprecated use `ExportData$outboundSchema` instead. */
    export const outboundSchema = ExportData$outboundSchema;
    /** @deprecated use `ExportData$Outbound` instead. */
    export type Outbound = ExportData$Outbound;
}

/** @internal */
export const Output$inboundSchema: z.ZodType<Output, z.ZodTypeDef, unknown> = z.object({
    upload: z.lazy(() => TaskUpload$inboundSchema).optional(),
    export: z.lazy(() => Export$inboundSchema).optional(),
    exportData: z.lazy(() => ExportData$inboundSchema).optional(),
});

/** @internal */
export type Output$Outbound = {
    upload?: TaskUpload$Outbound | undefined;
    export?: Export$Outbound | undefined;
    exportData?: ExportData$Outbound | undefined;
};

/** @internal */
export const Output$outboundSchema: z.ZodType<Output$Outbound, z.ZodTypeDef, Output> = z.object({
    upload: z.lazy(() => TaskUpload$outboundSchema).optional(),
    export: z.lazy(() => Export$outboundSchema).optional(),
    exportData: z.lazy(() => ExportData$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Output$ {
    /** @deprecated use `Output$inboundSchema` instead. */
    export const inboundSchema = Output$inboundSchema;
    /** @deprecated use `Output$outboundSchema` instead. */
    export const outboundSchema = Output$outboundSchema;
    /** @deprecated use `Output$Outbound` instead. */
    export type Outbound = Output$Outbound;
}

/** @internal */
export const Task$inboundSchema: z.ZodType<Task, z.ZodTypeDef, unknown> = z.object({
    id: z.string().optional(),
    type: TaskType$inboundSchema.optional(),
    createdAt: z.number().optional(),
    scheduledAt: z.number().optional(),
    inputAssetId: z.string().optional(),
    outputAssetId: z.string().optional(),
    requesterId: z.string().optional(),
    params: z.lazy(() => Params$inboundSchema).optional(),
    status: z.lazy(() => TaskStatus$inboundSchema).optional(),
    output: z.lazy(() => Output$inboundSchema).optional(),
});

/** @internal */
export type Task$Outbound = {
    id?: string | undefined;
    type?: string | undefined;
    createdAt?: number | undefined;
    scheduledAt?: number | undefined;
    inputAssetId?: string | undefined;
    outputAssetId?: string | undefined;
    requesterId?: string | undefined;
    params?: Params$Outbound | undefined;
    status?: TaskStatus$Outbound | undefined;
    output?: Output$Outbound | undefined;
};

/** @internal */
export const Task$outboundSchema: z.ZodType<Task$Outbound, z.ZodTypeDef, Task> = z.object({
    id: z.string().optional(),
    type: TaskType$outboundSchema.optional(),
    createdAt: z.number().optional(),
    scheduledAt: z.number().optional(),
    inputAssetId: z.string().optional(),
    outputAssetId: z.string().optional(),
    requesterId: z.string().optional(),
    params: z.lazy(() => Params$outboundSchema).optional(),
    status: z.lazy(() => TaskStatus$outboundSchema).optional(),
    output: z.lazy(() => Output$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Task$ {
    /** @deprecated use `Task$inboundSchema` instead. */
    export const inboundSchema = Task$inboundSchema;
    /** @deprecated use `Task$outboundSchema` instead. */
    export const outboundSchema = Task$outboundSchema;
    /** @deprecated use `Task$Outbound` instead. */
    export type Outbound = Task$Outbound;
}
