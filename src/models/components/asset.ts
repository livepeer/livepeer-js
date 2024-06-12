/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { CreatorId, CreatorId$ } from "./creatorid";
import { EncryptionOutput, EncryptionOutput$ } from "./encryptionoutput";
import { IpfsFileInfo, IpfsFileInfo$ } from "./ipfsfileinfo";
import { PlaybackPolicy, PlaybackPolicy$ } from "./playbackpolicy";
import { StorageStatus, StorageStatus$ } from "./storagestatus";
import * as z from "zod";

/**
 * Type of the asset.
 */
export enum AssetType {
    Video = "video",
    Audio = "audio",
}

export enum AssetSchemasSource3Type {
    DirectUpload = "directUpload",
    Clip = "clip",
}

export type Asset3 = {
    type: AssetSchemasSource3Type;
    encryption?: EncryptionOutput | undefined;
    /**
     * ID of the asset or stream from which this asset was created.
     */
    sourceId?: string | undefined;
    /**
     * ID of the session from which this asset was created.
     */
    sessionId?: string | undefined;
    /**
     * Playback ID of the asset or stream from which this asset was created.
     */
    playbackId?: string | undefined;
    /**
     * ID of the requester from which this asset was created.
     */
    requesterId?: string | undefined;
    /**
     * ID of the asset from which this asset was created.
     */
    assetId?: string | undefined;
};

export enum AssetSchemasSourceType {
    Recording = "recording",
}

export type Two = {
    type: AssetSchemasSourceType;
    /**
     * ID of the session from which this asset was created
     */
    sessionId: string;
};

export enum AssetSchemasType {
    Url = "url",
}

export type Asset1 = {
    type: AssetSchemasType;
    /**
     * URL from which the asset was uploaded.
     */
    url: string;
    /**
     * Gateway URL from asset if parsed from provided URL on upload.
     */
    gatewayUrl?: string | undefined;
    encryption?: EncryptionOutput | undefined;
};

export type Source = Two | Asset1 | Asset3;

/**
 * Name of the NFT metadata template to export. 'player'
 *
 * @remarks
 * will embed the Livepeer Player on the NFT while 'file'
 * will reference only the immutable MP4 files.
 *
 */
export enum AssetNftMetadataTemplate {
    File = "file",
    Player = "player",
}

/**
 * Additional data to add to the NFT metadata exported to
 *
 * @remarks
 * IPFS. Will be deep merged with the default metadata
 * exported.
 *
 */
export type AssetNftMetadata = {};

export type AssetSpec = {
    /**
     * Name of the NFT metadata template to export. 'player'
     *
     * @remarks
     * will embed the Livepeer Player on the NFT while 'file'
     * will reference only the immutable MP4 files.
     *
     */
    nftMetadataTemplate?: AssetNftMetadataTemplate | undefined;
    /**
     * Additional data to add to the NFT metadata exported to
     *
     * @remarks
     * IPFS. Will be deep merged with the default metadata
     * exported.
     *
     */
    nftMetadata?: AssetNftMetadata | undefined;
};

export type AssetIpfs = {
    spec?: AssetSpec | undefined;
    dollarRef?: any | undefined;
    nftMetadata?: IpfsFileInfo | undefined;
    /**
     * Timestamp (in milliseconds) at which IPFS export task was
     *
     * @remarks
     * updated
     *
     */
    updatedAt?: number | undefined;
};

export type AssetStorage = {
    ipfs?: AssetIpfs | undefined;
    status?: StorageStatus | undefined;
};

/**
 * Phase of the asset
 */
export enum AssetPhase {
    Uploading = "uploading",
    Waiting = "waiting",
    Processing = "processing",
    Ready = "ready",
    Failed = "failed",
    Deleting = "deleting",
    Deleted = "deleted",
}

/**
 * Status of the asset
 */
export type AssetStatus = {
    /**
     * Phase of the asset
     */
    phase: AssetPhase;
    /**
     * Timestamp (in milliseconds) at which the asset was last updated
     */
    updatedAt: number;
    /**
     * Current progress of the task creating this asset.
     */
    progress?: number | undefined;
    /**
     * Error message if the asset creation failed.
     */
    errorMessage?: string | undefined;
};

export type Hash = {
    /**
     * Hash of the asset
     */
    hash?: string | undefined;
    /**
     * Hash algorithm used to compute the hash
     */
    algorithm?: string | undefined;
};

/**
 * type of track
 */
export enum AssetSchemasVideoSpecType {
    Video = "video",
    Audio = "audio",
}

export type Tracks = {
    /**
     * type of track
     */
    type: AssetSchemasVideoSpecType;
    /**
     * Codec of the track
     */
    codec: string;
    /**
     * Start time of the track in seconds
     */
    startTime?: number | undefined;
    /**
     * Duration of the track in seconds
     */
    duration?: number | undefined;
    /**
     * Bitrate of the track in bits per second
     */
    bitrate?: number | undefined;
    /**
     * Width of the track - only for video tracks
     */
    width?: number | undefined;
    /**
     * Height of the track - only for video tracks
     */
    height?: number | undefined;
    /**
     * Pixel format of the track - only for video tracks
     */
    pixelFormat?: string | undefined;
    /**
     * Frame rate of the track - only for video tracks
     */
    fps?: number | undefined;
    /**
     * Amount of audio channels in the track
     */
    channels?: number | undefined;
    /**
     * Sample rate of the track in samples per second - only for
     *
     * @remarks
     * audio tracks
     *
     */
    sampleRate?: number | undefined;
    /**
     * Bit depth of the track - only for audio tracks
     */
    bitDepth?: number | undefined;
};

/**
 * Video metadata
 */
export type VideoSpec = {
    /**
     * Format of the asset
     */
    format?: string | undefined;
    /**
     * Duration of the asset in seconds (float)
     */
    duration?: number | undefined;
    /**
     * Bitrate of the video in bits per second
     */
    bitrate?: number | undefined;
    /**
     * List of tracks associated with the asset when the format
     *
     * @remarks
     * contemplates them (e.g. mp4)
     *
     */
    tracks?: Array<Tracks> | undefined;
};

export type Asset = {
    id: string;
    /**
     * Type of the asset.
     */
    type?: AssetType | undefined;
    /**
     * The playback ID to use with the Playback Info endpoint to retrieve playback URLs.
     */
    playbackId?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    userId?: string | undefined;
    /**
     * URL for HLS playback. **It is recommended to not use this URL**, and instead use playback IDs with the Playback Info endpoint to retrieve the playback URLs - this URL format is subject to change (e.g. https://livepeercdn.com/asset/ea03f37e-f861-4cdd-b495-0e60b6d753ad/index.m3u8).
     */
    playbackUrl?: string | undefined;
    /**
     * The URL to directly download the asset, e.g. `https://livepeercdn.com/asset/eawrrk06ts2d0mzb/video`. It is not recommended to use this for playback.
     */
    downloadUrl?: string | undefined;
    /**
     * Whether the playback policy for an asset or stream is public or signed
     */
    playbackPolicy?: PlaybackPolicy | null | undefined;
    source: Two | Asset1 | Asset3;
    creatorId?: CreatorId | undefined;
    storage?: AssetStorage | undefined;
    /**
     * Status of the asset
     */
    status?: AssetStatus | undefined;
    /**
     * The name of the asset. This is not necessarily the filename - it can be a custom name or title.
     *
     * @remarks
     *
     */
    name: string;
    /**
     * The ID of the project
     */
    projectId?: string | undefined;
    /**
     * Timestamp (in milliseconds) at which asset was created
     */
    createdAt?: number | undefined;
    /**
     * Name of the token used to create this object
     */
    createdByTokenName?: string | undefined;
    /**
     * Size of the asset in bytes
     */
    size?: number | undefined;
    /**
     * Hash of the asset
     */
    hash?: Array<Hash> | null | undefined;
    /**
     * Video metadata
     */
    videoSpec?: VideoSpec | undefined;
};

/** @internal */
export namespace AssetType$ {
    export const inboundSchema = z.nativeEnum(AssetType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AssetSchemasSource3Type$ {
    export const inboundSchema = z.nativeEnum(AssetSchemasSource3Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Asset3$ {
    export const inboundSchema: z.ZodType<Asset3, z.ZodTypeDef, unknown> = z.object({
        type: AssetSchemasSource3Type$.inboundSchema,
        encryption: EncryptionOutput$.inboundSchema.optional(),
        sourceId: z.string().optional(),
        sessionId: z.string().optional(),
        playbackId: z.string().optional(),
        requesterId: z.string().optional(),
        assetId: z.string().optional(),
    });

    export type Outbound = {
        type: string;
        encryption?: EncryptionOutput$.Outbound | undefined;
        sourceId?: string | undefined;
        sessionId?: string | undefined;
        playbackId?: string | undefined;
        requesterId?: string | undefined;
        assetId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Asset3> = z.object({
        type: AssetSchemasSource3Type$.outboundSchema,
        encryption: EncryptionOutput$.outboundSchema.optional(),
        sourceId: z.string().optional(),
        sessionId: z.string().optional(),
        playbackId: z.string().optional(),
        requesterId: z.string().optional(),
        assetId: z.string().optional(),
    });
}

/** @internal */
export namespace AssetSchemasSourceType$ {
    export const inboundSchema = z.nativeEnum(AssetSchemasSourceType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Two$ {
    export const inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z.object({
        type: AssetSchemasSourceType$.inboundSchema,
        sessionId: z.string(),
    });

    export type Outbound = {
        type: string;
        sessionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Two> = z.object({
        type: AssetSchemasSourceType$.outboundSchema,
        sessionId: z.string(),
    });
}

/** @internal */
export namespace AssetSchemasType$ {
    export const inboundSchema = z.nativeEnum(AssetSchemasType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Asset1$ {
    export const inboundSchema: z.ZodType<Asset1, z.ZodTypeDef, unknown> = z.object({
        type: AssetSchemasType$.inboundSchema,
        url: z.string(),
        gatewayUrl: z.string().optional(),
        encryption: EncryptionOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        type: string;
        url: string;
        gatewayUrl?: string | undefined;
        encryption?: EncryptionOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Asset1> = z.object({
        type: AssetSchemasType$.outboundSchema,
        url: z.string(),
        gatewayUrl: z.string().optional(),
        encryption: EncryptionOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace Source$ {
    export const inboundSchema: z.ZodType<Source, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => Two$.inboundSchema),
        z.lazy(() => Asset1$.inboundSchema),
        z.lazy(() => Asset3$.inboundSchema),
    ]);

    export type Outbound = Two$.Outbound | Asset1$.Outbound | Asset3$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Source> = z.union([
        z.lazy(() => Two$.outboundSchema),
        z.lazy(() => Asset1$.outboundSchema),
        z.lazy(() => Asset3$.outboundSchema),
    ]);
}

/** @internal */
export namespace AssetNftMetadataTemplate$ {
    export const inboundSchema = z.nativeEnum(AssetNftMetadataTemplate);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AssetNftMetadata$ {
    export const inboundSchema: z.ZodType<AssetNftMetadata, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssetNftMetadata> = z.object({});
}

/** @internal */
export namespace AssetSpec$ {
    export const inboundSchema: z.ZodType<AssetSpec, z.ZodTypeDef, unknown> = z.object({
        nftMetadataTemplate: AssetNftMetadataTemplate$.inboundSchema.default(
            AssetNftMetadataTemplate.File
        ),
        nftMetadata: z.lazy(() => AssetNftMetadata$.inboundSchema).optional(),
    });

    export type Outbound = {
        nftMetadataTemplate: string;
        nftMetadata?: AssetNftMetadata$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssetSpec> = z.object({
        nftMetadataTemplate: AssetNftMetadataTemplate$.outboundSchema.default(
            AssetNftMetadataTemplate.File
        ),
        nftMetadata: z.lazy(() => AssetNftMetadata$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace AssetIpfs$ {
    export const inboundSchema: z.ZodType<AssetIpfs, z.ZodTypeDef, unknown> = z
        .object({
            spec: z.lazy(() => AssetSpec$.inboundSchema).optional(),
            $ref: z.any().optional(),
            nftMetadata: IpfsFileInfo$.inboundSchema.optional(),
            updatedAt: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                $ref: "dollarRef",
            });
        });

    export type Outbound = {
        spec?: AssetSpec$.Outbound | undefined;
        $ref?: any | undefined;
        nftMetadata?: IpfsFileInfo$.Outbound | undefined;
        updatedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssetIpfs> = z
        .object({
            spec: z.lazy(() => AssetSpec$.outboundSchema).optional(),
            dollarRef: z.any().optional(),
            nftMetadata: IpfsFileInfo$.outboundSchema.optional(),
            updatedAt: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                dollarRef: "$ref",
            });
        });
}

/** @internal */
export namespace AssetStorage$ {
    export const inboundSchema: z.ZodType<AssetStorage, z.ZodTypeDef, unknown> = z.object({
        ipfs: z.lazy(() => AssetIpfs$.inboundSchema).optional(),
        status: StorageStatus$.inboundSchema.optional(),
    });

    export type Outbound = {
        ipfs?: AssetIpfs$.Outbound | undefined;
        status?: StorageStatus$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssetStorage> = z.object({
        ipfs: z.lazy(() => AssetIpfs$.outboundSchema).optional(),
        status: StorageStatus$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AssetPhase$ {
    export const inboundSchema = z.nativeEnum(AssetPhase);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AssetStatus$ {
    export const inboundSchema: z.ZodType<AssetStatus, z.ZodTypeDef, unknown> = z.object({
        phase: AssetPhase$.inboundSchema,
        updatedAt: z.number(),
        progress: z.number().optional(),
        errorMessage: z.string().optional(),
    });

    export type Outbound = {
        phase: string;
        updatedAt: number;
        progress?: number | undefined;
        errorMessage?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssetStatus> = z.object({
        phase: AssetPhase$.outboundSchema,
        updatedAt: z.number(),
        progress: z.number().optional(),
        errorMessage: z.string().optional(),
    });
}

/** @internal */
export namespace Hash$ {
    export const inboundSchema: z.ZodType<Hash, z.ZodTypeDef, unknown> = z.object({
        hash: z.string().optional(),
        algorithm: z.string().optional(),
    });

    export type Outbound = {
        hash?: string | undefined;
        algorithm?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Hash> = z.object({
        hash: z.string().optional(),
        algorithm: z.string().optional(),
    });
}

/** @internal */
export namespace AssetSchemasVideoSpecType$ {
    export const inboundSchema = z.nativeEnum(AssetSchemasVideoSpecType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Tracks$ {
    export const inboundSchema: z.ZodType<Tracks, z.ZodTypeDef, unknown> = z.object({
        type: AssetSchemasVideoSpecType$.inboundSchema,
        codec: z.string(),
        startTime: z.number().optional(),
        duration: z.number().optional(),
        bitrate: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        pixelFormat: z.string().optional(),
        fps: z.number().optional(),
        channels: z.number().optional(),
        sampleRate: z.number().optional(),
        bitDepth: z.number().optional(),
    });

    export type Outbound = {
        type: string;
        codec: string;
        startTime?: number | undefined;
        duration?: number | undefined;
        bitrate?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        pixelFormat?: string | undefined;
        fps?: number | undefined;
        channels?: number | undefined;
        sampleRate?: number | undefined;
        bitDepth?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Tracks> = z.object({
        type: AssetSchemasVideoSpecType$.outboundSchema,
        codec: z.string(),
        startTime: z.number().optional(),
        duration: z.number().optional(),
        bitrate: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        pixelFormat: z.string().optional(),
        fps: z.number().optional(),
        channels: z.number().optional(),
        sampleRate: z.number().optional(),
        bitDepth: z.number().optional(),
    });
}

/** @internal */
export namespace VideoSpec$ {
    export const inboundSchema: z.ZodType<VideoSpec, z.ZodTypeDef, unknown> = z.object({
        format: z.string().optional(),
        duration: z.number().optional(),
        bitrate: z.number().optional(),
        tracks: z.array(z.lazy(() => Tracks$.inboundSchema)).optional(),
    });

    export type Outbound = {
        format?: string | undefined;
        duration?: number | undefined;
        bitrate?: number | undefined;
        tracks?: Array<Tracks$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VideoSpec> = z.object({
        format: z.string().optional(),
        duration: z.number().optional(),
        bitrate: z.number().optional(),
        tracks: z.array(z.lazy(() => Tracks$.outboundSchema)).optional(),
    });
}

/** @internal */
export namespace Asset$ {
    export const inboundSchema: z.ZodType<Asset, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        type: AssetType$.inboundSchema.optional(),
        playbackId: z.string().optional(),
        userId: z.string().optional(),
        playbackUrl: z.string().optional(),
        downloadUrl: z.string().optional(),
        playbackPolicy: z.nullable(PlaybackPolicy$.inboundSchema).optional(),
        source: z.union([
            z.lazy(() => Two$.inboundSchema),
            z.lazy(() => Asset1$.inboundSchema),
            z.lazy(() => Asset3$.inboundSchema),
        ]),
        creatorId: CreatorId$.inboundSchema.optional(),
        storage: z.lazy(() => AssetStorage$.inboundSchema).optional(),
        status: z.lazy(() => AssetStatus$.inboundSchema).optional(),
        name: z.string(),
        projectId: z.string().optional(),
        createdAt: z.number().optional(),
        createdByTokenName: z.string().optional(),
        size: z.number().optional(),
        hash: z.nullable(z.array(z.lazy(() => Hash$.inboundSchema))).optional(),
        videoSpec: z.lazy(() => VideoSpec$.inboundSchema).optional(),
    });

    export type Outbound = {
        id: string;
        type?: string | undefined;
        playbackId?: string | undefined;
        userId?: string | undefined;
        playbackUrl?: string | undefined;
        downloadUrl?: string | undefined;
        playbackPolicy?: PlaybackPolicy$.Outbound | null | undefined;
        source: Two$.Outbound | Asset1$.Outbound | Asset3$.Outbound;
        creatorId?: CreatorId$.Outbound | undefined;
        storage?: AssetStorage$.Outbound | undefined;
        status?: AssetStatus$.Outbound | undefined;
        name: string;
        projectId?: string | undefined;
        createdAt?: number | undefined;
        createdByTokenName?: string | undefined;
        size?: number | undefined;
        hash?: Array<Hash$.Outbound> | null | undefined;
        videoSpec?: VideoSpec$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Asset> = z.object({
        id: z.string(),
        type: AssetType$.outboundSchema.optional(),
        playbackId: z.string().optional(),
        userId: z.string().optional(),
        playbackUrl: z.string().optional(),
        downloadUrl: z.string().optional(),
        playbackPolicy: z.nullable(PlaybackPolicy$.outboundSchema).optional(),
        source: z.union([
            z.lazy(() => Two$.outboundSchema),
            z.lazy(() => Asset1$.outboundSchema),
            z.lazy(() => Asset3$.outboundSchema),
        ]),
        creatorId: CreatorId$.outboundSchema.optional(),
        storage: z.lazy(() => AssetStorage$.outboundSchema).optional(),
        status: z.lazy(() => AssetStatus$.outboundSchema).optional(),
        name: z.string(),
        projectId: z.string().optional(),
        createdAt: z.number().optional(),
        createdByTokenName: z.string().optional(),
        size: z.number().optional(),
        hash: z.nullable(z.array(z.lazy(() => Hash$.outboundSchema))).optional(),
        videoSpec: z.lazy(() => VideoSpec$.outboundSchema).optional(),
    });
}
