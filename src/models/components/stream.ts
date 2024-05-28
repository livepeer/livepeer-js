/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CreatorId, CreatorId$ } from "./creatorid";
import { FfmpegProfile, FfmpegProfile$ } from "./ffmpegprofile";
import { PlaybackPolicy, PlaybackPolicy$ } from "./playbackpolicy";
import { TargetOutput, TargetOutput$ } from "./targetoutput";
import * as z from "zod";

export type Stream3 = string | number;

export type StreamUserTags = string | number | Array<string | number>;

/**
 * 0: not mobile, 1: mobile screen share, 2: mobile camera.
 */
export enum Stream1 {
    Zero = 0,
    One = 1,
    Two = 2,
}

/**
 * Indicates whether the stream will be pulled from a mobile source.
 */
export type StreamIsMobile = Stream1 | boolean;

/**
 * Approximate location of the pull source. The location is used to
 *
 * @remarks
 * determine the closest Livepeer region to pull the stream from.
 */
export type StreamLocation = {
    /**
     * Latitude of the pull source in degrees. North is positive,
     *
     * @remarks
     * south is negative.
     */
    lat: number;
    /**
     * Longitude of the pull source in degrees. East is positive,
     *
     * @remarks
     * west is negative.
     */
    lon: number;
};

/**
 * Configuration for a stream that should be actively pulled from an
 *
 * @remarks
 * external source, rather than pushed to Livepeer. If specified, the
 * stream will not have a streamKey.
 */
export type StreamPull = {
    /**
     * URL from which to pull from.
     */
    source: string;
    /**
     * Headers to be sent with the request to the pull source.
     */
    headers?: { [k: string]: string } | undefined;
    /**
     * Indicates whether the stream will be pulled from a mobile source.
     */
    isMobile?: Stream1 | boolean | undefined;
    /**
     * Approximate location of the pull source. The location is used to
     *
     * @remarks
     * determine the closest Livepeer region to pull the stream from.
     */
    location?: StreamLocation | undefined;
};

export type StreamMultistream = {
    /**
     * References to targets where this stream will be simultaneously
     *
     * @remarks
     * streamed to
     *
     */
    targets?: Array<TargetOutput> | undefined;
};

export type Renditions = {};

export type Stream = {
    id?: string | undefined;
    name: string;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    kind?: string | undefined;
    creatorId?: CreatorId | undefined;
    /**
     * User input tags associated with the stream
     */
    userTags?: { [k: string]: string | number | Array<string | number> } | undefined;
    lastSeen?: number | undefined;
    sourceSegments?: number | undefined;
    transcodedSegments?: number | undefined;
    /**
     * Duration of all the source segments, sec
     */
    sourceSegmentsDuration?: number | undefined;
    /**
     * Duration of all the transcoded segments, sec
     */
    transcodedSegmentsDuration?: number | undefined;
    sourceBytes?: number | undefined;
    transcodedBytes?: number | undefined;
    /**
     * Rate at which sourceBytes increases (bytes/second)
     */
    ingestRate?: number | undefined;
    /**
     * Rate at which transcodedBytes increases (bytes/second)
     */
    outgoingRate?: number | undefined;
    /**
     * If currently active
     */
    isActive?: boolean | undefined;
    /**
     * Indicates whether the stream is healthy or not.
     */
    isHealthy?: boolean | null | undefined;
    /**
     * A string array of human-readable errors describing issues affecting the stream, if any.
     */
    issues?: Array<string> | null | undefined;
    /**
     * Name of the token used to create this object
     */
    createdByTokenName?: string | undefined;
    /**
     * Timestamp (in milliseconds) at which stream object was created
     */
    createdAt?: number | undefined;
    /**
     * Points to parent stream object
     */
    parentId?: string | undefined;
    /**
     * Used to form RTMP ingest URL
     */
    streamKey?: string | undefined;
    /**
     * Configuration for a stream that should be actively pulled from an
     *
     * @remarks
     * external source, rather than pushed to Livepeer. If specified, the
     * stream will not have a streamKey.
     */
    pull?: StreamPull | undefined;
    /**
     * The playback ID to use with the Playback Info endpoint to retrieve playback URLs.
     */
    playbackId?: string | undefined;
    /**
     * Whether the playback policy for an asset or stream is public or signed
     */
    playbackPolicy?: PlaybackPolicy | null | undefined;
    profiles?: Array<FfmpegProfile> | undefined;
    /**
     * Should this stream be recorded? Uses default settings. For more
     *
     * @remarks
     * customization, create and configure an object store.
     *
     */
    record?: boolean | undefined;
    multistream?: StreamMultistream | undefined;
    /**
     * If currently suspended
     */
    suspended?: boolean | undefined;
    /**
     * Timestamp (in milliseconds) when the stream was last terminated
     */
    lastTerminatedAt?: number | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    userId?: string | undefined;
    renditions?: Renditions | undefined;
};

/** @internal */
export namespace Stream3$ {
    export const inboundSchema: z.ZodType<Stream3, z.ZodTypeDef, unknown> = z.union([
        z.string(),
        z.number(),
    ]);

    export type Outbound = string | number;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Stream3> = z.union([
        z.string(),
        z.number(),
    ]);
}

/** @internal */
export namespace StreamUserTags$ {
    export const inboundSchema: z.ZodType<StreamUserTags, z.ZodTypeDef, unknown> = z.union([
        z.string(),
        z.number(),
        z.array(z.union([z.string(), z.number()])),
    ]);

    export type Outbound = string | number | Array<string | number>;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StreamUserTags> = z.union([
        z.string(),
        z.number(),
        z.array(z.union([z.string(), z.number()])),
    ]);
}

/** @internal */
export namespace Stream1$ {
    export const inboundSchema = z.nativeEnum(Stream1);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace StreamIsMobile$ {
    export const inboundSchema: z.ZodType<StreamIsMobile, z.ZodTypeDef, unknown> = z.union([
        Stream1$.inboundSchema,
        z.boolean(),
    ]);

    export type Outbound = number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StreamIsMobile> = z.union([
        Stream1$.outboundSchema,
        z.boolean(),
    ]);
}

/** @internal */
export namespace StreamLocation$ {
    export const inboundSchema: z.ZodType<StreamLocation, z.ZodTypeDef, unknown> = z
        .object({
            lat: z.number(),
            lon: z.number(),
        })
        .transform((v) => {
            return {
                lat: v.lat,
                lon: v.lon,
            };
        });

    export type Outbound = {
        lat: number;
        lon: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StreamLocation> = z
        .object({
            lat: z.number(),
            lon: z.number(),
        })
        .transform((v) => {
            return {
                lat: v.lat,
                lon: v.lon,
            };
        });
}

/** @internal */
export namespace StreamPull$ {
    export const inboundSchema: z.ZodType<StreamPull, z.ZodTypeDef, unknown> = z
        .object({
            source: z.string(),
            headers: z.record(z.string()).optional(),
            isMobile: z.union([Stream1$.inboundSchema, z.boolean()]).optional(),
            location: z.lazy(() => StreamLocation$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                source: v.source,
                ...(v.headers === undefined ? null : { headers: v.headers }),
                ...(v.isMobile === undefined ? null : { isMobile: v.isMobile }),
                ...(v.location === undefined ? null : { location: v.location }),
            };
        });

    export type Outbound = {
        source: string;
        headers?: { [k: string]: string } | undefined;
        isMobile?: number | boolean | undefined;
        location?: StreamLocation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StreamPull> = z
        .object({
            source: z.string(),
            headers: z.record(z.string()).optional(),
            isMobile: z.union([Stream1$.outboundSchema, z.boolean()]).optional(),
            location: z.lazy(() => StreamLocation$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                source: v.source,
                ...(v.headers === undefined ? null : { headers: v.headers }),
                ...(v.isMobile === undefined ? null : { isMobile: v.isMobile }),
                ...(v.location === undefined ? null : { location: v.location }),
            };
        });
}

/** @internal */
export namespace StreamMultistream$ {
    export const inboundSchema: z.ZodType<StreamMultistream, z.ZodTypeDef, unknown> = z
        .object({
            targets: z.array(TargetOutput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.targets === undefined ? null : { targets: v.targets }),
            };
        });

    export type Outbound = {
        targets?: Array<TargetOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StreamMultistream> = z
        .object({
            targets: z.array(TargetOutput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.targets === undefined ? null : { targets: v.targets }),
            };
        });
}

/** @internal */
export namespace Renditions$ {
    export const inboundSchema: z.ZodType<Renditions, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Renditions> = z.object({});
}

/** @internal */
export namespace Stream$ {
    export const inboundSchema: z.ZodType<Stream, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            name: z.string(),
            kind: z.string().optional(),
            creatorId: CreatorId$.inboundSchema.optional(),
            userTags: z
                .record(
                    z.union([z.string(), z.number(), z.array(z.union([z.string(), z.number()]))])
                )
                .optional(),
            lastSeen: z.number().optional(),
            sourceSegments: z.number().optional(),
            transcodedSegments: z.number().optional(),
            sourceSegmentsDuration: z.number().optional(),
            transcodedSegmentsDuration: z.number().optional(),
            sourceBytes: z.number().optional(),
            transcodedBytes: z.number().optional(),
            ingestRate: z.number().optional(),
            outgoingRate: z.number().optional(),
            isActive: z.boolean().optional(),
            isHealthy: z.nullable(z.boolean()).optional(),
            issues: z.nullable(z.array(z.string())).optional(),
            createdByTokenName: z.string().optional(),
            createdAt: z.number().optional(),
            parentId: z.string().optional(),
            streamKey: z.string().optional(),
            pull: z.lazy(() => StreamPull$.inboundSchema).optional(),
            playbackId: z.string().optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.inboundSchema).optional(),
            profiles: z.array(FfmpegProfile$.inboundSchema).optional(),
            record: z.boolean().optional(),
            multistream: z.lazy(() => StreamMultistream$.inboundSchema).optional(),
            suspended: z.boolean().optional(),
            lastTerminatedAt: z.nullable(z.number()).optional(),
            userId: z.string().optional(),
            renditions: z.lazy(() => Renditions$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                name: v.name,
                ...(v.kind === undefined ? null : { kind: v.kind }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.userTags === undefined ? null : { userTags: v.userTags }),
                ...(v.lastSeen === undefined ? null : { lastSeen: v.lastSeen }),
                ...(v.sourceSegments === undefined ? null : { sourceSegments: v.sourceSegments }),
                ...(v.transcodedSegments === undefined
                    ? null
                    : { transcodedSegments: v.transcodedSegments }),
                ...(v.sourceSegmentsDuration === undefined
                    ? null
                    : { sourceSegmentsDuration: v.sourceSegmentsDuration }),
                ...(v.transcodedSegmentsDuration === undefined
                    ? null
                    : { transcodedSegmentsDuration: v.transcodedSegmentsDuration }),
                ...(v.sourceBytes === undefined ? null : { sourceBytes: v.sourceBytes }),
                ...(v.transcodedBytes === undefined
                    ? null
                    : { transcodedBytes: v.transcodedBytes }),
                ...(v.ingestRate === undefined ? null : { ingestRate: v.ingestRate }),
                ...(v.outgoingRate === undefined ? null : { outgoingRate: v.outgoingRate }),
                ...(v.isActive === undefined ? null : { isActive: v.isActive }),
                ...(v.isHealthy === undefined ? null : { isHealthy: v.isHealthy }),
                ...(v.issues === undefined ? null : { issues: v.issues }),
                ...(v.createdByTokenName === undefined
                    ? null
                    : { createdByTokenName: v.createdByTokenName }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.streamKey === undefined ? null : { streamKey: v.streamKey }),
                ...(v.pull === undefined ? null : { pull: v.pull }),
                ...(v.playbackId === undefined ? null : { playbackId: v.playbackId }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.record === undefined ? null : { record: v.record }),
                ...(v.multistream === undefined ? null : { multistream: v.multistream }),
                ...(v.suspended === undefined ? null : { suspended: v.suspended }),
                ...(v.lastTerminatedAt === undefined
                    ? null
                    : { lastTerminatedAt: v.lastTerminatedAt }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.renditions === undefined ? null : { renditions: v.renditions }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        name: string;
        kind?: string | undefined;
        creatorId?: CreatorId$.Outbound | undefined;
        userTags?: { [k: string]: string | number | Array<string | number> } | undefined;
        lastSeen?: number | undefined;
        sourceSegments?: number | undefined;
        transcodedSegments?: number | undefined;
        sourceSegmentsDuration?: number | undefined;
        transcodedSegmentsDuration?: number | undefined;
        sourceBytes?: number | undefined;
        transcodedBytes?: number | undefined;
        ingestRate?: number | undefined;
        outgoingRate?: number | undefined;
        isActive?: boolean | undefined;
        isHealthy?: boolean | null | undefined;
        issues?: Array<string> | null | undefined;
        createdByTokenName?: string | undefined;
        createdAt?: number | undefined;
        parentId?: string | undefined;
        streamKey?: string | undefined;
        pull?: StreamPull$.Outbound | undefined;
        playbackId?: string | undefined;
        playbackPolicy?: PlaybackPolicy$.Outbound | null | undefined;
        profiles?: Array<FfmpegProfile$.Outbound> | undefined;
        record?: boolean | undefined;
        multistream?: StreamMultistream$.Outbound | undefined;
        suspended?: boolean | undefined;
        lastTerminatedAt?: number | null | undefined;
        userId?: string | undefined;
        renditions?: Renditions$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Stream> = z
        .object({
            id: z.string().optional(),
            name: z.string(),
            kind: z.string().optional(),
            creatorId: CreatorId$.outboundSchema.optional(),
            userTags: z
                .record(
                    z.union([z.string(), z.number(), z.array(z.union([z.string(), z.number()]))])
                )
                .optional(),
            lastSeen: z.number().optional(),
            sourceSegments: z.number().optional(),
            transcodedSegments: z.number().optional(),
            sourceSegmentsDuration: z.number().optional(),
            transcodedSegmentsDuration: z.number().optional(),
            sourceBytes: z.number().optional(),
            transcodedBytes: z.number().optional(),
            ingestRate: z.number().optional(),
            outgoingRate: z.number().optional(),
            isActive: z.boolean().optional(),
            isHealthy: z.nullable(z.boolean()).optional(),
            issues: z.nullable(z.array(z.string())).optional(),
            createdByTokenName: z.string().optional(),
            createdAt: z.number().optional(),
            parentId: z.string().optional(),
            streamKey: z.string().optional(),
            pull: z.lazy(() => StreamPull$.outboundSchema).optional(),
            playbackId: z.string().optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.outboundSchema).optional(),
            profiles: z.array(FfmpegProfile$.outboundSchema).optional(),
            record: z.boolean().optional(),
            multistream: z.lazy(() => StreamMultistream$.outboundSchema).optional(),
            suspended: z.boolean().optional(),
            lastTerminatedAt: z.nullable(z.number()).optional(),
            userId: z.string().optional(),
            renditions: z.lazy(() => Renditions$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                name: v.name,
                ...(v.kind === undefined ? null : { kind: v.kind }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.userTags === undefined ? null : { userTags: v.userTags }),
                ...(v.lastSeen === undefined ? null : { lastSeen: v.lastSeen }),
                ...(v.sourceSegments === undefined ? null : { sourceSegments: v.sourceSegments }),
                ...(v.transcodedSegments === undefined
                    ? null
                    : { transcodedSegments: v.transcodedSegments }),
                ...(v.sourceSegmentsDuration === undefined
                    ? null
                    : { sourceSegmentsDuration: v.sourceSegmentsDuration }),
                ...(v.transcodedSegmentsDuration === undefined
                    ? null
                    : { transcodedSegmentsDuration: v.transcodedSegmentsDuration }),
                ...(v.sourceBytes === undefined ? null : { sourceBytes: v.sourceBytes }),
                ...(v.transcodedBytes === undefined
                    ? null
                    : { transcodedBytes: v.transcodedBytes }),
                ...(v.ingestRate === undefined ? null : { ingestRate: v.ingestRate }),
                ...(v.outgoingRate === undefined ? null : { outgoingRate: v.outgoingRate }),
                ...(v.isActive === undefined ? null : { isActive: v.isActive }),
                ...(v.isHealthy === undefined ? null : { isHealthy: v.isHealthy }),
                ...(v.issues === undefined ? null : { issues: v.issues }),
                ...(v.createdByTokenName === undefined
                    ? null
                    : { createdByTokenName: v.createdByTokenName }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.streamKey === undefined ? null : { streamKey: v.streamKey }),
                ...(v.pull === undefined ? null : { pull: v.pull }),
                ...(v.playbackId === undefined ? null : { playbackId: v.playbackId }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.record === undefined ? null : { record: v.record }),
                ...(v.multistream === undefined ? null : { multistream: v.multistream }),
                ...(v.suspended === undefined ? null : { suspended: v.suspended }),
                ...(v.lastTerminatedAt === undefined
                    ? null
                    : { lastTerminatedAt: v.lastTerminatedAt }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.renditions === undefined ? null : { renditions: v.renditions }),
            };
        });
}
