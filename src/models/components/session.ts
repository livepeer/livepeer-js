/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FfmpegProfile, FfmpegProfile$ } from "./ffmpegprofile";
import * as z from "zod";

/**
 * The status of the recording process of this stream session.
 */
export enum RecordingStatus {
    Waiting = "waiting",
    Ready = "ready",
    None = "none",
}

export type Session = {
    id?: string | undefined;
    kind?: string | undefined;
    userId?: string | undefined;
    name: string;
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
     * Indicates whether the stream is healthy or not.
     */
    isHealthy?: boolean | null | undefined;
    /**
     * A string array of human-readable errors describing issues affecting the stream, if any.
     */
    issues?: Array<string> | null | undefined;
    /**
     * Timestamp (in milliseconds) at which stream object was created
     */
    createdAt?: number | undefined;
    /**
     * Points to parent stream object
     */
    parentId?: string | undefined;
    /**
     * Whether the stream should be recorded. Uses default settings. For more customization, create and configure an object store.
     *
     * @remarks
     *
     */
    record?: boolean | undefined;
    /**
     * The status of the recording process of this stream session.
     */
    recordingStatus?: RecordingStatus | undefined;
    /**
     * URL for accessing the recording of this stream session.
     */
    recordingUrl?: string | undefined;
    /**
     * The URL for the stream session recording packaged in an MP4.
     */
    mp4Url?: string | undefined;
    /**
     * The playback ID to use with the Playback Info endpoint to retrieve playback URLs.
     */
    playbackId?: string | undefined;
    profiles?: Array<FfmpegProfile> | undefined;
};

/** @internal */
export const RecordingStatus$: z.ZodNativeEnum<typeof RecordingStatus> =
    z.nativeEnum(RecordingStatus);

/** @internal */
export namespace Session$ {
    export type Inbound = {
        id?: string | undefined;
        kind?: string | undefined;
        userId?: string | undefined;
        name: string;
        lastSeen?: number | undefined;
        sourceSegments?: number | undefined;
        transcodedSegments?: number | undefined;
        sourceSegmentsDuration?: number | undefined;
        transcodedSegmentsDuration?: number | undefined;
        sourceBytes?: number | undefined;
        transcodedBytes?: number | undefined;
        ingestRate?: number | undefined;
        outgoingRate?: number | undefined;
        isHealthy?: boolean | null | undefined;
        issues?: Array<string> | null | undefined;
        createdAt?: number | undefined;
        parentId?: string | undefined;
        record?: boolean | undefined;
        recordingStatus?: RecordingStatus | undefined;
        recordingUrl?: string | undefined;
        mp4Url?: string | undefined;
        playbackId?: string | undefined;
        profiles?: Array<FfmpegProfile$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<Session, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            kind: z.string().optional(),
            userId: z.string().optional(),
            name: z.string(),
            lastSeen: z.number().optional(),
            sourceSegments: z.number().optional(),
            transcodedSegments: z.number().optional(),
            sourceSegmentsDuration: z.number().optional(),
            transcodedSegmentsDuration: z.number().optional(),
            sourceBytes: z.number().optional(),
            transcodedBytes: z.number().optional(),
            ingestRate: z.number().optional(),
            outgoingRate: z.number().optional(),
            isHealthy: z.nullable(z.boolean()).optional(),
            issues: z.nullable(z.array(z.string())).optional(),
            createdAt: z.number().optional(),
            parentId: z.string().optional(),
            record: z.boolean().optional(),
            recordingStatus: RecordingStatus$.optional(),
            recordingUrl: z.string().optional(),
            mp4Url: z.string().optional(),
            playbackId: z.string().optional(),
            profiles: z.array(FfmpegProfile$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.kind === undefined ? null : { kind: v.kind }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                name: v.name,
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
                ...(v.isHealthy === undefined ? null : { isHealthy: v.isHealthy }),
                ...(v.issues === undefined ? null : { issues: v.issues }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.record === undefined ? null : { record: v.record }),
                ...(v.recordingStatus === undefined
                    ? null
                    : { recordingStatus: v.recordingStatus }),
                ...(v.recordingUrl === undefined ? null : { recordingUrl: v.recordingUrl }),
                ...(v.mp4Url === undefined ? null : { mp4Url: v.mp4Url }),
                ...(v.playbackId === undefined ? null : { playbackId: v.playbackId }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        kind?: string | undefined;
        userId?: string | undefined;
        name: string;
        lastSeen?: number | undefined;
        sourceSegments?: number | undefined;
        transcodedSegments?: number | undefined;
        sourceSegmentsDuration?: number | undefined;
        transcodedSegmentsDuration?: number | undefined;
        sourceBytes?: number | undefined;
        transcodedBytes?: number | undefined;
        ingestRate?: number | undefined;
        outgoingRate?: number | undefined;
        isHealthy?: boolean | null | undefined;
        issues?: Array<string> | null | undefined;
        createdAt?: number | undefined;
        parentId?: string | undefined;
        record?: boolean | undefined;
        recordingStatus?: RecordingStatus | undefined;
        recordingUrl?: string | undefined;
        mp4Url?: string | undefined;
        playbackId?: string | undefined;
        profiles?: Array<FfmpegProfile$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Session> = z
        .object({
            id: z.string().optional(),
            kind: z.string().optional(),
            userId: z.string().optional(),
            name: z.string(),
            lastSeen: z.number().optional(),
            sourceSegments: z.number().optional(),
            transcodedSegments: z.number().optional(),
            sourceSegmentsDuration: z.number().optional(),
            transcodedSegmentsDuration: z.number().optional(),
            sourceBytes: z.number().optional(),
            transcodedBytes: z.number().optional(),
            ingestRate: z.number().optional(),
            outgoingRate: z.number().optional(),
            isHealthy: z.nullable(z.boolean()).optional(),
            issues: z.nullable(z.array(z.string())).optional(),
            createdAt: z.number().optional(),
            parentId: z.string().optional(),
            record: z.boolean().optional(),
            recordingStatus: RecordingStatus$.optional(),
            recordingUrl: z.string().optional(),
            mp4Url: z.string().optional(),
            playbackId: z.string().optional(),
            profiles: z.array(FfmpegProfile$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.kind === undefined ? null : { kind: v.kind }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                name: v.name,
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
                ...(v.isHealthy === undefined ? null : { isHealthy: v.isHealthy }),
                ...(v.issues === undefined ? null : { issues: v.issues }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.record === undefined ? null : { record: v.record }),
                ...(v.recordingStatus === undefined
                    ? null
                    : { recordingStatus: v.recordingStatus }),
                ...(v.recordingUrl === undefined ? null : { recordingUrl: v.recordingUrl }),
                ...(v.mp4Url === undefined ? null : { mp4Url: v.mp4Url }),
                ...(v.playbackId === undefined ? null : { playbackId: v.playbackId }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
            };
        });
}
