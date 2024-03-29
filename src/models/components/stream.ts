/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { FfmpegProfile } from "./ffmpegprofile";
import { PlaybackPolicy } from "./playbackpolicy";
import { TargetOutput } from "./targetoutput";
import { Expose, Type } from "class-transformer";

export class StreamMultistream extends SpeakeasyBase {
    /**
     * References to targets where this stream will be simultaneously
     *
     * @remarks
     * streamed to
     *
     */
    @SpeakeasyMetadata({ elemType: TargetOutput })
    @Expose({ name: "targets" })
    @Type(() => TargetOutput)
    targets?: TargetOutput[];
}

export class Stream extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "creatorId" })
    creatorId?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "lastSeen" })
    lastSeen?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceSegments" })
    sourceSegments?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "transcodedSegments" })
    transcodedSegments?: number;

    /**
     * Duration of all the source segments, sec
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceSegmentsDuration" })
    sourceSegmentsDuration?: number;

    /**
     * Duration of all the transcoded segments, sec
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transcodedSegmentsDuration" })
    transcodedSegmentsDuration?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceBytes" })
    sourceBytes?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "transcodedBytes" })
    transcodedBytes?: number;

    /**
     * Rate at which sourceBytes increases (bytes/second)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ingestRate" })
    ingestRate?: number;

    /**
     * Rate at which transcodedBytes increases (bytes/second)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "outgoingRate" })
    outgoingRate?: number;

    /**
     * If currently active
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isActive" })
    isActive?: boolean;

    /**
     * Indicates whether the stream is healthy or not.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isHealthy" })
    isHealthy?: boolean;

    /**
     * A string array of human-readable errors describing issues affecting
     *
     * @remarks
     * the stream, if any.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "issues" })
    issues?: string[];

    /**
     * Name of the token used to create this object
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdByTokenName" })
    createdByTokenName?: string;

    /**
     * Timestamp (in milliseconds) at which stream object was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt?: number;

    /**
     * Points to parent stream object
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentId" })
    parentId?: string;

    /**
     * Used to form RTMP ingest URL
     */
    @SpeakeasyMetadata()
    @Expose({ name: "streamKey" })
    streamKey?: string;

    /**
     * Used to form playback URL
     */
    @SpeakeasyMetadata()
    @Expose({ name: "playbackId" })
    playbackId?: string;

    /**
     * Whether the playback policy for a asset or stream is public or signed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "playbackPolicy" })
    @Type(() => PlaybackPolicy)
    playbackPolicy?: PlaybackPolicy;

    @SpeakeasyMetadata({ elemType: FfmpegProfile })
    @Expose({ name: "profiles" })
    @Type(() => FfmpegProfile)
    profiles?: FfmpegProfile[];

    /**
     * Should this stream be recorded? Uses default settings. For more
     *
     * @remarks
     * customization, create and configure an object store.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "record" })
    record?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "multistream" })
    @Type(() => StreamMultistream)
    multistream?: StreamMultistream;

    /**
     * If currently suspended
     */
    @SpeakeasyMetadata()
    @Expose({ name: "suspended" })
    suspended?: boolean;
}
